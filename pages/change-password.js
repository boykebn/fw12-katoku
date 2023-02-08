import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  ArrowUp,
  Plus,
  User,
  LogOut,
  Eye,
  Lock,
  EyeOff,
} from "react-feather";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

import { logout } from "../redux/reducer/auth";
import ModalTopUp from "../omponents/ModalTopUp";
import Navbar from "../Components/Navbar";
import withAuth from "../components/hoc/withAuth";
import Footer from "../components/Footer";


const Change_Password = () => {
  const [type, setType] = useState("password");
  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const token = useSelector((state) => state.auth.token);

  const [currentPassword, setCurrentPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const changePassword = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/profile/change-password`,
      { currentPassword, newPassword, confirmPassword },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
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
                className="px-6 flex mb-16 border-l-4 focus:outline-none focus:border-[#9ED5C5] peer border-[#9ED5C5]"
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
              Change Password
            </div>
          </div>
          <div className="text-[#7A7886] text-sm mb-8 w-1/2">
            You must enter your current password and then type your new password
            twice.
          </div>
          <div className="flex justify-center">
            <form className="w-3/4 flex flex-col justify-center gap-12">
              <div className="relative">
                <input
                  name="currentPassword"
                  type={type}
                  className="py-3 px-12  w-full border-b-2 focus:outline-none focus:border-[#9ED5C5] peer"
                  placeholder="Current password"
                  onChange={(e) => setCurrentPassword(e.target.value)}
                ></input>
                <Lock className="absolute top-[23%] peer-focus:text-[#9ED5C5] text-[#A9A9A999]" />
                {type === "password" ? (
                  <EyeOff
                    className="absolute right-0 top-[23%] r cursor-pointer peer-focus:text-[#9ED5C5] text-[#A9A9A999]"
                    onClick={showPassword}
                  />
                ) : (
                  <Eye
                    className="absolute right-0 top-[23%] r cursor-pointer peer-focus:text-[#9ED5C5] text-[#A9A9A999]"
                    onClick={showPassword}
                  />
                )}
              </div>
              <div className="relative">
                <input
                  name="newPassword"
                  type={type}
                  className="py-3 px-12  w-full border-b-2 focus:outline-none focus:border-[#9ED5C5] peer"
                  placeholder="New password"
                  onChange={(e) => setNewPassword(e.target.value)}
                ></input>
                <Lock className="absolute top-[23%] peer-focus:text-[#9ED5C5] text-[#A9A9A999]" />
                {type === "password" ? (
                  <EyeOff
                    className="absolute right-0 top-[23%] r cursor-pointer peer-focus:text-[#9ED5C5] text-[#A9A9A999]"
                    onClick={showPassword}
                  />
                ) : (
                  <Eye
                    className="absolute right-0 top-[23%] r cursor-pointer peer-focus:text-[#9ED5C5] text-[#A9A9A999]"
                    onClick={showPassword}
                  />
                )}
              </div>

              <div className="relative">
                <input
                  name="confirmPassword"
                  type={type}
                  className="py-3 px-12  w-full border-b-2 focus:outline-none focus:border-[#9ED5C5] peer"
                  placeholder="Repeat new password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
                <Lock className="absolute top-[23%] peer-focus:text-[#9ED5C5] text-[#A9A9A999]" />
                {type === "password" ? (
                  <EyeOff
                    className="absolute right-0 top-[23%] r cursor-pointer peer-focus:text-[#9ED5C5] text-[#A9A9A999]"
                    onClick={showPassword}
                  />
                ) : (
                  <Eye
                    className="absolute right-0 top-[23%] r cursor-pointer peer-focus:text-[#9ED5C5] text-[#A9A9A999]"
                    onClick={showPassword}
                  />
                )}
              </div>
              <button
                onClick={changePassword}
                className="w-full bg-[#9ED5C5] rounded-md py-3 text-lg font-bold text-white shadow-lg"
              >
                Change Password
              </button>
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

export default withAuth(Change_Password);
