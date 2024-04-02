"use client";
import React, { useEffect, useState } from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import { filterCompanies } from "./filterCompany";
import { companies } from "./const";
import PortfolioCard from "../common/Cards/PortfolioCard";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedStage, setSelectedStage] = useState("");
  const [selectedCompanies, setSelectedCompanies] = useState(companies);

  useEffect(() => {
    const companies = filterCompanies(
      selectedCategory,
      selectedState,
      selectedStage
    );
    setSelectedCompanies(companies);
  }, [selectedCategory, selectedState, selectedStage]);

  return (
    <>
      <div className="bg-[#FFF9EE] w-full  py-16 ">
        <PaddingContainer>
          <h2 className=" text-dipalo text-center font-semibold text-5xl underline decoration-dipalo  py-5 underline-offset-[15px] uppercase">
            Portfolio
          </h2>
         
          <div className=" flex gap-10 mt-10">
            
            {/* Dropdowns for selecting category, state, and stage */}
            <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
              <select className=" text-lg font-semibold"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
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
              {selectedCategory && (
                <button className=" ml-2 font-bold" onClick={() => setSelectedCategory("")}>X</button>
              )}
            </div >
            <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
              <select
               className=" text-lg font-semibold"
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
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
              {selectedStage && (
                <button className=" ml-2 font-bold" onClick={() => setSelectedStage("")}>X</button>
              )}
            </div>

            <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
              <select
               className=" text-lg font-semibold"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
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
              {selectedState && (
                <button className=" ml-2 font-bold" onClick={() => setSelectedState("")}>X</button>
              )}
            </div>
          </div>
          <hr className=" mt-10" />
          {/* Display filtered companies */}
          <div>
            {selectedCompanies.length > 0 ? (
              <div className=" grid grid-cols-4 gap-5 h-full my-10">
                {selectedCompanies.map((company, index) => (
                  <PortfolioCard key={index} name={company.name} logo={company.logo} />
                ))}
              </div>
            ) : (
              <p className=" text-center py-10 text-lg font-semibold">No companies found</p>
            )}
          </div>
        </PaddingContainer>
      </div>
    </>
  );
};

export default PortfolioSection;
