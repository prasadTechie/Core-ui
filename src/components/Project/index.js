import React from "react";

const Projects = () => {
  const projects = [
    {
      imageSrc:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/ambulance-1x.png",
      imageSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/ambulance-1x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/projects/ambulance-2x.png 2x",
      profileSrc:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card11x.png",
      profileSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card11x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card12x.png 2x",
      level: "Beginner",
      title: "Ambulance Whizz",
      description:
        "The app allows an ambulance driver to inform traffic police about an upcoming emergency vehicle, to create a fast corridor till the hospital.",
      author: "Brinda",
    },
    {
      imageSrc:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/school-chatt-app-1x.png",
      imageSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/school-chatt-app-1x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/projects/school-chatt-app-2x.png 2x",
      profileSrc:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card21x.png",
      profileSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card21x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card22x.png 2x",
      level: "Beginner",
      title: "School Chat App",
      description:
        "The app improves communication between students and teachers.",
      author: "Shreyans Shah",
    },
    {
      imageSrc:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/DYSXA1x.png",
      imageSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/DYSXA1x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/projects/DYSXA2x.png 2x",
      profileSrc:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card31x.png",
      profileSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card31x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card32x.png 2x",
      level: "Intermediate",
      title: "DYSXA App",
      description:
        "The app helps children to learn letters, numbers and colors with a guided and engaging flow.",
      author: "Shouradeep Sarkar",
    },
    {
      imageSrc:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/pet-1x.png",
      imageSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/pet-1x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/projects/pet-2x.png 2x",
      profileSrc:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card41x.png",
      profileSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card41x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card42x.png 2x",
      level: "Advanced",
      title: "Pat a Pet App",
      description:
        "The app connects fellow pet lovers to take care of each other's pets.",
      author: "Agastya Yadav",
    },
    {
      imageSrc:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/escape-1x.png",
      imageSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/escape-1x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/projects/escape-2x.png 2x",
      profileSrc:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card51x.png",
      profileSrcSet:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card51x.png 1x, https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card52x.png 2x",
      level: "Professional",
      title: "The Escape Game",
      description:
        "An engaging strategy and survival game which is based on a dramatic army engagement in India.",
      author: "Aaron Ghosh",
    },
  ];

  return (
    <div
      id="studentProjects"
      className="student-projects-articles-section"
      n
      style={{ marginTop: "5%" }}
    >
      <div className="container">
        <h2 className="section-heading">
          <span className="color-primary">5.5 Million</span> Student Projects
          &amp; Counting
        </h2>
      </div>
      <div className="marquee student-projects-container">
        {projects.map((project, index) => (
          <div className="student-projects-card" key={index}>
            <div className="student-projects-image-wrapper">
              <div className="hideoverflow-image">
                <img
                  src={project.imageSrc}
                  srcSet={project.imageSrcSet}
                  alt={project.title}
                  className="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="student-projects-contents">
              <img
                src={project.profileSrc}
                srcSet={project.profileSrcSet}
                alt={`${project.author}-profile`}
                className="featured-profile"
                loading="lazy"
              />
              <p className="font16 student-projects-beg">{project.level}</p>
              <h4>{project.title}</h4>
              <p className="font14 student-projects-description">
                {project.description}
              </p>
              <h6 className="student-projects-author color-5A7184">
                {project.author}
              </h6>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="curriculum__bottom">
          <div>Want to learn how to create such awesome projects?</div>
          <a className="book_trial nav-item" href="#">
            <button
              className="btn btn-primary book_trial_btn color-fff"
              data-event-prop="student_project"
              style={{ borderRadius: 0 }}
            >
              <span className="btn-text">
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
                  <path
                    d="M1.28571 16.7143V13.8214H4.17857V16.7143H1.28571Z..."
                    fill="#fff"
                  />
                </svg>
                Book a FREE Trial
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
