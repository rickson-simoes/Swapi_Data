import styled from 'styled-components';

export const PrincipalBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 5%;
  width: 40%;

  div {
    text-align: center;

    h1 {
      width: 40%;
      margin: auto;
      border-radius: 25px 25px 0px 0px;
      border-bottom: 1px solid #ac6026;
      padding: 10px;
      background: #ac6026;
      font-size: 25px;
    }

    ul {
      list-style: none;
      margin: auto;
      width: 100%;
      height: 60%;
      border-radius: 50px 20px 50px 20px;
      border: 1px solid #a4a4a48f;
      padding: 10px;
      font-size: 21px;
      display: flex;
      flex-direction: column;
      word-break: break-word;
      background: #005f7391;

      li {
        margin-top: 10px;

        label {
          font-weight: 600;
          width: 50%;
        }

        span {
          width: 50%;
          color: #ff740a;
          margin-left: 18px;
          font-weight: 700;
        }
      }

      li:last-child {
        margin-top: 20px;
        font-style: italic;
        font-size: 27px;

        b {
          color: #ff740a;
        }
      }
    }
  }
`;

export const NextButton = styled.button.attrs(props => ({
  disabled: props.loading,
}))`
  margin: auto;
  margin-top: 30px;
  border: none;
  padding: 10px 30px;
  cursor: pointer;
  font-weight: 1000;
  font-size: 16px;
  color: white;
  background-color: #ac6026;
  transition: ease 0.5s;
  border-radius: 5px;

  :hover {
    background-color: #9e9ee8a8;
    -webkit-transition: ease 0.5s;
    transition: ease 0.5s;
    color: white;
    padding: 10px 50px;
    box-shadow: 1px 1px 7px 5px #3b3beca8;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
