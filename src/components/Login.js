import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <BgImage />
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="CTA Logo 1" />
          <SignUp>GET ALL THESE </SignUp>
          <Description>
            Get Premier Access to Turning Red for an additional fee with a
            Disney+ subscription. As of 01/03/2023, the price of Disney+ and the
            Disney Bundle will increase 2$.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="CTA Logo 2" />
        </CTA>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  width: 100%;
  max-width: 600px;
`;

const CTALogoTwo = styled.img`
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 22px;
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 10px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 1.5px;
  opacity: .8;
`;

export default Login;
