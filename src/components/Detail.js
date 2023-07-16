import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "./firebase";
import { collection, getDoc, doc } from "firebase/firestore";

const Detail = (props) => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const getData = async () => {
        const docRef = doc(db, "movies",id)
        try {
            const docData = await getDoc(docRef)
            if(docData.exists)
                setMovieData(docData.data())
            else console.log("These is no movies match the id!");
        } catch (err){
            console.log(err);
        }
    } 

    getData();
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={movieData.backgroundImg} />
      </Background>
      <ImageTitle>
        <img src={movieData.titleImg} />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Players>
            <img src="/images/play-icon-black.png" alt="play" />
            <span> Play </span>
          </Players>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="trailer" />
            <span> Trailer </span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="group" />
            </div>
          </GroupWatch>
        </Controls>
        <Subtitle> {movieData.subTitle} </Subtitle>
        <Description> {movieData.description} </Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh -250px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: -1;
  opacity: 0.8;
  position: fixed;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 25px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
  
  @media (max-width: 768px) {
    margin-top: 15vh;
  }
`

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 25px 0;
  min-height: 55px;
`;

const Players = styled.button`
  font-size: 15px;
  margin: 0 22px 0 0;
  padding: 0 25px;
  height: 55px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  letter-spacing: 1.8px;
  text-transform: uppercase;

  img {
    width: 32px;
  }

  &:hover {
    background-color: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 12.5px;
    font-size: 13px;
    margin: 0 10px 0 0;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Players)`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  color: #f9f9f9;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const AddList = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid #f9f9f9;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  span {
    background-color: #f9f9f9;
    display: inline-block;

    &:first-child {
      height: 2px;
      width: 16px;
      transform: translate(1px, 0);
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translate(-8px);
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const GroupWatch = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #f9f9f9;
  margin-left: 15px;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  div {
    height: 45px;
    width: 45px;
    background: #000;
    border-radius: 50%;

    img {
      width: 100%;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Subtitle = styled.div`
  color: #f9f9f9;
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0;
  color: #f9f9f9;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export default Detail;
