import LayoutPage from "../Layout/LayoutPage";
import PromotionRecords from "./PromotionRecords";
import PromotionStatistics from "./PromotionStatistics";

export default function Procurement () {
    return (
        <LayoutPage>
            <section>
            <PromotionStatistics/>
            <PromotionRecords/>
            </section>
        </LayoutPage>
    );
}