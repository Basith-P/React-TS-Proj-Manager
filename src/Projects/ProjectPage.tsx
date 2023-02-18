import 'tailwindcss/tailwind.css';
import { MOCK_PROJECTS } from "./data/MockProjects";
import ProjectList from "./components/ProjectList";

type Props = {};

const ProjectsPage = (props: Props) => {
  return (
    <>
      <h1 className='text-white text-center font-semibold p-8 text-3xl'>Projects</h1>
      <ProjectList projects={MOCK_PROJECTS} />
      </>
  );
};

export default ProjectsPage;
