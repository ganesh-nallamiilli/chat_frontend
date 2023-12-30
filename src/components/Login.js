import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid'
function Login({onIdSubmit}) {
    const idRef = useRef()
    function handleSubmit(e){
        e.preventDefault()
        onIdSubmit(idRef.current.value)

    }
    function createNewId(){
        onIdSubmit(uuidv4())
    }
  return (
    <div>
        <Container className='align-items-center d-flex' style={{height:"100dvh"}}>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group>
                    <Form.Label>Enter your ID</Form.Label>
                    <Form.Control type='text' ref={idRef} required />
                </Form.Group>
                <Button type='submit' className='me-5'>Login</Button>
                <Button onClick={createNewId} variant='secondary'>Create a new ID</Button>
            </Form>
        </Container>
    </div>
  )
}

export default Login;