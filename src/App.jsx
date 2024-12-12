import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <header>
<Header/>
      </header>
      <div>
        <Form/>
      </div>
      <Footer/>
    </>
  )
}
 
export default App