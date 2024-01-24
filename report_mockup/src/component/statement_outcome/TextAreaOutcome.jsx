import { Form } from "react-bootstrap";

function TextAreaOutcome() {
    return (
      <Form className="formWidth ms-5">
        <Form.Group className="mb-3" controlId="areaText.statement">
          <Form.Label>Quality Statement Name</Form.Label>
          <Form.Control className="me-5" type="qualityStatement" placeholder="Specify the statement" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="areaText.ControlTextarea">
          <Form.Label>Outcome</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
      </Form>
    );
  }
  
  export default TextAreaOutcome;