import React , {useEffect, useState} from "react";
import { Button, Checkbox, Form, Label } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Update(){
    let History = useHistory()
    const [id, setID] = useState(null)
    const [firstName, setFisrtName] = useState('')
    const [lastName, setLastName] = useState('')
    const [checkbox, setChecbox] = useState(false)

    useEffect(()=>
    {
        setID(localStorage.getItem('ID'))
        setFisrtName(localStorage.getItem('Nombre'))
        setLastName(localStorage.getItem('Apellido'))
        setChecbox(JSON.parse(localStorage.getItem('Autorización')));

    })

    const updateAPIData = ()=>{
        axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`,
        {
            firstName,
            lastName,
            checkbox
        }).then(()=>{
            History.push('/')
        })
    }

    return(
        <div>
            <Form>
                <Form.Field>
                    <Label>Nombre</Label>
                    <input placeholder="Nombre" onChange={(e)=>{setFisrtName( e.target.value)}}/>
                </Form.Field>
                <Form.Field>
                    <Label>Apellido</Label>
                    <input placeholder="Apellido" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Acepta los terminos y condiciones' checked={checkbox} onChange={()=>{setChecbox(!checkbox)}}></Checkbox>
                </Form.Field>
                <Button type="submit" onClick={updateAPIData}>Actualizar</Button>
            </Form>
        </div>
    )
}