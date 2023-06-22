
export default function Button (props:any) {
    return <>
    <div>
              <button
                className={`items-center justify-center gap-3  flex rounded-lg px-4 py-2 h-12 mt-8 ${props?.buttonStyle}`}
                onClick={props?.onClick}
                disabled={props?.disabled}
                type={props?.type}

              >
                {props.children}
              </button>
            </div>
    </>
}