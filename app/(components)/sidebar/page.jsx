import React from "react";

const Sidebar = () => {
  return (
    <div class="flex bg-gray-100 text-gray-900">
      <aside class="flex h-screen w-20 flex-col items-center border-r border-gray-200 bg-white">
        <div class="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-2">
          <img src="./plus.png" className="h-10" />
        </div>
        <nav class="flex flex-1 flex-col gap-y-4 pt-10">
          <a
            href="#"
            class="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-200"
          >
            <img src="./1.png" className="h-6 ml-1" />
          </a>
          <a
            href="#"
            class="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-200"
          >
            <img src="./2.png" className="h-6 ml-1" />
          </a>
          <a
            href="#"
            class="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-200"
          >
            <img src="./3.png" className="h-6 ml-1" />
          </a>{" "}
          <a
            href="#"
            class="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-200"
          >
            <img src="./4.png" cla className="h-6 ml-1" />
          </a>{" "}
          <a
            href="#"
            class="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-200"
          >
            <img src="./5.png" className="h-6 ml-1" />
          </a>{" "}
          <a
            href="#"
            class="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-200"
          >
            <img src="./6.png" className="h-6 ml-1" />
          </a>
          <a
            href="#"
            class="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-200"
          >
            <img src="./7.png" className="h-6 ml-1" />
          </a>
        </nav>

        <div class="flex flex-col items-center gap-y-4 py-10">
          <button class="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <svg
              width="24"
              height="24"
              class="h-6 w-6 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16H12.01M12 8V12V8Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button class="mt-2 rounded-full bg-gray-100">
            <img
              class="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/35387401?v=4"
              alt=""
            />
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
