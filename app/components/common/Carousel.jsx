"use client"

import { useEffect, useState } from "react";
// import {
//     ChevronRight,
//     ChevronLeft,
// } from "lucide-react";
import { useRouter } from "next/navigation";
// import Image from "next/image";
export default function Carousel({ slides }) {
    let [current, setCurrent] = useState(0);
    const router = useRouter()

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000);
        return () => clearInterval(interval);
    }, [current]);


    return (
        <>
            <div
                onClick={() => router.push(slides[current].link)}
                className={`flex transition ease-out duration-40  space-x-5`}
                style={{
                    transform: `translateX(-${current * 105}%)`,
                }}
            >
                {slides.map((s) => {
                    return <img src={s.imageUrl} width={720} height={360} className="h-fit px-5 mx-auto aspect-[720/360]" />;
                })}
            </div>
            {/* 
      <div className="absolute top-0 -left-[10px]  h-full w-full justify-between items-center flex text-white px-8 shadow shadow-black text-3xl">
        <button onClick={previousSlide}>
          <ChevronLeft size={40} />
        </button>
        <button onClick={nextSlide}>
          <ChevronRight size={40} />
        </button>
      </div> */}

            <div className="absolute -bottom-1 -left-[10px] py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrent(i);
                            }}
                            key={"circle" + i}
                            className={`rounded-full w-[7px] h-[7px] cursor-pointer transition-all  ${i != current ? "bg-[#DDDDDD]" : "bg-primary w-[20px]"
                                }`}
                        ></div>
                    );
                })}
            </div>
        </>
    );
}