import s from "./filter.module.css";
import PropTypes from "prop-types";
import filterChange from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../redux/selector";

function Filter() {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="name"
        value={filter}
         onChange={(e) => dispatch(filterChange(e.target.value))} 
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;