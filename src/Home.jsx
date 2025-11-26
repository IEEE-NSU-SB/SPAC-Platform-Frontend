import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | SPAC 2025";
  }, []);

  return (
    <div>
      <p>COMING SOON!</p>
    </div>
  )
}

export default Home
