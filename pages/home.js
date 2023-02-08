import React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  ArrowUp,
  Plus,
  User,
  LogOut,
  ArrowDown,
} from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

import { logout } from "../redux/reducer/auth";
import Navbar from "../components/navbar";
import withAuth from "../components/hoc/withAuth";
import ModalTopUp from "../components/modalTopUp";
import pictureUser from "../assets/images/dummyAvatar.jpg";
import graphic from "../assets/Images/graphic.png";
import http from "../helpers/http";
import Footer from "../components/footer";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  const [profile, setProfile] = useState([]);
  const token = useSelector((state) => state.auth.token);
  console.log(token)
  const userInfo = jwt_decode(token);
  console.log(userInfo)

  const fetchProfile = async () => {
    try {
      const response = await http().get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(Authorization)
      setProfile(response.data.results);
    } catch (error) {
      if (error) throw error;
    }
  };
  useEffect(() => {
    fetchProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  //get transaction history
  const [transactions, setTransaction] = useState([]);
  const fetchTransactionHistory = async () => {
    try {
      const response = await http().get("/transactions?page=1&limit=5", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTransaction(response.data.results);
    } catch (error) {
      if (error) throw error;
    }
  };
  useEffect(() => {
    fetchTransactionHistory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);


  // for top up handle
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <section className="bg-[#FAFCFF] lg:px-16 md:px-5 px-3 py-8 flex">
        <div className="w-1/4 bg-white justify-between h-screen flex-col py-9 rounded-3xl mr-4 md:flex hidden">
          <div>
            <Link href="/home" className="flex w-full">
              <div className="px-6 flex mb-16 border-l-4 focus:outline-none border-[#9ED5C5]">
                <Grid className="mr-6" style={{ color: "#9ED5C5" }} />
                <div className="text-lg font-bold	text-[#9ED5C5]">Dashboard</div>
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
        <div className="w-full md:w-3/4 flex flex-col">
          <div className="h-1/4 bg-[#9ED5C5] flex rounded-3xl p-6 text-white mb-4">
            <div className="flex-1 flex justify-center flex-col">
              <div className="text-lg">Balance</div>
              <div className="text-4xl font-bold mt-5 mb-2">
              Rp.{Number(profile?.balance).toLocaleString("id")}{" "}
              </div>
                <div className="text-sm font-semibold text-[#DFDCDC]">
                  {profile.phoneNumber}
                </div>
            </div>
            <div className="pt-[20px] md:block hidden">
              <Link
                href="/transfer-search-receiver"
                className="flex justify-center items-center bg-[#8EC3B0] p-3 rounded-lg border-white border border-solid w-[150px]"
              >
                <ArrowUp />
                <div className="ml-2">Transfer</div>
              </Link>
              <Link
                href=""
                className="flex justify-center items-center bg-[#8EC3B0] p-3 rounded-lg border-white border border-solid mt-3 w-[150px]"
              >
                <Plus />
                <button onClick={() => setShowModal(true)} className="ml-2">Top Up</button>
              </Link>
            </div>
          </div>
          <div className="md:hidden flex justify-center gap-3 items-center">
            <Link
              href="/transfer-search-receiver"
              className="w-1/2 flex bg-[#EAEDFF] font-bold text-[#514F5B] p-3 rounded-lg border-white border border-solid justify-center"
            >
              <ArrowUp style={{ color: "#608DE2" }} />
              <div className="ml-2">Transfer</div>
            </Link>
            <Link
              href=""
              className="w-1/2 flex bg-[#EAEDFF] font-bold text-[#514F5B] p-3 rounded-lg border-white border border-solid justify-center"
            >
              <Plus style={{ color: "#608DE2" }} />
              <button onClick={() => setShowModal(true)} className="ml-2">Top Up</button>
            </Link>
          </div>

          <div className="flex gap-3">
            <div className="w-1/2 bg-white rounded-3xl p-5 hidden md:block">
              <div className="mb-10 flex">
                <div className="flex-1">
                  <ArrowDown style={{ color: "#1EC15F" }} />
                  <div className="text-[#6A6A6A] text-sm my-3">Income</div>
                  <div className="text-[#3A3D42] font-bold lg:text-lg text-md">
                    Rp2.120.000
                  </div>
                </div>
                <div>
                  <ArrowUp style={{ color: "#FF5B37" }} />
                  <div className="text-[#6A6A6A] text-sm my-3">Expense</div>
                  <div className="text-[#3A3D42] font-bold lg:text-lg text-md">
                    Rp1.560.000
                  </div>
                </div>
              </div>
              <div>
                <Image src={graphic} alt="graphic" />
              </div>
            </div>
            <div className="rounded-3xl p-3 w-full md:w-1/2 md:bg-white bg-[#FAFCFF]">
              <div className="flex mb-8 md:mt-0 mt-8 items-center">
                <div className="flex-1 text-[#3A3D42] text-lg font-bold">
                  Transaction History
                </div>
                <Link
                  href="/history"
                  className="text-[#9ED5C5] font-semibold text-sm"
                >
                  See All
                </Link>
              </div>
              {transactions?.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex mb-8 bg-[#FFFFFF] md:p-0 p-3 shadow-lg md:shadow-none rounded-md"
                >
                  <div className="flex-1">
                    <div className="flex gap-3">
                      {transaction?.recipientPicture ? (
                        <img
                          src={
                            `${process.env.NEXT_PUBLIC_URL}/upload/` +
                            transaction?.recipientPicture
                          }
                          width={56}
                          height={56}
                          alt="profile picture"
                        />
                      ) : (
                        <img
                          src={pictureUser}
                          width={56}
                          height={56}
                          alt="profile picture"
                        />
                      )}
                      <div className="flex flex-col justify-center">
                        <div className="text-[#4D4B57] sm:text-base text-sm font-bold">
                          {transaction?.recipientname}
                        </div>
                        <div className="text-[#7A7886] text-sm">
                          {transaction?.notes}
                        </div>
                      </div>
                    </div>
                  </div>
                  {transaction?.recipientId === userInfo.id ? (
                    <div className="text-[#1EC15F] font-bold sm:text-base text-sm flex items-center">
                      Rp.{Number(transaction?.amount).toLocaleString("id")}{" "}
                    </div>
                  ) : (
                    <div className="text-[#FF5B37] font-bold sm:text-base text-sm flex items-center">
                      Rp.{Number(transaction?.amount).toLocaleString("id")}{" "}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="hidden md:block">
        <Footer />
      </footer>
      <ModalTopUp isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default withAuth(Home);
// export default Home;
