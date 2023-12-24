import { useParams } from "react-router-dom";
import { newsData } from "../../utils/data";
import { CardNewsDetail } from "../../components/ui/CardNewsDetail";
import useScrollToTop from "../../hooks/useScrollToTop";

const ArticleDetail = () => {
  const { id } = useParams();
  const index = [id - 1];

  useScrollToTop()
  return (
    <>
      <div className=" container max-w-4xl mx-auto  my-10 px-5 ">
        <div className="mb-5">
          <button className="bg-[#111727] text-white px-3 py-1 flex gap-1">
            kembali
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="white"
                />
                <path d="M9 22V12H15V22" stroke="white" />
              </svg>
            </span>
          </button>
        </div>
        <div className="h-64 mb-3">
          <img
            className="object-cover object-top w-full h-full"
            src={newsData[index].img}
            alt=""
          />
        </div>
        <h1 className="text-xl lg:text-2xl font-black mb-2">
          {newsData[index].title}
        </h1>
        <span className="text-md lg:text-lg text-justify">
          <p>{newsData[index].text}</p>
          <br />
          <p>{newsData[index].author}</p>
        </span>
        <div>
          <CardNewsDetail
            img_source={newsData[index].imageAll.img_source}
            img_source2={newsData[index].imageAll.img_source2}
            img_source3={newsData[index].imageAll.img_source3}
          />
        </div>
      </div>
    </>
  );
};

export default ArticleDetail;
