import useScrollToTop from "../../hooks/useScrollToTop";

export const AboutUsPage = () => {
  useScrollToTop()
  return (
    <div className="my-10 mt-5 container mx-auto max-w-5xl px-5">
      <div className="w-full text-center flex flex-col justify-center">
        <div className=" w-full h-64 sm:h-[50vh] mb-5">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/OOnKJEWVpog?si=3TyX6pIFMg4hKqw1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div>
          <h1 className="text-xl lg:text-3xl font-black mb-5">OSIS SMA PGRI CICALENGKA</h1>
          <p className="text-justify indent-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
