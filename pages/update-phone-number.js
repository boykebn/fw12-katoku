import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  ArrowUp,
  Plus,
  User,
  LogOut,
  Phone,
} from "react-feather";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

import { logout } from "../redux/reducer/auth";
import ModalTopUp from "../components/ModalTopUp";
import Navbar from "../components/Navbar";
import withAuth from "../components/hoc/withAuth";
import Footer from "../components/Footer";

const updatePhoneNumber = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  //add phone number
  const token = useSelector((state) => state.auth.token);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState(null);
  const addPhoneNumber = async (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      setError("Please fill phone number");
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setLoading("Loading...");
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/profile/phone-number`,
        { phoneNumber },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      setSuccess("Phone number updated");
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

   // for top up handle
    const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <section className="bg-[#FAFCFF] px-16 py-8 flex">
        <div className="w-1/4 bg-white flex justify-between h-screen flex-col py-9 rounded-3xl mr-4">
          <div>
            <Link href="/home" className="flex w-full">
              <div className="px-6 flex mb-16">
                <Grid className="mr-6" />
                <div className="text-lg font-bold text-[#3A3D42CC]">
                  Dashboard
                </div>
              </div>
            </Link>
            <div>
              <Link href="/transfer-search-receiver" className="px-6 flex mb-16">
                <ArrowUp className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">
                  Transfer
                </div>
              </Link>
            </div>
            <div>
              <div className="px-6 flex mb-16">
                <Plus className="mr-6" />
                <button onClick={() => setShowModal(true)} className="text-lg font-bold	text-[#3A3D42CC]">Top Up</button>
              </div>
            </div>
            <div>
              <Link
                href="/profile"
                className="px-6 flex mb-16 border-l-4 focus:outline-none border-[#9ED5C5]"
              >
                <User className="mr-6" style={{ color: "#9ED5C5" }} />
                <div className="text-lg font-bold text-[#9ED5C5]">Profile</div>
              </Link>
            </div>
          </div>
          <div>
            <button onClick={handleLogout} className="flex px-6">
              <LogOut className="mr-6" />
              <div className="text-lg font-bold	text-[#3A3D42CC]">Logout</div>
            </button>
          </div>
        </div>
        <div className="w-3/4 bg-white h-screen rounded-3xl p-6 overflow-y-scroll">
          <div className="flex items-center mb-5">
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Edit Phone Number
            </div>
          </div>
          <div className="text-[#7A7886] text-sm mb-8 w-1/2">
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </div>
          <div className="flex justify-center">
            <form className="w-1/2 flex flex-col justify-center gap-12">
              <div className="flex relative border-b-2 border-[#A9A9A999] py-3 pl-8 focus:outline-none">
                <Phone className="absolute left-[0] peer-focus:text-[#9ED5C5] text-[#A9A9A999]" />
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  className="focus:outline-none text-[#3A3D42] font-semibold text-base focus:border-[#9ED5C5] peer"
                  name="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
              </div>
              <button
                onClick={addPhoneNumber}
                className="w-full btn bg-[#9ED5C5] rounded-xl text-lg font-bold text-white"
              >
                Edit Phone Number
              </button>
              {error && (
                <div className="text-lg font-bold text-center text-red-400">
                  {error}
                </div>
              )}
              {loading && (
                <div className="text-lg font-bold text-center text-blue-400">
                  {loading}
                </div>
              )}
              {success && (
                <div className="text-lg font-bold text-center text-green-400">
                  {success}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
      <ModalTopUp isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default withAuth(updatePhoneNumber);
