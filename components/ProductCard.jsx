import {
  ProductCardContainer,
  ProductDescription,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from "../components/UI/ProductCard";
import PropTypes from "prop-types";
export default function ProductCard({ data }) {
  return (
    <>
      {data.map((product) => (
        <ProductCardContainer key={product.id}>
          <ProductTitle>{product.title} </ProductTitle>
          <ProductImage src={product.image} alt="product" />
          <ProductPrice>Price: $ {product.price}</ProductPrice>
          <ProductDescription> {product.description} </ProductDescription>
        </ProductCardContainer>
      ))}
    </>
  );
}

ProductCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
