import type { NextPage } from 'next';
import NavBar from '@components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <button className="btn">Testeee</button>
    </div>
  );
};

export default Home;
