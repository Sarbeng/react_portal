import Circular from "./Circular";
import LayoutPage from "../Layout/LayoutPage";
import QuickLinks from "./QuickLinks";
import LatestRequests from "./LatestRequests";

export default function HomePage () {
    return (
        <LayoutPage>
           <div className="flex gap-8 flex-col md:flex-row">
           <div className="flex flex-col gap-8">
           <Circular/>
           <LatestRequests/>
           </div>
           <QuickLinks/>
           
           </div>
        </LayoutPage>
    );
}