import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const NewElment =React.createElement(
'a',
{href:"www.google.com",target:'_blank'},
"click me to go to the google"
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
