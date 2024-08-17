import { IoMdHeartEmpty } from "react-icons/io";
import { SlSizeFullscreen } from "react-icons/sl";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
const ProductItem = () => {
  return (
    <div className="item productItem">
      <div className="imgWrapper">
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
          alt=""
          className="w-100"
        />
        <span className="badge badge-primary">
          28% 
        </span>
        <div className="actions">
          <Button><IoMdHeartEmpty /></Button>
          <Button><SlSizeFullscreen /></Button>
        </div>
      </div>
      <div className="info">
        <h4>All Natural Italian-Style Chicken Meatballs</h4>
        <span className="text-success d-block">In Stock</span>
        <Rating
          className="mt-2 mb-2"
          name="read-only"
          value={5}
          readOnly
          size="small"
          precision={0.5}
        />
        <div className="d-flex">
          <span className="oldPrice">$130</span>
          <span className="newPrice text-danger ms-3">$130</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem