import React, { createContext, useState } from 'react';

export const FormContext = createContext({});

const ContextInformation = ({ children }) => {

  //Form starts invalid
  const [validateForm, setValidateForm] = useState(false);

  return (
    <FormContext.Provider value={{
      validateForm,
      setValidateForm
    }}>
      {children}
    </FormContext.Provider>
  )
}

export default ContextInformation
