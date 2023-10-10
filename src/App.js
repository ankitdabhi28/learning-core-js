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
import PracticeSixthUndefinedAndNotDefined from "./Components/PracticeSixthUndefinedAndNotDefined";
import PracticeSeventhScopeLexicalEnvironment from "./Components/PracticeSeventhScopeLexicalEnvironment";
import JustExample from "./Components/JustExample";
import PracticeEighthTemporalDeadZone from "./Components/PracticeEighthTemporalDeadZone";

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
                  P-2 : Execution Contexts
                </NavLink>
                <NavLink className="nav-link" to="/hoisting">
                  P-3 : Hoisting
                </NavLink>
                <NavLink className="nav-link" to="/function-and-variable">
                  P-4 : Function & Variable
                </NavLink>
                <NavLink className="nav-link" to="/shortest-js-program">
                  P-5 : Shortest-JS Program
                </NavLink>
                <NavLink className="nav-link" to="/undefined-and-notdefined">
                  P-6 : Undefined And Notdefined
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/scope-and-lexical-environment"
                >
                  P-7 : Scope And Lexical Environment
                </NavLink>
                <NavLink className="nav-link" to="/temporal-dead-zone">
                  P-8 : Temporal Dead Zone
                </NavLink>
                <NavLink className="nav-link" to="/example-for-options">
                  Example-For-Options
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
                {/* Practice 6 : Undefined And Notdefined */}
                <Route
                  path="undefined-and-notdefined"
                  element={<PracticeSixthUndefinedAndNotDefined />}
                />
                {/* Practice 7 : Scope And Lexical Environment */}
                <Route
                  path="scope-and-lexical-environment"
                  element={<PracticeSeventhScopeLexicalEnvironment />}
                />
                {/* P-8 : Temporal Dead Zone */}
                <Route
                  path="temporal-dead-zone"
                  element={<PracticeEighthTemporalDeadZone />}
                />
                {/*  Example-For-Options */}
                <Route path="example-for-options" element={<JustExample />} />
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
