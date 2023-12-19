import styled from 'styled-components';

export const Table = styled.table`
  max-width: 900px;
  width: 100%;
  margin: 100px auto 100px;
  background-color: #fff;
  box-shadow: 1px 1px 5px #00000030;
  border-radius: 8px;
  color: grey;
  overflow: hidden;
  font-size: 18px;
  line-height: 1.3;
  text-align: center;
  border-spacing: 0;

  td,
  th {
    padding: 15px;
    &:first-child {
      border-right: 1px solid #eeeeee;
      &::first-letter {
        text-transform: uppercase;
      }
    }
    &:nth-of-type(2) {
      border-right: 1px solid #eeeeee;
    }
  }
  th {
    color: #ffffff;
    background-color: #00bcd5;
    border-spacing: 0;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 16px;
    line-height: 1.5;
  }

  tbody tr:nth-child(2n + 2) {
    background-color: #ecf1f3;
  }
`;
