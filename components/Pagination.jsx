import { Pagination, Button } from "./UI/Pagination";
import PropTypes from "prop-types";

const ProductPagination = ({ currentPage, totalPages, onPageChange }) => (
  <Pagination>
    <Button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Prev
    </Button>
    <span>
      Page {currentPage} of {totalPages}
    </span>
    <Button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </Button>
  </Pagination>
);

ProductPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default ProductPagination;
