import { NavLink } from "react-router-dom";
import { Maps } from "../../components/Maps";

export const Addres = () => {
  return (
    <div className="container mx-auto max-w-5xl py-10 px-4 ">
      <div className="bg-white  flex flex-col sm:flex-row">
        <div className="w-full">
          <Maps />
        </div>
        <div className="w-full md:w-[50%]  p-3">
          <div className="">
            <h1 className="text-xl font-bold">
              Alamat OSIS SMAPGRI Cicalengka
            </h1>
            <p className="mb-3">
              Jl. Raya Cicalengka-Majalaya KM 0.5 Cikuya Kec. Cicalengka 40395
            </p>
            <p className="mb-3">info@osis.smapgriclk.sch.id</p>
            <p className="mb-3">(022) 7948702</p>
          </div>

          <div className="mt-5">
            <h1 className="text-xl font-bold">Social Media</h1>
            <div>
              <h6 className="font-semibold">Instagram:</h6>
              <NavLink>
                <span className="text-blue-500 underline">
                  osis.smapgricicalengka
                </span>
              </NavLink>
            </div>
            <div>
              <h6 className="font-semibold">Youtube:</h6>
              <NavLink>
                <span className="text-blue-500 underline">
                  osis.smapgricicalengka
                </span>
              </NavLink>
            </div>
            <div>
              <h6 className="font-semibold">Twitter:</h6>
              <NavLink>
                <span className="text-blue-500 underline">
                  osis.smapgricicalengka
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
