/*
==================================================
                WEBSITE CONFIG
==================================================

Change the values below to customize your website.
*/

const CONFIG = {

    // Website name
    siteName: "GPU's Keys",

    // Main homepage
    heroTitle: "Welcome to GPU's Optimizer Keys",

    heroDescription:
        "Premium products, great support and an amazing community.",


    // Discord
    discordInvite:
        "https://discord.gg/HFzeJEBtfr",


    // Prices
    prices: {

        monthly: "£10",

        lifetime: "£20"

    },


    // About page
    aboutText:
        "We are a community focused on providing quality products and a great experience for our members.",


    // Management
    management: {

        manager1: {
            name: "GPU",
            description: "Website owner"
        },

        manager2: {
            name: "Kaxwz",
            description: "Administrator"
        },

        manager3: {
            name: "lrp",
            description: "Customer support"
        }

    }

};


/*
==================================================
              DO NOT EDIT BELOW
==================================================
*/


// Website name
document.getElementById("siteName").textContent =
    CONFIG.siteName;

document.getElementById("footerName").textContent =
    CONFIG.siteName;


// Homepage
document.getElementById("heroTitle").textContent =
    CONFIG.heroTitle;

document.getElementById("heroDescription").textContent =
    CONFIG.heroDescription;


// Prices
document.getElementById("monthlyPrice").textContent =
    CONFIG.prices.monthly;

document.getElementById("lifetimePrice").textContent =
    CONFIG.prices.lifetime;


// About
document.getElementById("aboutText").textContent =
    CONFIG.aboutText;


// Management
document.getElementById("manager1Name").textContent =
    CONFIG.management.manager1.name;

document.getElementById("manager1Description").textContent =
    CONFIG.management.manager1.description;


document.getElementById("manager2Name").textContent =
    CONFIG.management.manager2.name;

document.getElementById("manager2Description").textContent =
    CONFIG.management.manager2.description;


document.getElementById("manager3Name").textContent =
    CONFIG.management.manager3.name;

document.getElementById("manager3Description").textContent =
    CONFIG.management.manager3.description;


/*
==================================================
                    TABS
==================================================
*/

function showPage(page) {

    // Hide every page
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(section) {
        section.classList.remove("active");
    });


    // Show selected page
    document.getElementById(page).classList.add("active");

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/*
==================================================
                DISCORD BUTTON
==================================================
*/

function openDiscord() {

    window.location.href = CONFIG.discordInvite;

}


/*
==================================================
              PURCHASE BUTTONS
==================================================
*/

function purchase(type) {

    let message = "";

    if (type === "monthly") {

        message =
            "I would like to purchase Pro Monthly.";

    }

    if (type === "lifetime") {

        message =
            "I would like to purchase Pro Lifetime.";

    }


    /*
    The Discord server receives the visitor.

    You can also use different Discord invite
    links for different products if you want.
    */

    window.location.href = CONFIG.discordInvite;

}