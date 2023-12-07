import { Link, useLoaderData } from "react-router-dom";
import customFetch from "../utils/index";

export const loader = async ({ params }) => {
  const getDatas = await customFetch("/products");
  console.log(getDatas.data);
  const { products } = await getDatas.data;
  return { products, params };
};

const HomeProduct = () => {
  const { products } = useLoaderData();
  return (
    <div>
      <nav className="navbar">
        <h1>
          Landing Page{" "}
          <span
            style={{ fontFamily: "fantasy", fontStretch: "semi-condensed" }}
          >
            CRETIVOX
          </span>
        </h1>
        <h1>Mochamad Naufal Aufa Rifqi</h1>
      </nav>
      <div className="cart-container">
        {products.map((item) => {
          const { brand, id, price, stock, thumbnail, title } = item;
          return (
            <div className="cart-product" key={id}>
              <img src={thumbnail} alt={brand} />
              <div style={{ textTransform: "capitalize", margin: "5px" }}>
                <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
                  {title}
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Rp {price / 100}</p>
                  <p style={{ fontWeight: "lighter" }}>Stock {stock}</p>
                </div>
                <Link
                  to={`singleProduct/${id}`}
                  style={{
                    backgroundColor: "#456FED",
                    padding: "10px",
                    display: "block",
                    textAlign: "center",
                    borderRadius: "5px",
                    textDecoration: "none",
                    marginTop: "15px",
                    color: "white",
                    width: "100%",
                    fontWeight: "lighter",
                  }}
                >
                  Detail Product
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeProduct;
