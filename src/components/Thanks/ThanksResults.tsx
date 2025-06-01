import { options } from "../../utils/numberOfOptions";
import { useForm } from "../../contexts/useForm";

export default function ThanksResult() {
  const { rating } = useForm();
  return (
    <p className="thanks-results">
      You selected {rating} out of {options.length}
    </p>
  );
}
