"use client";
import React, { useEffect, useState } from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import { filterCompanies } from "./filterCompany";
import { companies } from "./const";
import PortfolioCard from "../common/Cards/PortfolioCard";
import { SelectedFilterButtons } from "./SelectedFilterButtons";

const PortfolioSection = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState(companies);

  useEffect(() => {
    const filteredCompanies = filterCompanies(
      selectedCategories,
      selectedStates,
      selectedStages
    );
    setSelectedCompanies(filteredCompanies);
  }, [selectedCategories, selectedStates, selectedStages]);

  const removeSelectedCategory = (category: string) => {
    setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
  };

  const removeSelectedState = (state: string) => {
    setSelectedStates(selectedStates.filter((st) => st !== state));
  };

  const removeSelectedStage = (stage: string) => {
    setSelectedStages(selectedStages.filter((stg) => stg !== stage));
  };

  return (
    <>
      <div className="bg-[#FFF9EE] w-full  py-16 ">
        <PaddingContainer>
          <h2 className="text-dipalo text-center font-semibold text-5xl underline decoration-dipalo  py-5 underline-offset-[15px] uppercase">
            Portfolio
          </h2>

          <div className="flex gap-10 mt-10">
            {/* Category selection */}
            <div className="flex gap-2">
              <select
                className="text-lg font-semibold"
                value=""
                onChange={(e) =>
                  setSelectedCategories([...selectedCategories, e.target.value])
                }
              >
                <option value="">All Categories</option>
                {companies
                  .filter(
                    (company, index, self) =>
                      self.findIndex((c) => c.category === company.category) ===
                      index
                  )
                  .map((company, i) => (
                    <option key={i} value={company.category}>
                      {company.category}
                    </option>
                  ))}
              </select>
            </div>

            {/* Stage selection */}
            <div className="flex gap-2">
              <select
                className="text-lg font-semibold"
                value=""
                onChange={(e) =>
                  setSelectedStages([...selectedStages, e.target.value])
                }
              >
                <option value="">All Stages</option>
                {companies
                  .filter(
                    (company, index, self) =>
                      self.findIndex((c) => c.stage === company.stage) === index
                  )
                  .map((company, i) => (
                    <option key={i} value={company.stage}>
                      {company.stage}
                    </option>
                  ))}
              </select>
            </div>

            {/* State selection */}
            <div className="flex gap-2">
              <select
                className="text-lg font-semibold"
                value=""
                onChange={(e) =>
                  setSelectedStates([...selectedStates, e.target.value])
                }
              >
                <option value="">All States</option>
                {companies
                  .filter(
                    (company, index, self) =>
                      self.findIndex((c) => c.state === company.state) === index
                  )
                  .map((company, i) => (
                    <option key={i} value={company.state}>
                      {company.state}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <hr className="mt-10" />

          <div className=" flex gap-2">
          <SelectedFilterButtons
              items={selectedCategories}
              onClick={removeSelectedCategory}
            />
            <SelectedFilterButtons
              items={selectedStages}
              onClick={removeSelectedStage}
            />
            <SelectedFilterButtons
              items={selectedStates}
              onClick={removeSelectedState}
            />
          </div>

          {/* Display filtered companies */}
          <div>
            {selectedCompanies.length > 0 ? (
              <div className="grid grid-cols-4 gap-5 h-full my-10">
                {selectedCompanies.map((company, index) => (
                  <PortfolioCard
                    key={index}
                    name={company.name}
                    logo={company.logo}
                    category={""}
                    state={""}
                    stage={""}
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
      </div>
    </>
  );
};

export default PortfolioSection;
