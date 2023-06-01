import TextInput from "../../components/TextInput";
import {useFormik} from "formik";
import * as Yup from "yup";

const handleClick = (event:any ) => {
    event.preventDefault();
    console.log("clicked")
}

export default function LoginPage() {
    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().required()
        }),
        onSubmit: values => {
          alert(JSON.stringify(values,null,2))
        }
    })
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen md:bg-slate-100">
        <div className="p-4 md:p-16 bg-white w-full md:w-1/3">
          <form onSubmit={formik.handleSubmit}>
           <div className="mb-6">
           <TextInput label="Email" name="email" type="email" handleBlur={formik.handleBlur} value={formik.values.email} handleChange={formik.handleChange}/>
            {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
            
           </div>
           <div className="mb-6">
           <TextInput label="Password" name="password" type="password" handleBlur={formik.handleBlur} value={formik.values.password} handleChange={formik.handleChange}/>
            {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
            
           </div>
            <div>
                <button className="bg-primary-main w-full text-white rounded-lg px-4 py-2 h-12 mt-8" type="submit">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
