import axios from "axios";
import React , {useState} from "react";
import { Button, Checkbox,  Form} from "semantic-ui-react";
import {useHistory} from 'react-router'

export default function create(){
    let history = useHistory
    const [Id, setID] = useState(null)
    const [FirstName, setFisrtName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Checkbox, setChecbox] = useState(false)

    const postData = ()=>{
        axios.post('https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData',
        {
            Id,
            FirstName,
            LastName,
            Checkbox
        }.then(()=>{
            history.push('/read')
        }))
    }
    return(
        <div>
        <Form>
        <Form.Field>
                <label>Id</label>
                <input placeholder="id" value={Id} onChange={(e)=>{setID( e.target.value)}}/>
            </Form.Field>
            <Form.Field>
                <label>Nombre</label>
                <input placeholder="Nombre" value={FirstName} onChange={(e)=>{setFisrtName( e.target.value)}}/>
            </Form.Field>
            <Form.Field>
                <label>Apellido</label>
                <input placeholder="Apellido" value={LastName} onChange={(e)=>{setLastName(e.target.value)}}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='Acepta los terminos y condiciones' checked={Checkbox} onChange={()=>{setChecbox(!Checkbox)}}></Checkbox>
            </Form.Field>
            <Button type="submit" onClick={postData}>Actualizar</Button>
        </Form>
    </div>
    )
}