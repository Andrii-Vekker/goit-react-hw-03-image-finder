import { LoadMoreBtn } from "./Button.styled"
import PropTypes from 'prop-types';


export default function Button({ onClick }) {
    
  return (
    <LoadMoreBtn type="LoadMoreBtn" onClick={onClick}>Load more</LoadMoreBtn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}