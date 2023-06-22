import { MdOutlineArrowRight, MdOutlineChevronRight } from "react-icons/md";
import LayoutPage from "../Layout/LayoutPage";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function Circular() {
  // const circulars = [
  //   {
  //     id:1,
  //     url: "https://mccallmacbainscholars.org/program/",
  //     topic:"Change to leave structure"
  //   },
  //   {
  //     id:2,
  //     url: "https://mccallmacbainscholars.org/program/",
  //     topic:"All forms available on staff portal at another and anothet and alalal"
  //   },
  //   {
  //     id:3,
  //     url: "https://mccallmacbainscholars.org/program/",
  //     topic:"Leave Notice"
  //   },
  //   {
  //     id:4,
  //     url: "https://mccallmacbainscholars.org/program/",
  //     topic:"E Procurement"
  //   }
  // ]
  const [circulars,setCirculars] = useState([])
  const [isLoading,setIsLoading] = useState(false);
  // State to display error message
const [errorMessage, setErrorMessage] = useState("");
 const getCircularData = () => {
  
  setIsLoading(true)
  
  axios
  .get('http://127.0.0.1:8000/api/circular/circular_list')
  .then(response => {
    const circular = response.data;
    setCirculars(circular);
    setIsLoading(false) // hide loading screen
  })
  .catch(() => {
    setErrorMessage("Unable to fetch Circular List")
    setIsLoading(false)
  });
 };



 useEffect(()=> {
  
  getCircularData()
 },[])

  return (
    
      <div className="max-w-md  bg-white rounded-xl shadow-md overflow-scroll  md:h-80 md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-80 w-full object-cover md:h-full md:w-56"
              src="https://images.pexels.com/photos/3316924/pexels-photo-3316924.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="capitalize tracking-wide text-xl  ">
              Latest Circulars
            </div>
            <hr className=" border-primary-main h-4" />
              {isLoading ? <LoadingSpinner/> : null}
              {  isLoading == false &&
                <div>
                {circulars.map((circular:any)=>{
                  return(
                    <a key={circular.id}
                href={`https://staffportal.ucc.edu.gh${circular.attachment}`}
                className="mt-1 leading-tight flex items-center justify-between w-full max-w-sm gap-4 p-2 py-4  hover:bg-primary-surface hover:rounded-r-full"
              >
                <p className="truncate ...">{circular.subject}</p> <span className="text-lg"><MdOutlineChevronRight /></span>
                
              </a>
                  )
                })}
              </div>
              }
          </div>
        </div>
      </div>
    
  );
}
