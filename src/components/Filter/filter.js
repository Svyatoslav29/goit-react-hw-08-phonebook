import s from "./filter.module.css";
import PropTypes from "prop-types";
import actions from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../redux/selector";

function Filter() {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilterChange = e => {
    dispatch(actions.filterContact(e.currentTarget.value))
  }

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="name"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
}

Filter.propTypes = {
  // onFilterChange: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;