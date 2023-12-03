import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FormProvider } from './components/FormContext.jsx'

const Main = () => {
  return (
    <>
      <FormProvider>
        <App />
      </FormProvider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />)