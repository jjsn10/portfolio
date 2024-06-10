import PropTypes from "prop-types";
const ArticleCard = ({ items }) => {
  return (
    <div className="col-span-4">
      {items.map((item, index) => (
        <div key={item.index} className="mx-8 my-4 pt-8 pr-8 pl-8">
          <h2 className="pb-2 text-base text-gray-400 ">{item.date}</h2>
          <h3 className="pb-2 text-lg font-bold">{item.title}</h3>
          <p className="pb-2 text-base">{item.description}</p>
          <a href="" className="text-teal-400 font-bold pt-2">
            Read Article &gt;
          </a>
        </div>
      ))}
    </div>
  );
};
ArticleCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
ArticleCard.defaultProps = {
  items: [],
};
export default ArticleCard;
