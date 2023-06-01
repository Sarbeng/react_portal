
interface Props{
  name?: string
  type?: string
  label?:string
  value?:string
  ref?:string
}

export default function TextInput  (props:Props) {
    return (
        
            <div id="inputGroup">
              <label className="" htmlFor="email">
                {props.label}
              </label>
              <input
                className="mt-1  h-12 border border-primary-border rounded-lg w-full py-2 px-3 text-primary-main focus:outline-none  focus:border-primary-focused focus:ring-1 shadow-sm focus:ring-primary-focused "
                name={props.name}
                type={props.type}
                value={props.value}
                ref={props.ref}
              />
            </div>
       
    );
}