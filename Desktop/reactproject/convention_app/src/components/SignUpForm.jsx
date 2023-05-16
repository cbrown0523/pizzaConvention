import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignUpForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Text className="text-muted">Opt in for notifications</Form.Text>
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignUpForm;
