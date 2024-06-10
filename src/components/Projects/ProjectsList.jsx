import PropTypes from "prop-types";
import Image from "next/image";

const ProjectsList = ({ title, summary, items = [] }) => {
  return (
    <section class="bg-white py-12">
      <div class="max-w-6xl mx-auto text-left">
        <h1 class="text-2xl font-bold text-gray px-8 mb-8">Things I’ve made trying to put my dent in the universe.</h1>
        <p class="text-gray-700 mb-8 mb-12 px-8">
          Passionate web developer with expertise in front-end and back-end technologies. Skilled in creating
          responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and modern frameworks.
          Proficient in optimizing performance and ensuring cross-browser compatibility. Strong problem-solving
          abilities and a commitment to delivering high-quality, scalable solutions.
        </p>
      </div>

      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {items.map((item, index) => (
          <li key={index} className="bg-white-100 rounded-lg p-6 flex flex-col items-start">
            <div class="flex items-center mb-4">
            <Image className="w-16 h-16 mr-4" width={80} height={80} src={`/${item.logo}`} alt={`${item.company}`}/>
            
              <h4 className="text-lg font-bold text-gray-900">{item.company}</h4>
            </div>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <a href={item.link} class="text-blue-500 flex items-center text-sm">
            <Image className="w-4 h-4 mr-2" width={80} height={80} src="/link.svg" alt="link icon"/>
              {item.link}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

ProjectsList.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string,
      company: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default ProjectsList;
