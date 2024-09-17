document.addEventListener("DOMContentLoaded", () => {
  const iconContainers = document.querySelectorAll(".icon-container");

  iconContainers.forEach((container) => {
    container.addEventListener("click", () => {
      const sectionId = container.getAttribute("data-section");
      scrollToSection(sectionId);
    });
  });

  function scrollToSection(sectionId) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const skillsContainer = document.getElementById("skills-container");
  const skillsData = [
    { src: "/icons/react.svg", text: "React JS" },
    { src: "/icons/html-5.svg", text: "HTML 5" },
    { src: "/icons/css-3.svg", text: "CSS" },
    { src: "/icons/angular.svg", text: "Angular" },
    { src: "/icons/figma.svg", text: "Figma" },
    { src: "/icons/adobe-xd.svg", text: "Adobe XD" },
    { src: "/icons/mongodb.svg", text: "Mongo DB" },
    { src: "/icons/python.svg", text: "Python" },
    { src: "/icons/androidstudiosvg.svg", text: "Android Studio" },
    { src: "/icons/c.svg", text: "C++" },
    // Add more skills as needed
  ];

  skillsData.forEach((skill) => {
    // Create skill div
    const skillDiv = document.createElement("div");
    skillDiv.className = "skill";

    // Create img element
    const img = document.createElement("img");
    img.src = skill.src;
    img.alt = skill.text;

    // Create span element
    const span = document.createElement("span");
    span.className = "poppins-medium";
    span.textContent = skill.text;

    // Append img and span to skill div
    skillDiv.appendChild(img);
    skillDiv.appendChild(span);

    // Append skill div to container
    skillsContainer.appendChild(skillDiv);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const emailButton = document.getElementById("email-button");
  const email = "deeptank09@gmail.com"; // Replace with your email address

  emailButton.addEventListener("click", function () {
    window.location.href = `mailto:${email}`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.getElementById("download-resume");
  const pdfPath = "/Deep's Resume.pdf"; // Replace with the actual path to your PDF file

  downloadButton.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Deep's Resume.pdf"; // You can set the default file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
