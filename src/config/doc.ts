import { MainNavItem, SidebarNavItem } from '@/types/nav';
// import {
//   cachedBlogPosts,
//   fetchBlogPosts,
// } from '../components/blog-list-search';

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Docs',
      href: '/docs',
    },
    {
      title: 'Blogs',
      href: '/blogs',
    },
    {
      title: 'Company',
      href: '/company',
    },
    {
      title: 'Research & Products',
      href: '/Research',
    },
  ],
  sidebarNav: []
};

// (async () => {
//   await fetchBlogPosts();
//   const blogPosts = cachedBlogPosts;

//   docsConfig.sidebarNav.find((section) => section.title === 'Blog')!.items =
//     blogPosts.map((post) => ({
//       title: post.title,
//       href: post.slug,
//       items: [],
//       label: 'New',
//     }));
// })();
