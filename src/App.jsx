import { useContext } from "react"

import { ApiData } from "./Components/ContextApi";
import Header from "./Components/Header";


function App() {
    let data = useContext(ApiData)
  return (
    <>
    {data.map ((item)=>(
      <h1>{item.id}</h1>
    ))}
    <Header/>
    </>
  )
}

export default App
