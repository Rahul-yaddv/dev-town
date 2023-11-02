import { Button, Header } from "./UI/NavBar";
import PropTypes from "prop-types";
export default function NavBar({ toggleTheme }) {
  return (
    <Header>
      Product Page
      <Button onClick={toggleTheme}>theme</Button>
    </Header>
  );
}
NavBar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
