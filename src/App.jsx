import React, { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const [cursorV, setCursorV] = useState("default")

  useEffect(()=>{
    const mouseMove = (e)=> {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)
    return ()=> {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x-16,
      y: mousePosition.y-16
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x-75,
      y: mousePosition.y-16,
      backgroundColor: "yellow",
      mixBlendMode: 'difference'
    }
  }

  const textEnter = ()=> {
    setCursorV("text")
  }
  const textLeave = ()=> {
    setCursorV("default")
  }

  return (
    <div className="App">
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>Sayan - React Project</h1>
      <motion.div className="cursor" variants={variants} animate={cursorV}/>
    </div>
  );
}

export default App;
