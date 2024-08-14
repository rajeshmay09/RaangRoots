import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";

const Searchbox = () => {
  return (
    <div className="headersearch ms-3 me-3">
      <input type="text" placeholder="Search for products..." />
      <Button>
        <IoSearch />
      </Button>
    </div>
  );
};
export default Searchbox;
