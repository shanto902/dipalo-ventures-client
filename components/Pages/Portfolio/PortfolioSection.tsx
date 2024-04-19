'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import { filterCompanies } from './filterCompany';
import PortfolioCard from '../../common/Cards/PortfolioCard';
import { SelectedFilterButtons } from './SelectedFilterButtons';
import { TCompany } from '@/components/types';
import CustomTitle from '@/components/common/CustomTitle';
import SelectWithMotion from './SelectWithMotion';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioSection = ({ companies }: { companies: TCompany[] }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] =
    useState<TCompany[]>(companies);

  useEffect(() => {
    const filteredCompanies = filterCompanies(
      selectedCategories,
      selectedStates,
      selectedStages,
      companies
    );
    setSelectedCompanies(filteredCompanies);
  }, [selectedCategories, selectedStates, selectedStages, companies]);

  const handleFilterChange = (
    value: string,
    setSelectedFilter: React.Dispatch<React.SetStateAction<string[]>>,
    selectedFilter: string[]
  ) => {
    if (!selectedFilter.includes(value)) {
      setSelectedFilter([...selectedFilter, value]);
    }
  };

  const removeSelectedFilter = (
    value: string,
    setSelectedFilter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelectedFilter((selectedFilter) =>
      selectedFilter.filter((filter) => filter !== value)
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedStates([]);
    setSelectedStages([]);
  };

  return (
    <>
      <PaddingContainer>
        <CustomTitle>Portfolio</CustomTitle>
        <div className="flex lg:gap-6 gap-2 md:gap-4 mt-10">
          {/* Category selection */}
          <SelectWithMotion
            selectedOption={selectedCategories}
            companies={companies}
            dropdownType="Category"
            handleOptionChange={(e) =>
              handleFilterChange(
                e.target.value,
                setSelectedCategories,
                selectedCategories
              )
            }
            key={'Category'}
          />

          {/* Stage selection */}
          <SelectWithMotion
            selectedOption={selectedStages}
            companies={companies}
            dropdownType="Stage"
            handleOptionChange={(e) =>
              handleFilterChange(
                e.target.value,
                setSelectedStages,
                selectedStages
              )
            }
            key={'Stage'}
          />

          {/* State selection */}
          <SelectWithMotion
            selectedOption={selectedStates}
            companies={companies}
            dropdownType="State"
            handleOptionChange={(e) =>
              handleFilterChange(
                e.target.value,
                setSelectedStates,
                selectedStates
              )
            }
            key={'State'}
          />
        </div>

        <hr className="mt-10" />

        <div className="flex gap-2 mt-5 flex-wrap">
          <SelectedFilterButtons
            items={selectedCategories}
            onClick={(category) =>
              removeSelectedFilter(category, setSelectedCategories)
            }
          />
          <SelectedFilterButtons
            items={selectedStages}
            onClick={(stage) => removeSelectedFilter(stage, setSelectedStages)}
          />
          <SelectedFilterButtons
            items={selectedStates}
            onClick={(state) => removeSelectedFilter(state, setSelectedStates)}
          />
          {selectedCategories.length > 0 ||
          selectedStages.length > 0 ||
          selectedStates.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
            
                exit={{ opacity: 0 }}
                className="text-white px-4 py-2  bg-dipalo rounded-3xl hover:bg-red-500 transition-colors duration-300"
                onClick={clearAllFilters}
              >
                Clear All Filters
              </motion.button>
            </AnimatePresence>
          ) : null}
        </div>

        <div className="mt-5"></div>

        {/* Display filtered companies */}
        <div>
          {selectedCompanies.length > 0 ? (
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 h-full my-10">
              {selectedCompanies.map((company, index) => (
                <PortfolioCard
                  key={index}
                  companyName={company.companyName}
                  logo={company.logo}
                  category={''}
                  state={''}
                  stage={''}
                  websiteLink={''}
                />
              ))}
            </div>
          ) : (
            <p className="text-center py-10 text-lg font-semibold">
              No companies found
            </p>
          )}
        </div>
      </PaddingContainer>
    </>
  );
};

export default PortfolioSection;
