import Image from "next/image";
import logo from "../../app/images/logo.svg";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="size-10 text-lg text-white rounded-xl flex justify-center items-center">
        <Image
          src={logo}
          alt="logo"
          width={60}
          height={60}
        />
      </div>
      <div className="flex gap-1 items-center text-xl">
        <span className="text-xl font-bold">Pro</span>
        <span className="text-xl">Kanban</span>
      </div>
    </div>
  )
}