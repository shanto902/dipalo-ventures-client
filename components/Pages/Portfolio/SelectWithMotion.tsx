import { motion } from 'framer-motion';
import { FaAngleDown } from "react-icons/fa";
interface Company {
  state: string;
  stage: string;
  category: string;
  [key: string]: string; // Index signature to allow accessing properties by string keys
}

interface Props {
  companies: Company[];
  selectedOption: string[];
  handleOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  dropdownType: 'Category' | 'State' | 'Stage';
}

const SelectWithMotion: React.FC<Props> = ({
  companies,
  selectedOption,
  handleOptionChange,
  dropdownType,
}) => {
  const filterKey = dropdownType.toLowerCase();

  const filteredCompanies = companies.filter(
    (company, index, self) =>
      self.findIndex((c) => c[filterKey] === company[filterKey]) === index
  );

  return (
    <motion.select
      className="appearance-none bg-white border cursor-pointer min-w-[100px]   border-neutral-400 text-base rounded-3xl px-2 py-2 font-semibold text-center "
      value=""
      onChange={handleOptionChange}
      initial={{  backgroundColor: '#FFFFFF', color: '#000000' }}
      whileHover={{
        backgroundColor: '#FFB012',
        color: '#FFFFFF',
      }}
      transition={{ scale: { type: 'spring', stiffness: 100 } }}
    
    >
      <option className=" hidden" value="">
        {`${dropdownType} ↓`}
      </option>
      {filteredCompanies.map((company, i) => (
        <motion.option key={i} value={company[filterKey]}>
          {company[filterKey]}
          {selectedOption.includes(company[filterKey]) ? '   ✔ ' : ''}
        </motion.option>
      ))}
    </motion.select>
  );
};

export default SelectWithMotion;
