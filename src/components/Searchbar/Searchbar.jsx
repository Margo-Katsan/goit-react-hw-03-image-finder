import { MdImageSearch } from 'react-icons/md';
import css from "./Searchbar.module.css"

export const Searchbar = ({ onChangeQuery }) => {
  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={event => {
        event.preventDefault();
        onChangeQuery(event.target.elements.query.value);
        event.target.reset();
      }}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>
          <MdImageSearch className={css.icon} size={30} />
        </button>
      </form>
    </header>
  );
}