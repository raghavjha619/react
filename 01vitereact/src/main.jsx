// import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)
const NewReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click here to visit google'
)
createRoot(document.getElementById('root')).render(
  // anotherElement,
  // <App />
  NewReactElement
)
