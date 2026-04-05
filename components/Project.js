export default class Project {
  constructor({
    title,
    objective,
    problems,
    results,
    conclusion,
    codeLink,
    demoLink,
  }) {
    this._title = title;
    this._objective = objective;
    this._problems = problems; // array
    this._results = results; // array
    this._conclusion = conclusion;
    this._codeLink = codeLink;
    this._demoLink = demoLink;
  }

  _getTemplate(selector) {
    return document
      .querySelector(selector)
      .content.firstElementChild.cloneNode(true);
  }

  _buildProblemItem({ description, image }) {
    const item = this._getTemplate("#template__project_problem");
    item.querySelector(".project__problem-description").textContent =
      description;

    const img = item.querySelector(".project__problem-image");
    if (image) {
      img.src = image;
      img.onerror = () => {
        img.src = "../images/placeholder.jpg";
      };
    } else {
      img.remove();
    }

    return item;
  }

  _buildResultItem({ description, image }) {
    const item = this._getTemplate("#template__project_result");
    item.querySelector(".project__result-description").textContent =
      description;

    const img = item.querySelector(".project__result-image");
    if (image) {
      img.src = image;
      img.onerror = () => {
        img.src = "../images/placeholder.jpg";
      };
    } else {
      img.remove();
    }
    return item;
  }

  generateProject() {
    this._element = this._getTemplate("#template__project");

    this._element.querySelector(".project__title").textContent = this._title;
    this._element.querySelector(".project__objective").textContent =
      this._objective;
    this._element.querySelector(".project__conclusion").textContent =
      this._conclusion;
    this._element.querySelector(".link-code").href = this._codeLink;
    this._element.querySelector(".link-demo").href = this._demoLink;

    const problemsList = this._element.querySelector(".project__problems");
    this._problems.forEach((p) =>
      problemsList.append(this._buildProblemItem(p)),
    );

    const resultsList = this._element.querySelector(".project__results");
    this._results.forEach((r) => resultsList.append(this._buildResultItem(r)));

    return this._element;
  }
}
