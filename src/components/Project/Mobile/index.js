import React from "react";

const Projects = () => {
  const projects = [
    {
      level: "Beginner",
      title: "Ambulance Whizz",
      description:
        "The app allows an ambulance driver to inform traffic police about an upcoming emergency vehicle, to create a fast corridor till the hospital.",
      studentName: "Brinda",
      projectImage1x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/ambulance-1x.png",
      projectImage2x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/ambulance-2x.png",
      avatarImage1x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card11x.png",
      avatarImage2x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card12x.png",
    },
    {
      level: "Beginner",
      title: "School Chat App",
      description:
        "The app improves communication between students and teachers.",
      studentName: "Shreyans Shah",
      projectImage1x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/school-chatt-app-1x.png",
      projectImage2x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/school-chatt-app-2x.png",
      avatarImage1x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card21x.png",
      avatarImage2x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card22x.png",
    },
    {
      level: "Intermediate",
      title: "DYSXA App",
      description:
        "The app helps children to learn letters, numbers and colors with a guided and engaging flow.",
      studentName: "Shouradeep Sarkar",
      projectImage1x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/DYSXA1x.png",
      projectImage2x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/DYSXA2x.png",
      avatarImage1x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card31x.png",
      avatarImage2x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card32x.png",
    },
    {
      level: "Advanced",
      title: "Pat a Pet App",
      description:
        "The app connects fellow pet lovers to take care of each other's pets.",
      studentName: "Agastya Yadav",
      projectImage1x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/pet-1x.png",
      projectImage2x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/pet-2x.png",
      avatarImage1x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card41x.png",
      avatarImage2x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card42x.png",
    },
    {
      level: "Professional",
      title: "The Escape Game",
      description:
        "An engaging strategy and survival game which is based on a dramatic army engagement in India.",
      studentName: "Aaron Ghosh",
      projectImage1x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/escape-1x.png",
      projectImage2x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projects/escape-2x.png",
      avatarImage1x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card51x.png",
      avatarImage2x:
        "https://s3-cdnwhjr.whjr.online/website/desktop/projectCraetor/Avatar-card52x.png",
    },
  ];

  return (
    <div className="pt-15 mb-15 is-visible-viewport">
      <div className="p-15">
        <h1 className="m-0 text-center pt-15">
          <span className="color-primary text-bold">5.5 Million</span> Student
          Projects &amp; Counting
        </h1>
      </div>
      <div className="over-flow-scroll">
        <div className="js-simple-slider simple-slider p-15">
          {projects.map((project, index) => (
            <div className="simple-slider_item slider-card" key={index}>
              <img
                srcSet={`${project.projectImage1x} 1x, ${project.projectImage2x} 2x`}
                alt={`${project.title}`}
                className="w-100"
              />
              <div className="p-10 student-info">
                <div className="font-bold font14 color-primary">
                  {project.level}
                </div>
                <h4 className="m-0 pt-5 color-183B56">{project.title}</h4>
                <p className="font14" style={{ paddingTop: "0.5334vw" }}>
                  {project.description}
                </p>
                <div className="font14 pt-10 color-5A7184">
                  {project.studentName}
                </div>
              </div>
              <img
                srcSet={`${project.avatarImage1x} 1x, ${project.avatarImage2x} 2x`}
                alt={`${project.studentName}`}
                className="student-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="divider divider-bg"></div>
    </div>
  );
};

export default Projects;
