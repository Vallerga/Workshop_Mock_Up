import { Form } from "react-bootstrap";

function FlagOutcome() {
  return (
    <Form className="formWidth ms-5">
      <Form.Group className="mb-3" controlId="areaText.statement">
        <Form.Label>Quality Statement Name</Form.Label>
        <Form.Control
          className="me-5"
          type="qualityStatement"
          placeholder="Specify the statement"
        />
      </Form.Group>
      <div className="d-flex align-items-center">
      <span className="me-3">True</span><Form.Check type="switch" id="flagStatement" /><span className="ms-3">False</span>
      </div>
    </Form>
  );
}

export default FlagOutcome;
