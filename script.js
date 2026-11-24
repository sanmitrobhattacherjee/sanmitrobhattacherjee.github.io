const $ = (s) => document.querySelector(s);

function render() {
  const h = portfolio.hero;
  $("#heroEyebrow").textContent = h.eyebrow;
  $("#heroName").textContent = h.name;
  $("#heroRole").textContent = h.role;
  $("#heroSummary").textContent = h.summary;
  $("#navCv").href = h.cv;

  $("#aboutTitle").textContent = portfolio.about.title;
  $("#aboutText").textContent = portfolio.about.text;
  $("#focusRow").innerHTML = portfolio.about.focus.map(x => `<span class="focus">${x}</span>`).join("");

  $("#researchGrid").innerHTML = portfolio.research.map(x => `
    <article class="research-card">
      <div class="number">${x.number}</div>
      <h3>${x.title}</h3>
      <p>${x.text}</p>
    </article>`).join("");

  $("#timeline").innerHTML = portfolio.experience.map(x => `
    <article class="timeline-item">
      <div class="timeline-date">${x.date}</div>
      <h3>${x.title}</h3>
      <div class="timeline-org">${x.org}</div>
      <p>${x.text}</p>
    </article>`).join("");

  $("#projectGrid").innerHTML = portfolio.projects.map(x => `
    <article class="project-card">
      <h3>${x.title}</h3>
      <p>${x.text}</p>
      <div class="tags">${x.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </article>`).join("");

  $("#skillsWrap").innerHTML = portfolio.skills.map(x => `
    <article class="skill-group">
      <h3>${x.title}</h3>
      <ul>${x.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </article>`).join("");

  $("#contactHeading").textContent = portfolio.contact.heading;
  $("#contactText").textContent = portfolio.contact.text;
  $("#contactLinks").innerHTML = portfolio.contact.links.map(x =>
    `<a class="contact-link" href="${x.url}" target="_blank" rel="noopener">${x.label} ↗</a>`
  ).join("");

  $("#footerName").textContent = portfolio.footerName;
  $("#year").textContent = new Date().getFullYear();
}

render();

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, {threshold: .08});

document.querySelectorAll(".hero-copy,.hero-orbit,.section,.research-card,.timeline-item,.project-card,.skill-group,.contact-card")
  .forEach(el => { el.classList.add("reveal"); observer.observe(el); });
