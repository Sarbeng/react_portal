import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import TextInput from "../../components/TextInput";

interface Props {
  showModal?: boolean;
  handleModal?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function LeaveModal(props: Props) {
  const [showModal, setShowModal] = useState(true);
  const handleModal = (event: any) => {
    event.preventDefault();
    event.currentTarget.disabled = true;
    setShowModal(!showModal);
  };

  return (
    <>
      {props.showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t gap-3">
                  <div className="w-full bg-green-50 py-4  px-3 rounded-lg flex justify-center items-center gap-3">
                    <h3 className="text-lg text-white p-4 w-14 h-14 rounded-full bg-green-600 ">
                      40
                    </h3>
                    <p className="text-green-600">Leave Days Entitled</p>
                    <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={props.handleModal}
                  >
                    <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <MdOutlineClose />
                    </span>
                  </button>
                  </div>
                 
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form>
                    <div className="mb-4">
                      <TextInput
                        name="days_taken"
                        type="text"
                        label="Leave days to be taken"
                      />
                    </div>
                    <div className="mb-4">
                      <TextInput
                        name="start_date"
                        type="date"
                        label="Expected Start Date"
                      />
                    </div>
                    <div className="mb-4">
                      <TextInput
                        name="emergency_name__and_address"
                        type="text"
                        label="Emergency Name & Address"
                      />
                    </div>
                    <div className="mb-4">
                      <TextInput
                        name="emergency_contact"
                        type="text"
                        label="Emergency Contact"
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.handleModal}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.handleModal}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
