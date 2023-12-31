import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { reset, activate } from "~/features/auth";
import { useAppDispatch } from "~/setup/app/store";
import { RootState } from "~/setup/app/store";
import StyledActivate from "./index.style";
import { Loading } from "~/common/components";

const Activate = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isError, isLoading, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isError) {
      setErrorMessage(message);
    }

    if (isSuccess) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const submitHandler = () => {
    const userData = {
      uid: uid || "",
      token: token || "",
    };

    dispatch(activate(userData));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StyledActivate>
      <div className="content">
        <h1 className="title">Activate User</h1>
        <button onClick={submitHandler} className="btn btn__activate">
          Activate
        </button>
      </div>
      {errorMessage && (
        <p className="error">Request failed! Please try again later</p>
      )}
    </StyledActivate>
  );
};

export default Activate;
