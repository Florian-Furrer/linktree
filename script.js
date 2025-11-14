document.getElementById("year").textContent = new Date().getFullYear();

const params = new URLSearchParams(window.location.search);
const set = params.get("set") === "cg" ? "CG_Generalist" : "Environment_Generalist";
const jsonFile = `${set}_links.json`;

fetch(jsonFile)
  .then(res => res.json())
  .then(data => {
    const wrapper = document.getElementById("links-wrapper");
    data.forEach(({ label, href, icon }) => {
      const a = document.createElement("a");
      a.href = href;
      a.className = "link";
      a.target = "_blank";

      const img = document.createElement("img");
      img.src = icon;
      img.alt = `${label} Icon`;

      a.appendChild(img);
      a.appendChild(document.createTextNode(label));
      wrapper.appendChild(a);
    });
  });
