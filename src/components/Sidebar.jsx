import React from 'react'
import styled from 'styled-components'
import {MdSpaceDashboard} from "react-icons/md"
import {FaUsers} from "react-icons/fa"
import {BsArchiveFill} from "react-icons/bs"
import {RiSettings5Fill} from "react-icons/ri"
import {BsFillFileEarmarkCodeFill} from "react-icons/bs"
import {FaLightbulb} from "react-icons/fa"
import {FiLogOut} from "react-icons/fi"
import Links from './Links'
import { blackBackground, greyBackground, whiteText, yellowAccent,redAccent } from '../utils'

export default function Sidebar() {
    const links1 = [
        {
            text: "Dashboard",
            icon: MdSpaceDashboard, 
            active: true,
        },
        {
            text: "Users",
            icon: FaUsers, 
            linkz:"D:/Admin_ServiZ/final/admin_serviz/src/components/Revenue.jsx",
        },
        {
            text: "All Projects",
            icon: BsArchiveFill, 
        },
        {
            text: "Settings",
            icon: RiSettings5Fill, 
        }
    ];
    const links2 = [
        {
            text: "Requests",
            icon: FaLightbulb, 
        },
        {
            text: "Projects",
            icon: BsFillFileEarmarkCodeFill, 
        },
        
    ];
  return (
    <div className='sidebar'>
        <div className="appname">ServiZ</div>
        <div className="links">
            <Links links={links1} />
            <Links links={links2} />
            <Link>
                <FiLogOut />
                <h3>Logout</h3>
            </Link>
        </div>
    </div>
  )

  
}

const Link = styled.li`
padding-top: 6rem;
    margin-left: 25%;
    margin-bottom: 2rem;
    display: flex;
    gap: 1rem;
    color: ${whiteText};
    cursor: pointer;
    h3{
        font-weight: 600;
        color: ${redAccent};
    }
    svg{
        margin-top: 2%;
        font-size: 1.2rem;
        color: ${redAccent};
    }
`;
