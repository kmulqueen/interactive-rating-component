type RadioInputProps = {
  label: string;
};

export default function RadioInput({ label }: RadioInputProps) {
  return (
    <>
      <input
        type="radio"
        name="rating"
        id={`rating-${label}`}
        className="radio-input"
      />
      <label htmlFor={`rating-${label}`} className="radio-label">
        {label}
      </label>
    </>
  );
}
