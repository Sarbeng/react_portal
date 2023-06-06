import { useEffect, useState } from "react";
import UccLogo from "../../../assets/UccLogo";
import { MdOutlineArrowDropDown, MdOutlineMenu } from "react-icons/md";

export default function Header() {
    const [showModal, setShowModal] = useState(false)
    const [hideMenu,setHideMenu] = useState(true)

    // function to display the dropdown menu
    const showDropdown = () => {
        setShowModal(!showModal)
        
        setTimeout(() => {
            setShowModal(false)
            console.log("delayed for 5 seconds")
        }, 5000);
        clearTimeout;
        
    }
    
   
  return (
    <header className="flex  justify-between  items-center bg-white shadow-sm px-6">
      
      <UccLogo logoStyle="" />
      <div className="flex float-right">
     
      <div>
        
      <button className={`invisible lg:visible`} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" onClick={showDropdown} >
        <div className="flex justify-center items-center gap-2">
          <img
            src="https://images.pexels.com/photos/16904262/pexels-photo-16904262/free-photo-of-hot-air-balloons-in-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            className=" w-8 h-8 rounded-full object-fill"
          />
          <h2>User name</h2>
          <MdOutlineArrowDropDown />
        </div>
      </button>
      <button className={` visible  lg:invisible`}><MdOutlineMenu/></button>
      <div id="dropdown" className={`z-10 absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 right-5 ${showModal ? "" : "hidden"}`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Personal Details</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reset Password</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
      </div>
      </div>
    </header>
  );
}
