import { connect } from "react-redux";
import AddList from "../components/AddList";
import { addList } from "../_actions/todo_action";

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (list) => {
      if (list !== "") {
        dispatch(addList(list));
      }
    },
  };
};

export default connect(null, mapDispatchToProps)(AddList);
