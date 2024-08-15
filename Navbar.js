import logo from "../public/logo.png";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex items-center px-4 w-screen h-20 top-0 sticky text-white bg-black bg-opacity-50 mb-5">
      <div className="flex items-center gap-6 ">
        <h1 className="font-semibold text-3xl">Travizz</h1>
        <div className="mt-1 text-2xl flex gap-6 ">
          <a href="/" className="hover:scale-110 transition-transform">
            {" "}
            Home{" "}
          </a>
          <a href="/Suggested" className="hover:scale-110 transition-transform">
            Suggested
          </a>
          <a href="/InSight" className="hover:scale-110 transition-transform">
            More
          </a>
        </div>
      </div>
      <div className="flex flex-col w-32 h-20 ml-[60rem] bg-[url('../public/logo.png')] bg-cover "></div>
    </div>
  );
}
