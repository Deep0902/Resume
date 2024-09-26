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

function openInNewTab(url) {
  window.open(url, "_blank");
}
