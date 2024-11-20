// pages/index.js
import Header from '../components/Header';
import FeaturedPosts from '../components/FeaturedPosts';
import RecentPosts from '../components/RecentPosts';
import GlobalStyles from '../styles/GlobalStyles';
import { featuredPosts, recentPosts } from '../data';

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <FeaturedPosts posts={featuredPosts} />
      <RecentPosts posts={recentPosts} />
    </>
  );
};

export default Home;