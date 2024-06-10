/* DON'T CHANGE ME */
import PropTypes from "prop-types";

const UsesCard = ({ title, content }) => {
  return (
    <div className={"uses-card"}>
      <h3 className="font-bold">{title}</h3>
      <p className="py-4">{content}</p>
    </div>
  );
};

UsesCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default UsesCard;
