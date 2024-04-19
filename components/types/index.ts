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

export type TCaseStudy = {
  id?: string;
  status?: string;
  companyName: string;
  companyLogo: string;
  companyLink: string;
  bannerPicture: string;
  overview: string;
  solution: string;
};

export type TMediumPost = {
  title: string;
  image: string | undefined;
  description: string;
  publishedDate: string;
  postLink: string;
};

export type TYoutubePlaylist = {
  id: string;
  title: string;
  publishedAt: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  video: string;
};

export type TFounderVideo = {
  id: string;
  name: string;
  companyLogo: string;
  companyName: string;
  videoLink: string;
};

export type TCompany = {
  id?: string;
  companyName: string;
  logo: string;
  state: string;
  stage: string;
  category: string;
  websiteLink: string;
};
