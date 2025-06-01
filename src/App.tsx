import FormCard from "./components/Card/FormCard";
import ThanksCard from "./components/Card/ThanksCard";
import Container from "./components/layout/Container";

function App() {
  return (
    <Container as="main">
      <FormCard />
      <ThanksCard />
    </Container>
  );
}

export default App;
