import AnimatedDiv from '@/components/common/AnimatedDiv';
import CustomTitle from '@/components/common/CustomTitle';
import PaddingContainer from '@/components/Layout/PaddingContainer';

const InternsList = () => {
  const people = [
    { id: 1, name: 'Taqiul Ghani' },
    { id: 2, name: 'Kylie McMillin' },
    { id: 3, name: 'Mei He' },
    { id: 4, name: 'Rawnak Wasi' },
    { id: 5, name: 'Pallavi Abraham' },
    { id: 6, name: 'Mashiat Rabbani' },
    { id: 7, name: 'Shahaan Mirza' },
    { id: 8, name: 'Jasmine Majdpour' },
    { id: 9, name: 'Samarth Puthanmadhom' },
    { id: 10, name: 'Will Blanchard' },
    { id: 11, name: 'Jingchen Jiang' },
    { id: 12, name: 'Hassan Assaad' },
    { id: 13, name: 'Lingzhi Zhang' },
    { id: 14, name: 'Andres Gosselin' },
    { id: 15, name: 'Ryank Sakwa' },
    { id: 16, name: 'Jay Kim' },
    { id: 17, name: 'Nancy Geduld' },
    { id: 18, name: 'Alyssa Boutelle' },
    { id: 19, name: 'Nikki Cope' },
    { id: 20, name: 'Sam Hansen' },
    { id: 21, name: 'David Jones' },
    { id: 22, name: 'Munir Tawfique' },
    { id: 23, name: 'Akanksha Agrawal' },
    { id: 24, name: 'Sanchit Goyal' },
    { id: 25, name: 'Raj Vuta' },
    { id: 26, name: 'Jessica Wynne' },
    { id: 27, name: 'Adam Wolford' },
    { id: 28, name: 'Lavanya Raj Ram Kumar' },
  ];
  return (
    <PaddingContainer className="px-20">
      <CustomTitle>Interns</CustomTitle>
      <ul className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10 font-semibold text-lg ">
        {people.map((intern, index) => (
          <AnimatedDiv
            id={index}
            delay={0.05}
            className={`text-center ${index >= people.length - 1 ? 'col-span-3' : ''}`}
            key={intern.id}
          >
            {intern.name}
          </AnimatedDiv>
        ))}
      </ul>
    </PaddingContainer>
  );
};

export default InternsList;
