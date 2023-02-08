import React, { useState } from "react";
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
import axios from "axios";

import { logout } from "../redux/reducer/auth";
import ModalTopUp from "../components/ModalTopUp";
import Navbar from "../components/Navbar";
import withAuth from "../components/hoc/withAuth";
import Footer from "../Components/Footer";

const Change_Pin = () => {
  const [newPin, setNewPin] = useState([]);
  console.log(newPin);
  const input1 = React.useRef(null);
  const input2 = React.useRef(null);
  const input3 = React.useRef(null);
  const input4 = React.useRef(null);
  const input5 = React.useRef(null);
  const input6 = React.useRef(null);
  const handleOnChange = (e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(0, 1);
    }
    const pinInput = {
      1: input1,
      2: input2,
      3: input3,
      4: input4,
      5: input5,
      6: input6,
    };
    const currentInput = Number(e.target.name);
    if (e.target.value.length) {
      pinInput[currentInput + 1]?.current?.focus();
    } else {
      pinInput[currentInput - 1]?.current?.focus();
      if (currentInput < 6) {
        for (let i = currentInput; i <= 6; i++) {
          pinInput[i].current.value = "";
        }
      }
    }
    let pin = "";
    for (let i = 1; i <= 6; i++) {
      pin += pinInput[i].current.value;
      setNewPin(pin);
    }
  };
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  const token = useSelector((state) => state.auth.token);

  console.log(newPin);
  const changeNewPin = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/profile/change-pin`,
      { newPin },
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
              Change PIN
            </div>
          </div>
          <div className="text-[#7A7886] text-sm mb-8 w-1/2">
            Enter your current 6 digits KantongKu PIN below to continue to the next
            steps.
          </div>
          <div className="flex justify-center">
            <form className="w-1/2 flex flex-col justify-center gap-12">
              <div className="flex text-center w-full mb-10">
                <div className="flex-1 ">
                  <input
                    ref={input1}
                    type="number"
                    onChange={handleOnChange}
                    name="1"
                    className="w-10 h-10 shadow-lg text-center rounded-md text-lg font-bold border-2 border-[#A9A9A999]"
                  ></input>
                </div>
                <div className="flex-1 ">
                  <input
                    ref={input2}
                    type="number"
                    onChange={handleOnChange}
                    name="2"
                    className="w-10 h-10 shadow-lg text-center rounded-md text-lg font-bold border-2 border-[#A9A9A999]	"
                  ></input>
                </div>
                <div className="flex-1 ">
                  <input
                    ref={input3}
                    type="number"
                    onChange={handleOnChange}
                    name="3"
                    className="w-10 h-10 shadow-lg text-center rounded-md text-lg font-bold border-2 border-[#A9A9A999]	"
                  ></input>
                </div>
                <div className="flex-1 ">
                  <input
                    ref={input4}
                    type="number"
                    onChange={handleOnChange}
                    name="4"
                    className="w-10 h-10 shadow-lg text-center rounded-md text-lg font-bold border-2 border-[#A9A9A999]"
                  ></input>
                </div>
                <div className="flex-1 ">
                  <input
                    ref={input5}
                    type="number"
                    onChange={handleOnChange}
                    name="5"
                    className="w-10 h-10 shadow-lg text-center rounded-md text-lg font-bold border-2 border-[#A9A9A999]	"
                  ></input>
                </div>
                <div className="flex-1 ">
                  <input
                    ref={input6}
                    type="number"
                    onChange={handleOnChange}
                    name="6"
                    className="w-10 h-10 shadow-lg text-center rounded-md text-lg font-bold border-2 border-[#A9A9A999]	"
                  ></input>
                </div>
              </div>

              <button
                onClick={changeNewPin}
                className="w-full bg-[#9ED5C5] rounded-xl py-3 text-lg font-bold text-white"
              >
                Continue
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

export default withAuth(Change_Pin);
