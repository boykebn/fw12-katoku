import { useDispatch } from "react-redux";
import {
  Grid,
  ArrowUp,
  Plus,
  User,
  LogOut,
  X,
} from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { logout } from "../redux/reducer/auth";
import profile2 from "../assets/images/user2.png";
import Navbar from "../components/navbar";
import ModalTopUp from "../components/ModalTopUp";
import withAuth from "../components/hoc/withAuth";
import Footer from "../components/footer";

const Transfer_Failed = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
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
                <button onClick={() => setShowModal(true)} className="text-lg font-bold	text-[#3A3D42CC]">Top Up</button>
              </div>
            </div>
            <div>
              <div className="px-6 flex mb-16">
                <User className="mr-6" />
                <div className="text-lg font-bold	text-[#3A3D42CC]">Profile</div>
              </div>
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
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#FF5B37] flex items-center justify-center">
              <X style={{ color: "#FFFFFF" }} />
            </div>
            <div className="text-[#4D4B57] text-xl font-bold">
              Transfer Failed
            </div>
            <div className="text-[#7A7886] text-sm text-center">
              We can’t transfer your money at the moment, we recommend you to
              check your internet connection and try again.
            </div>
          </div>
          <div className="flex mb-5 shadow-md p-3">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center">
                <div className=" text-[#7A7886] text-sm">Amount</div>
                <div className="text-[#4D4B57] text-xl font-bold">
                  Rp100.000
                </div>
              </div>
            </div>
          </div>
          <div className="flex mb-5 shadow-md p-3">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center">
                <div className=" text-[#7A7886] text-sm">Balance Left</div>
                <div className="text-[#4D4B57] text-xl font-bold">Rp20.000</div>
              </div>
            </div>
          </div>
          <div className="flex mb-5 shadow-md p-3">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center">
                <div className=" text-[#7A7886] text-sm">Date & Time</div>
                <div className="text-[#4D4B57] text-xl font-bold">
                  May 11, 2020 - 12.20
                </div>
              </div>
            </div>
          </div>
          <div className="flex mb-5 shadow-md p-3">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center">
                <div className=" text-[#7A7886] text-sm">Notes</div>
                <div className="text-[#4D4B57] text-xl font-bold">
                  For buying some socks
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-5">
            <div className="flex-1 text-[#3A3D42] font-bold text-lg">
              Transfer To
            </div>
          </div>
          <div className="flex mb-8 shadow-md p-3">
            <div className="flex-1">
              <div className="flex gap-3">
                <Image src={profile2} alt="profile" />
                <div className="flex flex-col justify-center">
                  <div className="text-[#4D4B57] text-base font-bold">
                    Momo Taro
                  </div>
                  <div className="text-[#7A7886] text-sm">
                    +62 812-4343-6731
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-5 ">
            <button className="bg-[#6379F4] px-7 py-2 rounded-md text-lg font-bold text-white">
              Try Again
            </button>
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

export default withAuth(Transfer_Failed);
