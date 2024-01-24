import Form from "react-bootstrap/Form";

function DropdownOutcome() {
  return (
    <div className="formWidth ms-5 mt-4">
      <Form.Label>Quality Statement Name</Form.Label>
      <Form.Select aria-label="Default select example">
        <option>Select a value</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
        <option value="6">Six</option>
        <option value="7">Seven</option>
        <option value="8">Eight</option>
        <option value="9">Nine</option>
        <option value="10">Ten</option>
      </Form.Select>
    </div>
  );
}

export default DropdownOutcome;
