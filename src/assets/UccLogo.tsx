import ucc_logo from "./ucc_logo.svg"

export default function UccLogo () {
    return (
          
           <div className="flex justify-center items-center gap-3 mb-20 ">
           <div className="bg-primary-main/[0.05] h-16 w-16 rounded-full ">
           <img src={ucc_logo} alt="" className="  p-3.5 "  />
           </div>
           <h2 className="text-2xl">Ucc Staff Portal</h2>
         </div>
        
    );
}