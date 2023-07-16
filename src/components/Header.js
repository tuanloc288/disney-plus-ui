import styled from "styled-components";
import "../App.css";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import userSlice from "../feature/user/userSlice";
import { useEffect } from "react";

const Header = (props) => {
  const userName = useSelector((state) => state.user.name);
  const userEmail = useSelector((state) => state.user.email);
  const userPhoto = useSelector((state) => state.user.photo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(userSlice.actions.setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      userSlice.actions.setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <Link to="/home">
          <img src="/images/logo.svg" alt="Header logo" />
        </Link>
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="search" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="watchlist" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="original" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="movie" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="series" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <UserInfo>
          <UserImage src={userPhoto} alt={userName} />
          <p>{userName}</p>
          <DropDown>
            <span onClick={handleAuth}> Sign Out </span>
          </DropDown>
        </UserInfo>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 15px;
  padding: 0 40px;
  z-index: 5;
`;

const Logo = styled.a`
  padding: 0;
  min-width: 80px;
  max-width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  img {
    width: 100%;
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 25px;
      min-width: 25px;
      width: 25px;
    }

    span {
      font-size: 14px;
      letter-spacing: 1.42px;
      line-height: 1.1;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;
      color: rgb(249, 249, 249);

      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
      cursor: pointer;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Login = styled.a`
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #000;
    background-color: #f9f9f9;
    cursor: pointer;
    border-color: transparent;
  }
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 70px;
  background: rgb(19, 19, 19);
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  letter-spacing: 2px;
  width: fit-content;
  opacity: 0;
  transition: 0.8s;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 150px;
  padding: 5px;
  transition: all 0.5s;
  position: relative;

  p {
    letter-spacing: 1.5px;
    margin-left: 8px;
  }

  &:hover {
    border-radius: 5px;
    background-color: #f9f9f9;
    color: #000;

    ${DropDown} {
      opacity: 1;
      color: #f9f9f9;
      cursor: pointer;
    }
  }
`;

export default Header;
