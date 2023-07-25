import { useEffect, useState } from "react";
import Portfolio from "../portfoliolist/portfoliolist";
import "./port.scss"
import {design,featurePort,mobile,web} from "../../data.js"
export default function Port() {
  const [selected,setSelected] = useState("feature")
  const [data,setData] = useState([])
  const list=[
    {
      id : "feature",
      title: "Feature"

    },
    {
      id : "web",
      title: "Web App"

    },
    {
      id : "mobile",
      title: "Mobile App"

    },
    {
      id : "design",
      title: "Design"

    }
    
  ];
  useEffect(()=>{
    switch(selected){
      case 'feature':
        setData(featurePort);
        break;
      case 'web':
        setData(web);
        break;
      case 'design':
        setData(design);
        break;
      case 'mobile':
        setData(mobile);
        break;
      default:
        setData(featurePort)
    }
  },[selected])
  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item=>(
          <Portfolio title={item.title} active={selected === item.id} setSelected={setSelected}
          id={item.id}/>
        ))}
      </ul>
      <div className="classcontainer">
        {data.map((d)=>(
          <div className="item">
          <img src={d.img} alt="image" />
          <h3>{d.title}</h3>
        </div>
        ))}
        <div className="title">
           I have not not done any projects personally,even application and webdesign.
        But i hope to do more in the future 
      </div>
      </div>
      
    </div>

  )
}
