import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function LayoutPage (props:any) {
    return (
        <> 
        <Header/>
        <Sidebar/>
        <main>{props.children}</main>
        <Footer/>
        </>
    );
}