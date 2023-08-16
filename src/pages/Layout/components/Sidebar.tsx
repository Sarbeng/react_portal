import { NavLink, useNavigate } from "react-router-dom";
import { useState} from "react";
import {
  MdOutlineDashboard,
  MdOutlinePerson,
  MdOutlineWorkOff,
  MdOutlineStackedLineChart,
  MdOutlineBallot,
  MdOutlineShoppingBag,
  MdOutlineLogout,
} from "react-icons/md";
import {useSignOut} from "react-auth-kit";


interface Props {
  toggle?:boolean;  
}

export default function Sidebar(props:Props) {
    const activeLink = 'rounded-r-full bg-primary-main text-white'
    const normalLink = ''
    const [toggle] = useState(false)

    const navLinks = [
      {
        linkName:"Dashboard",
        linkIcon: <MdOutlineDashboard/>,
        linkTo:"/dashboard/home"
      },
      {
        linkName:"Personal Details",
        linkIcon: <MdOutlinePerson/>,
        linkTo:"/dashboard/personalDetails"
      }
      ,
      {
        linkName:"Leave",
        linkIcon: <MdOutlineWorkOff/>,
        linkTo:"/dashboard/leave"
      },
      {
        linkName:"Appraisal",
        linkIcon: <MdOutlineBallot/>,
        linkTo:"/dashboard/appraisal"
      },
      {
        linkName:"Promotion",
        linkIcon: <MdOutlineStackedLineChart/>,
        linkTo:"/dashboard/promotion"
      },
      {
        linkName:"Procurement",
        linkIcon: <MdOutlineShoppingBag/>,
        linkTo:"/dashboard/procurement"
      },
      
    ]
    
    const signOut = useSignOut();
    const navigate = useNavigate()
    const logout = () => {
      signOut()
      navigate('/')
    }
    

  return (
    <aside className={`fixed shadow-md border  left-0 z-40 w-80 h-screen transition-transform  ${toggle == props.toggle == false ? "" : "-translate-x-full sm:translate-x-0 "  }`}>
      <div
        id="links"
        className="flex flex-col h-full px-8 py-8 overflow-y-auto bg-white gap-5 dark:bg-gray-800 dark:text-white text-base text-primary-main  "
      >
        
        {
          navLinks.map((navLink)=>{
            return (
              <NavLink
          to={navLink.linkTo}
          key={navLink.linkTo}
          className={({isActive}) => isActive ? activeLink: normalLink + "hover:rounded-r-full hover:bg-primary-main hover:text-white" }
          onClick={() => !toggle}
          >
            <p className="flex items-center gap-3  py-3 px-4 ">         <span className="text-2xl">{navLink.linkIcon}</span>
          {navLink.linkName}</p>
        </NavLink>
            )
          })
        }
        <button
        onClick={logout}
          className={ " hover:rounded-r-full hover:bg-primary-main hover:text-white" }
          >
            <p className="flex items-center gap-3  py-3 px-4 ">         <span className="text-2xl"><MdOutlineLogout/></span>
          Logout</p>
        </button>
      </div>
    </aside>
  );
}

