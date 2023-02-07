import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  ArrowUp,
  Plus,
  User,
  LogOut,
} from "react-feather";
import Link from "next/link";
import { useRouter } from "next/router";

import { logout } from "../redux/reducer/auth";
import http from "../helpers/http";
import ModalTopUp from "../components/ModalTopUp";
import withAuth from "../components/hoc/withAuth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Personal_Info = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  const [profile, setProfile] = useState({});
  const token = useSelector((state) => state.auth.token);

  const fetchProfile = async () => {
    try {
      const response = await http().get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response.data.results);
    } catch (error) {
      if (error) throw error;
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

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
              Personal Information
            </div>
          </div>
          <div className="text-[#7A7886] text-sm mb-8 w-1/2">
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </div>
          <div className="flex mb-5 shadow-md p-3">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center">
                <div className=" text-[#7A7886] text-sm mb-3">First Name</div>
                <div className="text-[#4D4B57] text-xl font-bold">
                  {profile?.firstName}
                </div>
              </div>
            </div>
          </div>
          <div className="flex mb-5 shadow-md p-3">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center">
                <div className=" text-[#7A7886] text-sm mb-3">Last Name</div>
                <div className="text-[#4D4B57] text-xl font-bold">
                  {profile?.lastName}
                </div>
              </div>
            </div>
          </div>
          <div className="flex mb-5 shadow-md p-3">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center">
                <div className=" text-[#7A7886] text-sm mb-3">
                  Verified E-mail
                </div>
                <div className="text-[#7A7886] text-xl font-bold">
                  {profile?.email}
                </div>
              </div>
            </div>
          </div>
          <div className="flex mb-5 shadow-md p-3">
            <div className="flex gap-3 justify-between w-full items-center">
              <div className="flex flex-col justify-center">
                <div className=" text-[#7A7886] text-sm mb-3">Phone Number</div>
                {profile?.phoneNumber ? (
                  <div className="text-[#4D4B57] text-xl font-bold">
                    {profile?.phoneNumber}
                  </div>
                ) : (
                  <div className="text-[#4D4B57] text-xl font-bold">
                    Not registered
                  </div>
                )}
              </div>
              <Link href="/update-phone-number" className="font-semibold text-[#9ED5C5]">
                Manage
              </Link>
            </div>
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

export default withAuth(Personal_Info);
