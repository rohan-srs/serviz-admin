// import React from 'react'
// import {BiSearchAlt} from "react-icons/bi"
// import {FiBell} from "react-icons/fi"
// import {FaUserSecret} from "react-icons/fa"
// import {BsFillCaretDownFill} from "react-icons/bs"
// import  "../scss/components/navbar.scss";

// export default function Navbar() {
//   return (
//     <div className='navbar'>
//         <div className="title">
//             <h2>Dashboard</h2>
//         </div>
//       <div className="container">
//         <div className="search">
//           <BiSearchAlt />
//             <input type="text" placeholder="Search..." />
//         </div>
//         <div className="profile">
//             <FiBell className='bell' />
//             <div className="avatar">
//               <FaUserSecret className='img'/>
//               </div>
            
//             <div className="profile_name">
//               <h4>Admin</h4>
//               <h6>Admin</h6>
//             </div>
            
//         </div>
//       </div>
//     </div>
//   )
// }

import "../scss/components/navbar.scss"
import React from 'react'
import { SearchOutlined ,DarkModeOutlined, ChatBubbleOutlineTwoTone, NotificationsNoneOutlined} from "@mui/icons-material"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlined/>
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlined className = "icon" />
          </div>
          
          <div className="item">
            <NotificationsNoneOutlined className = "icon"/>
            <div className="counter">1</div>
            
          </div>

          <div className="item">
          <ChatBubbleOutlineTwoTone className = "icon"/>
          <div className="counter">2</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
