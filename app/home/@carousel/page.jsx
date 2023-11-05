import { getHomeCarouselImageUrls } from "@/app/queries/restaurant";
import Image from "next/image";
import Link from "next/link";

export default async function page() {
  const images = await getHomeCarouselImageUrls()
  return (
    <main className="space-x-2">
      <div className=" flex justify-start items-center overflow-hidden py-14 overflow-x-scroll  no-scrollbar  snap-x snap-mandatory ">
        {images.map((image, index) => (
          <Link href={image.link} className="w-full mx-4 min-w-[calc(100%_-_40px)] overflow-hidden h-fit rounded-lg ">
            <Image
              style={{ boxShadow: "0px 0px 19px 0px rgba(0, 0, 0, 0.25)" }}
              key={index}
              width={400} 
              height={225}
              className=" mx-auto object-contain object-center  snap-center"
              src={image.imageUrl}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}


