import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import styled from "styled-components";
import Data from "../../components/data/data";
import {
  getFavorite,
  getNew,
  getPopular,
} from "../../store/actions/dataAction";

const Box = styled.div({
  width: "90%",
  maxWidth: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "64px 80px",
  "@media(max-width: 788px)": {
    textAlign: "start",
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
    flexDirection: "column",
  },
});

const Container = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Title = styled.h1({
  fontSize: "48px",
  fontWeight: "400",
  "@media(max-width: 788px)": {
    paddingLeft: "15px",
  },
});

const RoutesMain = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  "@media(max-width: 788px)": {
    textAlign: "start",
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
  },
});

const BtnDiv = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ActiveBtn = styled.div({
  borderTop: "4px solid #6749A5",
  width: "15%",
  marginTop: "15px",
  "@media(max-width: 788px)": {
    width: "25%",
    marginTop: "0",
  },
});

const Home: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const Active: string = useSelector(
    (state: any) => state.dataReducer.active,
    shallowEqual
  );

  const popularGet = () => {
    return dispatch(getPopular());
  };

  const favoriteGet = () => {
    return dispatch(getFavorite());
  };

  const newGet = () => {
    return dispatch(getNew());
  };

  return (
    <Container>
      <Box>
        <Title>Course</Title>
        <RoutesMain>
          <BtnDiv>
            <button
              onClick={popularGet}
              className={Active === "Popular" ? "active" : "btn"}
            >
              Popular
            </button>
            {Active === "Popular" ? <ActiveBtn /> : null}
          </BtnDiv>
          <BtnDiv>
            <button
              onClick={favoriteGet}
              className={Active === "Favorite" ? "active" : "btn"}
            >
              Favorite
            </button>
            {Active === "Favorite" ? <ActiveBtn /> : null}
          </BtnDiv>
          <BtnDiv>
            <button
              onClick={newGet}
              className={Active === "New" ? "active" : "btn"}
            >
              New
            </button>
            {Active === "New" ? <ActiveBtn /> : null}
          </BtnDiv>
        </RoutesMain>
      </Box>
      <Data />
    </Container>
  );
};

export default Home;
