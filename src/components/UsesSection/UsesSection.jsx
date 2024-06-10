import PropTypes from "prop-types";
import UseCard from "../UseCard/UsesCard";

/* TODO:
  Fill out this component according to the README.
*/

const UsesSection = ({ items }) => {
  return (
    <section className="p-8 mx-8">
      <div className="uses-section__content">
        {items.map((group, index) => (
          <div key={index} className="lg:flex items-stretch">
            <h2 className="text-2xl mb-4 font-bold lg:w-1/4">{group.groupName}</h2>
            <div key={index} className="lg:w-4/5">
              {group.items.map((item, index) => (
                <UseCard key={index} title={item.title} content={item.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    })
  ),
};
UsesSection.defaultProps = {
  items: [],
};

export default UsesSection;
