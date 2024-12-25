import { Post } from '@/types/posts';
import { fetchBlogPosts } from '@/utils/hashnode';
import Container from '@/components/Container';
import FeaturedBlogPost from './featured-blog-post';
import BlogGrid from './blog-grid';
import { Lens } from './ui/lens';

export async function Blog() {
  const publication = await fetchBlogPosts();
  if (!publication) {
    throw new Error('Failed to fetch blog posts');
  }

  const posts: Array<Post> = publication.posts.edges.map(
    ({ node }: { node: Post }) => node,
  );

  return (
    <Container className="max-w-6xl mx-auto space-y-16">
      <div className="text-center mt-16">
        <h1 className="text-5xl font-bold mb-4 relative before:absolute before:inset-x-0 before:top-0 before:h-8">
          Blogs
        </h1>
        <p className="text-lg text-gray-500">
        Discover How AI is Shaping a Better Tomorrow.
        </p>
      </div>

      <Lens zoomFactor={1.5} lensSize={200}>
        <FeaturedBlogPost
          title={posts[0].title}
          slug={posts[0].slug}
          imageUrl={posts[0].coverImage.url}
        />
      </Lens>

      <BlogGrid posts={posts} />
    </Container>
  );
}
