import {useState} from "react"

function App() {
  const [color, setcolor] = useState("black")

  return (
    <>
      <div className=" w-full h-screen  duration-1000 "
      style={{backgroundColor: color}}
      >
        <div className=" fixed flex flex-wrap w-4/5 rounded-3xl p-2 bottom-12 justify-between left-1/2 transform -translate-x-1/2" 
        style={{backgroundColor: "#212121"}}
        >

          <button className=" w-20 p-2 mr-[10px] rounded-3xl text-white"
            style={{backgroundColor: "red"}}
            onClick={()=> setcolor("red")}
          >Red</button>
          <button className=" w-20 p-2 mr-[10px] rounded-3xl text-white"
            style={{backgroundColor: "green"}}
            onClick={()=> setcolor("green")}
          >Green</button>
          <button className=" w-20 p-2 mr-[10px] rounded-3xl  text-white"
            style={{backgroundColor: "grey"}}
            onClick={()=> setcolor("grey")}
          >grey</button>
          <button className=" w-20 p-2 mr-[10px] rounded-3xl  text-white"
            style={{backgroundColor: "blue"}}
            onClick={()=> setcolor("blue")}
          >Blue</button>
          <button className=" w-20 p-2 mr-[10px] rounded-3xl  text-white"
            style={{backgroundColor: "pink"}}
            onClick={()=> setcolor("pink")}
          >Pink</button>
          <button className=" w-20 p-2 mr-[10px] rounded-3xl  text-white"
            style={{backgroundColor: "violet"}}
            onClick={()=> setcolor("violet")}
          >Violet</button>
        </div>

      </div>
    </>
  )
}

export default App
