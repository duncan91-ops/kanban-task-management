import StyledAddBoard from "./index.style";

const AddBoard = () => {
  return (
    <StyledAddBoard
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h1 className="title">add new board</h1>
    </StyledAddBoard>
  );
};

export default AddBoard;
