import { Form } from "react-bootstrap";
import FlagOutcome from "./statement_outcome/FlagOutcome";
import NumberRangeOutcome from "./statement_outcome/NumberRangeOutcome";
import PictureOutcome from "./statement_outcome/PictureOutcome";

const QualityStatementGroup1 = () => {
  return (
    <div className="formWidth mt-5">
      <Form>
        <Form.Label className="ms-5">
          <strong>GROUP NAME</strong>
        </Form.Label>
        <NumberRangeOutcome />
        <FlagOutcome />
        <FlagOutcome />
        <FlagOutcome />
        <NumberRangeOutcome />
        <PictureOutcome />
      </Form>
    </div>
  );
};

export default QualityStatementGroup1;
