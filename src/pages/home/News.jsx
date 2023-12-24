import { ButtonComp } from "../../components/ui/ButtonComp";
import { CardNews } from "../../components/ui/CardNews";

import { Header } from "../../components/ui/Header";
import { CardLayout } from "../../layouts/CardLayout";
import { newsData } from "../../utils/data";

export const News = () => {

  return (
    <div className="bg-[#111727]">
      <div className=" container max-w-6xl mx-auto my-10  text-white flex flex-col items-center gap-10">
        <Header
          title={"News"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          }
        />
        <CardLayout>
          {newsData.slice(0, 3).map((data) => (
            <CardNews
              key={data.id}
              img={data.img}
              title={data.title}
              text={data.text}
              subtitle={data.subtitle}
              path={data.id}
            >
            </CardNews>
          ))}
        </CardLayout>
        <ButtonComp link={"/news"}/>
      </div>
    </div>
  );
};
