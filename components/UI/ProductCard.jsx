import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  max-width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border: 1px solid;
  padding: 1rem;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductImage = styled.img`
  width: 60%;
  height: auto;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 16px;
`;

export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: ${(props) => props.theme.text};
  text-align: center;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  line-height: 1.4;
`;
export const ProductPrice = styled.div`
  padding-top: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;
