import { Form } from "../components/form/Form";
import { Header } from "../components/ui/Header";
import { AboutUs } from "../pages/home/AboutUs";
import { Gallery } from "../pages/home/Gallery";
import { LandingPage } from "../pages/home/LandingPage";
import { News } from "../pages/home/News";

const HomePageLayout = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <LandingPage />
      <div className="max-w-6xl mx-auto">
        <Header text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis vel neque ducimus perspiciatis perferendis aut minus quas repellendus quo, assumenda soluta modi illum optio, natus tempore accusamus aliquid! Cumque"} title={"About Us"}/>
        <AboutUs />

      </div>
      <News />
      <Gallery />
      <div className="flex justify-center bg-[#111727]">
        <div className="container mx-auto p-10  lg:w-[50%] ">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default HomePageLayout;
