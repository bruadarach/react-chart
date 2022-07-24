import "./App.css";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import { UserData } from "./Data";
import styled from "styled-components";

const Main = styled.div`
  margin-top: 30px;
`;

const Container = styled.div`
  width: 55vw;
  margin-bottom: 50px;
`;

function App() {
  return (
    <Main>
      <Container>
        <BarChart UserData={UserData} />
      </Container>
      <Container>
        <PieChart UserData={UserData} />
      </Container>
      <Container>
        <LineChart UserData={UserData} />
      </Container>
    </Main>
  );
}

export default App;
