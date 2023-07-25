import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
export default function Intro() {
     const textRef = useRef();
     useEffect(() => {
        init(textRef.current,{
            showCursor: true,
            strings : ["Software Developer","web Designer"],
            typeSpeed : 70,
            backDelay:  1500
        })
     },[])
  
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgcontainer">
            <img src="/assest/profil.svg" alt="imga" />
        </div>
      </div>
      
      <div className="right">
            <div className="wrapper">
                <h2>Hi there, I'm</h2>
                <h1>Yoseph Alemu</h1>
                <h3><span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
                <img src="/assest/arrow-down.png" alt="image" />
            </a>
      </div>
    </div>
  )
}
