import Circular from "./Circular";
import LayoutPage from "../Layout/LayoutPage";
import QuickLinks from "./QuickLinks";

export default function HomePage () {
    return (
        <LayoutPage>
           <div className="flex gap-8 flex-col md:flex-row">
           <Circular/>
           <QuickLinks/>
           </div>
        </LayoutPage>
    );
}