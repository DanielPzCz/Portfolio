import Project from "../components/Project.js";

import { selectors, projectsData } from "../utils/constants.js";

const projectsList = document.querySelector(".projects__list");

projectsData.forEach((data) => {
  const project = new Project(data);
  projectsList.append(project.generateProject());
});
