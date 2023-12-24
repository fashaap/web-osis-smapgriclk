
import useScrollToTop from "../hooks/useScrollToTop";
import { Article } from "../pages/news/Article";


const NewsPageLayout = () => {
  useScrollToTop()
  return (
    <>
    
      <Article />
    </>
  );
};

export default NewsPageLayout;
