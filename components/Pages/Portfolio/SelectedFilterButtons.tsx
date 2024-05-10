import AnimatedDiv from '@/components/common/AnimatedDiv';
import { AnimatePresence } from 'framer-motion';
import { MdOutlineClose } from 'react-icons/md';
interface SelectedFilterButtonsProps {
  items: string[];
  onClick: (item: string) => void;
}

export const SelectedFilterButtons = ({
  items,
  onClick,
}: SelectedFilterButtonsProps) => (
  <>
    <AnimatePresence>
      {items.map((item, index) => (
        <AnimatedDiv animationStyle="down" key={index} id={index}>
          <button
            className="bg-gray-50 border group border-gray-300 text-gray-900 text-sm rounded-3xl flex gap-2 hover:bg-red-500 hover:text-white  justify-between items-center p-2.5 "
            onClick={() => onClick(item)}
          >
            {item}

            <MdOutlineClose className=" group-hover:block hidden" />
          </button>
        </AnimatedDiv>
      ))}
    </AnimatePresence>
  </>
);
