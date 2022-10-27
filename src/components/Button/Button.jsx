import css from './Button.module.css';

export const Button = ({ onAddImg }) => {
  console.log(onAddImg);
  return (
    <button className={css.Button} onClick={onAddImg}>
      Load more
    </button>
  );
};
