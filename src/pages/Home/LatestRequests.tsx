import { MdOutlineMoreHoriz, MdOutlineVisibility } from "react-icons/md";
import { useState } from "react";

export default function LatestRequests() {
  const [showModal, setShowModal] = useState(false);
  // function to display the dropdown menu
  const showDropdown = () => {
    setShowModal(!showModal);

    setTimeout(() => {
      setShowModal(false);
      console.log("delayed for 5 seconds");
    }, 5000);
    clearTimeout;
  };
  return (
    <div className="max-w-md bg-white rounded-xl shadow-md overflow-scroll  md:h-80 md:max-w-3xl">
      <div className="md:flex">
        <div className="md:shrink-0"></div>
        <div className="p-8">
          <div className="capitalize tracking-wide text-xl  ">
            Latest Requests
          </div>
          <hr className=" border-primary-main h-4" />

          <div>
            <div className="flex gap-5 h-24 py-5 px-4 shadow-sm bg-white rounded-lg border">
              <div className="flex flex-col max-w-xs w-44 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                  Annual Leave
                </h4>
                <p className="truncate ...">Ceceilia Ntow Ewusie</p>
              </div>
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              <div className="flex flex-col max-w-xs w-44 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                  Days Applied
                </h4>
                <p className="truncate ...">
                  {" "}
                  <progress
                    className="w-28 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-main [&::-moz-progress-bar]:bg-primary-main"
                    value={0.8}
                  />{" "}
                  40/50
                </p>
              </div>
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              <div className="flex flex-col max-w-xs w-44 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                  Resumption Date
                </h4>
                <p className="truncate ...">Mon Mar 20, 2023</p>
              </div>
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              <button
                className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center"
              >
                
                  <span className="text-2xl">
                    <MdOutlineMoreHoriz />
                  </span>
                  <p className="truncate ... text-xs">More</p>
                
              </button>
              {/* <!-- Pin to top right corner --> */}


            </div>
          </div>
        </div>
        <div className="relative bg-white h-32 w-32 ...">
  <div className="absolute top-10 right-0 h-16 w-16 bg-white shadow-sm px-2 py-2 ...">03</div>
</div>
      </div>
      
    </div>
  );
}
