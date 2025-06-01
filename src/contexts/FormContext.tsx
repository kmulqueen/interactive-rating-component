import { createContext } from "react";
import { type FormContextValue } from "../types/form";

export const FormContext = createContext<FormContextValue | null>(null);
