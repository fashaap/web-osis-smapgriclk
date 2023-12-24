import { useParams } from "react-router-dom";
import { bidangData } from "../../utils/data";
import { Header2 } from "../../components/ui/Header2";
import { CardBidang } from "../../components/ui/CardBidang";

import useScrollToTop from "../../hooks/useScrollToTop";

const BidangDetail = () => {
  const { grade } = useParams(); 
  const selectedBidang = bidangData.find((data) => data.grade === grade); 

  useScrollToTop()

  const renderMembers = () => {
    const members = selectedBidang.people;
    const memberKeys = Object.keys(members);

    return memberKeys.map((memberKey) => {
      const member = members[memberKey];

      return (
        <CardBidang
          key={memberKey}
          grade={member.grade}
          name={member.name}
          description={member.text}
          img={member.img}
        />
      );
    });
  };

  return (
    <>
      <Header2 text={selectedBidang.grade} />
      <section>
        <div className="container mx-auto px-2">
          <div className="w-full h-32 lg:h-64 my-10 bg-gray-500/30">
            <img
              className="w-full h-full object-cover object-top "
              src={selectedBidang.img}
              alt="gambar"
            />
          </div>
        </div>
        <div className="container mx-auto px-2">{renderMembers()}</div>
      </section>
    </>
  );
};

export default BidangDetail;
