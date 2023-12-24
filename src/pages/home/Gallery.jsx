import { ButtonComp } from "../../components/ui/ButtonComp";
import { Carousel } from "../../components/ui/Carousel";
import { Header } from "../../components/ui/Header";

export const Gallery = () => {
  return (
    <div className="container mx-auto lg:my-[75px] ">
      <Header
        title={"Gallery"}
        text={
          "Berikut ini adalah dokumentasi kegiatan yang telah dilaksanakan oleh OSIS SMA PGRI Cicalengka :"
        }
      />
      <div className="h-full">
        <Carousel />
      </div>
      <div className="text-center">
        <ButtonComp link="/gallery" />
      </div>
    </div>
  );
};
