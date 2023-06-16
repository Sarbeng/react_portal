import { ChangeEvent, } from "react";

interface Props {
    name?: string;
    type?: string;
    label?: string;
    value?: string;
    ref?: string;
    disabled?:boolean
    inputStyle?:string
    handleChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleBlur?: React.FocusEventHandler<HTMLSelectElement> | undefined;
    optionValue:string;
  }
  
  export default function SelectInput(props: Props) {

    const options = [
        {
            text: "another one bites the dust"
        },
        {
            text: "another one bites the dust"
        },
        {
            text: "another one bites the dust"
        },
        {
            text: "another one bites the dust"
        }
    ]
  
   
    return (
      <div id="inputGroup" >
        <label className="capitalize" htmlFor="email">
          {props.label}
        </label>
        <select
           className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${props.inputStyle =="error" ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
           disabled={props.disabled}
           onChange={props.handleChange}
           onBlur={props.handleBlur}
           value={props.value}
           name={props.name}
          
        >
             <option disabled selected>Select Category</option>
           {options.map((optionValue)=>{
            return(
                <option value={props.optionValue}>{optionValue.text}</option>
            )
           })}
        </select>
      </div>
    );
  }
  