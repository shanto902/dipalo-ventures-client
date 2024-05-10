import AnimatedDiv from '@/components/common/AnimatedDiv';
import PaddingContainer from '@/components/Layout/PaddingContainer';

const GoogleMap = () => {
  return (
    <PaddingContainer>
      <AnimatedDiv className="overflow-visible">
        <iframe
          className="w-full my-10 rounded-3xl h-[400px] shadow"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.2861163475286!2d-87.67022412354062!3d41.88670346487494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d5531f03633%3A0x733891b95b9b87df!2s1623%20W%20Fulton%20St%20%23237%2C%20Chicago%2C%20IL%2060612%2C%20USA!5e0!3m2!1sen!2sbd!4v1715301805924!5m2!1sen!2sbd"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </AnimatedDiv>
    </PaddingContainer>
  );
};

export default GoogleMap;
