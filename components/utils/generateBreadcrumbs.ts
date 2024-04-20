import { navItems } from '@/components/Layout/NavItems';

export function generateBreadcrumbs(pathname: string): string[] {
  const breadcrumbs: string[] = [];
  const paths = pathname.split('/').filter(Boolean); // Remove empty strings

  paths.forEach((path, index) => {
    const currentPath = '/' + paths.slice(0, index + 1).join('/');
    const matchingItem = navItems.find((item) => item.link === currentPath);

    if (matchingItem) {
      breadcrumbs.push(matchingItem.label);
    }
  });

  return breadcrumbs;
}
