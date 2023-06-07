import LayoutPage from "../Layout/LayoutPage";

export default function Circular () {
    return (
        <LayoutPage>
<div className="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-80 w-full object-cover md:h-full md:w-48" src="https://images.pexels.com/photos/3316924/pexels-photo-3316924.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Modern building architecture"/>
    </div>
    <div className="p-8">
      <div className="capitalize tracking-wide text-xl text-indigo-500 ">Latest Circulars</div>
      <hr />
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>
        </LayoutPage>
    );
}