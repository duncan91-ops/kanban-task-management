import { Outlet } from "react-router-dom";
import StyledHome from "./index.styles";
import { Header } from "~/common/components";

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <section className="content">
        <Outlet />
      </section>
    </StyledHome>
  );
};

export default Home;
