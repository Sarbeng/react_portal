import { NavLink } from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {
  MdOutlineDashboard,
  MdOutlinePerson,
  MdOutlineNotifications,
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
    

    

  return (
    <aside className={`fixed shadow-md  left-0 z-40 w-80 h-screen transition-transform  ${toggle == props.toggle == false ? "" : "-translate-x-full sm:translate-x-0 "  }`}>
      <div
        id="links"
        className="flex flex-col h-full px-8 py-8 overflow-y-auto bg-white gap-5 dark:bg-gray-800 text-base text-primary-main  "
      >
        
        <NavLink
          to="/home"
          className={({isActive}) => isActive ? activeLink: normalLink + "hover:rounded-r-full hover:bg-primary-main hover:text-white" }
          >
            <p className="flex items-center gap-3  py-3 px-4 ">          <MdOutlineDashboard style={{ fontSize: "1.5rem" }} />
          Dashboard</p>
        </NavLink>
        <NavLink to="/personalDetails"  className={({isActive}) => isActive ? activeLink: normalLink + "hover:rounded-r-full hover:bg-primary-main hover:text-white" }>
         
          <p className="flex items-center gap-3 py-3 px-4 ">
            <MdOutlinePerson style={{ fontSize: "1.5rem" }} />
            Personal Details
          </p>
        </NavLink>
        <NavLink to="/circular"  className={({isActive}) => isActive ? activeLink: normalLink + "hover:rounded-r-full hover:bg-primary-main hover:text-white" }>
          <p className="flex items-center gap-3 py-3 px-4 "><MdOutlineNotifications style={{ fontSize: "1.5rem" }} />
          Circular</p>
        </NavLink>
        <NavLink to="/leave"  className={({isActive}) => isActive ? activeLink: normalLink + "hover:rounded-r-full hover:bg-primary-main hover:text-white" }>
          <p className="flex items-center gap-3 py-3 px-4"><MdOutlineWorkOff style={{ fontSize: "1.5rem" }} />
          Leave</p>
        </NavLink>
        <NavLink to="/promotion"  className={({isActive}) => isActive ? activeLink: normalLink + "hover:rounded-r-full hover:bg-primary-main hover:text-white" }>
            <p className="flex items-center gap-3 py-3 px-4"><MdOutlineStackedLineChart style={{ fontSize: "1.5rem" }} />
          Promotion</p>
          
        </NavLink>
        <NavLink to="/appraisal"  className={({isActive}) => isActive ? activeLink: normalLink + "hover:rounded-r-full hover:bg-primary-main hover:text-white" }>
            <p className="flex items-center gap-3 py-3 px-4"><MdOutlineBallot style={{ fontSize: "1.5rem" }} /> Appraisal</p>
          
        </NavLink>
        <NavLink to="/procurement"  className={({isActive}) => isActive ? activeLink: normalLink + "hover:rounded-r-full hover:bg-primary-main hover:text-white" }>
            <p className="flex items-center gap-3 py-3 px-4"> <MdOutlineShoppingBag style={{ fontSize: "1.5rem" }} />
          Procurement</p>
         
        </NavLink>
      </div>
    </aside>
  );
}

