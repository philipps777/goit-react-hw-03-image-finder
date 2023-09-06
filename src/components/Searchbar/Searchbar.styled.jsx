import styled from 'styled-components';

export const SearchBarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #2d424a;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchBarForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 600px;
  background-color: #2d424a;
  border-radius: 5px;
  overflow: hidden;
  gap: 10px;

  padding: 5px;
`;

export const Input = styled.input`
  padding: 6px 6px;
  border: 3px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
  font-size: 20px;
  color: #333;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: orange;
    box-shadow: 0 0 5px rgba(102, 175, 233, 0.5);
  }
`;
export const Button = styled.button`
  display: inline-flex;
  padding: 5px 7px;
  border: 1px solid black;
  border-radius: 4px;
  font-family: inherit;
  font-size: 20px;
  background-color: cyan;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
`;
