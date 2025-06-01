import AppContents from "./components/App/AppContents";
import { FormProvider } from "./contexts/FormProvider";

function App() {
  return (
    <FormProvider>
      <AppContents />
    </FormProvider>
  );
}

export default App;
