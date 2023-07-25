
import "./portfoliolist.scss"
export default function Portfolio({title,active,id,selected,setSelected}) {
  return (
    <li className={active ? "portfoliolist active" : "portfoliolist" } onClick={()=>setSelected(id)}>
      {title}
    </li>
  )
}
