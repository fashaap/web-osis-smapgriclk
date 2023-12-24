import { CardNews2 } from "../../components/ui/CardNews2";
import { Header2 } from "../../components/ui/Header2";
import { newsData } from "../../utils/data";

export const Article = () => {
  return (
    <>
      <Header2 text={"News"}/>
      <div className="my-10 flex flex-col px-10 container max-w-6xl mx-auto gap-10">
        {newsData.map((data) => (
          <CardNews2
            key={data.id}
            img={data.img}
            title={data.title}
            text={data.text}
            path={data.id}
            author={data.author}
          />
        ))}
      </div>
    </>
  );
};
