import Container from "../layout/Container";
import StarIcon from "../layout/StarIcon";
import Form from "../Form/Form";
import CardText from "./CardText";

export default function Card() {
  return (
    <Container as="article" className="card">
      <StarIcon />
      <CardText as="h1" className="card-title">
        How did we do?
      </CardText>
      <CardText as="p" className="card-paragraph">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </CardText>
      <Form />
    </Container>
  );
}
