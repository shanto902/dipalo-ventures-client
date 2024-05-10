import CustomTitle from '@/components/common/CustomTitle';
import PaddingContainer from '@/components/Layout/PaddingContainer';
import photo from '@/public/assets/fund-2/flag-portugal.jpg';
import Image from 'next/image';
import Link from 'next/link';
const GoldenVisa = () => {
  return (
    <PaddingContainer>
      <div className=" flex lg:flex-row flex-col border rounded-3xl overflow-hidden gap-5 my-10 drop-shadow bg-white">
        <Image
          className=" flex-1  max-h-96 object-center  object-cover"
          src={photo}
          placeholder="blur"
          alt="portugal-flag"
        />
        <div className=" flex-1 lg:self-center  px-10">
          <CustomTitle className=" text-left my-5">Golden Visa</CustomTitle>
          <p className="font-semibold">
            Portugal is a top-ranked country in which to live and invest.
            Investment in the Dipalo Heed Climate Tech Fund allows access to a
            stable political and social environment, a highly skilled workforce,
            an increasingly dynamic economy, and an attractive tax regime. On
            top of this, Portugal&apos;s Golden Visa program opens the
            opportunity to access the 27 EU countries
          </p>
          <Link href={'/funds/fund-2/golden-visa'}>
            <button className=" flex items-center text-sm mx-auto gap-2 mt-5 text-center border rounded   font-semibold shadow-md border-black border-opacity-30 py-2 px-8 m-5 hover:bg-dipalo z-20 text-black  transition-all duration-500 uppercase hover:text-white hover:border-dipalo">
              More Information
            </button>
          </Link>
        </div>
      </div>
    </PaddingContainer>
  );
};

export default GoldenVisa;
