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
      desc:" I'm the architects of the digital world, the creators of immersive online experiences, and the problem solvers behind every click and tap.As web developer, i'm not just writers of code; i'm artists crafting seamless user experiences that leave a lasting impression",
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
      desc:"I know many programming languages.For example, c++,python,javaScript,jsx,html,css, and so on."
    },
    {
      id:4,
      title:"Relationship",
      img:"assest/relation.svg",
      icon:"assest/writing.svg",
      relation:true,
      desc:"I'm married a beautiful women.Her smile could light up the darkest of days, and her laughter was like music to my soul.She is the shining star in my life, the anchor that keeps me grounded, and the light that guides me through every storm"
    }

  ];
  const handleClick=(way)=>{
    way==="left" ? setCurrerntSlide(currentSlide > 0 ? currentSlide - 1 : 3):
    setCurrerntSlide(currentSlide < 3 ? currentSlide + 1: 0)
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
                <span className={d.relation ? "span wife" : "span"}>{d.relation ? "My lovely wife" : "Projects"}</span>
              </div>
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
