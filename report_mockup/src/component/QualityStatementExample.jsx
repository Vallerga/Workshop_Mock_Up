import { Form } from "react-bootstrap";
import TextAreaOutcome from "./statement_outcome/TextAreaOutcome";
import FlagOutcome from "./statement_outcome/FlagOutcome";
import NumberRangeOutcome from "./statement_outcome/NumberRangeOutcome";
import DropdownOutcome from "./statement_outcome/DropdownOutcome";
import PictureOutcome from "./statement_outcome/PictureOutcome";

const QualityStatementExample = () => {
  return (
    <div className="formWidth mt-5">
      <Form>
        <Form.Label className="ms-5">
          <strong>QUALITY STATEMENT EXAMPLE</strong>
        </Form.Label>
        <TextAreaOutcome />
        <FlagOutcome />
        <NumberRangeOutcome />
        <DropdownOutcome />
        <PictureOutcome />
      </Form>
    </div>
  );
};

export default QualityStatementExample;
