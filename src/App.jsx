import './App.css';
import BarChart from "./charts/barChart";
import TableChart from "./charts/tableChart";
import YearsDropdown from "./utils/yearsDropdown";
import {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

function App() {
  const [year, setYear] = useState("2023");
  return (
      <Container>
        <Row>
          <h1 style={{textAlign: "center"}}>Universities Rankings</h1>
          <h2 style={{textAlign: "center", marginBottom: "50px"}}>QS Ranking</h2>
        </Row>
        <Row>
          <Col><YearsDropdown setYear={setYear}/></Col>
          <Col><Badge bg="success">{year}</Badge></Col>
        </Row>
        <Row>
          <Col md={6}>
            <TableChart year={year} limit={"10"} />
          </Col>
          <Col md={6}>
            <BarChart year={year} limit={"10"} groupBy={"country"} />
          </Col>
        </Row>
      </Container>
  );
}

export default App;
