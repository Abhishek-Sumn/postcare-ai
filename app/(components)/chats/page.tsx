import React from "react";

const Chats = () => {
    return (
        <div className=" mt-6 m-3 w-[40vh]">
            <div className="flex justify-between text-2xl m-1">
                <h1>Chats (5)</h1>
                <img src="./chat-plus.png" className="h-8 border rounded-sm" alt="" />
            </div>

            <form className="max-w-md mx-auto mt-6 ">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
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
                        className="block w-full h-6 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
                                     focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100
                                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-100"
                        placeholder="Search"
                        required
                    />
                </div>
            </form>

            <div>
                <aside className="flex p-4 bg-green-900 border rounded-lg mt-8 flex-col">
                    <div className="flex gap-2 text-slate-300">
                        <img src="./search.png" alt="search icon" className="w-5" />
                        <h1>New Chat</h1>
                    </div>
                    <h1 className="text-slate-400 text-sm mt-1">Ask anything</h1>
                </aside>

            </div>
        </div>
    );
};

export default Chats;
