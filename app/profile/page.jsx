import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="px-5 h-[calc(100vh_-_64px)] py-16 relative bg-[#F5F5F5] w-screen overflow-hidde overflow-y-scroll z-40">
      <nav className="absolute top-5 left-3">
        <Link href="/">
          <ChevronLeft size={28} color="#1C1C1C" />
        </Link>
      </nav>
      <div className="mb-10 bg-white shadow-lg shadow-gray-300  my-3 rounded-lg flex items-center py-2 px-2 space-x-2">
          <div className="">
            <Image
              src="https://i.imgur.com/3vjidlG.jpg"
              height={72}
              width={72}
              className="rounded-full"
            />
          </div>
          <div className="">
            <h3 className="font-raleway text-2xl font-bold">Rahi Uppal</h3>
            <h3 className="font-raleway text-sm text-primary">View activity </h3>
          </div>
        </div>
      <main className="space-y-5">

        <section className="py-6 shadow shadow-gray-300 bg-white rounded-lg">
          <h2 className="text-lg leading-none pl-4 font-raleway font-bold border-l-4 border-primary">Food Orders</h2>
          <main className=" pl-4 space-y-1 pt-5 divide-y-[1px]">
            <Link href="/orders" className="flex items-center pr-2 py-2 justify-center">
              <div className="flex space-x-3 items-center flex-1">
                <Image src={"/icons/pbag.svg"} width={32} height={32} className="w-10 h-10" />
                <p className="font-lato text-lg">Your orders</p>
              </div>
              <ChevronRight size={20} color="#767C8F" />
            </Link>
            <Link href="/orders?tab=1" className="flex items-center pr-2 py-2 justify-center">
              <div className="flex space-x-3 items-center flex-1">
                <Image src={"/icons/pcoupon.svg"} width={32} height={32} className="w-10 h-10" />
                <p className="font-lato text-lg">Coupons  </p>
              </div>
              <ChevronRight size={20} color="#767C8F" />
            </Link>
          </main>
        </section>

        <section className="py-6 shadow shadow-gray-300 bg-white rounded-lg">
          <h2 className="text-lg leading-none pl-4 font-raleway font-bold border-l-4 border-primary">Money</h2>
          <main className=" pl-4 space-y-1 pt-5 divide-y-[1px]">
            <Link href="/orders?tab=2" className="flex items-center pr-2 py-2 justify-center">
              <div className="flex space-x-3 items-center flex-1">
                <Image src={"/icons/pwallet.svg"} width={32} height={32} className="w-10 h-10" />
                <p className="font-lato text-lg">Wallet balance</p>
              </div>
              <ChevronRight size={20} color="#767C8F" />
            </Link>
            <Link href="/orders?tab=2#credit" className="flex items-center pr-2 py-2 justify-center">
              <div className="flex space-x-3 items-center flex-1">
                <Image src={"/icons/pcredit.svg"} width={32} height={32} className="w-10 h-10" />
                <p className="font-lato text-lg">Credit History</p>
              </div>
              <ChevronRight size={20} color="#767C8F" />
            </Link>
          </main>
        </section>

        <section className="py-6 shadow shadow-gray-300 bg-white rounded-lg">
          <h2 className="text-lg leading-none pl-4 font-raleway font-bold border-l-4 border-primary">More</h2>
          <main className=" pl-4 space-y-1 pt-5 divide-y-[1px]">
            <Link href="/about" className="flex items-center pr-2 py-2 justify-center">
              <div className="flex space-x-3 items-center flex-1">
                <Image src={"/icons/pabout.svg"} width={32} height={32} className="w-10 h-10" />
                <p className="font-lato text-lg">About</p>
              </div>
              <ChevronRight size={20} color="#767C8F" />
            </Link>
            <Link href="/orders#credit?tab=2" className="flex items-center pr-2 py-2 justify-center">
              <div className="flex space-x-3 items-center flex-1">
                <Image src={"/icons/plogout.svg"} width={32} height={32} className="w-10 h-10" />
                <p className="font-lato text-lg">Log out</p>
              </div>
              <ChevronRight size={20} color="#767C8F" />
            </Link>
          </main>
        </section>
      </main>

    </section>
  );
}
