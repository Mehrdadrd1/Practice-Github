import styled from "styled-components";
const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 10%;
  color: #ccc;
  border: 2px solid #777;
  margin: 0.5em;
  padding: 0.25em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #ccc;
    color: white;
  }
`;
export default Button;
