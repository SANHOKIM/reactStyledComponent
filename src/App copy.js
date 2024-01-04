//
import "./App.css";
// npm i 추측 하기
import "bootstrap/dist/css/bootstrap.css";
// npm i 추측 하기
import styled from "styled-components";
// src 의 svg 파일 삽입
import arrowbtnimg from "./icon/arrowbtnimg.svg";
// Commonui 컴포넌트 안의 작은 컴포넌트 TitleCommon
import { TitleCommon } from "./Commonui";

import { ButtonUi, Abtn, Output } from "./Commonui";

function App() {
  return (
    <div className="App bg-primary p-2 d-flex">
      <TitleCommon>필수정보</TitleCommon>
      <TitleCommon>다른섹션</TitleCommon>
      <ButtonUi>
        Go toto Website
        <img src={arrowbtnimg} alt="" />
      </ButtonUi>
      <Output href="http://www.naver.com" target="_blank">
        Output태그
      </Output>
      <Abtn href="http://www.google.com" className="ddd" target="_blank">
        내용ddd
      </Abtn>
    </div>
  );
}

export default App;
