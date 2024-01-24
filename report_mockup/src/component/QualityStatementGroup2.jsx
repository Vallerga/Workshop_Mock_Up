import { Form } from "react-bootstrap";
import TextAreaOutcome from "./statement_outcome/TextAreaOutcome";
import NumberRangeOutcome from "./statement_outcome/NumberRangeOutcome";
import DropdownOutcome from "./statement_outcome/DropdownOutcome";

const QualityStatementGroup2 = () => {
  return (
    <div className="formWidth mt-5">
      <Form>
        <Form.Label className="ms-5">
          <strong>GROUP NAME</strong>
        </Form.Label>
        <NumberRangeOutcome />
        <TextAreaOutcome />
        <TextAreaOutcome />
        <DropdownOutcome />
      </Form>
    </div>
  );
};

export default QualityStatementGroup2;
