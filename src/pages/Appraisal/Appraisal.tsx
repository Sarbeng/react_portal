import LayoutPage from "../Layout/LayoutPage";
import { MdOutlineBallot, } from "react-icons/md";
import CurrentAppraisal from "./CurrentAppraisal";
import PreviousAppraisals from "./PreviousAppraisal";
import NoAppraisal from "./NoAppraisal";
import ApplyButton from "../../components/ApplyButton";
import { useEffect, useState } from "react";

export default function Appraisal () {
    const [appraisal, setAppraisal] = useState(false);
    
    useEffect(()=>{
        setAppraisal(false)
    })
    return (
        <LayoutPage>
            <div className="flex flex-col gap-8 pb-8">
                {appraisal?  <>
                {/* if appraisal exists display current  Previous Appraisals Section */}
                    <CurrentAppraisal/>
           
             
           
           
            <PreviousAppraisals/>
            </>
            :
            <>
            {/*If no appraisal exists display this */}
            <ApplyButton To="/appraisalPage1" Icon={<MdOutlineBallot/> } heading="Fill Appraisal Form"/>
            <NoAppraisal/>
            </>
        }
            
                 {/* Current Appraisals Section */}
            
            </div>
        </LayoutPage>
    );
}