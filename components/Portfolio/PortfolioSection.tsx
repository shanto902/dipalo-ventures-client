'use client'
import React, { useEffect, useState } from 'react';
import PaddingContainer from '../Layout/PaddingContainer';
import { filterCompanies } from './filterCompany';
import { companies } from './const';

const PortfolioSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedStage, setSelectedStage] = useState("");

    useEffect(() => {
        const companies = filterCompanies(selectedCategory, selectedState, selectedStage);

    }, [selectedCategory, selectedState, selectedStage]);

    return (
        <>
            <div className="bg-[#FFF9EE] w-full h-[900px] py-16 underline decoration-dipalo underline-offset-8">
                <PaddingContainer className="text-center text-5xl font-bold text-dipalo leading-[76px] uppercase">
                    <h2>Portfolio</h2>
                </PaddingContainer>
                <div>
                    {/* Dropdowns for selecting category, state, and stage */}
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        { companies.map((company, i) => (
                                <option key={i} value={company.category}>{company.category}</option>
                            )) 
    
                        }
                    </select>


                </div>
                
                {/* Display filtered companies */}
                <div>
                    {filterCompanies.length > 0 ? (
                        <ul>
                            {companies.map((company, index) => (
                                <li key={index}>
                                    <p>{company.name}</p>
                                    {/* Render other details of the company as needed */}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No companies found.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default PortfolioSection;
