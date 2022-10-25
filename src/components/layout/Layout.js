import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Men1 from "../../images/men1.svg";
import Men2 from "../../images/men2.svg";
import Men3 from "../../images/men3.svg";
import Home from "../../pages/home/home";
import Data from "../data/data";

const Box = styled.div({
  display: "flex",
});

const Content = styled.div({
  width: "100%",
});

const Nav = styled.nav({
  position: "relative",
  left: "0",
  background: "#FFE4D6",
  width: "160px",
  height: "100vh",
  borderRadius: "24px 0px 0px 0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "143px",
});

const UniqueLink = styled.nav({
  width: "100%",
  padding: "25px 0",
  cursor: "pointer",
  position: "relative",
});

const Img = styled.img({
  padding: "25px 40px",
  cursor: "pointer",
});

const Active = styled.span({
  position: "absolute",
  borderLeft: "7px solid #8964D7",
  left: "0",
  top: "50px",
  height: "50px",
});

const Layout = () => {
  let location = useLocation();

  return (
    <Box>
      <Nav>
        <UniqueLink>
          {location.pathname === "/" ? <Active /> : null}
          <Link to="/" className="link">
            <Img src={Men1} />
          </Link>
        </UniqueLink>
        <UniqueLink>
          {location.pathname === "/menu2" ? <Active /> : null}
          <Link to="/menu2" className="link">
            <Img src={Men2} />
          </Link>
        </UniqueLink>
        <UniqueLink>
          {location.pathname === "/menu3" ? <Active /> : null}
          <Link to="/menu3" className="link">
            <Img src={Men3} />
          </Link>
        </UniqueLink>
      </Nav>
      <Content>
        <Outlet />
      </Content>
    </Box>
  );
};

export default Layout;
