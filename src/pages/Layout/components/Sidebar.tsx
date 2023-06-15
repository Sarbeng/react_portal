import { NavLink,Link } from "react-router-dom";
import { useState} from "react";
import {
  MdOutlineDashboard,
  MdOutlinePerson,
  MdOutlineWorkOff,
  MdOutlineStackedLineChart,
  MdOutlineBallot,
  MdOutlineShoppingBag,
} from "react-icons/md";


interface Props{
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
        linkTo:"/home"
      },
      {
        linkName:"Personal Details",
        linkIcon: <MdOutlinePerson/>,
        linkTo:"/personalDetails"
      }
      ,
      {
        linkName:"Leave",
        linkIcon: <MdOutlineWorkOff/>,
        linkTo:"/leave"
      },
      {
        linkName:"Appraisal",
        linkIcon: <MdOutlineBallot/>,
        linkTo:"/appraisal"
      },
      {
        linkName:"Promotion",
        linkIcon: <MdOutlineStackedLineChart/>,
        linkTo:"/promotion"
      },
      {
        linkName:"Procurement",
        linkIcon: <MdOutlineShoppingBag/>,
        linkTo:"/procurement"
      },
      
    ]
    

    

  return (
    <aside className={`fixed shadow-md border  left-0 z-40 w-80 h-screen transition-transform  ${toggle == props.toggle == false ? "" : "-translate-x-full sm:translate-x-0 "  }`}>
      <div
        id="links"
        className="flex flex-col h-full px-8 py-8 overflow-y-auto bg-white gap-5 dark:bg-gray-800 text-base text-primary-main  "
      >
        
        {
          navLinks.map((navLink)=>{
            return (
              <Link
          to={navLink.linkTo}
          className={({isActive}) => isActive ? activeLink: normalLink + "hover:rounded-r-full hover:bg-primary-main hover:text-white" }
          >
            <p className="flex items-center gap-3  py-3 px-4 ">         <span className="text-2xl">{navLink.linkIcon}</span>
          {navLink.linkName}</p>
        </Link>
            )
          })
        }
      </div>
    </aside>
  );
}

