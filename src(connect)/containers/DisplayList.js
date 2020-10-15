import { connect } from "react-redux";
import DisplayList from "../components/DisplayList";

const mapStateToProps = (state) => {
  return {
    text: state.todo.text,
  };
};

export default connect(mapStateToProps)(DisplayList);
