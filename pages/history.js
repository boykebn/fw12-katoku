import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  ArrowUp,
  Plus,
  User,
  LogOut,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
} from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

import { logout } from "../redux/reducer/auth";
import http from "../helpers/http";
import pictureUser from "../assets/images/dummyAvatar.jpg"
import ModalTopUp from "../components/ModalTopUp";
import NavbarHidden from "../components/NavbarHidden";
import withAuth from "../components/hoc/withAuth";
import Footer from "../components/footer";

const History = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const token = useSelector((state) => state.auth.token);
  const userInfo = jwt_decode(token);

  //get transaction history
  const [page, setPage] = useState(1);
  const [transactions, setTransaction] = useState([]);
  useEffect(() => {
    const fetchTransactionHistory = async () => {
      try {
        const response = await http().get(
          `/transactions?page=${page}&limit=5`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTransaction(response.data.results);
      } catch (error) {
        if (error) throw error;
      }
    };
    fetchTransactionHistory();
  }, [page]);

  // //Handle page
  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };

  // for top up handle
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavbarHidden />
      <section className="bg-[#FAFCFF] lg:px-16 md:px-5 px-3 py-8 flex">
        <div className="w-1/4 bg-white justify-between h-screen flex-col py-9 rounded-3xl mr-4 hidden md:flex">
          <div>
            <Link href="/home" className="flex w-full">
              <div className="px-6 flex mb-16 border-l-4 focus:outline-none border-[#9ED5C5]">
                <Grid className="mr-6" style={{ color: "#9ED5C5" }} />
                <div className="text-lg font-bold	text-[#9ED5C5]">Dashboard</div>
              </div>
            </Link>
            <Link href="/transfer-search-receiver">
              <div className="px-6 flex mb-16">
                <ArrowUp className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">
                  Transfer
                </div>
              </div>
            </Link>
            <div>
              <div className="px-6 flex mb-16">
                <Plus className="mr-6" />
                <button onClick={() => setShowModal(true)} className="text-lg font-bold	text-[#3A3D42CC]">Top Up</button>
              </div>
            </div>
            <Link href="/profile">
              <div className="px-6 flex mb-16">
                <User className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">Profile</div>
              </div>
            </Link>
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
            href="/home"
            className="items-center mb-12 flex md:hidden relative"
          >
            <ArrowLeft className="mr-5 text-[#4D4B57]" />
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              History
            </div>
          </Link>
          <div className="items-center mb-12 md:flex hidden">
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Transaction History
            </div>
            <select className="bg-[#3A3D421A] py-2 px-6 rounded-lg">
              <option>-- Select Filter --</option>
              <option value="ASC">ASC</option>
              <option value="DESC">DESC</option>
            </select>
          </div>
          <div className="text-[#7A7886] text-base mb-8 block md:hidden">
            This Week
          </div>
          {transactions?.map((transaction) => (
            <div
              key={transaction.id}
              className="flex mb-8 bg-white p-3 md:p-0 shadow-lg md:shadow-none rounded-md md:rounded-none"
            >
              <div className="flex-1">
                <div className="flex gap-3">
                  {transaction?.recipientPicture ? (
                    <Image
                      src={
                        `${process.env.NEXT_PUBLIC_URL}/upload/` +
                        transaction?.recipientPicture
                      }
                      width={56}
                      height={56}
                      alt="profile"
                    />
                  ) : (
                    <Image
                      src={pictureUser}
                      width={56}
                      height={56}
                      alt="profile"
                    />
                  )}
                  <div className="flex flex-col justify-center">
                    <div className="text-[#4D4B57] md:text-base text-sm font-bold">
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
          <div className="flex justify-center items-center">
            <div className="flex gap-5">
              {page > 1 ? (
                <button
                  onClick={handlePrev}
                  className="btn bg-[#9ED5C5] flex gap-3 py-2 px-4 rounded-lg bg-red shadow-lg justify-center items-center"
                >
                  <ArrowLeft className="text-white" />
                  <div className="text-lg font-bold">Prev</div>
                </button>
              ) : (
                <button
                  onClick={handlePrev}
                  disabled={true}
                  className="btn flex gap-3 py-2 px-4 rounded-lg bg-red shadow-lg justify-center items-center"
                >
                  <ArrowLeft className="text-white" />
                  <div className="text-lg font-bold">Prev</div>
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={transactions.length < 5}
                className="btn bg-[#9ED5C5] flex gap-3 py-2 px-4 rounded-lg bg-red shadow-lg justify-center items-center"
              >
                <div className="text-lg font-bold">Next</div>
                <ArrowRight className="text-white" />
              </button>
            </div>
          </div>
          <div className="flex md:hidden gap-3 items-center justify-center">
            <div className="bg-white rounded-md p-3 shadow-lg">
              <ArrowUp className="text-[#FF5B37]" />
            </div>
            <div className="bg-white rounded-md p-3 shadow-lg">
              <ArrowDown className="text-[#1EC15F]" />
            </div>
            <div className="bg-white rounded-md py-3 px-6 shadow-lg text-[#3c4264] text-lg font-bold">
              Filter by Date
            </div>
          </div>
        </div>
      </section>

      <div className="md:block hidden">
        <Footer />
      </div>

      <ModalTopUp isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default withAuth(History);
