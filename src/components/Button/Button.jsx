import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onClick }) => (
  <ButtonLoadMore type="button" className="button" onClick={onClick}>
    Load more
  </ButtonLoadMore>
);
