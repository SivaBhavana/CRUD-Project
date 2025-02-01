import React, {useState} from "react";
import { Form,Button } from "react-bootstrap";
import "./postUser.css";
import {useNavigate} from "react-router-dom"
const PostUser= ()=>{
    const [FormData,setFormData] = useState({
        name:"",
        email:"",
        phone:""
    });

    const naviagte=useNavigate();
    const handleInputChange=(event)=>{
        const {name,value}=event.target;
        setFormData({
            ...FormData,
            [name]:value,
        });
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        // console.log("name",FormData.name);
        // console.log("email",FormData.email);
        // console.log("phone",FormData.phone);
        console.log(FormData); 
        try{
            const response=await fetch("http://localhost:5000/api/user",{
                method:"POST",
                headers:{
                   "Content-Type":"application/json",
    
                },
                body:JSON.stringify(FormData)
            });
            const data=await response.json(response);
            console.log("Response from backend:", data);
            console.log(data);
            naviagte("/")
        }
        catch(error){
            console.error(error.message)
        }
        
    }
    return(
        <>
         <div className="center-form">
            <h1>Post New User</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                     type="text"
                     name="name"
                     placeholder="Enter name"
                     value={FormData.name}
                     onChange={handleInputChange}></Form.Control>
                </Form.Group>


                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                     type="email"
                     name="email"
                     placeholder="Enter email"
                     value={FormData.email}
                     onChange={handleInputChange}></Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                     type="text"
                     name="phone"
                     placeholder="Enter phonenumber"
                     value={FormData.phone}
                     onChange={handleInputChange}></Form.Control>
                </Form.Group>

                <Button variant="dark" type="submit" className="w-100">Post User</Button>
            </Form>
         </div>
        </>
    )
}


export default PostUser;