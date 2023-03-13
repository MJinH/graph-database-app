import { Button, Form } from "react-bootstrap"
import { FrameContext, FrameTab } from "../../styled/Frame"
import { connectToDatabase } from "../../features/database/DatabaseSlice"
import { useDispatch } from 'react-redux'
import { getMetadata } from "../../features/meta/MetadataSlice"

export const ServerConnect = () => {

  const dispatch = useDispatch()

  const connectDatabase = (e) => {
    e.preventDefault()
    const formData = {
      host: e.target.elements.host.value,
      port: e.target.elements.port.value,
      user: e.target.elements.user.value,
      password: e.target.elements.password.value,
      database: e.target.elements.database.value
    }
    dispatch(connectToDatabase(formData)).then((response) => {
      if (response.type === 'database/connectDatabase/fulfilled') {
        dispatch(getMetadata())
      } 
    }) 
  }

  return (
    <FrameTab>
      <FrameContext>
        <span><strong>Welcome to my graph database app.</strong></span>
        <br/>
        <span>Please log in to connect to the database.</span>
      </FrameContext>
      <Form onSubmit={connectDatabase}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Host</Form.Label>
          <Form.Control name="host" placeholder="Host" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Port</Form.Label>
          <Form.Control name="port" placeholder="Port" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>User</Form.Label>
          <Form.Control name="user" placeholder="User" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Database</Form.Label>
          <Form.Control name="database" placeholder="Database" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </FrameTab>
  )
}