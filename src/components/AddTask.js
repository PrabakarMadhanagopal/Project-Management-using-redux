import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from'react';

export const AddTask = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const AddTask = (e) => {
        e.preventDefault();
        console.log("title: ", title, "description: ", description)
    }
  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Title</Form.Label>
        <br />
        <Form.Control type="text" placeholder="Enter Task title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Descriptiom</Form.Label>
        <br />
        <Form.Control type="text" placeholder="Enter task description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) =>AddTask(e)}>
        Add
      </Button>
    </Form>
    </div>
  )
}
