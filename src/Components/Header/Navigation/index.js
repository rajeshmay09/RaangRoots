import Button from "@mui/material/Button";
import { HiMenu } from "react-icons/hi";
import { LiaAngleDoubleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { useState } from "react";

const Navigation = () => {
  const [isOpenSidebarVal, setisOpenSidebarVal] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center"
                onClick={() => setisOpenSidebarVal(!isOpenSidebarVal)}
              >
                <span className="icon1 me-2">
                  <HiMenu />
                </span>
                <span class="text">ALL CATEGORIES</span>
                <span className="icon2 ms-2">
                  <LiaAngleDoubleDownSolid />
                </span>
              </Button>
              <div
                className={`sidebarNav ${
                  isOpenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>Footwear</Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>Footwear</Button>
                      </Link>
                      <Link to="/">
                        <Button>Clothes</Button>
                      </Link>
                      <Link to="/">
                        <Button>Watches</Button>
                      </Link>
                      <Link to="/">
                        <Button>Glasses</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Clothes</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Watches</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Glasses</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline ms-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <MdHome /> &nbsp; Home
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Fashion</Button>
                </Link>
                <div className="submenu">
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Clothes</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Glasses</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Electronics</Button>
                </Link>
                <div className="submenu">
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Clothes</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Glasses</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Bakery</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Grocery</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Blog</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Contact Us</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
