import CustomTitle from '@/components/common/CustomTitle';
import PaddingContainer from '@/components/Layout/PaddingContainer';
import { FaUser, FaUserGroup } from 'react-icons/fa6';

const faqCardText = [
  {
    mainText: 'Founders',
    link: '#',
    icon: <FaUser />,
  },
  {
    mainText: 'Investors',
    link: '#',
    icon: <FaUserGroup />,
  },
];
const FAQ = () => {
  return (
    <PaddingContainer>
      <CustomTitle className="my-20">Frequently Asked Questions</CustomTitle>

      <div className=" flex md:flex-row flex-col items-center  justify-center gap-20">
        {faqCardText.map((card, i) => (
          <div key={i} className="relative group">
            <div className=" pt-14 px-10  border rounded-2xl lg:w-96 md:w-80 w-72  h-60 group-hover:bg-dipalo transition-all duration-500 group-hover:text-white  group-hover:shadow-lg shadow ">
              <h4 className=" text-xl font-bold">{card.mainText}</h4>
              <a className=" hover:underline my-2" href={card.link}>
                Click to know more
              </a>
            </div>
            <div className="absolute -top-10 left-10 text-4xl  size-20 flex justify-center border-2 items-center rounded-full p-4 text-dipalo bg-white border-dipalo group-hover:drop-shadow-md drop-shadow-none transition-all duration-500">
              {card.icon}
            </div>
          </div>
        ))}
      </div>
    </PaddingContainer>
  );
};

export default FAQ;
