import PropTypes from "prop-types";
function Navbar({ options }) {
  return (
    <nav data-testid="nav" className="navbar">
      <ul
        className="flex justify-center items-center menu menu-vertical lg:menu-horizontal bg-gray-100 rounded-box h-14"
        data-testid="ul"
      >
        {options &&
          options.map((option, index) => {
            return (
              <li className="mr-6" key={index} data-testid={`li${index}`}>
                <a
                  data-testid={`a${index}`}
                  className="font-['Roboto'] font-medium text-gray-800 hover:text-teal-500"
                  href={option.path}
                >
                  {option.label}
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Navbar;
