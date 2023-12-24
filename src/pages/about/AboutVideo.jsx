import { ButtonComp } from "../../components/ui/ButtonComp";

export const AboutVideo = () => {
  return (
    <div className="container mx-auto max-w-5xl py-10 px-5 text-center flex flex-col justify-center items-center">
      <div className=" w-full  mb-10">
        <h1 className="text-xl lg:text-2xl font-black mb-10">
          Profile Sekolah
        </h1>
        <p className="text-justify sm:text-center lg:indent-4">
          Profile smapgriclk Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Provident eligendi dolore modi mollitia non repellat nemo,
          officia, dicta quaerat aut enim quasi voluptatibus aliquam porro
          illum, neque pariatur delectus.
        </p>
      </div>
      <div className="w-full text-center flex justify-center">
        <div className=" w-full h-64 sm:h-96">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/qG1okghxfGA?si=-JWvKj_M5jdPW0IQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="mt-10">
        <ButtonComp link="/about" text={"See More"}/>
      </div>
    </div>
  );
};
