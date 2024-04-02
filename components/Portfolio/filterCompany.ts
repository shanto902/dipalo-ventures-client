import { companies } from "./const";
import { TCompany } from "./types";

// Function to filter companies based on selected category, state, or stage
export const filterCompanies = (selectedCategory: string, selectedState: string, selectedStage: string) => {
    // Filtered companies array
    let filteredCompanies = companies.filter(company => true); // Keeping all companies initially

    // If a category is selected, filter companies by category
    if (selectedCategory) {
        filteredCompanies = filteredCompanies.filter(company => company.category === selectedCategory);
    }

    // If a state is selected, filter companies by state
    if (selectedState) {
        filteredCompanies = filteredCompanies.filter(company => company.state === selectedState);
    }

    // If a stage is selected, filter companies by stage
    if (selectedStage) {
        filteredCompanies = filteredCompanies.filter(company => company.stage === selectedStage);
    }

    // Return the filtered companies
    return filteredCompanies as TCompany[];
}

// Example usage:

