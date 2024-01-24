import { Form } from "react-bootstrap";

function TextAreaOutcome() {
    return (
      <div className="formWidth ms-5 mt-4">
        <Form.Group className="mb-3" controlId="areaText.ControlTextarea">
          <Form.Label>Quality Statement Name</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
      </div>
    );
  }
  
  export default TextAreaOutcome;