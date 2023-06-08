import { MdOutlineArrowRight, MdOutlineChevronRight } from "react-icons/md";
import LayoutPage from "../Layout/LayoutPage";

export default function Circular() {
  const circulars = [
    {
      url: "https://mccallmacbainscholars.org/program/",
      topic:"Change to leave structure"
    },
    {
      url: "https://mccallmacbainscholars.org/program/",
      topic:"All forms available on staff portal at another and anothet and alalal"
    },
    {
      url: "https://mccallmacbainscholars.org/program/",
      topic:"Leave Notice"
    },
    {
      url: "https://mccallmacbainscholars.org/program/",
      topic:"E Procurement"
    }
  ]
  return (
    <LayoutPage>
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
            
              <div>
                {circulars.map((circular)=>{
                  return(
                    <a
                href={circular.url}
                className="mt-1 leading-tight flex items-center justify-between w-full max-w-sm gap-4 p-2 py-4  hover:bg-primary-surface hover:rounded-r-full"
              >
                <p className="truncate ...">{circular.topic}</p> <MdOutlineChevronRight />
                
              </a>
                  )
                })}
              </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
