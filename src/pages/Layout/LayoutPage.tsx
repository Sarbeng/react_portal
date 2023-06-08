import Footer from "./components/Footer";
import Header from "./components/Header";

export default function LayoutPage (props:any) {
    return (
        <div className="text-primary-main"> 
        <Header/>
        <main className="p-4 sm:ml-80 md:ml-96 md:mt-6 ">{props.children}</main>
        <Footer/>
        </div>
    );
}