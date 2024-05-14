import { TFocusArea } from '@/components/types';
import Image from 'next/image';

const FocusAreaCard = ({ image, lists, title }: TFocusArea) => {
  return (
    <div className=" grid md:grid-cols-2 grid-cols-1   p-10 hover:shadow-xl hover:shadow-dipalo/50 transition-all duration-500  decoration-dipalo hover:border-dipalo border rounded-3xl bg-white">
      <div className="flex flex-col justify-around items-center ">
        <Image
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${image}`}
          alt={title}
          width={80}
          height={80}
        />
        <h3 className="text-lg text-center font-bold py-5">{title}</h3>
      </div>
      <ul className=" list-disc ml-5 space-y-1">
        {lists ? (
          lists.map((list, i) => (
            <li
              className="lg:text-base md:text-sm text-xs
          font-semibold "
              key={i}
            >
              {list.text}
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default FocusAreaCard;
