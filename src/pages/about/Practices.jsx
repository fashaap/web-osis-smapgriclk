import { useEffect, useState } from "react";
import { CardPractices } from "../../components/ui/CardPractices";

export const Practices = () => {
  const [fixed, setFixed] = useState(false);

  const showFixed = () => {
    if (window.innerWidth <= 640) {
      setFixed(false);
    } else {
      setFixed(true);
    }
  };

  useEffect(() => {
    showFixed();
  }, []);

  window.addEventListener("resize", showFixed);


  const practicesData = [
    {
      text: "Menyelenggarakan pendidikan dengan berlandaskan ilmu agama.",
    },
    {
      text: "Menyelenggarakan pendidikan dengan berlandaskan ilmu agama.",
    },
    {
      text: "Menyelenggarakan pendidikan dengan berlandaskan ilmu agama.",
    },
    {
      text: "Menyelenggarakan pendidikan dengan berlandaskan ilmu agama.",
    },
  ];

  return (
    <div className="flex flex-col  md:w-full text-center md:text-left justify-between px-7 md:px-4  sm:flex-row gap-5">
      <div className="sm:w-[50%] lg:w-[30%] font-serif font-medium ">
        <h1 className="text-2xl font-serif font-bold  ">VISI</h1>
        <p className="text-justify ">
          menjadikan OSIS SMA PGRI Cicalengka sebagai wadah siswa/i menggali
          minat, bakat serta potensi yang dimiliki. Serta menjadikan OSIS SMA
          PGRI Cicalengka sebagai organisasi yang aktif dan terpelajar, sehingga
          dapat menampung aspirasi siswa/i dalam bidang akademik maupun non
          akademik dengan berlandaskan ilmu agama.
        </p>
      </div>
      <div className="md:w-[50%] lg:w-[70%]">
        {fixed === true ? (
          <h1 className="text-2xl border-b-2 border-black mb-3 font-serif font-bold">
            MISI
          </h1>
        ) : null}
        <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
          {practicesData.map((data, index) => (
            <CardPractices key={index} text={data.text} />
          ))}
        </div>
      </div>
    </div>
  );
};
