import customFetch from "../utils/index";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const { id } = params;
  const response = await customFetch(`/products/${id}`);
  const products = await response.data;
  return { products };
};

const SingleProduct = () => {
  const { products } = useLoaderData();
  console.log(products);

  const {
    images: images,
    price: price,
    title: title,
    discountPercentage: discountPercentage,
    rating: rating,
    stock: stock,
    brand: brand,
    category: category,
    thumbnail: thumbnail,
  } = products;

  return (
    <div className="container-singleProduct" style={{ width: "100%" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
        <h1>
          DetailProduct <span style={{ fontFamily: "fantasy" }}>CRETIVOX</span>
        </h1>
        <h1>Mochamad Naufal Aufa Rifqi</h1>
      </nav>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          placeContent: "center",
          placeItems: "center",
        }}
      >
        <div style={{ margin: "100px" }}>
          <h2 style={{ fontWeight: "bold" }}>{title}</h2>
          <img
            style={{ boxShadow: "2px 1px 9px black", marginTop: "10px" }}
            src={thumbnail}
            alt={title}
          />
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              placeItems: "center",
              gap: "10px",
              width: "10px",
              marginTop: "15px",
            }}
          >
            <img
              style={{
                width: "150px",
                height: "150px",
                border: "1px solid black",
                padding: "5px",
              }}
              src={images[0]}
              alt={title}
            />
            <img
              style={{
                width: "150px",
                height: "150px",
                border: "1px solid black",
                padding: "5px",
              }}
              src={images[1]}
              alt={title}
            />
            <img
              style={{
                width: "150px",
                height: "150px",
                border: "1px solid black",
                padding: "5px",
              }}
              src={images[2]}
              alt={title}
            />
            <img
              style={{
                width: "150px",
                height: "150px",
                border: "1px solid black",
                padding: "5px",
              }}
              src={images[3]}
              alt={title}
            />
          </div>
        </div>
        <div
          style={{
            marginBottom: "150px",
          }}
        >
          <p>
            <span style={{ fontWeight: "bold" }}>Brand</span> : {brand}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Rating</span> : {rating}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Stock</span>: {stock}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Category</span>: {category}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Price</span>: {price}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>DiscountPrecentage </span>:{" "}
            {discountPercentage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
