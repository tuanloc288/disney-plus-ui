import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Recommends = (props) => {
  const list = useSelector((state) => state.movie.recommend);
  
  useEffect(() => {
  }, [list])
  

  return (
    <Container>
      <h4> Recommends for you </h4>
      <Content>
      { 
        list && 
        list.map((movie, key) => (
          <Wrap key={key}>
            {movie.id}
            <Link to={"/detail/" + movie.id}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </Wrap>
        ))
      }
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 30px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  padding-top: 56.25%;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  position: relative;
  border: 3px solid rgb(249, 249, 249, 0.1);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow: hidden;

  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: 1;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: #f9f9f9;
  }
`;

export default Recommends;
