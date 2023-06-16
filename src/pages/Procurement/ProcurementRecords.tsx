import {
  MdOutlineVisibility,
  MdOutlineEdit,
  MdOutlineDelete,
} from "react-icons/md";
import ProcurementModal from "./ProcurementModal";
import { useState } from "react";

export default function ProcurementRecords() {
    const [showModal, setShowModal] = useState(false);

  const handleModal = (event: any) => {
    event.preventDefault();
    //event.currentTarget.disabled = true;
    setShowModal(!showModal);
  };

  return (
    <div>
      <section>
        <h3 className="text-lg">Procurement Records</h3>

        <div className="mt-4">
          <div className=" overflow-scroll">
            <div className="flex gap-5 h-36 p-4 shadow-sm bg-white w-fit rounded-lg border items-center">
                {/* registration number section starts */}
              <div className="flex flex-col max-w-xs w-32 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                  Staff No.
                </h4>
                <p className="text-sm">
                  <span className="text-slate-400">90000</span>
                </p>
              </div>
              {/* registration number section ends */}
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              {/* start of total cost section */}
              <div className="flex flex-col max-w-xs w-28 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                  Total Cost
                </h4>
                
                <p className="text-sm">
                  <span className="text-slate-400">GHS 100000 .00</span>
                </p>
              </div>
               {/* end of total cost section */}
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              {/* start of date section */}
              <div className="flex flex-col max-w-xs w-36 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                  date
                </h4>
                <p className="text-sm">
                  <span className="text-slate-400">Wed, Mar 15, 2023</span>
                </p>
              </div>
              {/* end of date section */}
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              {/* start of status section */}
              <div className="flex flex-col max-w-xs w-40 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                  Status
                </h4>
                <p className="truncate ... bg-primary-surface py-1 px-3 rounded-full text-sm">
                 Form not Complete
                </p>
                
              </div>
                {/* end of status section */}
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
                {/* start of progress section */}
              <div className="flex flex-col max-w-xs w-40 gap-4">
                <h4 className="text-xs uppercase font-semibold">
                 Progress
                </h4>
                <p className="truncate ... bg-primary-surface w-fit py-1 px-3 rounded-full text-sm">
                  Form not Complete{" "}
                </p>
                
              </div>
                {/* end of progress section */}
              <hr className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />
              <div className="flex gap-4 px-8">
                <button
                  // href={leaveList.viewIcon.link}
                  className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center"
                onClick={handleModal}>
                  <span className="text-2xl">
                    <MdOutlineVisibility />
                  </span>
                  <p className="truncate ... text-xs">View</p>
                </button>

                <div className="flex gap-3">
                  <button className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center">
                    <span className="text-2xl">
                      <MdOutlineEdit />
                    </span>
                    <p className="truncate ... text-xs">Edit</p>
                  </button>
                  <button className="flex flex-col  max-w-xs w-full gap-3  items-center justify-center">
                    <span className="text-2xl text-red-600">
                      <MdOutlineDelete />
                    </span>
                    <p className="truncate ... text-xs">Delete</p>
                  </button>
                </div>
              </div>

              {/* <!-- Pin to top right corner --> */}
            </div>
          </div>
        </div>
        <ProcurementModal showModal={showModal} handleModal={handleModal}/>
      </section>
    </div>
  );
}
