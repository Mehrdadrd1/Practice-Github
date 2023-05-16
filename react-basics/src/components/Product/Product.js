import "./Product.css";

const Product = ({ product, onDelete }) => {
  return (
    <div className="product">
      <div className="title">{product.title}</div>
      <div className="btn">
        <button
          className="listBtn"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>
        <button className="listBtn">Edit</button>
      </div>
    </div>
  );
};

export default Product;
