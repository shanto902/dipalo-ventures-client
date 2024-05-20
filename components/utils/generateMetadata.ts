type TMetaData = {
  title: string;
  description: string;
};

export const getMetadata = ({ title, description }: TMetaData) => {
  return {
    title: title,
    description: description,
  };
};
