import styled from "styled-components";
import "@fontsource/noto-sans-kr";
import arrowbtnimg from "./icon/arrowbtnimg.svg";

export const TitleCommon = styled.h2`
  font-family: "Noto Sans KR";
  font-weight: 500;
  font-size: 1.8rem;
  text-align: center;
`;

export const ButtonUi = styled("button")`
  width: 250px;
  line-height: 3rem;
  font-size: 1.5rem;
  border: 1px solid #000;
  background-color: white;
`;

export const Abtn = (props) => {
  return (
    <a
      href={props.href}
      className={props.className && props.className}
      target={props.target && props.target}
    >
      {props.children}
      <img src={arrowbtnimg} alt="화살" />
    </a>
  );
};

export const Output = styled(Abtn)`
  display: inline-block;
  width: 250px;
  line-height: 3.1rem;
  font-size: 1.5rem;
  border: 1px solid #000;
  text-decoration: none;
  color: red;
`;
