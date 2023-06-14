import Button from "../../components/Button";
import LayoutPage from "../Layout/LayoutPage";
import LeaveModal from "./LeaveModal";
import { useState } from "react";
import LeaveStatistics from "./LeaveStatistics";
import LeaveApplications from "./LeaveApplications";
import LeaveRecords from "./LeaveRecords";

export default function LeavePage() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = (event: any) => {
    event.preventDefault();
    //event.currentTarget.disabled = true;
    setShowModal(!showModal);
  };
  return (
    <LayoutPage>
      <div>
        <section>
          <div className="flex   items-center gap-3 justify-between">
            <h3 className="text-xl">Leave Page</h3>
            <Button
              buttonStyle="bg-primary-main text-white"
              onClick={handleModal}
            >
              Apply for Leave
            </Button>
          </div>
          <LeaveModal showModal={showModal} handleModal={handleModal} />
        </section>
        <section className="">
          <LeaveStatistics />
        </section>
        <section>
            <LeaveApplications/>
        </section>
        <section>
            <LeaveRecords/>
        </section>
      </div>
    </LayoutPage>
  );
}
