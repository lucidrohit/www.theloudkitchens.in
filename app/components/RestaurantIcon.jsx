import Image from "next/image";
import React from "react";
import dummyFood from "../../public/icons/dummyFood.png";

const RestaurantIcon = () => {
  return (
    <div className="flex flex-col mt-3">
      <div className="h-[82px] w-[82px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl flex items-center justify-center">
        <Image
          src="https://i.imgur.com/3vjidlG.jpg"
          height={78}
          width={78}
          className="border-white border-2 rounded-2xl"
        />
      </div>
      <h2 className="max-w-[75px] font-lato text-xs text-center font-semibold pt-1">
        Great Indian Thalis
      </h2>
    </div>
  );
};

export default RestaurantIcon;
