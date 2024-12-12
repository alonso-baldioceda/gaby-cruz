import Head from "./../components/head";

import data from "./../data/data.json";

const Home = () => {
  const { head } = data;

  return (
    <>
      <Head title={head.title} description={head.description} />
      <div className="container mx-auto">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam autem
          harum suscipit culpa saepe, exercitationem error dolorem, labore hic
          ipsam, quae debitis. Nostrum minima officiis quia magnam
          exercitationem? Facilis, natus.
        </p>
      </div>
    </>
  );
};

export default Home;
