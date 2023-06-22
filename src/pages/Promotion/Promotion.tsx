import LayoutPage from "../Layout/LayoutPage";
import PromotionRecords from "./PromotionRecords";
import PromotionStatistics from "./PromotionStatistics";

export default function Procurement () {
    return (
        <LayoutPage>
            <PromotionStatistics/>
            <PromotionRecords/>
        </LayoutPage>
    );
}