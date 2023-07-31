
import LayoutPage from "../../Layout/LayoutPage";

import TextInput from "../../../components/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import FormHeading from "../../../components/FormHeading";


export default function AppraisalFormBPage4() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            relates_well: "",
            establishes_rapport: "",
            practices_active_listening: "",
            uses_diplomacy: "",
        },
        validationSchema: Yup.object({
            relates_well: Yup.string().required("This field cannot be empty"),
            establishes_rapport: Yup.string().required("This  field cannot be empty"),
            practices_active_listening: Yup.string().required("This  field cannot be empty"),
            uses_diplomacy: Yup.string().required("This  field cannot be empty"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/hod_appraisalPage5')

        }
    })
    return (
        <LayoutPage>
             <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 py-4 md:p-8 ">
                    <FormHeading formName="Appraisal Form B" pageNumber="Page 4 of 13" pageHeader="Interpersonal Communication"/>
                    <form onSubmit={formik.handleSubmit}>
                    
                        <section id="inputs" className="flex flex-col gap-4">

                           
                        <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Relates well to all people – up, down, and across – internally and externally to the School/Department
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.aspiring_rank && formik.errors.aspiring_rank ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="aspiring_rank"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.aspiring_rank}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.aspiring_rank && formik.errors.aspiring_rank ? (
                        <div className="text-red-600">{formik.errors.aspiring_rank}</div>
                      ) : null}
                            </div>
                            <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Establishes rapport; builds and maintains effective working relationships
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.aspiring_rank && formik.errors.aspiring_rank ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="aspiring_rank"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.aspiring_rank}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.aspiring_rank && formik.errors.aspiring_rank ? (
                        <div className="text-red-600">{formik.errors.aspiring_rank}</div>
                      ) : null}
                            </div> <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Practices attentive and active listening
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.aspiring_rank && formik.errors.aspiring_rank ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="aspiring_rank"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.aspiring_rank}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.aspiring_rank && formik.errors.aspiring_rank ? (
                        <div className="text-red-600">{formik.errors.aspiring_rank}</div>
                      ) : null}
                            </div>
                             <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                Uses diplomacy and tact; can diffuse high-tension situations comfortably
                                </label>
                                <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.aspiring_rank && formik.errors.aspiring_rank ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`} 
                                name="aspiring_rank"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.aspiring_rank}>
                                    <option selected disabled>Select Rank</option>
                                    <option>Administrator</option>
                                    <option>Administrator 2</option>
                                </select>
                                {formik.touched.aspiring_rank && formik.errors.aspiring_rank ? (
                        <div className="text-red-600">{formik.errors.aspiring_rank}</div>
                      ) : null}
                            </div>
                            
                            
                           
                            
                        </section>
                        <section id="buttonSection" className="flex w-full gap-4 items-end justify-end">
                        <div className="w-1/2">
                        {/* <Button buttonStyle="bg-white border border-primary-border shadow text-primary-main w-full" ><MdOutlineChevronLeft/> Back</Button> */}
                        </div>
                        <div className="w-1/2 ">
                        <Button buttonStyle="bg-primary-main text-white w-full">Save & Continue <MdOutlineChevronRight/></Button>
                           
                        </div>
                        
                        </section>
                    </form>
                </section>
            </div>
        </LayoutPage>
    );
}