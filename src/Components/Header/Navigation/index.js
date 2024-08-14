import Button from "@mui/material/Button";
import { HiMenu } from "react-icons/hi";
import { LiaAngleDoubleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";


const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <Button className="allCatTab align-items-center">
              <span className="icon1 me-2">
                <HiMenu />
              </span>
              <span class="text">ALL CATEGORIES</span>
              <span className="icon2 ms-2">
                <LiaAngleDoubleDownSolid />
              </span>
            </Button>
          </div>
          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline ms-auto">
              <li className="list-inline-item">
                <Link to="/"><MdHome /> &nbsp; Home</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Fashion</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Electronics</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Bakery</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Grocery</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Blog</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
