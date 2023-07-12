import { MdOutlineClose, MdOutlineDelete, MdOutlineEdit, MdOutlineVisibility } from "react-icons/md";
import LayoutPage from "../../Layout/LayoutPage";
import SelectInput from "../../../components/SelectInput";
import TextInput from "../../../components/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";

interface Props {
    showModal?: boolean;
    handleModal?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function PromotionPage1(props: Props) {
    const formik = useFormik({
        initialValues: {
            quantity: "",
            unit_price: "",
        },
        validationSchema: Yup.object({
            quantity: Yup.number().required("Expected days Taken cannot be empty").min(0).positive(),
            unit_price: Yup.number().required("The unit price cannot be empty").min(1).positive("Unit Price must be 1 or more"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <LayoutPage>
            <section className="shadow bg-white px-4 md:p-8 rounded-lg">
                <section id="heading" className="flex items-center justify-center mb-8">
                    <div className="w-full md:w-fit  bg-primary-surface py-4  px-3 rounded-lg flex justify-center items-center gap-3">

                        <div className="flex gap-2 items-center">
                            <p className="text-primary-main capitalize">Application for Procurement</p>
                            <hr className="inline-block h-full min-h-[1.5em] w-0.5  bg-neutral-300 opacity-100 dark:opacity-50" />
                            <p className="bg-primary-main text-white  text-sm py-2 px-8 rounded-full">Page 1 of 6</p>
                        </div>

                    </div>
                </section>
                <section id="inputs" className="flex flex-col gap-4">
                    <div id="inputGroup">
                        <label className="capitalize" htmlFor="email">
                            Promotion to the rank of
                        </label>
                        <select className={` mt-2 mb-2 h-12 border text-sm border-primary-border rounded-lg w-full py-2 px-3 text-primary-main ${props.inputStyle == "error" ? "border-red-500 focus-within:outline-none  focus-within:border-red-500 focus-within:ring-1 shadow-sm focus-within:ring-red-500" : "border-primary-border focus-within:outline-none  focus-within:border-primary-focused focus-within:ring-1 shadow-sm focus-within:ring-primary-focused"}  bg-white`}>
                            <option disabled selected>Select Rank</option>
                            <option value="">Administrator</option>
                        </select>
                    </div>
                    <TextInput label="Department" />
                    <TextInput label="College/ Directorate" />

                    <div className="flex gap-4 w-full">
                        <div id="inputGroup" className="flex flex-col w-1/2" >
                            <label className="capitalize" htmlFor="email">
                            E-mail Address
                            </label>
                            <input
                                className={`mt-2 mb-2 h-12 border w-full border-primary-border rounded-lg py-2 px-3 text-primary-main focus:outline-none  focus:border-primary-focused focus:ring-1 shadow-sm focus:ring-primary-focused  bg-white`}


                            />
                        </div>
                        <div id="inputGroup" className="flex flex-col w-1/2" >
                            <label className="capitalize" htmlFor="email">
                            Telephone
                            </label>
                            <input
                                className={`mt-2 mb-2 h-12 border w-full border-primary-border rounded-lg py-2 px-3 text-primary-main focus:outline-none  focus:border-primary-focused focus:ring-1 shadow-sm focus:ring-primary-focused  bg-white`}


                            />
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
            </section>
        </LayoutPage>
    );
}