const companiesContainer = document.getElementById("logo-container");
const featuresContainer = document.getElementById("features-container");
const achievementsContainer = document.getElementById("achievements-container");

const companyLogos = [
  { src: "delta.png", alt: "Delta" },
  { src: "boeing.png", alt: "Boeing" },
  { src: "boeing.png", alt: "Boeing" },
  { src: "spacex.png", alt: "Space X" },
  { src: "ibm.png", alt: "IBM" },
  { src: "walmart.png", alt: "Walmart" },
  { src: "uber.png", alt: "Uber" },
  { src: "google.png", alt: "Google" },
  { src: "samsung.png", alt: "Samsung" },
  { src: "pepsi.png", alt: "Pepsi" },
  { src: "adidas.png", alt: "Adidas" },
];

const primaryFeatures = [
  {
    logo: "lightning.svg",
    title: "Lazy Efficient",
    desc: "A cras semper auctor neque. Proin libero nunc consequat interdum varius sit. Libero volutpat sed cras ornare arcu dui vivamus arcu felis.",
  },
  {
    logo: "gear.svg",
    title: "Streamlined Process",
    desc: "Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Orci porta non pulvinar neque laoreet.",
  },
  {
    logo: "broom.svg",
    title: "Minimum Effort",
    desc: "Tincidunt eget nullam non nisi est sit amet facilisis magna. Rhoncus dolor purus non enim praesent elementum.",
  },
  {
    logo: "chart.svg",
    title: "Absolutely Easy To Use",
    desc: "Rutrum quisque non tellus orci ac. Purus viverra accumsan in nisl. Id interdum velit laoreet id donec ultrices adisipicing elit.",
  },
  {
    logo: "bowl.svg",
    title: "Just Sleep & Chill",
    desc: "Bibendum est ultricies integer quis auctor elit. Ultrices in iaculis nunc sed. A scelerisque purus semper eget. Facilisi morbi tempus iaculi.",
  },
  {
    logo: "wink.svg",
    title: "Don't Worry About Life",
    desc: "Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Risus ultricies tristique nulla aliquet enim tortor.",
  },
];

const achievements = [
  { title: "420%", subtitle: "Data Efficiency" },
  { title: "708+", subtitle: "Conversion Rate" },
  { title: "1.82M", subtitle: "AI LLM Scale" },
];

document.addEventListener("DOMContentLoaded", () => {
  // Company Logos Section
  companyLogos.forEach((logo) => {
    companiesContainer.innerHTML += `
    <img src="./assets/companies/${logo.src}" alt=${logo.alt} width="144" height="96">
    `;
  });

  // Primary Feature Section
  primaryFeatures.forEach((feature) => {
    featuresContainer.innerHTML += `
      <div class="feature">
        <img
          src="./assets/features/${feature.logo}"
          alt="${feature.title}"
          width="80"
          height="80"
        />
        <h4>${feature.title}</h4>
        <p>${feature.desc}</p>
      </div>
`;
  });

  achievements.forEach((achievement) => {
    achievementsContainer.innerHTML += `
    <div>
      <h3>${achievement.title}</h3>
      <p>${achievement.subtitle}</p>
    </div>
    `;
  });
});
