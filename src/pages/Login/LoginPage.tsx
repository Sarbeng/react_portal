import TextInput from "../../components/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import UccLogo from "../../assets/UccLogo";
import { BsGoogle } from "react-icons/bs";
import { PasswordInput } from "../../components/PasswordInput";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate('/home')
    },
  });


  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen md:bg-slate-100 text-primary-main">
        <div className="p-4 md:p-16 bg-white w-full md:w-[524px] rounded-lg">
          <form onSubmit={formik.handleSubmit}>
            {/* the logo section of the form goes here */}
            <UccLogo />
            {/* end of logo section */}
            <div className="mb-2">
              <TextInput
                inputStyle={
                  formik.touched.email && formik.errors.email
                    ? "error"
                    : "default"
                }
                label="Email"
                name="email"
                type="email"
                handleBlur={formik.handleBlur}
                value={formik.values.email}
                handleChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
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
              <Button buttonStyle="bg-primary-main w-full text-white">
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
            <Button buttonStyle="bg-red-700 w-full text-white ">
              <BsGoogle />
              <a href="https://www.google.com">Sign In with Google </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
