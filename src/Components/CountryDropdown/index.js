import * as React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
//import DialogTitle from '@mui/material/DialogTitle';
import Dialog from "@mui/material/Dialog";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);

  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your location</span>
          <span className="name">India</span>
        </div>
        <span className="ms-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        TransitionComponent={Transition}
        onClose={() => setisOpenModal(false)}
        className="locationModal"
      >
        <h4 className="mb-3">Choose your Delivery Location</h4>
        <p>Enter your delivery and we will specify thge offer for your area </p>
        <Button className="close_" onClick={() => setisOpenModal(false)}>
          {" "}
          <IoClose />
        </Button>

        <div className="headersearch w-100">
          <input type="text" placeholder="Search your area..." />
          <Button>
            <IoSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          <li>
            <Button onClick={() => setisOpenModal(false)}>Delhi</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Mumbai</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Chennai</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Noida</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>bengaluru</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>mangaluru</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>hyderabad</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>nagpur</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>pune</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>bengaluru</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>bengaluru</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>bengaluru</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>bengaluru</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>bengaluru</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>bengaluru</Button>
          </li>
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;

//<Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className="locationModal"> onClose when clicked on screen and not on the close cross button...
