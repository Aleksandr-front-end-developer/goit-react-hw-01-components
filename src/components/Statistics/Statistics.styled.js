import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 100px;
  padding-right: 32px;
  padding-left: 32px;

  .title {
    text-align: center;
    text-transform: uppercase;
  }
  .item {
  }
  .stat-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #ffffff;
  }
  .item {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    gap: 10px;
    text-shadow: 1px 1px 5px #000000;
  }
  .percentage {
    font-size: 24px;
  }
`;
