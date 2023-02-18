import { Project } from "../models/Project";

function formatDescription(description: string) {
  return description.length > 60
    ? description.substring(0, 60) + "..."
    : description;
}

type Props = {
  project: Project;
  onEdit: (project: Project) => void;
};

const ProjectCard = (props: Props) => {
  const project = props.project;

  const handleEditClick = (projectBeingEdited: Project) => {
    props.onEdit(projectBeingEdited);
  };

  return (
    <div
      className="rounded-lg shadow bg-gray-800 overflow-hidden max-w-md"
    >
      <a href="#">
        <img
          className="h-52 object-cover w-full"
          src={project.imageUrl}
          alt=""
        />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {project.name}
        </h5>

        <p className="mb-3 font-normal text-gray-200">{project.description}</p>
        <p className="mb-4 text-gray-100 font-medium">
          Budget : ${project.budget.toLocaleString()}
        </p>
        <button
          className="inline-flex items-center px-4 py-1.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          onClick={() => handleEditClick(project)}
        >
          Edit
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-3 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
