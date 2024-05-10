import AnimatedDiv from '@/components/common/AnimatedDiv';
import AnimatedPara from '@/components/common/AnimatedPara';
import CustomTitle from '@/components/common/CustomTitle';
import PaddingContainer from '@/components/Layout/PaddingContainer';

const Partnership = () => {
  type TPartnerShip = {
    mainText: string;
    subText: string;
  };
  const partnerShipCards: TPartnerShip[] = [
    {
      mainText: 'Dipalo Ventures: Fund Advisors',
      subText:
        'Advisory Committee will review potential investments and pass on recommended opportunities that meet the defined objectives and criteria of the fund ',
    },
    {
      mainText: 'Heed Capital: Fund Managers',
      subText:
        'Investment Committee with the responsibility to approve each investment proposal',
    },
  ];
  return (
    <PaddingContainer>
      <CustomTitle className="py-5">Partnership</CustomTitle>

      <AnimatedPara className=" text-center">
        A joint collaboration between Dipalo Ventures and Heed Capital, this
        cross-Atlantic partnership will capitalize on the XXX. Investments will
        be allocated into direct investments and a combination of Climate Tech
        funds <br />
        <span className=" text-dipalo">
          (60% in Portugal and 40% in the US)
        </span>
      </AnimatedPara>

      <div className=" flex md:flex-row flex-col my-10 items-center justify-center gap-10">
        {partnerShipCards.map((card, i) => (
          <AnimatedDiv
            className=" hover:bg-dipalo hover:text-white transition-all duration-500 border-2 border-dipalo rounded-2xl w-96 h-60 flex flex-col p-5 items-center"
            key={i}
            id={i}
          >
            <h4 className=" text-xl font-bold my-5">{card.mainText}</h4>
            <p className="text-pretty text-center font-semibold">
              {card.subText}
            </p>
          </AnimatedDiv>
        ))}
      </div>
    </PaddingContainer>
  );
};

export default Partnership;
