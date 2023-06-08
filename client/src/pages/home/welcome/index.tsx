import { Link } from "react-router-dom";
import StyledWelcome from "./index.style";
import { RootState } from "~/setup/app/store";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <StyledWelcome className="content">
      <h1 className="title">kanban app</h1>
      <p className="message">
        A simple elegant task management tool that grants you full control over
        all your tasks. Enables you to keep track of the status of each of the
        tasks. Trusted by thousands for their daily tasks both professionally
        and personally.
      </p>
      {isAuthenticated ? (
        <Link to="/boards" className="btn btn__boards">
          Boards
        </Link>
      ) : (
        <Link to="/register" className="btn btn__join">
          Join today
        </Link>
      )}
    </StyledWelcome>
  );
};

export default Welcome;
