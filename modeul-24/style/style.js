const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "2px solid steelblue";
  section.style.marginTop = "5px";
  section.style.borderRadius = "15px";
  section.style.padding = "15px";
  section.style.backgroundColor = "lightgray";
}

const exampleContainer = document.getElementById("example-container");
exampleContainer.style.backgroundColor = "darkblue";