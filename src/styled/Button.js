import styled from "styled-components";

export const Button = styled.button`
  width: 220px;
  height: 44px;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000000;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white; 
  color:black;
  border: 1px solid black;


  &:hover {
    background-color: black;
    border: 1px solid transparent; /* This keeps the border transparent */
    color: white;
    transition: 0.3s ease-in;
  }
`;
