import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PracticeSecondExecution from "./Components/app/PracticeSecondExecution ";
import PracticeThirdHoisting from "./Components/app/PracticeThirdHoisting";
import PracticeFourthFunctionAndVariable from "./Components/app/PracticeFourthFunctionAndVariable";
import { Route, Routes, NavLink } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Card, CardBody } from "react-bootstrap";
import PracticeFifthShortestJS from "./Components/app/PracticeFifthShortestJS ";
import PracticeSixthUndefinedAndNotDefined from "./Components/app/PracticeSixthUndefinedAndNotDefined";
import PracticeSeventhScopeLexicalEnvironment from "./Components/app/PracticeSeventhScopeLexicalEnvironment";
import JustExample from "./Components/app/JustExample";
import PracticeEighthTemporalDeadZone from "./Components/app/PracticeEighthTemporalDeadZone";
import PracticeExample from "./Components/app/Practice_Example";
import WorkingHourChallenge from "./Components/app/WorkingHourChallenge";
import NodeApiTest from "./Components/app/nodejsAPI/NodeApiTest";

function App() {
  const routes = [
    {
      title: "P-2 : Execution Contexts",
      element: <PracticeSecondExecution />,
      path: "/",
    },
    {
      title: "P-3 : Hoisting",
      element: <PracticeThirdHoisting />,
      path: "/hoisting",
    },
    {
      title: "P-4 : Function & Variable",
      element: <PracticeFourthFunctionAndVariable />,
      path: "/function-and-variable",
    },
    {
      title: "P-5 : Shortest-JS Program",
      element: <PracticeFifthShortestJS />,
      path: "/shortest-js-program",
    },
    {
      title: "P-6 : Undefined And Notdefined",
      element: <PracticeSixthUndefinedAndNotDefined />,
      path: "/undefined-and-notdefined",
    },
    {
      title: "P-7 : Scope And Lexical Environment",
      element: <PracticeSeventhScopeLexicalEnvironment />,
      path: "/scope-and-lexical-environment",
    },
    {
      title: "Example-For-Options",
      element: <PracticeEighthTemporalDeadZone />,
      path: "/example-for-options",
    },
    {
      title: "Practice Example",
      element: <JustExample />,
      path: "/practice-example",
    },
    {
      title: "Working Hour Challenge : 1",
      element: <WorkingHourChallenge />,
      path: "/challenge-1",
    },
    {
      title: "Node API Test",
      element: <NodeApiTest />,
      path: "/node-api-test",
    },
  ];

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
              {/* Nav-Bar ---------------------------------------------------------------------------------------------------- START */}
              <Nav variant="pills" className="flex-column mt-4">
                {routes.map((row) => (
                  <NavLink className="nav-link" to={row.path}>
                    {row.title}
                  </NavLink>
                ))}
              </Nav>
              {/* Nav-Bar ---------------------------------------------------------------------------------------------------- END */}
            </Col>

            <Col sm={10}>
              {/* Routes ---------------------------------------------------------------------------------------------------- START */}
              <Routes>
                {routes.map((row) => (
                  <Route path={row.path} element={row.element} />
                ))}
              </Routes>
              {/* Routes ---------------------------------------------------------------------------------------------------- END */}
            </Col>
          </Row>
        </Tab.Container>
      </CardBody>
    </Card>
  );
}

export default App;
