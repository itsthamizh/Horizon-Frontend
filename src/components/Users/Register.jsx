import './Register.css'
import React, { useState } from 'react'
import {Form, Button} from 'semantic-ui-react'
import axios from 'axios';
import { AIP_URL } from './URL';
import { Validator } from 'validator';


function Register()  {

    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [phone_no, setPhoneNo] = useState('');
    const [emailError, setEmailError] = useState('')


    const postData = async () => {
        await axios.post(AIP_URL+"/addUser", {
            name,
            username,
            password,
            phone_no
        })
    }

    return (
        <div className= "form">
            <h1>Horizon - User Registration</h1> <br/>

            <Form>
               <Form.Field>
                    <label>Name</label><br/>
                    <input value={name} 
                        onChange= {event => setName(event.target.value)}
                        placeholder='name'
                        required
                        className= "form-control">    
                    </input>
                </Form.Field><br/>
                <Form.Field>
                    <label>Email</label><br/>
                    <input value = {username} 
                        onChange = {(event) => setUserName(event.target.value)}
                        placeholder='user name'
                        type= 'email'
                        required
                        className= "form-control">
                    </input>
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{emailError}</span>
                </Form.Field><br/>
                <Form.Field>
                    <label>Password</label><br/>
                    <input value={password} 
                        onChange = {event => setPassword (event.target.value)}
                        placeholder='password'
                        type= "password"
                        required
                        className= "form-control">    
                    </input>
                </Form.Field><br/>
                <Form.Field>
                    <label>Phone No</label><br/>
                    <input value={phone_no}
                        onChange = {event => setPhoneNo(event.target.value)}
                        placeholder='phone no'
                        pattern='[0-9]{10}'
                        required
                        className= "form-control">
                    </input>
                </Form.Field><br/>

                <Button  onClick={postData}>Submit</Button>
            </Form>  
        </div>
    );
}

export default Register;