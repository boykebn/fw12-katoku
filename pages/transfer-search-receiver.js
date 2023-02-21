/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  ArrowUp,
  Plus,
  User,
  LogOut,
  Search,
  ArrowLeft,
  ArrowRight,
} from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { logout } from "../redux/reducer/auth";
import http from "../helpers/http";
import NavbarHidden from "../components/NavbarHidden";
import ModalTopUp from "../components/ModalTopUp";
import withAuth from "../components/hoc/withAuth";
import profile1 from "../assets/images/user1.png";
import profile2 from "../assets/images/user2.png";
import profile3 from "../assets/images/user3.png";
import profileUser from "../assets/images/dummyAvatar.jpg";
import Footer from "../components/footer";


const TransferSearchReceiver = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  const [page, setPage] = useState(1);
  //get all transaction
  const token = useSelector((state) => state.auth.token);
  const [transaction, setTransaction] = useState([]);
  const [limit, setLimit] = useState(5);
  const fetchTransaction = async () => {
    try {
      const res = await http().get(
        `/transactions/recipient?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTransaction(res.data.results);
    } catch (error) {
      if (error) throw error;
    }
  };
  useEffect(() => {
    fetchTransaction();
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

  //search
    const searching = (e) => {
        const values = e.target.value
        if (values.length) {
            setLimit(9000)
            const find = [...transaction]
            const result = (find.filter(data => data.firstName.includes(values) || data.lastName.includes(values)))
            setTransaction(result)
        }
        else {
            setLimit(5)
            fetchTransaction()
        }
    }

  return (
    <>
      <NavbarHidden />
      <section className="bg-[#FAFCFF] lg:px-16 md:px-5 px-3 py-8 flex">
        <div className="w-1/4 bg-white justify-between h-screen flex-col py-9 rounded-3xl mr-4 hidden md:flex">
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
                href="/transfer-search-receiver-receiver"
                className="px-6 flex mb-16 border-l-4 focus:outline-none border-[#9ED5C5]"
              >
                <ArrowUp className="mr-6" style={{ color: "#9ED5C5" }} />
                <div className="text-lg font-bold	text-[#9ED5C5]">Transfer</div>
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
        <div className="w-full md:w-3/4 bg-[#FAFCFF] md:bg-white h-screen rounded-3xl p-6 overflow-y-scroll">
          <Link
            href="/home"
            className="items-center mb-12 flex md:hidden relative"
          >
            <ArrowLeft className="mr-5 text-[#4D4B57]" />
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Find Receiver
            </div>
          </Link>
          <div className="items-center mb-5 hidden md:flex">
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Search Receiver
            </div>
          </div>
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search receiver here"
              className="w-full relative px-14 py-3 bg-[#3A3D421A] rounded-lg"
              onChange={searching}
            ></input>
            <Search
              className="absolute top-[27%] left-[2.5%]"
              style={{ color: "#A9A9A9" }}
            />
          </div>
          <div className="block md:hidden text-[#514F5B] text-lg font-bold mb-3">
            Quick Access
          </div>
          <div className="gap-3 flex md:hidden">
            <Link
              href="/transfer-input"
              className="flex mb-8 shadow-md rounded-lg p-3 w-1/3 items-center justify-center flex-col bg-white"
            >
              <Image width={56} height={56} src={profile3} alt="profile" />
              <div className="flex flex-col justify-center">
                <div className="text-[#4D4B57] text-base font-bold">Michi</div>
                <div className="text-[#7A7886] text-sm">-9994</div>
              </div>
            </Link>
            <Link
              href="/transfer-input"
              className="flex mb-8 shadow-md rounded-lg p-3 w-1/3 items-center justify-center flex-col bg-white"
            >
              <Image width={56} height={56} src={profile2} alt="profile" />
              <div className="flex flex-col justify-center">
                <div className="text-[#4D4B57] text-base font-bold">Dody</div>
                <div className="text-[#7A7886] text-sm">-3561</div>
              </div>
            </Link>
            <Link
              href="/transfer-input"
              className="flex mb-8 shadow-md rounded-lg p-3 w-1/3 items-center justify-center flex-col bg-white"
            >
              <Image width={56} height={56} src={profile1} alt="profile" />
              <div className="flex flex-col justify-center">
                <div className="text-[#4D4B57] text-base font-bold">Rian</div>
                <div className="text-[#7A7886] text-sm">-3822</div>
              </div>
            </Link>
          </div>
          <div className="block md:hidden text-[#514F5B] text-lg font-bold mb-3">
            All Contacts{" "}
          </div>
          <div className="text-[#8F8F8F] text-sm	block md:hidden mb-3">
            17 Contact Founds
          </div>
          {transaction?.map((user) => (
            <Link
              key={user.id}
              href={"/transfer/" + user.id}
              className="flex mb-8 shadow-md p-3 bg-white rounded-lg"
            >
              <div className="flex-1">
                <div className="flex gap-3">
                  {user?.picture ? (
                    <Image
                      width={56}
                      height={56}
                      src={
                        `${process.env.NEXT_PUBLIC_URL}/upload/` + user?.picture
                      }
                      alt="profile"
                    />
                  ) : (
                    <Image
                      width={56}
                      height={56}
                      src={profileUser}
                      alt="profile"
                    />
                  )}
                  <div className="flex flex-col justify-center">
                    <div className="text-[#4D4B57] text-base font-bold">
                      {user?.firstName} {user?.lastName}
                    </div>
                    <div className="text-[#7A7886] text-sm">
                      {user?.phoneNumber}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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
                disabled={transaction.length < 5}
                className="btn bg-[#9ED5C5] flex gap-3 py-2 px-4 rounded-lg bg-red shadow-lg justify-center items-center"
              >
                <div className="text-lg font-bold">Next</div>
                <ArrowRight className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="md:block hidden">
        <Footer />
      </footer>
      <ModalTopUp isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default withAuth(TransferSearchReceiver);
// export default TransferSearchReceiver;