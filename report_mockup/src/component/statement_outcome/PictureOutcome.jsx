import { Form } from "react-bootstrap";

function PictureOutcome() {
  return (
    <div className="formWidth ms-5 mt-4">
      <Form.Group className="position-relative mb-3">
        <Form.Label>Quality Statement Name</Form.Label>
        <Form.Control type="file" required name="file" />
      </Form.Group>
    </div>
  );
}

export default PictureOutcome;
