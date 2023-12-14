import "./App.css";
import Container from "./components/Container";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Container>
        <Header />
        <DisplayCounter />
      </Container>
    </>
  );
}

export default App;
