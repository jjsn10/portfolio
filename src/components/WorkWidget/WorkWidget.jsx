import PropTypes from 'prop-types';

/* TODO:
  Fill out this component according to the README.
*/

const WorkWidget = ({ title, content, experiences }) => {
  return (
    <section data-testid="workWidget" className="mt-8 py-4 px-8 rounded border border-slate-500 w-4/5 mx-auto">
      <h2 className="py-4 font-bold text-2xl" data-testid="workWidgetTitle">{title}</h2>
      <p className="py-4 text-base text-gray-400" data-testid="workWidgetContent">{content}</p>
      <ul>
        {experiences.map((experience, index) => (
          <li className="py-2" key={index} data-testid={`workWidgetItem${index}`}>
            <div className="flex items-center">
              <img className="w-1/8" data-testid={`workWidgetItemLogo${index}`} src={experience.logo} alt={`Item${index} Logo`} />
              <div className="w-full">
                <h3 className="font-bold" data-testid={`workWidgetItemTitle${index}`}>{experience.organization}</h3>
                <div className="flex items-center justify-between">
                  <p className="uppercase text-gray-400" data-testid={`workWidgetItemContent${index}`}>{experience.jobTitle}</p>
                  <span className="text-gray-400" data-testid={`workWidgetItemDates${index}`}>{`${experience.startYear} - ${
                    experience.endYear === null ? 'current' : experience.endYear
                  }`}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number || null,
    })
  ),
};

WorkWidget.defaultProps = {
  experiences: [],
};

export default WorkWidget;
