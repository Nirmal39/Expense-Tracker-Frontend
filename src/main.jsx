import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {GlobalProvider} from './Context/globalContext.jsx'

export const server = "https://nodejs-income-expense.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () =>{
  

  return (
      <GlobalProvider>
        <App />
      </GlobalProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
