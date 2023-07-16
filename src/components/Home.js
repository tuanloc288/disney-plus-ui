import { useEffect } from "react";
import styled from "styled-components";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import SliderImages from "./SliderImages";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import movieSlice from "../feature/movie/movieSlice";

const Home = (props) => {
  const userName = useSelector((state) => state.user.name);
  const list = useSelector((state) => state.movie.recommend);
  const moviesCollection = collection(db, "movies");
  const dispatch = useDispatch();
  let allMovies = {
    recommend: [],
    newDisneys: [],
    originals: [],
    trending: [],
  };

  useEffect(() => {
    const getMovies = async () => {
      const data = await getDocs(moviesCollection);
      data.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            allMovies.recommend = [...allMovies.recommend, { id: doc.id, ...doc.data() }]
            break;
            case "new":
            allMovies.newDisneys = [...allMovies.newDisneys, { id: doc.id, ...doc.data() }]
            break;
            case "original":
            allMovies.originals = [...allMovies.originals, { id: doc.id, ...doc.data() }]
            break;
            case "trending":
            allMovies.trending = [...allMovies.trending, { id: doc.id, ...doc.data() }]
            break;
        }
      });
      dispatch(
        movieSlice.actions.setMovies({
          recommend: allMovies.recommend,
          newDisney: allMovies.newDisneys,
          originals: allMovies.originals,
          trending: allMovies.trending,
        })
      );
    };
    if(list?.length === 0)
      getMovies();
  }, [userName, list]);

  return (
    <Container>
      <SliderImages />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center no-repeat fixed;
    content: "";
    position: absolute;
    background-size: cover;
    inset: 0px;
    z-index: -1;
  }
`;

export default Home;
