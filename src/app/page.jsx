import ArticleCard from "@/components/ArticleCard/ArticleCard";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import WorkWidget from "@/components/WorkWidget/WorkWidget";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";


const items = [
  {
    title: "16” MacBook Pro, M1 Max, 64GB RAM (2022)",
    description:
      "I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.",
    date: "December 25, 2023",
  },
  {
    title: "Dell UltraSharp U2717D",
    description: "I have two of these monitors and they’re great. I’ve had them for years and they’ve been rock solid.",
    date: "December 25, 2023",
  },
  {
    title: "Keychron K2",
    description:
      "I’ve been using this keyboard for a few years now and I love it. It’s wireless, has a great feel, and the battery lasts forever.",
    date: "December 25, 2023",
  },
];
const experiences=[
  {
    logo: '/slack.png',
    organization: 'Slack',
    jobTitle: 'Software Engineer',
    startYear: 2016,
    endYear: null,
  },
  {
    logo: '/spotify.png',
    organization: 'Spotify',
    jobTitle: 'Software Engineer',
    startYear: 2014,
    endYear: 2015,
  },
  {
    logo: '/audible.png',
    organization: 'Audible',
    jobTitle: 'Software Engineer',
    startYear: 2012,
    endYear: 2013,
  },
  {
    logo: '/microsoft.png',
    organization: 'Microsoft',
    jobTitle: 'Software Engineer',
    startYear: 2010,
    endYear: 2011,
  },
];
const skills = [
  { name: 'HTML', proficiency: 60, icon: 'html5.png' },
  { name: 'CSS', proficiency: 50, icon: 'css3.png' },
  { name: 'JavaScript', proficiency: 75, icon: 'javascript.png' },
];
export default function Home() {
  return (
    <>
      <ProjectCard
        name={"Software Engineer, Father, and Believer"}
        logo={"/ensign.png"}
        content={
          "Working with the Product Team to discover strong solutions for a digital product to support hourly-based external recruiting services. Our platform is built on top of firebase technologies, including Firestore, Cloud Functions (NodeJS + Typescript), Sveltekit, and Typesense."
        }
        link={"https://www.ensign.edu/"}
      />
      <section className="lg:grid grid-cols-8 gap-2">
        <ArticleCard items={items} />
        <div className="col-span-4">
        <SignupWidget
        title={'Stay up to date'}
        content={'Get notified when I publish something new, and unsubscribe at any time.'}
        />
        <WorkWidget
          title={'Work'}
          content={'My Work experience.'}
          experiences = {experiences}
          />
          <SkillsWidget
        title={'Skills'}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'}
        skills={skills}
      />
        </div>
      </section>
    </>
  );
}
