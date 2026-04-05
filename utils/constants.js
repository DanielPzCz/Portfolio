export const selectors = {
  projectsContainer: ".projects__list",
  projectTemplate: "#template__project",
  projectProblemsContainer: ".project__problems",
  projectProblemTemplate: "#template__project_problem",
  projectResultsContainer: ".project__results",
  projectResultTemplate: "#template__project_result",
  profileJob: ".profile__description",
  avatar: ".profile__image",
  avatarContainer: ".profile__avatar-container",
  editProfileButton: ".profile__edit-button",
  addCardButton: ".profile__add-button",
};

export const projectsData = [
  {
    title: "Around the U.S. (TripleTen Project)",
    objective:
      "Build an interactive photo-showcase app where users can manage their profile, add location cards, and interact with their posts through likes and deletions.",
    problems: [
      {
        description:
          "Managing multiple modal types (image viewer, edit form, add card form, delete confirmation) without duplicating open/close logic.",
        image: "./images/problem-modals.jpg",
      },
      {
        description:
          "Keeping form validation reusable across different forms without tying the logic to any specific form's structure.",
        image: "./images/problem-validation.jpg",
      },
      {
        description:
          "Syncing the UI with the API, specifically, cards should only render after the user ID is received from the server to correctly identify which cards belong to the current user.",
      },
    ],
    results: [
      {
        description:
          "Created a Popup base class with PopupWithImage, PopupWithForm, and PopupWithConfirmation subclasses, centralizing open/close and Esc key logic in one place.",
        image: "./images/result-oop.gif",
      },
      {
        description:
          "Built a universal FormValidator class that takes a config object with selectors and classes, making it reusable across any form in the project.",
      },
      {
        description:
          "Used Promise.all() to fetch both user data and initial cards simultaneously, then rendered cards only after confirming the user ID.",
        image: "./images/result-api.jpg",
      },
    ],
    conclusion:
      "The project taught me how OOP architecture scales better than standalone functions as a codebase grows — each refactoring stage made the code easier to extend without breaking existing functionality.",
    codeLink: "https://github.com/DanielPzCz/web_project_around_es",
    demoLink: "https://danielpzcz.github.io/web_project_around_es",
  },
];
