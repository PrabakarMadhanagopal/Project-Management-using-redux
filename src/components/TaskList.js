import React from 'react'
import Table from'react-bootstrap/Table';

export const TaskList = () => {
    const updateTask = () => {
        console.log('Updating task');
    }
    const deleteTask = () => {
        console.log('Deleting task');
    }
  return (
    <div>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th> Descriptiom</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
          <button onClick={() =>updateTask()}>Edit</button>
          <button onClick={() =>deleteTask()}>Delete</button>
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}
