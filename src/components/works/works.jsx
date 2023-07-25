import './works.scss'
import { useState } from 'react';
export default function Works() {
  const [currentSlide,setCurrerntSlide]=useState(0);
  const data=[
    {
      id:1,
      title:"Web Design",
      img:"assest/WebsiteCreator.svg",
      icon:"assest/web-icon.jpg",
      desc:"there was the absolute solution for the problem that happened yesterday.but noone has no idea about it.",
      some:true
    }
    ,
    {
      id:2,
      title:"Mobile Developer",
      img:"assest/Mobile.svg",
      icon:"assest/cell-phone.png",
      desc:"It is an app development that keeps me working all day and night. People love their girlfriend's app developers love their app UI. People have enemies app developers have bugs. I can't sleep if I found a bug in my code. "
    },
    {
      id:3,
      title:"Branding",
      img:"assest/Developer.svg",
      icon:"assest/writing.svg",
      desc:"something something something something somethi..."
    }

  ];
  const handleClick=(way)=>{
    way==="left" ? setCurrerntSlide(currentSlide > 0 ? currentSlide - 1 : 2):
    setCurrerntSlide(currentSlide < 2 ? currentSlide + 1: 0)
  };
  return (
   
    <div className='works' id='works'>
      <div 
      className="slider"
      style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d)=>(
        <div className="container">
          <div className={d.some ? "item some" : "item"}>
            <div className="left">
              <div className="leftcontainer">
                <div className="imgcontainer">
                  <img src={d.icon} alt="image" />
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.desc}
                </p>
                <span>Projects</span>
              </div>}
            </div>
            <div className="right">
              <img src={d.img} alt="svg" />
            </div>
          </div>
          
       </div>))}
      </div>
      <img src="/assest/arrow.png" className='arrow left' alt="image" onClick={()=>handleClick("left")}/>
      <img src="/assest/arrow.png" className='arrow right' alt="image" onClick={()=>handleClick()}/>
    </div>
  )
}
