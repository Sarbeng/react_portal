import TextInput from "../../components/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import UccLogo from "../../assets/UccLogo";
import { BsGoogle } from "react-icons/bs";
import { PasswordInput } from "../../components/PasswordInput";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

export default function LoginPage() {
 // const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null)
  
  const navigate = useNavigate();

  const onSubmit = async (values:any) =>{
    setError(null);
    // const response = await axios.post('http://127.0.0.1:8000/api/auth/login', values).catch((err) => {
    //   if (err && err.response){
    //     setError(err.response.data.message)
    //     //
    //   }
    // } );
    // if (response) {
    //   alert(`Welcome back in. Authenticating.... `);
    // }
    // console.log(values)

    axios.post('http://127.0.0.1:8000/api/auth/login',values).catch((err)=> {
      if (err.data.message){
        setError(err.response.data.message)
      }
    })
  } 
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username field cannot be empty"),
      password: Yup.string().required("Password field cannot be empty"),
    }),
    validateOnBlur:true,
    onSubmit,
  });


  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen md:bg-slate-100 text-primary-main">
        <div className="p-4 md:p-16 bg-white w-full md:w-[524px] rounded-lg">
          <div className="text-black">{error? error : null }</div>
          <form onSubmit={formik.handleSubmit}>
            {/* the logo section of the form goes here */}
            <UccLogo />
            {/* end of logo section */}
            <div className="mb-2">
              <TextInput
                inputStyle={
                  formik.touched.username && formik.errors.username
                    ? "error"
                    : "default"
                }
                label="Username"
                name="username"
                type="username"
                handleBlur={formik.handleBlur}
                value={formik.values.username}
                handleChange={formik.handleChange}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-600">{formik.errors.username}</div>
              ) : null}
            </div>
            <div className="">
              <PasswordInput
                inputStyle={
                  formik.touched.password && formik.errors.password
                    ? "error"
                    : "default"
                }
                label="Password"
                name="password"
                type="password"
                handleBlur={formik.handleBlur}
                value={formik.values.password}
                handleChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600">{formik.errors.password}</div>
              ) : null}
            </div>
            <div>
              <Button buttonStyle="bg-primary-main w-full text-white" disabled={!formik.isValid} type="submit">
                Sign In
              </Button>
            </div>
          </form>
          {/* the divider goes here */}
          <div className="flex justify-center items-center gap-3 mt-4 mb-4">
            <hr className="h-0.5 bg-primary-border w-full" />
            <p>or</p>
            <hr className="h-0.5 bg-primary-border w-full" />
          </div>

          {/* the google signin button lies here, it is to redirect the user to google to signIn to the page */}

          <div id="googleSignIn">
            <Button buttonStyle="bg-red-700 w-full text-white " >
              <BsGoogle />
              <a href="https://www.google.com">Sign In with Google </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
