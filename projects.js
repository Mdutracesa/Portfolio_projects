// Fetch PROJECTS.md and display as cards
const projectList = document.getElementById("project-list");
const projectsURL = "https://raw.githubusercontent.com/yourusername/tech-portfolio/main/PROJECTS.md";

fetch(projectsURL)
  .then(response => response.text())
  .then(markdown => {
    const html = marked.parse(markdown);
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const cards = [];
    const headers = tempDiv.querySelectorAll("h2, h3");
    headers.forEach(header => {
      if (header.tagName === "H3" || header.tagName === "H2") {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = header.outerHTML;
        let next = header.nextElementSibling;
        while (next && next.tagName !== "H2" && next.tagName !== "H3") {
          const toAppend = next;
          next = next.nextElementSibling;
          card.appendChild(toAppend);
        }
        cards.push(card);
      }
    });

    projectList.innerHTML = "";
    cards.forEach(card => projectList.appendChild(card));
  })
  .catch(err => {
    projectList.innerHTML = "<p>⚠️ Unable to load projects. Please try again later.</p>";
    console.error("Error loading projects:", err);
  });