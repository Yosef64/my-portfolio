import './tes.scss'

export default function Tes() {
  const data=[
    {
      id:1,
      title:"CEO of Twitter",
      name:"Elon",
      img:"assest/elon.jpg",
      desc:"I had the pleasure of working with joseph , and I must say, their expertise and dedication to their craft are truly exceptional. From the moment we started collaborating on my app project, I knew I was in capable hands.",
      icon:"assest/twiter.jpg"
    },
    {
      id:2,
      title:"CEO of Youtube",
      name:"Neal",
      img:"assest/neal.jpg",
      icon:"assest/youtube.svg",
      desc:"Joseph's technical prowess and creativity shine through in every aspect of the app they developed for me. Their attention to detail, innovative solutions, and user-centric approach have resulted in a seamless and user-friendly application that exceeded my expectations.",
      featured: true
    },
    {
      id:3,
      title:"Senior Developer",
      name:"Beniyam",
      img:"assest/bini.png",
      icon:"assest/linkedin.svg",
      desc:"My brother,Josi, is not only my sibling but also an exceptional app developer who continues to amaze me with his talent and dedication. From a young age, John showed an innate curiosity for technology, and it was no surprise to see him pursue a career in app development."
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
