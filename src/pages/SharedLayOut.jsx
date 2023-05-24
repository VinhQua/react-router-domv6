import { Link, Outlet } from "react-router-dom";

import StyledNavBar from "../components/StyledNavBar";

const Home = () => {
  return (
    <>
      <StyledNavBar />

      <Outlet />
    </>
  );
};
export default Home;
