/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ArrowUp,
  Bell,
  ArrowDown,
} from "react-feather";
import Image from "next/image";

import user from "../assets/Images/dummyAvatar.jpg";
import http from "../helpers/http";

const NavbarHidden = () => {
  const [profile, setProfile] = useState({});
  const token = useSelector((state) => state.auth.token);
  //get profile
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

  //get notfication
  const [notif, setNotif] = useState([]);
  const fetchNotif = async () => {
    try {
      const response = await http().get(
        "/transactions/notification?page=1&limit=5",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNotif(response.data.results);
    } catch (error) {
      if (error) throw error;
    }
  };
  useEffect(() => {
    fetchNotif();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav className="hidden md:block">
        <div className="px-16 py-8 flex items-center justify-center rounded-b-2xl">
          <div className="flex-1 text-[#9ED5C5] text-3xl font-bold">KantongKu</div>
          <div className="flex gap-5 justify-center items-center">
            {profile?.picture ? (
              <Image
                className="w-[50px] h-[50px] rounded-lg"
                width={50}
                height={50}
                src={
                  `${process.env.NEXT_PUBLIC_URL}/upload/` + profile?.picture
                }
                alt="profile"
              />
            ) : (
              <Image
                className="w-[50px] h-[50px] rounded-lg"
                width={50}
                height={50}
                src={user}
                alt="profile"
              />
            )}
            <div>
              <div className="text-[#3A3D42] text-lg font-bold">
                {profile?.firstName} {profile?.lastName}
              </div>
              
                <div className="text-sm">{profile?.phoneNumber}</div>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-ghost rounded-btn">
                <Bell />
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content py-2 bg-base-100 rounded-box w-52 mt-4 shadow-lg"
              >
                {notif?.map((user) => (
                  <li key={user.id}>
                    <div className="relative flex flex-col pl-10 items-start">
                      <div className="text-[#7A7A7A] text-sm">
                        {user?.notes}
                      </div>
                      <div className="text-lg font-bold text-[#43484F]">
                        Rp{user?.amount}
                      </div>
                      {user?.type === "CREDIT" ? (
                        <ArrowDown
                          style={{ color: "#4CEDB3" }}
                          className="absolute top-[35%] left-[5%]"
                        />
                      ) : (
                        <ArrowUp
                          style={{ color: "#FF5B37" }}
                          className="absolute top-[35%] left-[5%]"
                        />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarHidden;
