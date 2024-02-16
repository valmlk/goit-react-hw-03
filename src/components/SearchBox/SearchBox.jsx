import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  const id = useId();

  return (
    <div className={css.box}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        className={css.filter}
        id={id}
        type="text"
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
    </div>
  );
};

export default SearchBox;
