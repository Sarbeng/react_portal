import { useState } from "react";
import {MdVisibility,MdVisibilityOff} from "react-icons/md"
interface Props {
    name?: string;
    type?: string;
    label?: string;
    value?: string;
    ref?: string;
    handleChange?: (
      e?:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    handleBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  }

export function IconInput (props: Props){
    const [visible, setVisible] = useState(false)
    
    const handleVisibility = () => {
        setVisible(!visible)
    }
    return (
        <div id="inputGroup" >
      <label className="" htmlFor="email">
        {props.label}
      </label>
      <div className="flex justify-center items-center gap-3 border rounded-lg border-primary-border  rounded-large focus:outline-none  focus:border-primary-focused focus:ring-1 shadow-sm focus:ring-primary-focused">
      <input
        className=" h-12 rounded-lg w-full py-2 px-3 text-primary-main border-none focus:outline-none "
        name={props.name}
        type={visible ? "text" : "password"}
        
      />
      <button className="px-3" onClick={handleVisibility}>{visible ? <MdVisibility/> : <MdVisibilityOff/>}</button>
      </div>
    </div>
    );
}