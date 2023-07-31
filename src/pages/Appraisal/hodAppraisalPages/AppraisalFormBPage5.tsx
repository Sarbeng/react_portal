
import LayoutPage from "../../Layout/LayoutPage";

import TextInput from "../../../components/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";


export default function AppraisalFormBPage5() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            staff_no: "",
            email: "",
            phone: "",
            apointment_date:"",
            job_title:"",
            supervisors_name:"",
            supervisors_staff_no:"",
            supervisors_rank: "",
            year_under_review: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name field cannot be empty"),
            staff_no: Yup.string().required("Staff number field cannot be empty"),
            email: Yup.string().email().required(),
            phone: Yup.number().required(""),
            apointment_date: Yup.date().required("Date field cannot be empty"),
            job_title: Yup.string().required("Job title field cannot be empty"),
            supervisors_name: Yup.string().required("Supervisor's rank field cannot be empty"),
            supervisors_staff_no: Yup.string().required("Supervisors staff number field cannot be empty"),
            supervisors_rank: Yup.string().required("Supervisors rank field cannot be empty"),
            year_under_review: Yup.string().required("Year Under Review field cannot be blank")
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            navigate('/appraisalPage2')

        }
    })
    return (
        <LayoutPage>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 py-4 md:p-8 ">
                    <FormHeading formName="Appraisal Form B" pageNumber="Page 2 of 13" pageHeader="Job Knowledge/Functional and Technical Skills"/>
                    <form onSubmit={formik.handleSubmit}>
                    
                        <section id="inputs" className="flex flex-col gap-4">

                           
                        <div id="inputGroup">
                                <label className="capitalize" htmlFor="email">
                                    Promotion to the rank of
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
                                    Promotion to the rank of
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
                                    Promotion to the rank of
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