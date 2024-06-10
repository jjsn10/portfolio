import PropTypes from "prop-types";
const Footer = ({ links }) => {
  const year = new Date().getFullYear();
  return (
    <footer class="bg-gray-200 py-4">
      <div class="mx-auto w-1/2 lg:flex justify-around items-center">
        <div class="flex space-x-4 md:items-center justify-around ">
          {links.map((link,index)=>(
              <a key={index} href={link.url} class="text-gray-800 hover:text-teal-500">{link.title}</a>
          ))}
        </div>
        <div class="flex justify-center text-gray-600">
          &copy; 2024
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};
Footer.defaultProps = {
  links: [],
};
export default Footer;
