import { useForm } from "../../contexts/useForm";

type RadioInputProps = {
  label: string;
};

export default function RadioInput({ label }: RadioInputProps) {
  const { rating, setRating } = useForm();
  const value = parseInt(label);
  const isChecked = rating === value;

  function handleChange() {
    setRating(value);
  }
  return (
    <>
      <input
        type="radio"
        name="rating"
        id={`rating-${label}`}
        className="radio-input"
        value={label}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={`rating-${label}`} className="radio-label">
        {label}
      </label>
    </>
  );
}
