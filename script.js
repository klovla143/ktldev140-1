"use strict";

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupHomeInteractions();
  setupProjectList();
  setupContactForm();
});

function setupNavigation() {
  document.querySelectorAll(".menu-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const navigation = document.querySelector(`#${button.getAttribute("aria-controls")}`);
      const isOpen = navigation.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.textContent = isOpen ? "Close" : "Menu";
    });
  });
}

function setupHomeInteractions() {
  const learnMoreButton = document.querySelector("#learn-more-btn");
  const careerDetails = document.querySelector("#career-details");

  if (learnMoreButton && careerDetails) {
    learnMoreButton.addEventListener("click", () => {
      const isHidden = careerDetails.hasAttribute("hidden");
      careerDetails.toggleAttribute("hidden");
      learnMoreButton.textContent = isHidden ? "Hide Details" : "Learn More";
      learnMoreButton.setAttribute("aria-expanded", String(isHidden));
    });
  }

  const githubButton = document.querySelector("#load-github-btn");
  const githubResult = document.querySelector("#github-result");

  if (githubButton && githubResult) {
    githubButton.addEventListener("click", () => loadGitHubProfile(githubResult, githubButton));
  }
}

function loadGitHubProfile(resultElement, button) {
  button.disabled = true;
  button.textContent = "Loading...";
  resultElement.textContent = "Loading GitHub profile data...";

  fetch("https://api.github.com/users/klovla143")
    .then((response) => {
      if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`);
      return response.json();
    })
    .then((profile) => {
      resultElement.innerHTML = `
        <div class="api-card">
          <img src="${escapeAttribute(profile.avatar_url)}" alt="">
          <div>
            <h3>${escapeHtml(profile.name || profile.login)}</h3>
            <p>${escapeHtml(profile.bio || "No public bio is available.")}</p>
            <p><strong>Public repositories:</strong> ${profile.public_repos}</p>
          </div>
        </div>`;
    })
    .catch((error) => {
      resultElement.textContent = "The GitHub profile could not be loaded. Please try again later.";
      console.error(error);
    })
    .finally(() => {
      button.disabled = false;
      button.textContent = "Load GitHub Profile";
    });
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function escapeAttribute(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function setupProjectList() {
  const projectList = document.querySelector("#project-list");
  const projectForm = document.querySelector("#project-form");
  const projectSearch = document.querySelector("#project-search");

  if (!projectList || !projectForm || !projectSearch) return;

  const projects = [
    { name: "HTML Portfolio Website", description: "A multi-page personal portfolio demonstrating semantic HTML, accessibility, CSS, and responsive design." },
    { name: "Linux Command-Line Labs", description: "Exercises focused on file management, permissions, command-line tools, and basic system administration." },
    { name: "Cybersecurity Learning Labs", description: "Practice with networking fundamentals, security principles, and common cybersecurity concepts." }
  ];

  function renderProjects(filterText = "") {
    projectList.replaceChildren();
    const normalizedFilter = filterText.trim().toLowerCase();

    projects.forEach((project) => {
      const matches = project.name.toLowerCase().includes(normalizedFilter) || project.description.toLowerCase().includes(normalizedFilter);
      if (!matches) return;

      const article = document.createElement("article");
      article.className = "project-card";

      const heading = document.createElement("h3");
      heading.textContent = project.name;
      const paragraph = document.createElement("p");
      paragraph.textContent = project.description;

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "button button-secondary";
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        const projectIndex = projects.indexOf(project);
        if (projectIndex !== -1) projects.splice(projectIndex, 1);
        renderProjects(projectSearch.value);
      });

      article.append(heading, paragraph, removeButton);
      projectList.appendChild(article);
    });

    if (!projectList.children.length) {
      const emptyMessage = document.createElement("p");
      emptyMessage.textContent = "No projects match that search.";
      projectList.appendChild(emptyMessage);
    }
  }

  renderProjects();
  projectSearch.addEventListener("input", () => {
    projectSearch.classList.toggle("input-active", projectSearch.value.length > 0);
    renderProjects(projectSearch.value);
  });

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = document.querySelector("#project-name");
    const descriptionInput = document.querySelector("#project-description");
    const nameError = document.querySelector("#project-name-error");
    const descriptionError = document.querySelector("#project-description-error");

    nameError.textContent = "";
    descriptionError.textContent = "";
    nameInput.classList.remove("input-error");
    descriptionInput.classList.remove("input-error");
    nameInput.removeAttribute("aria-invalid");
    descriptionInput.removeAttribute("aria-invalid");

    let valid = true;
    if (!nameInput.value.trim()) {
      nameError.textContent = "Project name is required.";
      nameInput.classList.add("input-error");
      nameInput.setAttribute("aria-invalid", "true");
      valid = false;
    }
    if (!descriptionInput.value.trim()) {
      descriptionError.textContent = "Project description is required.";
      descriptionInput.classList.add("input-error");
      descriptionInput.setAttribute("aria-invalid", "true");
      valid = false;
    }
    if (!valid) {
      (nameInput.classList.contains("input-error") ? nameInput : descriptionInput).focus();
      return;
    }

    projects.push({ name: nameInput.value.trim(), description: descriptionInput.value.trim() });
    projectForm.reset();
    renderProjects(projectSearch.value);
    nameInput.focus();
  });
}

function setupContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const fields = {
    name: { input: document.querySelector("#name"), error: document.querySelector("#name-error") },
    email: { input: document.querySelector("#email"), error: document.querySelector("#email-error") },
    subject: { input: document.querySelector("#subject"), error: document.querySelector("#subject-error") },
    message: { input: document.querySelector("#message"), error: document.querySelector("#message-error") }
  };
  const status = document.querySelector("#form-status");
  const messageCount = document.querySelector("#message-count");

  function validateField(fieldName) {
    const field = fields[fieldName];
    const value = field.input.value.trim();
    field.error.textContent = "";
    field.input.classList.remove("input-error", "input-valid");
    field.input.removeAttribute("aria-invalid");

    if (!value) {
      field.error.textContent = "This field is required.";
      field.input.classList.add("input-error");
      field.input.setAttribute("aria-invalid", "true");
      return false;
    }
    if (fieldName === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      field.error.textContent = "Enter a valid email address, such as name@example.com.";
      field.input.classList.add("input-error");
      field.input.setAttribute("aria-invalid", "true");
      return false;
    }
    field.input.classList.add("input-valid");
    return true;
  }

  Object.keys(fields).forEach((fieldName) => {
    const input = fields[fieldName].input;
    input.addEventListener("input", () => {
      input.classList.toggle("input-active", input.value.length > 0);
      validateField(fieldName);
      if (fieldName === "message") messageCount.textContent = `${input.value.length} characters`;
    });
    input.addEventListener("blur", () => validateField(fieldName));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const results = Object.keys(fields).map(validateField);
    status.className = "form-status";
    if (!results.every(Boolean)) {
      status.textContent = "Please correct the highlighted fields before submitting.";
      status.classList.add("error");
      const firstInvalid = Object.values(fields).find((field) => field.input.classList.contains("input-error"));
      if (firstInvalid) firstInvalid.input.focus();
      return;
    }
    status.textContent = "Thank you! Your message passed validation. This demo form is ready to connect to a server.";
    status.classList.add("success");
    form.reset();
    messageCount.textContent = "0 characters";
    Object.values(fields).forEach((field) => field.input.classList.remove("input-valid", "input-active"));
  });
}
