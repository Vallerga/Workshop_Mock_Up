import { Container } from "react-bootstrap";
import QualityStatementExample from "./QualityStatementExample";
import QualityStatementGroup1 from "./QualityStatementGroup1";
import QualityStatementGroup2 from "./QualityStatementGroup2";

const Home = () => {
  return (
    <>
      <Container fluid className="background">
        <div className="background">
          <div className="whiteBG mt-5">
            <h1 className="text-center">SECTION TITLE</h1>
            <div className="d-flex justify-content-evenly">
              <QualityStatementExample />
              <div className="d-flex justify-content-between w-50">
                <QualityStatementGroup1 />
                <QualityStatementGroup2 />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
