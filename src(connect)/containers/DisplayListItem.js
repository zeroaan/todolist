import { connect } from "react-redux";
import DisplayListItem from "../components/DisplayListItem";
import { deleteList, editList } from "../_actions/todo_action";

const mapStateToProps = (state) => {
  return {
    text: state.todo.text,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (editText, index) => {
      if (editText !== "") {
        dispatch(editList(editText, index));
      }
    },
    onClickDelete: (index) => {
      dispatch(deleteList(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayListItem);
