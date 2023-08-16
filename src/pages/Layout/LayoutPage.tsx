import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

// interface Props {
//     children: JSX.Element | undefined;
// }

export default function LayoutPage() {

    
        return (
            <div className="text-primary-main">
                <Header />
                <main className="p-4 sm:ml-80 md:ml-96 md:mt-6 md:mr-16 overflow-scroll"><Outlet/></main>
                <Footer />
            </div>
        );

}