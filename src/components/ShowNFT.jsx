import { useState, useEffect } from 'react';
import Identicon from 'react-identicons';
import { FaTimes } from 'react-icons/fa';
import { setGlobalState, useGlobalState } from '../store';

const imgHero =
  'https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg';

const ShowNFT = () => {
  const [modal] = useGlobalState('showModal');

  const onChangePrice = () => {
    setGlobalState('showModal', 'scale-0');
    setGlobalState('updateModal', 'scale-100');
  };

  const handleSubmit = (e) => {
    closeModal();
  };

  const closeModal = () => {
    setGlobalState('showModal', 'scale-0');
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex
  items-center justify-center bg-black bg-opacity-50 transform transition-transform
  duration-300 ${modal}`}
    >
      <div
        className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl
      w-11/12 md:w-2/5 h-7/12 p-6"
      >
        <div onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center text-gray-400">
            <p className="font-semibold ">Buy NFT</p>
            <button
              onClick={closeModal}
              className="border-0 bg-transparent focus:outline-none"
              type="button"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 h-40 w-40 rounded-xl overflow-hidden ">
              <img
                className="h-full w-full object-cover cursor-pointer"
                src={imgHero}
                alt="NFT"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start rounded-xl mt-5">
            <h4 className="text-white font-semibold">Title</h4>
            <p className="text-gray-400 text-xs my-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis ratione, laudantium esse maxime a mollitia fugit
              asperiores praesentium quod optio minima ducimus? Impedit quis
              numquam mollitia esse nesciunt recusandae facilis.
            </p>

            <div className="flex justify-between items-center mt-3 text-white">
              <div className="flex justify-center items-center">
                <Identicon
                  className="h-10 w-10 object-contain rounded-full mr-3"
                  string={'yqwe3shgxnfb'}
                  size={50}
                />

                <div className="flex flex-col justify-center items-start">
                  <small className="text-white font-bold">@owner</small>
                  <small className="text-pink-800 font-semibold">
                    0x31...03f2
                  </small>
                </div>
              </div>
              <div className="flex flex-col text-white">
                <small className="text-xs">Current Price</small>
                <p className="text-sm font-semibold">0.34 ETH</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center space-x-2">
            <button
              className="flex justify-center items-center shadow-lg shadow-black
          text-white p-2 mt-5 w-full
          bg-[#e32970] hover:bg-[#bd255f] rounded-full cursor-pointer"
            >
              Purchase
            </button>
            <button
              className="flex justify-center items-center shadow-lg shadow-black
          text-white p-2 mt-5 w-full
          bg-[#e32970] hover:bg-[#bd255f] rounded-full cursor-pointer"
              onClick={onChangePrice}
            >
              Change Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowNFT;
