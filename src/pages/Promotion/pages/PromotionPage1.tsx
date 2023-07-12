import { MdOutlineClose, MdOutlineDelete, MdOutlineEdit, MdOutlineVisibility } from "react-icons/md";
import LayoutPage from "../../Layout/LayoutPage";
import SelectInput from "../../../components/SelectInput";
import TextInput from "../../../components/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom"

interface Props {
    showModal?: boolean;
    handleModal?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function PromotionPage1(props: Props) {
    const handleOnclick = () => {
        const navigate = useNavigate()
    }
    const formik = useFormik({
        initialValues: {
            aspiring_rank:"",
            department:"",
            directorate:"",
            email:"",
            phone:"",
            present_position:"",
            effective_date:""
        },
        validationSchema: Yup.object({
            aspiring_rank: Yup.string().required("Position must be selected"),
            department: Yup.string().required("Department should not be empty"),
            directorate: Yup.string().required("Directorate cannot be empty"),
            email:Yup.string().required(),
            phone:Yup.number().required().min(10),
            present_position:Yup.string().required(),
            effective_date:Yup.date().required()
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <LayoutPage>
            <div className="flex flex-col gap-8 pb-8">
                <section className="shadow bg-white px-4 md:p-8 ">
                    <section id="heading" className="flex items-center justify-center mb-8">
                        <div className="w-full md:w-fit  bg-primary-surface py-4  px-3 rounded-lg flex justify-center items-center gap-3">

                            <div className="flex gap-2 items-center">
                                <p className="text-primary-main capitalize">Application for Procurement</p>
                                <hr className="inline-block h-full min-h-[1.5em] w-0.5  bg-neutral-300 opacity-100 dark:opacity-50" />
                                <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">Page 1 of 6</p>
                            </div>

                        </div>
                    </section>
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
                            <div>
                            <TextInput
                             inputStyle={formik.touched.department && formik.errors.department ? ("error") : "default"}
                             name="department"
                             type="text"
                             label="Department"
                             handleBlur={formik.handleBlur}
                             handleChange={formik.handleChange}
                             value={formik.values.department}/>
                             {formik.touched.department && formik.errors.department ? (
                        <div className="text-red-600">{formik.errors.department}</div>
                      ) : null}
                            </div>
                            <div>
                            <TextInput 
                             inputStyle={formik.touched.directorate && formik.errors.directorate ? ("error") : "default"}
                            label="College/ Directorate" 
                            name="directorate"
                            type="text"
                            handleBlur={formik.handleBlur}
                            handleChange={formik.handleChange}
                            value={formik.values.directorate}
                            />
                             {formik.touched.directorate && formik.errors.directorate ? (
                        <div className="text-red-600">{formik.errors.directorate}</div>
                      ) : null}
                            </div>

                            <div className="flex gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        E-mail Address
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.email && formik.errors.email ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="email"
                                        type="email"
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}

                                    />
                                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-600">{formik.errors.email}</div>
                      ) : null}
                                </div>
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Telephone
                                    </label>
                                    <input
                                        className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${formik.touched.phone && formik.errors.phone? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}
                                        name="phone"
                                        type="number"
                                        value={formik.values.phone}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}


                                    />
                                    {formik.touched.phone && formik.errors.phone ? (
                        <div className="text-red-600">{formik.errors.phone}</div>
                      ) : null}
                                </div>
                            </div>

                            <div className="flex gap-4 w-full">
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Present Position held (If any)
                                    </label>
                                    <input
                                        className={`mt-2 mb-2 h-12 border w-full border-primary-border rounded-lg py-2 px-3 text-primary-main focus:outline-none  focus:border-primary-focused focus:ring-1 shadow-sm focus:ring-primary-focused  bg-white`}


                                    />
                                </div>
                                <div id="inputGroup" className="flex flex-col w-1/2" >
                                    <label className="capitalize" htmlFor="email">
                                        Effective Date
                                    </label>
                                    <input
                                        className={`mt-2 mb-2 h-12 border w-full border-primary-border rounded-lg py-2 px-3 text-primary-main focus:outline-none  focus:border-primary-focused focus:ring-1 shadow-sm focus:ring-primary-focused  bg-white`}


                                    />
                                </div>
                            </div>

                        </section>
                        <section id="buttonSection" className="flex items-end justify-end">
                            <Button buttonStyle="bg-primary-main text-white">Save & Continue</Button>
                        </section>
                    </form>
                </section>
            </div>
        </LayoutPage>
    );
}