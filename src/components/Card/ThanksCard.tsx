import Container from "../layout/Container";
import ThanksIcon from "../layout/ThanksIcon";
import ThanksResult from "../Thanks/ThanksResults";
import CardText from "./CardText";

export default function ThanksCard() {
  return (
    <Container as="article" className="card py-8 sm:px-8 sm:py-10">
      <ThanksIcon />
      <ThanksResult />
      <CardText as="h1" className="card-title text-center">
        Thank you!
      </CardText>
      <CardText as="p" className="card-paragraph text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </CardText>
    </Container>
  );
}
