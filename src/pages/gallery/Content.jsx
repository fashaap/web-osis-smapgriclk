import { CardLayout } from "../../layouts/CardLayout";

import { CardComp } from "../../components/ui/CardComp";
import useScrollToTop from "../../hooks/useScrollToTop";
import { galleryData } from "../../utils/data";

export const Content = () => {


  useScrollToTop()
  return (
    <div className="flex flex-col gap-10 h-full mb-10  container max-w-7xl mx-auto">
      <div className="my-10">
        <CardLayout>
          {galleryData.map((data, index) => (
            <CardComp
              img={data.img}
              title={data.title}
              text={data.text}
              link={data.link}
              author={data.author}
              key={index}
            />
          ))}
        </CardLayout>
      </div>
    </div>
  );
};
