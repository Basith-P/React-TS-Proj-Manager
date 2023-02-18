import { useState } from "react";
import { Project } from "../models/Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

type Props = { projects: Project[] };

const ProjectList = (props: Props) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  }

  const cancelEdit = () => {
    setProjectBeingEdited({});
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center p-2 gap-4 max-w-7xl mx-auto pb-8">
      {props.projects.map((project) => {
        return <>
        {projectBeingEdited === project ? <ProjectForm onCancel={cancelEdit} /> : 
        <ProjectCard key={project.id} project={project} onEdit={handleEdit} />}
        </>;
      })}
    </div>
  );
};

export default ProjectList;
