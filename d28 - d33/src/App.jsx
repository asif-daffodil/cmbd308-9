import { useState } from "react"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import PersonInfo from "./Components/PersonInfo"



function App() {
  let [num, setNum] = useState(0);
  let [msg, setMsg] = useState("Hello World")

  const myStyle = {
    fontStyle: 'italic',
    fontWeight: 'bold',
    letterSpacing: '2px',
    fontSize: '24px'
  }

  return (
    <div>
      <Header />
      <div style={{ color: 'red', backgroundColor: 'lightgray' }}>
        Hello World
      </div>
      <div style={myStyle}>
        Hello Universe
      </div>
      <div className="myClass"></div>
      <h1>this is a heading</h1>
      <button>Read More</button>
      <br />
      <PersonInfo name="Jamal" age="35" gender="Male" city="Bhrammonbaria" />
      <PersonInfo name="Kamal" age="24" gender="Male" city="Dhaka" />
      <PersonInfo name="Tamal" age="13" gender="Male" city="Chattagram" />
      <div className="text-2xl flex justify-center items-center gap-3">
        <button className="border rounded w-12 h-12 cursor-pointer hover:bg-black hover:text-white" onClick={() => setNum(num += 1)}>+</button>
        {num}
        <button className="border rounded w-12 h-12 cursor-pointer hover:bg-black hover:text-white" onClick={() => setNum(num -= 1)}>-</button>
      </div>
      <div onMouseOver={() => setMsg("Hello Universe")} onMouseOut={() => setMsg("Hello World")}>{msg}</div>
      <Footer />
    </div>
  )
}

export default App
