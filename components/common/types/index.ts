export type TPriorInvestments = {
  id: number;
  companyLogo: string;
  companyName: string;
  status: 'exit' | 'inactive' | 'ongoing';
  companyLink: string;
};

export type TTeam = {
  id?: string;
  serialNo: number;
  status?: string;
  name: string;
  photo: string;
  designation: string;
  linkedinLink: string;
  bio: string;
  priorInvestments?: TPriorInvestments[];
};

export type TResidencyAdvisor = {
  id?: string;
  status?: string;
  name: string;
  photo: string;
  designation: string;
  linkedinLink: string;
  companyName: string;
};
