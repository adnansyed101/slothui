const companiesContainer = document.getElementById("logo-container");

const companyLogos = [
  { id: 1, src: "delta.png", alt: "Delta" },
  { id: 2, src: "boeing.png", alt: "Boeing" },
  { id: 3, src: "boeing.png", alt: "Boeing" },
  { id: 4, src: "spacex.png", alt: "Space X" },
  { id: 5, src: "ibm.png", alt: "IBM" },
  { id: 6, src: "walmart.png", alt: "Walmart" },
  { id: 7, src: "uber.png", alt: "Uber" },
  { id: 8, src: "google.png", alt: "Google" },
  { id: 9, src: "samsung.png", alt: "Samsung" },
  { id: 10, src: "pepsi.png", alt: "Pepsi" },
  { id: 11, src: "adidas.png", alt: "Adidas" },
];

document.addEventListener("DOMContentLoaded", () => {
  companyLogos.map((logo) => {
    companiesContainer.innerHTML += `
    <img src="./assets/companies/${logo.src}" alt=${logo.alt} width="144" height="96">
    `;
  });
});
