import Button from "../layout/Button";
import Container from "../layout/Container";
import RadioInput from "./RadioInput";

export default function Form() {
  return (
    <form>
      <fieldset>
        <legend className="sr-only">Please select a rating:</legend>
        <Container as="div" className="mb-6 flex justify-between sm:mb-8">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
            <RadioInput label={num.toString()} key={num} />
          ))}
        </Container>
        <Button type="submit" className="submit-button">
          Submit
        </Button>
      </fieldset>
    </form>
  );
}
