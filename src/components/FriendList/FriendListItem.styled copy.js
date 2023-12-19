import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  padding: 10px 20px;
  box-shadow: 2px 2px 5px #00000050;
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  .status {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ $isOnline }) => ($isOnline ? 'green' : 'red')};
  }
`;
