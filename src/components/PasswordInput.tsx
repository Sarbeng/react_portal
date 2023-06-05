import { useState } from "react";
import {MdVisibility,MdVisibilityOff} from "react-icons/md"
interface Props {
    name?: string;
    type?: string;
    label?: string;
    value?: string;
    ref?: string;
    inputStyle?:string
    handleChange?: (
      e?:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    handleBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  }

export function PasswordInput (props: Props){
    const [visible, setVisible] = useState(false)

   
    
    const handleVisibility = () => {
        setVisible(!visible)
    }

    
    return (
        <div id="inputGroup" >
      <label className="" htmlFor="email">
        {props.label}
      </label>
      <div  className={`flex justify-center items-center gap-3 border rounded-lg  rounded-large ${props.inputStyle == "error" ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused" } `}>
      <input
        className=" h-12 rounded-lg w-full py-2 px-3 text-primary-main border-none focus:outline-none "
        name={props.name}
        type={visible ? "text" : "password"}
        value={props.value}
        ref={props.ref}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        
      />
      <button className="px-3" onClick={handleVisibility}>{visible ? <MdVisibility/> : <MdVisibilityOff/>}</button>
      </div>
    </div>
    );
}