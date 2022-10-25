import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { getData } from "../../store/actions/dataAction";
import styled from "styled-components";

//custom imports

const Box = styled.div({
  width: "90%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 80px",
  borderRadius: "24px",
});

const ImagesContainer = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  top: "0",
});

const ImgDiv = styled.div({
  width: "100%",
  height: "544px",
  margin: "20px 0",
  zIndex: "-1",
  "@media(max-width: 788px)": {
    height: "274px",
  },
});

const Info = styled.div({
  width: "90%",
  display: "flex",
  position: "absolute",
  top: "25px",
  padding: "10px 50px",
  zIndex: "10",
  justifyContent: "space-between",
  "@media(max-width: 788px)": {
    padding: "10px 20px",
  },
});

const Title = styled.h1({
  color: "#fff",
  "@media(max-width: 788px)": {
    fontSize: "20px",
  },
});

const Text = styled.h1({
  color: "#fff",
  "@media(max-width: 788px)": {
    fontSize: "20px",
  },
});

const Img = styled.img({
  width: "100%",
  height: "544px",
  objectFit: "cover",
});

type Props = {};
export const Data: React.FC<Props> = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const FakeData: readonly data[] = useSelector(
    (state: any) => state.dataReducer.data,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <Box>
      <ImagesContainer>
        {FakeData?.map((item: any) => {
          return (
            <ImgDiv key={item.id}>
              <Img src={item.url} alt={item.url} className="Img" />
              <Info>
                <Title>{item.title}</Title>
                <Text>{item.min} min</Text>
              </Info>
            </ImgDiv>
          );
        })}
      </ImagesContainer>
    </Box>
  );
};
export default Data;
