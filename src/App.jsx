import { useState, useEffect } from "react";
import { AppContainer, Container, GlobalStyle } from "../components/UI/App";
import ProductCard from "../components/ProductCard";
import NavBar from "../components/NavBar";
import { lightTheme, darkTheme } from "../components/UI/App";
import { ThemeProvider } from "styled-components";
import ProductPagination from "../components/Pagination";
import Sort from "../components/Sort";
export default function App() {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState(lightTheme);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [productsPerPage] = useState(6);
  const [sortOption, setSortOption] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === lightTheme ? darkTheme : lightTheme
    );
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    setDisplayedProducts(data);
    setCurrentPage(1);
  }, [data]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    let filteredProducts = data;

    // Filter products by category if a filter is set
    if (filterCategory) {
      filteredProducts = data.filter(
        (product) => product.category === filterCategory
      );
    }

    // Sort products
    let sortedProducts = [...filteredProducts];
    if (sortOption === "priceAsc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setDisplayedProducts(sortedProducts);
    setCurrentPage(1);
  }, [data, sortOption, filterCategory]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = displayedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <NavBar toggleTheme={toggleTheme} />
        <Sort
          sortOption={sortOption}
          setSortOption={setSortOption}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />
        <AppContainer>
          <ProductCard data={currentProducts} />
        </AppContainer>
      </Container>
      <ProductPagination
        currentPage={currentPage}
        totalPages={Math.ceil(displayedProducts.length / productsPerPage)}
        onPageChange={handlePageChange}
      />
    </ThemeProvider>
  );
}
