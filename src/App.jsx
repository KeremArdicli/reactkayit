import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/react.svg'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Merhaba</h1>
    <img src="./vite.svg" alt="" />
    <img src={logo} alt="" />
    </>
  )
}
