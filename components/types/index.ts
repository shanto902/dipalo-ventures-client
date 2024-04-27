export type TPriorInvestments = {
  id: number;
  companyLogo: string;
  companyName: string;
  status: 'exit' | 'inactive' | 'ongoing';
  companyLink: string;
};

export type TTeam = {
  id?: string;
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
  poster: string;
  designation: string;
};

export type TCompany = {
  id?: string;
  companyName: string;
  logo: string;
  state: string;
  stage: string;
  category: string;
  websiteLink: string;
  shortDescription: string;
  status: string;
};

export type TBenefit = {
  id?: string;
  categoryTitle: string;
  icon: string;
  items: [
    {
      text: string;
    },
  ];
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

export type TTestimonial = {
  id?: string;
  status?: string;
  name: string;
  photo: string;
  designation: string;
  companyName: string;
  testimony: string;
  videoLink?: string;
};

export type TPartner = {
  id?: string;
  companyName: string;
  logo: string;
  websiteLink: string;
};

export type TInstagramCarousel = {
  id: string;
  media_url: string;
  media_type: string;
};

export type TInstagramPost = {
  id: string;
  caption: string;
  media_url: string;
  timestamp: string;
  media_type: string;
  thumbnail_url: string;
  permalink: string;
  children?: {
    data: TInstagramCarousel[];
  };
};
