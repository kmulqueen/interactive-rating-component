import FormCard from "../Card/FormCard";
import ThanksCard from "../Card/ThanksCard";
import Container from "../layout/Container";
import { useForm } from "../../contexts/useForm";

function AppContents() {
  const { isSubmitted } = useForm();
  return (
    <Container as="main">
      {!isSubmitted ? <FormCard /> : <ThanksCard />}
    </Container>
  );
}

export default AppContents;
