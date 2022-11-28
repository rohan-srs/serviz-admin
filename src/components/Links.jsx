import {React,useState} from 'react'
import { Link } from 'react-router-dom';


export default function Links({links}) {

    const [activeState,setActiveState] = useState(false);
    
  return (
    <div>
    <ul>
        {links.map((link) => {
            return (
                <li onClick={()=>setActiveState(!activeState)} className={activeState ? "active" : ""} >
                    <Link  className='linker' to={link.linkz}>
                    <div className="txticon">
                        <link.icon />
                        {link.text}
                    </div>
                    </Link>
                </li>
            );
        })}
    </ul>

    
    </div>
  )
}
