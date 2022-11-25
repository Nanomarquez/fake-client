import { useState } from "react"
import axios from "axios"
function App() {

  const [input,setInput] = useState({
    suma: "",
    titulo: ""
  })
  const [button, setButton] = useState("");
  const handleChange = (e) =>{
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/pay",input)
    .then(res=>setButton(res.data))
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen w-full bg-slate-500 gap-24">
      <input type="text" name="titulo" onChange={handleChange}/>
      <input type="number" name="suma" onChange={handleChange}/>
      <button type="submit">Enviar</button>
      {button && (
            <a
              target="_BLANK"
              className="p-5 bg-white text-center"
              id="mp-button"
              href={button}
            >CLICK</a>
          )}
      </form>
    </div>
  )
}

export default App
