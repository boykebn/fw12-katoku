/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { X } from "react-feather";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

const ModalTopUp = ({ isVisible, onClose }) => {
  const router = useRouter();
  if (!isVisible) {
    return null;
  }
  //top up
  const token = useSelector((state) => state.auth.token);

  const [amount, setAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const transactionTopup = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setLoading("Loading...");
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/transactions/topup`,
      { amount },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setLoading(false);
    setSuccess(data.message);
    setTimeout(() => {
      setSuccess(false);
      router.push("/home");
    }, 3000);
  };

  return (
    <>
      <div className="fixed inset-0 bg-[#3A3D42] bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-3 rounded-lg flex flex-col w-1/3">
          <div className="flex items-center">
            <div className="flex-1 text-lg font-bold text-[#3A3D42]">Topup</div>
            <button onClick={() => onClose()}>
              <X style={{ color: "#3A3D42" }} />
            </button>
          </div>
          <div className="text-[#3A3D4299] text-base mt-5">
            Enter the amount of money, and click submit{" "}
          </div>
          <form onSubmit={transactionTopup} className="flex flex-col w-full">
            <input
              name="amount"
              onChange={(e) =>
                Number(setAmount(e.target.value)).toLocaleString("id")
              }
              type="number"
              className="bg-[#A9A9A999] text-center w-full my-10 py-3 rounded-md"
            ></input>
            <div className="flex justify-end">
              <button
                disabled={disabled}
                type="submit"
                className="bg-[#9ED5C5] btn px-7 py-2 rounded-md text-lg font-bold text-white"
              >
                Submit
              </button>
            </div>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalTopUp;
