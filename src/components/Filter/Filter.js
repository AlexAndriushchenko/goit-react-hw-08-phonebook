import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = evt => dispatch(setFilter(evt.currentTarget.value));
  return (
    <>
      <label className={css.filter_label}>
        Find contacts by name
        <input type="text" onChange={changeFilter} />
      </label>
    </>
  );
};
