import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Table, Button} from 'semantic-ui-react'
import {Link} from  'react-router-dom'

export default function Read(){
    const [APIData, setAPIData] = useState([]);

    useEffect(()=>{
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
        .then((response)=>{
            console.log(response.data);
            setAPIData(response.data)
        })
    },[]);

    const setData = (data) =>{
        let {id, firstName, lastName, checkbox} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Nombre', firstName);
        localStorage.setItem('Apellido', lastName);
        localStorage.setItem('Autorización', checkbox);
    }

    const getData = () =>{
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
        .then((getData)=>{
            setAPIData(getData.data)
        })
    }
    const onDelete = (id) =>{
        axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
        .then(()=>{
            getData()
        })
    }

    return(
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellido</Table.HeaderCell>
                        <Table.HeaderCell>checkbox</Table.HeaderCell>
                        <Table.HeaderCell>Eliminar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        APIData.map((data)=>{
                            return(
                                <Table.Row>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName} </Table.Cell>
                                    <Table.Cell>{data.checkbox ? 'Checked' : 'Uncheked'} </Table.Cell>
                                    <Link to='/update'>
                                        <Button onClick={()=>{setData(data)}}>Update</Button>
                                    </Link>
                                    <Table.Cell>
                                        <Button onClick={()=>{onDelete(data.id)}}>Eliminar</Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table>
        </div>
    )
}