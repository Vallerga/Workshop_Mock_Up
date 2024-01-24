import { Form } from "react-bootstrap";

function FlagOutcome() {
  return (
    <div className="formWidth ms-5 mt-4">
      <Form.Label>Quality Statement Name</Form.Label>
      <div className="d-flex align-items-center">
        <span className="me-3">True</span>
        <Form.Check type="switch" id="flagStatement" />
        <span className="ms-3">False</span>
      </div>
    </div>
  );
}

export default FlagOutcome;
