import { TMediumPost } from '@/components/types';
import parser from 'html-react-parser';

const getMediumPosts = async (): Promise<TMediumPost[]> => {
  // Specify the return type as Promise<TMediumPost[]>
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dipaloventures',
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  const mediumData: TMediumPost[] = data.items.map((item: any): TMediumPost => {
    // Specify the type of mediumData as TMediumPost[]
    const htmlContent = item.description;
    const parsedHtml = parser(htmlContent) as React.ReactElement[];
    const firstFigure = parsedHtml.find((element) => element.type === 'figure');
    const src =
      firstFigure &&
      firstFigure.props.children &&
      firstFigure.props.children.props.src;

    const firstParagraphElement = parsedHtml.find(
      (element) => element.type === 'p'
    );
    const firstParagraph = firstParagraphElement
      ? firstParagraphElement.props.children
      : '';

    const postData: TMediumPost = {
      title: item.title,
      description: firstParagraph,
      image: src,
      publishedDate: item.pubDate,
      postLink: item.guid,
    };
    return postData;
  });
  return mediumData;
};

export default getMediumPosts;
