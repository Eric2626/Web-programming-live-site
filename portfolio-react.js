/* Reusable React UI mounted inside the existing portfolio homepage.
 * Uses function components, props, useState, JSX-free React.createElement,
 * map() + stable keys, and conditional rendering.
 */
(function () {
  "use strict";
  var root = document.getElementById("react-projects-root");
  if (!root || !window.React || !window.ReactDOM || !ReactDOM.createRoot) return;

  var e = React.createElement;
  var useState = React.useState;
  var base = "https://eric2626.github.io/Web-programming-live-site/";
  var github = "https://github.com/Eric2626/Web-programming-live-site/";

  var projects = [
    {
      id: "memory-match", title: "Memory Match — Neon Arcade",
      description: "A team-made browser game with practice and timed challenges.",
      technologies: ["HTML", "CSS", "JavaScript"],
      code: github + "tree/main/teamproject",
      website: base + "teamproject/index.html"
    },
    {
      id: "book-search", title: "Book Search",
      description: "Search for books and explore results from a public book API.",
      technologies: ["HTML", "CSS", "JavaScript"],
      code: github + "blob/main/week7/book-search.html",
      website: base + "week7/book-search.html"
    },
    {
      id: "registration", title: "Student Registration Form",
      description: "A student form with HTML validation and custom styles.",
      technologies: ["HTML", "CSS", "JavaScript"],
      code: github + "blob/main/week8/upgraded%20registration.html",
      website: base + "week8/upgraded%20registration.html"
    },
    {
      id: "course-catalog", title: "React Course Catalog",
      description: "Reusable React cards showing courses, credits, and required or elective status.",
      technologies: ["React", "CSS", "JavaScript"],
      code: github + "tree/main/week11/course-catalog",
      website: base + "week11/course-catalog/live/index.html"
    }
  ];
  var filters = ["All", "React", "HTML", "CSS", "JavaScript"];

  function ProjectCard(props) {
    var project = props.project;
    return e("article", {className:"react-project"},
      e("h3", null, project.title),
      e("p", null, project.description),
      e("div", {className:"react-tags", "aria-label":"Technologies"},
        project.technologies.map(function (tech) {
          return e("span", {key:tech}, tech);
        })
      ),
      e("div", {className:"react-project-links"},
        e("a", {href:project.code, target:"_blank", rel:"noopener noreferrer"}, "View Code"),
        e("a", {href:project.website, target:"_blank", rel:"noopener noreferrer"}, "Open Website")
      )
    );
  }

  function FilterBar(props) {
    return e("div", {className:"react-filters", role:"group", "aria-label":"Filter projects by technology"},
      filters.map(function (technology) {
        var selected = props.active === technology;
        return e("button", {
          type:"button", key:technology,
          className:"react-filter" + (selected ? " active" : ""),
          "aria-pressed":selected,
          onClick:function () { props.onChange(technology); }
        }, technology);
      })
    );
  }

  function FeaturedProjects() {
    var filterState = useState("All");
    var selected = filterState[0];
    var setSelected = filterState[1];
    var searchState = useState("");
    var search = searchState[0];
    var setSearch = searchState[1];

    var visible = projects.filter(function (project) {
      var technologyMatches = selected === "All" || project.technologies.includes(selected);
      var textMatches = (project.title + " " + project.description + " " + project.technologies.join(" "))
        .toLowerCase().includes(search.trim().toLowerCase());
      return technologyMatches && textMatches;
    });

    return e(React.Fragment, null,
      e("div", {className:"react-toolbar"},
        e(FilterBar, {active:selected, onChange:setSelected}),
        e("input", {
          className:"react-search", type:"search",
          value:search, placeholder:"Search projects",
          "aria-label":"Search featured projects",
          onChange:function (event) { setSearch(event.target.value); }
        })
      ),
      e("p", {className:"react-summary", "aria-live":"polite"},
        "Showing " + visible.length + " of " + projects.length + " projects"
      ),
      e("div", {className:"react-project-grid"},
        visible.length
          ? visible.map(function (project) {
              return e(ProjectCard, {project:project, key:project.id});
            })
          : e("p", {className:"react-no-results"}, "No projects match this filter.")
      )
    );
  }
  ReactDOM.createRoot(root).render(e(FeaturedProjects));
}());
