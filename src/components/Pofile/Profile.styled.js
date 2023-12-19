import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  max-width: 300px;
  background-color: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-inline: auto;
  padding-top: 20px;
  overflow: hidden;

  .avatar {
    width: 150px;
    display: block;
    border-radius: 50%;
    margin-inline: auto;
  }
  .name {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
  .tag {
    text-align: center;
  }
  .location {
    text-align: center;
    font-weight: 500;
    margin-bottom: 40px;
  }
  .stats {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    border-top: 1px solid #edf1f5;

    li {
      flex: 0 1 33.333%;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      justify-content: center;
      background-color: #f3f6f9;
      border: 1px solid #edf1f5;
    }
    .quantity {
      font-weight: 700;
    }
  }
`;
