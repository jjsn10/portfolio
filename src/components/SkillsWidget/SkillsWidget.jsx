import PropTypes from 'prop-types';
import Image from "next/image";

/* TODO:
  Fill out this component according to the README.
*/

const SkillsWidget = ({ title, content, skills }) => {
  return (
    <section data-testid="skillsWidget" className="mt-8 mb-8 py-4 px-8 rounded border border-slate-500 w-4/5 mx-auto">
      <h2 className="py-2 font-bold text-2xl" data-testid="skillsWidgetTitle">{title}</h2>
      <p className="py-2 text-gray-400" data-testid="skillsWidgetContent">{content}</p>
      <ul>
        {skills &&
          skills.map((skill, index) => (
            <li className="py-4" key={index} data-testid={`skillsWidgetItem${index}`}>
              <div className="flex item-center">
                <Image data-testid={`skillsWidgetItemLogo${index}`} width={80} height={80} src={`/${skill.icon}`} alt={`${skill.name} Icon`}/>
                <div className="w-full">
                  <h3 className="font-bold" data-testid={`skillsWidgetItemName${index}`}>{skill.name}</h3>
                  <div className="flex-start flex h-8 w-full overflow-hidden rounded bg-slate-200 font-sans text-xs font-medium">
                    <div
                      data-testid={`skillsWidgetItemProficiency${index}`}
                      className="flex h-full w-1/2 items-center justify-center overflow-hidden break-all rounded bg-teal-400 text-white"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

SkillsWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
    })
  ),
};

SkillsWidget.defaultProps = {
  skills: [],
};

export default SkillsWidget;
