
document.addEventListener('DOMContentLoaded', () => {
  // Function to handle smooth scrolling
  const smoothScroll = (targetId) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 50; // 50px offset

          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
          });
      } else {
          console.error(`Target element with id "${targetId}" not found`);
      }
  };

  // Event listener for mobile app development
  const mobileAppLink = document.querySelector('.carousel .left #app-ideation-btn');
  if (mobileAppLink) {
      mobileAppLink.addEventListener('click', (event) => {
          event.preventDefault();
          smoothScroll('app-ideation-btn');
      });
  }

  // Event listener for web app development
  const webAppLink = document.querySelector('a[href="#web-app-ideation"]');
  if (webAppLink) {
      webAppLink.addEventListener('click', (event) => {
          event.preventDefault();
          smoothScroll('web-app-ideation');
      });
  }
  // Event listener for UI/UX design services
  const UIUXLink = document.querySelector('a[href="#uiux-design-btn"]');
  if (webAppLink) {
      webAppLink.addEventListener('click', (event) => {
          event.preventDefault();
          smoothScroll('web-app-ideation');
      });
  }
  // Event listener for technical consultancy services
  const consultancyLink = document.querySelector('a[href="#Consultancy-link"]');
  if (webAppLink) {
      webAppLink.addEventListener('click', (event) => {
          event.preventDefault();
          smoothScroll('web-app-ideation');
      });
  }

  // Optional: Add smooth scrolling to all links with href starting with #
  document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          smoothScroll(targetId);
      });
  });
});

let items = document.querySelectorAll(".item");
let carousel = document.querySelector(".carousel");
let categoryLinks = document.querySelectorAll("#category-links li a"); // Select the category links

//--------ACTIVE LINK BEHAVIOUR-------------

document.addEventListener("scroll", () => {
let proportion = carousel.getBoundingClientRect().top / window.innerHeight;
let index = Math.ceil(-1 * (proportion + 0.01));

items.forEach((item, i) => {
  item.className = "item";
  if (i == index) {
      item.className = "item active";

      // Logic for activating category links
      if (index === 5) {
          categoryLinks.forEach(link => link.classList.remove("active"));
          categoryLinks[1].classList.add("active"); // Activate "Web Development" when index is 4 (5th item)
      } else if (index >= 0 && index < 4) {
          categoryLinks.forEach(link => link.classList.remove("active"));
          categoryLinks[0].classList.add("active"); // Activate "Software Development" for indexes 0 to 3
      }else if (index >= 10 && index < 17) {
        categoryLinks.forEach(link => link.classList.remove("active"));
        categoryLinks[2].classList.add("active"); // UI/UX Design Services for indexes 10 to 16
      } else if (index >= 17) {
        categoryLinks.forEach(link => link.classList.remove("active"));
        categoryLinks[3].classList.add("active"); // Technical Consulting Services for indexes 17 and above
      }
  }
});
});




