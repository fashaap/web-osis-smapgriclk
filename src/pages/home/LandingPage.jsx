import { NavLink } from "react-router-dom";
import { IconLink } from "../../components/ui/IconLink";

export const LandingPage = () => {
  return (
    <div className="wrap  text-white">
      <div className="bg-landingpageBg2  object-cover h-screen  bg-center">
        <div className=" lg:text-2xl bg-[#111727] h-screen opacity-90 flex items-center ">
          <div className="container mx-auto px-5 lg:mx-[15%]  flex flex-col gap-5">
            <div className="title font-black flex flex-col gap-2 ">
              <h1 className="text-2xl">WELCOME</h1>
              <h1 className=" text-4xl lg:text-5xl">
                OSIS SMA PGRI Cicalengka
              </h1>
              <h1 className="lg:text-xl">
                Karakter Unggul Aktif Tangguh (KUAT!)
              </h1>
            </div>
            <div className="description text-lg w-fit md:w-[50%]">
              OSIS adalah organisasi Intra Sekolah yang bertugas sebagai
              penyelenggara kegiatan-kegiatan yang ada di SMA PGRI Cicalengka.
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-800  rounded-none font-medium text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                <NavLink to="/aboutUs">
                  <span className="lg:text-lg">Selengkapnya</span>
                </NavLink>
              </button>
            </div>
            <div className="text-lg">
              <p> www.osis.smapgriclk.sch.id</p>
            </div>
            <IconLink />
          </div>
        </div>
      </div>
    </div>
  );
};
