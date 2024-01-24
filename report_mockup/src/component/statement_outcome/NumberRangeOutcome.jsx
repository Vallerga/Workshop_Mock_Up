import Form from "react-bootstrap/Form";

function NumberRangeOutcome() {
  return (
    <div className="formWidth ms-5 mt-4">
      <Form.Label>Quality Statement Name</Form.Label>
      <div>
        <div className="d-flex justify-content-between">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <Form.Range step="1" min="1" max="10" />
      </div>
    </div>
  );
}

export default NumberRangeOutcome;
