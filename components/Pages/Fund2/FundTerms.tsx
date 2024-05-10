import CustomTitle from '@/components/common/CustomTitle';
import PaddingContainer from '@/components/Layout/PaddingContainer';
import FundTermCard from './FundTermCard';

const FundTerms = () => {
  const fundTerms = [
    {
      id: 1,
      text: 'Expected Deployment',
    },
    {
      id: 2,
      text: 'Management Fee',
    },
    {
      id: 3,
      text: 'Hurdle Rate',
    },
    {
      id: 4,
      text: 'Carry',
    },
    {
      id: 5,
      text: 'Target Close',
    },
    {
      id: 6,
      text: 'Target Close',
    },
  ];
  return (
    <PaddingContainer className="my-10">
      <CustomTitle>Fund Terms</CustomTitle>
      <div className="  grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-5 mt-20 place-content-center">
        {fundTerms.map((card) => (
          <FundTermCard id={card.id} text={card.text} key={card.id} />
        ))}
      </div>
    </PaddingContainer>
  );
};

export default FundTerms;
