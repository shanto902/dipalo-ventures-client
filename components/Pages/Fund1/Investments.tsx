import PaddingContainer from '../../Layout/PaddingContainer';
import { investment } from './const';
import InvestmentsCard from './InvestmentsCard';
import CustomTitle from '../../common/CustomTitle';

const Investments = () => {
  return (
    <PaddingContainer className=" mb-20">
      <CustomTitle>INVESTMENTS</CustomTitle>
      <div className=" grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-5 mt-20 place-content-center">
        {investment.map((invest) => (
          <InvestmentsCard key={invest.id} id={invest.id} text={invest.text} />
        ))}
      </div>
    </PaddingContainer>
  );
};

export default Investments;
