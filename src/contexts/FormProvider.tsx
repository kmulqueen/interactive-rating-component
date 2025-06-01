import { useReducer, type PropsWithChildren } from "react";
import type { FormState, FormContextValue, FormAction } from "../types/form";
import { FormContext } from "./FormContext";

const initialState: FormState = {
  isSubmitted: false,
  rating: 0,
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_RATING":
      return {
        ...state,
        rating: action.payload,
      };
    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return {
        ...state,
      };
  }
}

export function FormProvider({ children }: PropsWithChildren) {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const ctx: FormContextValue = {
    ...formState,
    setRating(rating: number) {
      dispatch({ type: "SET_RATING", payload: rating });
    },
    submitForm() {
      dispatch({ type: "SUBMIT_FORM" });
    },
    resetForm() {
      dispatch({ type: "RESET_FORM" });
    },
  };
  return <FormContext.Provider value={ctx}>{children}</FormContext.Provider>;
}
