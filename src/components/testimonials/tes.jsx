import './tes.scss'

export default function Tes() {
  const data=[
    {
      id:1,
      title:"CEO of Twitter",
      name:"Elon",
      img:"/assest/elon.jpg",
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elitDoloremque tenetur, consequatur quos sue",
      icon:"/assest/twiter.jpg"
    },
    {
      id:2,
      title:"CEO of Youtube",
      name:"Neal",
      img:"assest/neal.jpg",
      icon:"assest/youtube.svg",
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Doloremque tenetur, consequatur quos sue",
      featured: true
    },
    {
      id:3,
      title:"Senior Developer",
      name:"Beniyam",
      img:"assest/bini.png",
      icon:"assest/linkedin.svg",
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Doloremque tenetur, consequatur quos sue"
    }
  ]
  return (
   
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
      {data.map((d)=>(  
        <div className={d.featured ? "card feature" : "card"}>
        <div className="top">
          <img src="/assest/right-arrow.png" className='left' alt="" />
          <img src={d.img} className='user' alt="" />
          <img src={d.icon} className='right' alt="" />
        </div>
        <div className="center">
          {d.desc}
         </div>
        <div className="bottum">
          <h3>{d.name}</h3>
          <h4>{d.title}</h4>
        </div>
      </div>
    ))}
        
      </div>
    </div>
  )
}
