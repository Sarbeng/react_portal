import LayoutPage from "../Layout/LayoutPage";
import ProcurementRecords from "./ProcurementRecords";
import ProcurementStatistics from "./ProcurementStatistics";

export default function Procurement () {
    return (
        <LayoutPage>
            <>
            <ProcurementStatistics/>
            <ProcurementRecords/>
            </>
        </LayoutPage>
    );
}