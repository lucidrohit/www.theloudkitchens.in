import Carousel from "@/app/components/common/Carousel";
import { getHomeCarouselImageUrls } from "@/app/queries/restaurant";

export default async function page() {
  const images = await getHomeCarouselImageUrls()
  return (
    <main className="space-x-2 overflow-hidden relative py-10 pb-16">
     <Carousel slides={images} />
    </main>
  );
}


