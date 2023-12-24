import { CardStructure } from "../../components/ui/CardStructure";
import { CardLayout } from "../../layouts/CardLayout";
import { bidangData } from "../../utils/data";

export const Structure = () => {


  return (
    <>
      <CardLayout>
        {bidangData.map((data) => (
          <CardStructure
            key={data.id}
            header={data.grade}
            text={data.text}
            img={data.cardImg}
            link={`/aboutUs/kepengurusan/${data.grade}`}
          />
        ))}
      </CardLayout>
    </>
  );
};
