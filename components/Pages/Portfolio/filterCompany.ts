import { TCompany } from '@/components/types';

// Function to filter companies based on selected category, state, or stage
export const filterCompanies = (
  selectedCategories: string[],
  selectedStates: string[],
  selectedStages: string[],
  companies: TCompany[]
) => {
  // Filtered companies array
  let filteredCompanies = companies;

  // Filter companies by selected categories
  if (selectedCategories.length > 0) {
    filteredCompanies = filteredCompanies.filter((company) =>
      selectedCategories.includes(company.category)
    );
  }

  // Filter companies by selected states
  if (selectedStates.length > 0) {
    filteredCompanies = filteredCompanies.filter((company) =>
      selectedStates.includes(company.state)
    );
  }

  // Filter companies by selected stages
  if (selectedStages.length > 0) {
    filteredCompanies = filteredCompanies.filter((company) =>
      selectedStages.includes(company.stage)
    );
  }

  // Return the filtered companies
  return filteredCompanies;
};
