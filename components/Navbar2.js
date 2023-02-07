import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar2 = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <nav className="flex bg-white px-16 py-8">
        <div className="font-bold	text-3xl flex-1 text-[#9ED5C5]">KantongKu</div>
        <div className="flex-row">
          <Link
            href="/login"
            className="btn font-bold text-lg px-4 py-3 border-2 bg-white border-[#9ED5C5] text-[#9ED5C5] rounded-lg"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="btn font-bold text-lg px-4 py-3 bg-[#9ED5C5] border-[#9ED5C5] text-white rounded-lg ml-5"
          >
            Sign Up
          </Link>
        </div>
      </nav>
  )
}

export default Navbar2;