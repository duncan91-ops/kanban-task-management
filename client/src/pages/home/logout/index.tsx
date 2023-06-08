import StyledLogout from "./index.style";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "~/setup/app/store";
import { logout } from "~/features/auth";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <StyledLogout>
      <div className="content">
        <h1 className="title">Sign Out</h1>
        <p className="message">Are you sure you want to leave?</p>
        <div className="btns">
          <button
            className="btn btn__logout"
            type="button"
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            leave
          </button>
          <button
            className="btn btn__cancel"
            type="button"
            onClick={() => navigate(-1)}
          >
            cancel
          </button>
        </div>
      </div>
    </StyledLogout>
  );
};

export default Logout;
