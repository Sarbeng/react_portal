interface Props {
  name?: string;
  type?: string;
  label?: string;
  value?: string;
  ref?: string;
  inputStyle?:string
  handleChange: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
}

export default function TextInput(props: Props) {
  
  // style for the default state
  const defaultStyle = "mt-2 mb-2 h-12 border border-primary-border rounded-lg w-full py-2 px-3 text-primary-main focus:outline-none  focus:border-primary-focused focus:ring-1 shadow-sm focus:ring-primary-focused  bg-white";

  //styling for the error state
  const errortStyle = "mt-2 mb-2 h-12 border border-red-600 rounded-lg w-full py-2 px-3 text-primary-main focus:outline-none  focus:border-red-500 focus:ring-1 shadow-sm focus:ring-red-500 ";
  //styling for the success state
  const successtStyle = "mt-2 mb-2 h-12 border border-green-600 rounded-lg w-full py-2 px-3 text-primary-main focus:outline-none  focus:border-green-500 focus:ring-1 shadow-sm focus:ring-green-500 ";

 
  return (
    <div id="inputGroup" >
      <label className="" htmlFor="email">
        {props.label}
      </label>
      <input
        className={props.inputStyle =="error" ? errortStyle : defaultStyle}
        name={props.name}
        type={props.type}
        value={props.value}
        ref={props.ref}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        
      />
    </div>
  );
}
