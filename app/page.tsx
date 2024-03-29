import Image from "next/image";
import Sidebar from "./(components)/sidebar/page";
import Chats from "./(components)/chats/page";

export default function Home() {
  return (

    <div className="flex">

      <Sidebar />
      <Chats />
    </div>

  );
}
