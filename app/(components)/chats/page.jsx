"use client";
import React, { useEffect, useState } from "react";

const Chats = () => {
  const [fetchedChats, setfetchedChats] = useState();
  const [chatLength, setchatLength] = useState();

  useEffect(() => {
    const fetchChats = async () => {
      try {
        let data = await fetch("http://localhost:3000/mongodb");
        const res = await data.json();
        const len = await res.result.length;
        setchatLength(len);
        setfetchedChats(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="ml-[10vh] flex flex-col sm:flex-row md:flex-row">
      <div className=" mt-6 m-3 w-[40vh]">
        <div className="flex justify-between text-2xl m-1">
          <h1>Chats ({chatLength})</h1>
          <img src="./chat-plus.png" className="h-8 border rounded-sm" alt="" />
        </div>

        <form className="max-w-md mx-auto mt-6 ">
          <label className="mb-2 text-sm font-medium text-black sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full h-6 p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100
            "
              placeholder="Search"
              required
            />
          </div>
        </form>

        <div>
          <aside className="flex p-4 bg-green-900 border rounded-lg mt-8 flex-col transition ease-in-out  hover:bg-green-800 cursor-pointer">
            <div className="flex gap-2 text-slate-300">
              <img src="./search.png" alt="search icon" className="w-5" />
              <h1>New Chat</h1>
            </div>
            <h1 className="text-slate-400 text-sm mt-1">Ask anything</h1>
          </aside>
        </div>

        {fetchedChats ? (
          fetchedChats.result.map((ele, index) => (
            <aside className="flex p-4 text-sm   rounded-lg flex-col transition ease-in-out  hover:bg-slate-100 cursor-pointer">
              <div className="flex gap-2 ">
                <img src={ele.imageid} alt="search icon" className="w-5" />
                <h1>{ele.title}</h1>
              </div>
              <h1 className="text-slate-400 text-sm mt-1">
                {ele.summary.slice(0, 30) + "..."}
              </h1>
            </aside>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>

      <div className="flex  flex-col">
        <header className="hidden  sm:flex text-2xl p-2 w-[150vh] bg-slate-100 h-20 items-center ">
          New chat
        </header>

        <div className="h-[88vh] flex justify-center items-center">
          <section className="bg-slate-100 w-[48vh] h-[50vh] gap-1 border rounded-lg flex flex-col items-center">
            <h1 className="text-2xl mt-2">PostCare.AI</h1>

            <div className="flex gap-1 text-slate-300 m-3 ">
              <button className="flex bg-green-800 border rounded-md text-sm w-[15vh] h-[5vh] gap-2 items-center p-1 ">
                <img
                  src="./sun.png"
                  alt="buttonpng"
                  className=" h-4 w-4"
                  border="0"
                />
                Examples
              </button>
              <button className="flex  text-black bg-white transition ease-in-out hover:bg-green-400 border rounded-md text-sm w-[15vh] h-[5vh] gap-1 items-center p-1">
                <img
                  src="./flash.png"
                  alt="buttonpng"
                  className=" h-4 w-4"
                  border="0"
                />
                Capabilities
              </button>
              <button className="flex  text-black bg-white transition ease-in-out hover:bg-green-400 border rounded-md text-sm w-[15vh] h-[5vh] gap-1 items-center p-1">
                <img
                  src="./caution.png"
                  alt="buttonpng"
                  className=" h-4 w-4"
                  border="0"
                />
                limitations
              </button>
            </div>

            <div className=" w-[45vh] hover:cursor-pointer ">
              <section className=" flex justify-between items-center p-4  h-[8vh] bg-white border rounded-sm">
                <h1>Analyse my report</h1>
                <img
                  src="./right-arrow.png"
                  className="h-4"
                  alt="right-arrow"
                />
              </section>

              <section className=" flex justify-between items-center p-4  h-[8vh] bg-white border rounded-sm">
                <h1>Explain cholestrol level</h1>
                <img
                  src="./right-arrow.png"
                  className="h-4"
                  alt="right-arrow"
                />
              </section>

              <section className=" flex justify-between items-center p-4  h-[8vh] bg-white border rounded-sm">
                <h1>How do i make appointment to Dr.Dave</h1>
                <img
                  src="./right-arrow.png"
                  className="h-4"
                  alt="right-arrow"
                />
              </section>
            </div>

            <div className="flex bg-green-800 border text-white m-4 rounded-l-lg ">
              <input
                type="text"
                className="w-[42vh] h-14  bg-green-800 placeholder:text-slate-200 p-3"
                placeholder="Type Something"
              />

              <button className="h-8 w-8 mt-2.5 p-1 hover:cursor-pointer">
                <img
                  src="https://cdn-icons-png.freepik.com/512/4414/4414831.png"
                  alt="send btn"
                />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Chats;
