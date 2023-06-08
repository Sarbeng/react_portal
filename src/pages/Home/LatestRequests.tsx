import { MdOutlineMoreHoriz } from "react-icons/md";

export default function LatestRequests() {
  return (
    <div className="max-w-md  bg-white rounded-xl shadow-md overflow-scroll  md:h-80 md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0"></div>
        <div className="p-8">
          <div className="capitalize tracking-wide text-xl  ">
            Latest Requests
          </div>
          <hr className=" border-primary-main h-4" />

          <div>
            <div className="flex gap-5 h-24 py-5 px-4 shadow-sm bg-white rounded-lg"> 
              <div className="flex flex-col max-w-xs w-44 gap-4">
                <h4 className="text-xs uppercase font-semibold">Annual Leave</h4>
                <p className="truncate ...">Ceceilia Ntow Ewusie</p>
              </div>
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              <div className="flex flex-col max-w-xs w-44 gap-4">
                <h4 className="text-xs uppercase font-semibold">Days Applied</h4>
                <p className="truncate ..."> <progress className="w-28 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-primary-main [&::-moz-progress-bar]:bg-primary-main" value={0.8}/> 40/50</p>
              </div>
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              <div className="flex flex-col max-w-xs w-44 gap-4">
                <h4 className="text-xs uppercase font-semibold">Resumption Date</h4>
                <p className="truncate ...">Mon Mar 20, 2023</p>
              </div>
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              <button className="flex flex-col max-w-xs w-full gap-3  items-center justify-center">
                <span className="text-2xl"><MdOutlineMoreHoriz/></span>
                <p className="truncate ... ">More</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
