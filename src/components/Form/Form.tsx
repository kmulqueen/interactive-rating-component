import { useForm } from "../../contexts/useForm";
import Button from "../layout/Button";
import Container from "../layout/Container";
import RadioInput from "./RadioInput";
import { options } from "../../utils/numberOfOptions";
import type { FormEvent } from "react";

export default function Form() {
  const { submitForm, rating } = useForm();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (rating === 0) {
      alert("Please select a rating before submitting!");
      return;
    }
    submitForm();
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend className="sr-only">Please select a rating:</legend>
        <Container as="div" className="mb-6 flex justify-between sm:mb-8">
          {options.map((num: number) => (
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
