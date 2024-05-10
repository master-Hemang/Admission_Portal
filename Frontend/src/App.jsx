import React from 'react';
import AppRoutes from './routes/AppRoutes';
import TopbarProvider from "./context/TopbarContext";
import FormProvider from "./context/FormContext";

function App() {
  return (
    <TopbarProvider>
      <FormProvider>
        <AppRoutes />
    </FormProvider>
  </TopbarProvider>

  );
}

export default App;
