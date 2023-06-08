import { MdOutlineBook, MdOutlineCollectionsBookmark, MdOutlineLibraryBooks, MdOutlineLink, MdOutlineList, MdOutlineLocalActivity, MdOutlineLocalLibrary, MdOutlinePattern, MdOutlineReadMore, MdOutlineSentimentNeutral, MdOutlineSpeaker, MdOutlineStackedBarChart, MdOutlineStackedLineChart, MdOutlineViewList, MdOutlineWifi, MdOutlineWorkOff } from "react-icons/md";

export default function QuickLinks (){
    const quickLinks = [
        {
            url:"",
            linkName:"Apply Leave",
            icon: <MdOutlineWorkOff/>
        },
        {
            url:"",
            linkName:"Request Procurement",
            icon: <MdOutlineList/>
        },
        {
            url:"",
            linkName:"Apply for Promotion",
            icon: <MdOutlineStackedLineChart/>
        },
        {
            url:"",
            linkName:"Fill Appraisal Form",
            icon: <MdOutlineLibraryBooks/>
        },
        {
            url:"",
            linkName:"Eduroam",
            icon: <MdOutlineWifi/>
        },
        {
            url:"",
            linkName:"Declaration of Intent",
            icon: <MdOutlineLocalLibrary/>
        }
    ]
    return (
        <div>
<div className="max-w-md  bg-white rounded-xl shadow-md overflow-scroll  md:h-full md:max-w-lg">
        <div className="md:flex">
          <div className="md:shrink-0">
            
          </div>
          <div className="p-8">
            <div className="capitalize tracking-wide text-xl  ">
              Quick Links
            </div>
            <hr className=" border-primary-main h-4" />
            
              <div>
                {quickLinks.map((links)=>{
                    return(
                        <a
                href={links.url}
                className="mt-1 leading-tight flex items-center  w-full max-w-sm gap-3 py-4 px-4  hover:bg-primary-surface hover:rounded-full"
              >
                <span className="text-lg">{links.icon}</span>
                <p className="truncate ...">{links.linkName}</p> 
                
              </a>
                    );
                })}
                
              </div>
          </div>
        </div>
      </div>
        </div>
    );
}