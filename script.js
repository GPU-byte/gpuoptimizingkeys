// =====================================================
// GPU'S OPTIMIZER CONFIG
// =====================================================

const CONFIG = {

  // Website
  siteName: "GPU's Optimizer",

  // Hero
  heroTitle: "GPU's Optimizer",

  heroDescription:
    "Optimize your gaming experience with GPU's Optimizer.",

  // Discord
  discordInvite:
    "https://discord.gg/HFzeJEBtfr",

  // Prices
  prices: {
    monthly: "£5.00",
    lifetime: "£25.00"
  },

  // About
  aboutText:
    "GPU's Optimizer is focused on helping users get the most out of their gaming systems through optimization and performance improvements.",

  // Download
  download: {

    title:
      "Download GPU's Optimizer",

    description:
      "Click below to download the latest version of GPU's Optimizer.",

    buttonText:
      "Download Now",

    downloadUrl:
      "https://gofile.io/d/4YMrOviH",

    version:
      "v1.0.0"
  },

  // Management
  management: {

    manager1: {
      name: "GPU",
      role: "Owner / Lead Developer",
      description: "GPU's Optimizer Developer / Owner Team"
    },

    manager2: {
      name: "Kaxwz.",
      role: "Co Owner",
      description: "GPU's Optimizer Owner Team"
    },

    manager3: {
      name: "LRP",
      role: "Management",
      description: "GPU's Optimizer Management Team"
    }

  }

};


// =====================================================
// PAGE SWITCHING
// =====================================================

function showPage(pageName) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(pageName);

  if (page) {
    page.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// =====================================================
// DISCORD
// =====================================================

function openDiscord() {

  window.open(
    CONFIG.discordInvite,
    "_blank"
  );

}


// =====================================================
// PURCHASE
// =====================================================

function purchase(type) {

  window.open(
    CONFIG.discordInvite,
    "_blank"
  );

}


// =====================================================
// LOAD WEBSITE CONFIG
// =====================================================

function loadConfig() {

  // Browser title
  document.title = CONFIG.siteName;

  // Hero description
  const heroDescription =
    document.getElementById("heroDescription");

  if (heroDescription) {
    heroDescription.textContent =
      CONFIG.heroDescription;
  }


  // Monthly price
  const monthlyPrice =
    document.getElementById("monthlyPrice");

  if (monthlyPrice) {
    monthlyPrice.textContent =
      CONFIG.prices.monthly;
  }


  // Lifetime price
  const lifetimePrice =
    document.getElementById("lifetimePrice");

  if (lifetimePrice) {
    lifetimePrice.textContent =
      CONFIG.prices.lifetime;
  }


  // About
  const aboutText =
    document.getElementById("aboutText");

  if (aboutText) {
    aboutText.textContent =
      CONFIG.aboutText;
  }


  // Download title
  const downloadTitle =
    document.getElementById("downloadTitle");

  if (downloadTitle) {
    downloadTitle.textContent =
      CONFIG.download.title;
  }


  // Download description
  const downloadDescription =
    document.getElementById("downloadDescription");

  if (downloadDescription) {
    downloadDescription.textContent =
      CONFIG.download.description;
  }


  // Download button
  const downloadButton =
    document.getElementById("downloadButton");

  if (downloadButton) {

    downloadButton.textContent =
      CONFIG.download.buttonText;

    downloadButton.href =
      CONFIG.download.downloadUrl;

  }


  // Download version
  const downloadVersion =
    document.getElementById("downloadVersion");

  if (downloadVersion) {

    downloadVersion.textContent =
      CONFIG.download.version;

  }


  // Management 1
  document.getElementById("manager1Name").textContent =
    CONFIG.management.manager1.name;

  document.getElementById("manager1Role").textContent =
    CONFIG.management.manager1.role;

  document.getElementById("manager1Description").textContent =
    CONFIG.management.manager1.description;


  // Management 2
  document.getElementById("manager2Name").textContent =
    CONFIG.management.manager2.name;

  document.getElementById("manager2Role").textContent =
    CONFIG.management.manager2.role;

  document.getElementById("manager2Description").textContent =
    CONFIG.management.manager2.description;


  // Management 3
  document.getElementById("manager3Name").textContent =
    CONFIG.management.manager3.name;

  document.getElementById("manager3Role").textContent =
    CONFIG.management.manager3.role;

  document.getElementById("manager3Description").textContent =
    CONFIG.management.manager3.description;

}


// =====================================================
// START WEBSITE
// =====================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadConfig();

    showPage("home");

  }
);
