export type FormState = {
  isSubmitted: boolean;
  rating: number;
};

export type FormContextValue = FormState & {
  setRating: (rating: number) => void;
  resetForm: () => void;
  submitForm: () => void;
};

type SubmitFormAction = { type: "SUBMIT_FORM" };
type SetRatingAction = { type: "SET_RATING"; payload: number };
type ResetFormAction = { type: "RESET_FORM" };

export type FormAction = SubmitFormAction | SetRatingAction | ResetFormAction;
