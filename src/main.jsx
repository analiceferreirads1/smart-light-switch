import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LightSwitch from './LightSwitch.jsx'
import {GlobalStyles } from './globalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <LightSwitch />
  </StrictMode>,
)
