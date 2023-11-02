import PropTypes from "prop-types";
import { FilterContainer } from "./UI/Sort.Jsx";
import { SortContainer } from "./UI/Sort.Jsx";
import { SortSelect } from "./UI/Sort.Jsx";
import { FilterSelect } from "./UI/Sort.Jsx";

export default function Sort({
  sortOption,
  setSortOption,
  filterCategory,
  setFilterCategory,
}) {
  return (
    <FilterContainer>
      <SortContainer>
        <label>Sort by: </label>
        <SortSelect
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="priceAsc">Price (Low to High)</option>
          <option value="priceDesc">Price (High to Low)</option>
        </SortSelect>
      </SortContainer>
      <div>
        <label>Filter by Category: </label>
        <FilterSelect
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men&apos;s Clothing</option>
          <option value="women's clothing">Women&apos;s Clothing</option>
        </FilterSelect>
      </div>
    </FilterContainer>
  );
}
Sort.propTypes = {
  sortOption: PropTypes.string.isRequired,
  setSortOption: PropTypes.func.isRequired,
  filterCategory: PropTypes.string.isRequired,
  setFilterCategory: PropTypes.func.isRequired,
};
