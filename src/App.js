import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import arrowbtnimg from "./icon/arrowbtnimg.svg";
import { TitleCommon, InputUi, ButtonUi, HrefBtn, Abtn } from "./Commonui";

function App() {
  return (
    <div className="App bg-light p-5">
      <TitleCommon>필수 정보</TitleCommon>

      <form action="">
        <div className="row">
          <InputUi
            className="yaho"
            inputinfo={{
              nm: "company",
              labeltext: "labeltext회사이름",
              alerttext:
                "회사명을 입력해주세요.inputUi컴포넌트사용자정의태그의inputinfo:속성이자객체역할이갖는속성을가리키는이름key alerttext 입니다",
            }}
          >
            회사이름(필수)
          </InputUi>

          <ButtonUi>
            Go toto Website
            <img src={arrowbtnimg} alt="" />
          </ButtonUi>

          <HrefBtn>아하</HrefBtn>

          <Abtn>Abtn컴포넌트태그입니다</Abtn>
        </div>
      </form>
    </div>
  );
}
export default App;
