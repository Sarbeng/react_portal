import { Link } from "react-router-dom";

export default function Sidebar () {
    return(
        <div className="flex flex-col">
           
            <Link to="/home">Dashboard</Link>
            <Link to="/personalDetails">Personal Details</Link>
            <Link to="/circular">Circular</Link>
            <Link to="/leave">Leave</Link>
            <Link to="/promotion">Promotion</Link>
            <Link to="/appraisal">Appraisal</Link>
            <Link to="/procurement">Procurement</Link>
        </div>
    )
}