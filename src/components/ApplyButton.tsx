
import { Link} from "react-router-dom";

interface Props {
  To:string;
  Icon:JSX.Element;
  heading:string

}

export default function ApplyButton (props:Props) {

    return (
      <Link to={props.To}>
      <button className="mt-4 bg-primary-main text-white shadow-sm p-8 border border-primary-border rounded-lg w-56" >
      <div className="flex flex-col place-items-center items-center gap-8">
        <span className="text-5xl"> {props.Icon}</span>
        <h3 className="text-base  text-center">{props.heading}</h3>
      </div>
    </button>
   
  </Link>
    )
}