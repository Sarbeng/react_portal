import UccLogo from "../../../assets/UccLogo";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function Header() {
    const handleModal = (event:any) => {
        event.preventDefault()
        return(
            <div></div>
        )
    }
  return (
    <header className="flex content-between justify-between  items-center bg-white shadow-sm px-6">
      <UccLogo logoStyle="" />
      <a href="" onClick={handleModal}>
        <div className="flex justify-center items-center gap-2">
          <img
            src="https://images.pexels.com/photos/16904262/pexels-photo-16904262/free-photo-of-hot-air-balloons-in-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            className=" w-8 h-8 rounded-full object-fill"
          />
          <h2>User name</h2>
          <MdOutlineArrowDropDown />
        </div>
      </a>
    </header>
  );
}
