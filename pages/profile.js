/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  ArrowUp,
  Plus,
  User,
  LogOut,
  ArrowRight,
  Edit2,
} from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { logout } from "../redux/reducer/auth";
import user from "../assets/images/dummyAvatar.jpg";
import Navbar from "../components/navbar";
import withAuth from "../components/hoc/withAuth";
import ModalTopUp from "../components/modalTopUp";
import http from "../helpers/http";
import Footer from "../components/footer";

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  //get profile
  const [profile, setProfile] = useState({});
  const token = useSelector((state) => state.auth.token);
  const decode = jwt_decode(token);

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

  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorLimit, setErrorLimit] = useState(false);
  const uploadPicture = async (e) => {
    e.preventDefault();
    setLoading("Loading...");
    const file = e.target.picture.files[0];
    console.log(file);
    try {
      if (file.size <= 20000) {
        const formData = new FormData();
        formData.append("picture", file);
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_URL}/profile`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLoading(false);
        setSuccess("Update Photo Success");
        setTimeout(() => {
          setSuccess(false);
          fetchProfile();
        }, 3000);
      } else {
        setLoading(false);
        setErrorLimit("Please upload file less than 2 MB");
        setTimeout(() => {
          setErrorLimit(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
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
              <Link href="/transfer-search-receiver-receiver" className="px-6 flex mb-16">
                <ArrowUp className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">
                  Transfer
                </div>
              </Link>
            </div>
            <div>
              <div className="px-6 flex mb-16 hover:border-l-4 hover:border-[#9ED5C5] hover:text-[#9ED5C5] focus:text-[#9ED5C5]">
                <Plus className="mr-6 "/>
                <button onClick={() => setShowModal(true)} className="text-lg font-bold	">Top Up</button>
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
        <div className="w-3/4 bg-white h-screen rounded-3xl py-10">
          <div className="flex flex-col items-center">
            {profile?.picture ? (
              <Image
                className="w-[100px] h-[100px] rounded-lg"
                width={50}
                height={50}
                src={
                  `${process.env.NEXT_PUBLIC_URL}/upload/` + profile?.picture
                }
                alt="profile"
              />
            ) : (
              <Image
                className="w-[100px] h-[100px] rounded-lg"
                src={user}
                alt="profile"
              />
            )}
            <form
              onSubmit={uploadPicture}
              encType="multipart/form-data"
              className="flex flex-col"
            >
              <input
                type="file"
                name="picture"
                onChange={() => setDisabled(false)}
                accept="image/png, image/jpeg, image/jpg"
              ></input>
              <button
                disabled={disabled}
                type="submit"
                className="relative mt-3 mb-5 btn bg-[#9ED5C5]"
              >
                <Edit2 className="absolute w-6 text-white top-2.5 left-12" />
                <div className="text-white text-base">Upload Image</div>
              </button>
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
              {errorLimit && (
                <div className="text-lg font-bold text-center text-red-400">
                  {errorLimit}
                </div>
              )}
            </form>
            <div className="text-[#4D4B57] font-bold">
              {profile?.firstName} {profile?.lastName}
            </div>
            {profile?.phoneNumber ? (
              <div className="text-[#7A7886] text-base mt-3 mb-10">
                {profile?.phoneNumber}
              </div>
            ) : (
              <Link href="/edit-phoneNumber" className="mt-3 mb-10">
                Add Phone Number
              </Link>
            )}
            <Link
              href="/personal-info"
              className="bg-[#E5E8ED] hover:bg-[#9ED5C5] rounded-lg flex items-center justify-center w-1/2 px-5 py-3 mb-5"
            >
              <div className="text-[#4D4B57] font-bold flex-1">
                Personal Information
              </div>
              <ArrowRight style={{ color: "#7E7D84" }} />
            </Link>
            <Link
              href="/change-password"
              className="bg-[#E5E8ED] hover:bg-[#9ED5C5] rounded-lg flex items-center justify-center w-1/2 px-5 py-3 mb-5"
            >
              <div className="text-[#4D4B57] font-bold flex-1">
                Change Password
              </div>
              <ArrowRight style={{ color: "#7E7D84" }} />
            </Link>
            <Link
              href="/change-pin"
              className="bg-[#E5E8ED] hover:bg-[#9ED5C5] rounded-lg flex items-center justify-center w-1/2 px-5 py-3 mb-5"
            >
              <div className="text-[#4D4B57] font-bold flex-1">Change PIN</div>
              <ArrowRight style={{ color: "#7E7D84" }} />
            </Link>
            <div className="bg-[#E5E8ED] hover:bg-[#9ED5C5] rounded-lg flex items-center justify-center w-1/2 px-5 py-3 mb-5">
              <div className="text-[#4D4B57] font-bold flex-1">Logout</div>
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

export default withAuth(Profile);
