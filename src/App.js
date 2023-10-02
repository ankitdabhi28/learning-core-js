import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PracticeSecondExecution from "./Components/PracticeSecondExecution ";
import PracticeThirdHoisting from "./Components/PracticeThirdHoisting";
import PracticeFourthFunctionAndVariable from "./Components/PracticeFourthFunctionAndVariable";
import { Route, Routes, NavLink } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Card, CardBody } from "react-bootstrap";
import PracticeFifthShortestJS from "./Components/PracticeFifthShortestJS ";
import PracticeSixth from "./Components/PracticeSixth";

function App() {
  return (
    <Card>
      <CardBody>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col
              className="scrollbar"
              id="style-scrollbar"
              sm={2}
              style={{
                background: "aliceblue",
                borderRadius: "17px",
                height: "calc(100vh - 34px)",
                overflowY: "auto",
              }}
            >
              {/* Nav-Bar Start */}
              <Nav variant="pills" className="flex-column mt-4">
                <NavLink className="nav-link" to="/">
                  Practice 2 : Execution Contexts
                </NavLink>
                <NavLink className="nav-link" to="/hoisting">
                  Practice 3 : Hoisting
                </NavLink>
                <NavLink className="nav-link" to="/function-and-variable">
                  Practice 4 : Function & Variable
                </NavLink>
                <NavLink className="nav-link" to="/shortest-js-program">
                  Practice 5 : Shortest-JS Program
                </NavLink>
                <NavLink className="nav-link" to="/practice-sixth">
                  Practice 6 :
                </NavLink>
              </Nav>
              {/* Nav-Bar End */}
            </Col>

            <Col sm={10}>
              {/* Routes Start */}
              <Routes>
                {/* Practice 2 : Execution Contexts */}
                <Route path="/" element={<PracticeSecondExecution />} />
                {/* Practice 3 : Hoisting */}
                <Route path="hoisting" element={<PracticeThirdHoisting />} />
                {/* Practice 4 : Function & Variable */}
                <Route
                  path="function-and-variable"
                  element={<PracticeFourthFunctionAndVariable />}
                />
                {/* Practice 5 : Shortest-JS Program */}
                <Route
                  path="shortest-js-program"
                  element={<PracticeFifthShortestJS />}
                />

                {/* Practice 6 :  */}
                <Route path="practice-sixth" element={<PracticeSixth />} />
              </Routes>

              {/* Routes End */}
            </Col>
          </Row>
        </Tab.Container>
      </CardBody>
    </Card>
  );
}

export default App;
