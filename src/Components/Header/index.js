import { Link } from "react-router-dom";
import logo from "../../assets/Headerlogo.jpg";
import CountryDropdown from "../CountryDropdown";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import Searchbox from "./SearchBox";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              {" "}
              <b> Order processing </b>may be with slight delay
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  {" "}
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                <CountryDropdown />

                {/** Header Search Starts Here */}

                <Searchbox />

                {/** Header Search Ends  Here */}

                <div className="part3 d-flex align-items-center ms-auto">
                  <Button className="circle me-3">
                    <FaRegUser />
                  </Button>
                  <div className="ms-auto cartTab d-flex align-items-center">
                    <span className="price">$3.59</span>
                    <div className="position-relative ms-2">
                      <Button className="circle ms-2">
                        <HiShoppingBag />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </>
  );
};

export default Header;
