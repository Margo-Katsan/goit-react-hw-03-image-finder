import css from "./Button.module.css";

export const Button = ({ onLoadMore }) => {
  return <button type="button" onClick={onLoadMore} className={css.button}>Load more</button>
}