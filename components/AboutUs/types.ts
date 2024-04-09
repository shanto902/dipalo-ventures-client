
  
  export type TPriorInvestments = {
    id: number,
    logo: string,
    name : string,
    status: 'Exit' | 'Inactive' | 'Ongoing'
    link: string
  }
  
  export type TTeam = {
    id: number;
    image: string;
    name: string;
    designation: string;
    bio: string;
    linkedinLink: string;
    priorInvestments?: TPriorInvestments[]
  }