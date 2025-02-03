import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';

export default function SearchBox({ value }) {
  const dispatch = useDispatch();

  return (
    <div className={css.searchContainer}>
      <p>Search by name</p>
      <input type='text' value={value} onChange={(e) => dispatch(changeFilter(e.target.value))} />
    </div>
  );
}
