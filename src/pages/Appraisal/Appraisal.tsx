import LayoutPage from "../Layout/LayoutPage";
import { MdOutlineBallot, } from "react-icons/md";
import CurrentAppraisal from "./CurrentAppraisal";
import PreviousAppraisals from "./PreviousAppraisal";
import NoAppraisal from "./NoAppraisal";
import ApplyButton from "../../components/ApplyButton";

export default function Appraisal () {
    return (
        <LayoutPage>
            <div className="flex flex-col gap-8 pb-8">
                 {/* Current Appraisals Section */}
            <CurrentAppraisal/>
            <ApplyButton To="/leave" Icon={<MdOutlineBallot/> } heading="Fill Appraisal Form"/>
            
            {/* Previous Appraisals Section */}
            <NoAppraisal/>
            <PreviousAppraisals/>
            </div>
        </LayoutPage>
    );
}