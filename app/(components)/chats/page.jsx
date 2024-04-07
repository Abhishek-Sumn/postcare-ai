"use client";
import React, { useEffect, useState } from "react";

const Chats = () => {
  const [fetchedChats, setfetchedChats] = useState();
  const [chatLength, setchatLength] = useState();
  const [messageId, setMessageId] = useState();
  const [messageObj, setmessageObj] = useState();
  const [messageText, setMessageText] = useState();

  function findObjectById(array, id) {
    for (let i = 0; i < array?.length; i++) {
      if (array[i]._id === id) {
        return array[i];
      }
    }
    return null; // Return null if object with specified ID is not found
  }

  useEffect(() => {
    const fetchChats = async () => {
      try {
        let data = await fetch("https://postcare-ai.vercel.app/mongodb");
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

  useEffect(() => {
    const msgbody = findObjectById(fetchedChats?.result, messageId);
    //   console.log(msgbody?.messages)
    //    setmessageObj(msgbody?.messages);

    if (msgbody?.messages && typeof msgbody?.messages === "object") {
      const renderedMessages = Object.entries(msgbody?.messages);
      setmessageObj(renderedMessages);
      //console.log(renderedMessages);
    } else {
      console.log("messageObj is not a valid object");
    }
  }, [messageId]);

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

        <div onClick={() => setMessageId(undefined)}>
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
            <aside
              key={index}
              className="flex p-4 text-sm   rounded-lg flex-col transition ease-in-out  hover:bg-slate-100 cursor-pointer"
              onClick={() => setMessageId(ele._id)}
            >
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

      {messageId ? (
        <div className="flex flex-col items-center justify-center mt-[5vh]">
          {
            <div className="flex items-center justify-center">
              <div className=" bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]">
                <div className="flex flex-col space-y-1.5 pb-6">
                  <h2 className="font-semibold text-lg tracking-tight">
                    PostCare.AI
                  </h2>
                  <p className="text-sm text-[#6b7280] leading-3">
                    
                  </p>
                </div>

                <div
                  className="pr-4 h-[474px]"
                  style={{ minWidth: "100%", display: "table" }}
                >
                  <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                      <div className="rounded-full bg-gray-100 border p-1">
                        <svg
                          stroke="none"
                          fill="black"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                          ></path>
                        </svg>
                      </div>
                    </span>
                    <p className="leading-relaxed">
                      <span className="block font-bold text-gray-700">AI </span>
                      Hi, how can I help you today?
                    </p>
                  </div>

                  {messageObj?.map((ele, index) => (
                    <div key={index}>
                      <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                          <div className="rounded-full bg-gray-100 border p-1"></div>
                        </span>
                        <p className="leading-relaxed">
                          <span className="block font-bold text-gray-700"></span>
                          {ele[1]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center pt-0">
                  <form className="flex items-center justify-center w-full space-x-2">
                    <input
                      onChange={(e) => setMessageText(e.target.value)}
                      value={messageText}
                      className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                      placeholder="Type your message"
                    />
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          }
        </div>
      ) : (
        // <h1>{messageObj}</h1>
        // console.log(messageObj)
        <div className="flex flex-col">
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
      )}
    </div>
  );
};

export default Chats;
