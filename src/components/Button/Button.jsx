import { LoadMoreBtn } from "./Button.styled"



export default function Button({ onClick }) {
    
  return (
    <LoadMoreBtn type="LoadMoreBtn" onClick={onClick}>Load more</LoadMoreBtn>
  )
}
