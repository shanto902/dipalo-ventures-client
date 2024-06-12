import { Parse } from 'rss-to-json';
import parser from 'html-react-parser';

interface TMediumPost {
  title: string;
  link: string;
  description: string;
  published: number;
  created: number;
  author: string;
  content: string;
  image?: string; // Optional image property

  // Add other properties you might need
}

const getMediumPosts = async (): Promise<TMediumPost[]> => {
  const rss = await Parse('https://medium.com/feed/@dipaloventures');
  const posts: TMediumPost[] = rss.items.map((item: any) => {
    const htmlContent = item.content;
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
      link: item.link,
      description: firstParagraph, // Use the first paragraph as the description
      published: item.published,
      author: item.author,
      created: item.created,
      content: item.content,
      image: src, // Add image property
      // Map other properties if needed
    };
    return postData;
  });
  return posts;
};

export default getMediumPosts;
