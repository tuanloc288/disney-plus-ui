import styled from "styled-components";

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay loop playsInline>
            <source src="/videos/1564674844-disney.mp4" type="video/mp4" />    
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video autoPlay loop playsInline>
            <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />    
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoPlay loop playsInline>
            <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />    
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoPlay loop playsInline>
            <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />    
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video autoPlay loop playsInline>
            <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />    
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  padding-top: 56.25%;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
  position: relative;
  border: 3px solid rgb(249,249,249,0.1);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: #f9f9f9;

    video {
        opacity: 1;
    }
  }
`;

export default Viewers;
