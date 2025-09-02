fetch("PROJECTS.md")
  .then(response => response.text())
  .then(text => {
    document.getElementById("project-list").innerHTML = marked.parse(text);
  })
  .catch(err => {
    document.getElementById("project-list").innerHTML = "⚠️ Could not load projects.";
    console.error(err);
  });