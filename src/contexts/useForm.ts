import { useContext } from "react";
import { FormContext } from "./FormContext";
import { type FormContextValue } from "../types/form";

export function useForm(): FormContextValue {
  const context = useContext(FormContext);
  if (context === null) {
    throw new Error("useForm must be called within a FormProvider");
  }
  return context;
}
