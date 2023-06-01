import TextInput from "../../components/TextInput";

export default function LoginPage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen md:bg-slate-100">
        <div className="p-4 md:p-16 bg-white w-full md:w-1/3">
          <form>
            <TextInput label="Email" name="email" type="email" />
          </form>
        </div>
      </div>
    </>
  );
}
