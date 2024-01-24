import { Container } from "react-bootstrap";
import FlagOutcome from "./statement_outcome/FlagOutcome";
import NavBar from "./NavBar";
import TextAreaOutcome from "./statement_outcome/TextAreaOutcome";

const Home = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="background">        
        <div className="background">
          <div className="whiteBG mt-5">
            <TextAreaOutcome />
            <FlagOutcome />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
