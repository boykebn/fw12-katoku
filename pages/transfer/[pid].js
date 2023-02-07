import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  ArrowUp,
  Plus,
  User,
  LogOut,
  Edit2,
  ArrowLeft,
} from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

import { logout } from "../../redux/reducer/auth";
import { transferInput } from "../../redux/reducer/transfer";
import http from "../../helpers/http";
import NavbarHidden from "../../components/NavbarHidden";
import ModalTopUp from "../../components/ModalTopUp";
import Modal from "../../components/Modal";
import withAuth from "../../components/hoc/withAuth";
import profileUser from "../../assets/Images/dummyAvatar.jpg";
import Footer from "../../components/Footer";

const Transfer_Input = () => {
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
  const { pid } = router.query;

  const fetchProfile = async () => {
    try {
      const response = await http().get(`/transactions/recipient/${pid}`, {
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
    if (pid) {
      fetchProfile();
    }
  }, [pid]);

  //for input transfer
  const [money, setMoney] = useState(null);
  const [text, setText] = useState("");

  //for show balance from profile
  const [balanced, setBalanced] = useState({});
  const fetchBalance = async () => {
    try {
      const response = await http().get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBalanced(response.data.results);
    } catch (error) {
      if (error) throw error;
    }
  };
  useEffect(() => {
    fetchBalance();
  }, []);

  //for show modal pin
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const newAmount = parseInt(money);
  const minAmount = 10000;
  // console.log(minAmount);
  // console.log(newAmount)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newAmount <= balanced?.balance) {
      dispatch(
        transferInput({ amount: newAmount, notes: text, recipientId: pid })
      );
      setShowModal(true)
    } else if (newAmount <= minAmount) {
      setError();
    }else {
      setError(
        `Please transfer less than Rp. ${Number(
          balanced?.balance
        ).toLocaleString("id")}`
      );
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    console.log("masuk lagi")
  };

   // for top up handle
    const [showModalTopUp, setShowModalTopUp] = useState(false);


  return (
    <>
      <NavbarHidden />
      <section className="bg-[#FAFCFF] lg:px-16 md:px-5 px-3 py-8 flex">
        <div className="w-1/4 bg-white hidden md:flex justify-between h-screen flex-col py-9 rounded-3xl mr-4">
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
              <Link
                href="/transfer-search-receiver"
                className="px-6 flex mb-16 border-l-4 focus:outline-none border-[#9ED5C5]"
              >
                <ArrowUp className="mr-6" style={{ color: "#9ED5C5" }} />
                <div className="text-lg font-bold	text-[#9ED5C5]">Transfer</div>
              </Link>
            </div>
            <div>
              <div className="px-6 flex mb-16">
                <Plus className="mr-6" />
                <button onClick={() => setShowModalTopUp(true)} className="text-lg font-bold	text-[#3A3D42CC]">Top Up</button>
              </div>
            </div>
            <div>
              <Link href="/profile" className="px-6 flex mb-16">
                <User className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">Profile</div>
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
        <div className="w-full md:w-3/4 bg-[#FAFCFF] md:bg-white h-screen rounded-3xl p-6 overflow-y-scroll">
          <Link
            href="/transfer-search-receiver-receiver"
            className="items-center mb-12 flex md:hidden relative"
          >
            <ArrowLeft className="mr-5 text-[#4D4B57]" />
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Transfer
            </div>
          </Link>
          <div className="items-center mb-5 hidden md:flex">
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Transfer Money
            </div>
          </div>
          <div className="flex mb-8 shadow-md p-3 bg-white">
            <div className="flex-1">
              <div className="flex gap-3">
                {profile?.picture ? (
                  <Image
                    src={
                      `${process.env.NEXT_PUBLIC_URL}/upload/` +
                      profile?.picture
                    }
                    width={50}
                    height={50}
                    alt="profile"
                  />
                ) : (
                  <Image
                    src={profileUser}
                    width={50}
                    height={50}
                    alt="profile"
                  />
                )}
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] text-base font-bold">
                    {profile?.firstName} {profile?.lastName}
                  </div>
                  <div className="text-[#7A7886] text-sm">
                    {profile?.phoneNumber}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-black font-bold text-base block md:hidden text-center">
            Rp{Number(balanced?.balance).toLocaleString("id")} Available
          </div>
          <div className="text-[#7A7886] text-sm mb-5 w-1/2 md:block hidden">
            Type the amount you want to transfer and then press continue to the
            next steps.
          </div>
          <form>
            <div className="flex flex-col items-center justify-center gap-10 mt-10 mb-24">
              <input
                type="number"
                placeholder="0.00"
                name="amount"
                onChange={(e) => setMoney(e.target.value)}
                className="text-center text-4xl font-bold text-black bg-[#FAFCFF] md:bg-white"
              ></input>
              <div className="text-base font-bold text-[#3A3D42] hidden md:block">
                Rp{Number(balanced?.balance).toLocaleString("id")} Available
              </div>
              <div className="relative md:w-1/2 w-full bg-[#FAFCFF] md:bg-white">
                <Edit2
                  style={{ color: "#A9A9A999" }}
                  className="absolute top-[24%]"
                />
                <input
                  className="text-black w-full py-3 px-9 border-[#A9A9A999] border-b-2 text-base bg-[#FAFCFF] md:bg-white"
                  type="text"
                  name="notes"
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Add some notes"
                ></input>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-[#9ED5C5] hover:bg-[#8EC3B0] px-7 py-2 rounded-md text-lg font-bold text-white"
                onClick={handleSubmit}
                type="submit"
              >
                Continue
              </button>
            </div>
            {error && (
              <div className="font-bold text-lg text-center text-red-400">
                {error}
              </div>
            )}
          </form>
        </div>
      </section>
      {showModal && <Modal onClose={() => setShowModal(!showModal)} />}
      <footer className="md:block hidden">
        <Footer />
      </footer>
      <ModalTopUp isVisible={showModalTopUp} onClose={() => setShowModalTopUp(false)} />
    </>
  );
};

export default withAuth(Transfer_Input);
