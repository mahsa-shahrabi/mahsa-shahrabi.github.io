"use strict";
$(document).ready(function () {
    let portfolioAllCategories = $(".portfolio-all-categories");
    let portfolioWebDesign = $(".portfolio-web-design");
    let portfolioBranding = $(".portfolio-branding");
    let portfolioMockups = $(".portfolio-mockups");
    let portfolioPhotography = $(".portfolio-photography");
    let portfolioWebDesignSub = $(".portfolio-web-design-sub");
    let portfolioBrandingSub = $(".portfolio-branding-sub");
    let portfolioMockupsSub = $(".portfolio-mockups-sub");
    let portfolioPhotographySub = $(".portfolio-photography-sub");

    portfolioAllCategories.click(function () {
        portfolioAllCategories.addClass("portfolio-border-bottom");
        portfolioWebDesign.removeClass("portfolio-border-bottom");
        portfolioBranding.removeClass("portfolio-border-bottom");
        portfolioMockups.removeClass("portfolio-border-bottom");
        portfolioPhotography.removeClass("portfolio-border-bottom");
        portfolioWebDesignSub.show();
        portfolioBrandingSub.show();
        portfolioMockupsSub.show();
        portfolioPhotographySub.show();
    })
    portfolioWebDesign.click(function () {
        portfolioAllCategories.removeClass("portfolio-border-bottom");
        portfolioWebDesign.addClass("portfolio-border-bottom");
        portfolioBranding.removeClass("portfolio-border-bottom");
        portfolioMockups.removeClass("portfolio-border-bottom");
        portfolioPhotography.removeClass("portfolio-border-bottom");
        portfolioWebDesignSub.show();
        portfolioBrandingSub.hide();
        portfolioMockupsSub.hide();
        portfolioPhotographySub.hide();
    })
    portfolioBranding.click(function () {
        portfolioAllCategories.removeClass("portfolio-border-bottom");
        portfolioWebDesign.removeClass("portfolio-border-bottom");
        portfolioBranding.addClass("portfolio-border-bottom");
        portfolioMockups.removeClass("portfolio-border-bottom");
        portfolioPhotography.removeClass("portfolio-border-bottom");
        portfolioWebDesignSub.hide();
        portfolioBrandingSub.show();
        portfolioMockupsSub.hide();
        portfolioPhotographySub.hide();
    })
    portfolioMockups.click(function () {
        portfolioAllCategories.removeClass("portfolio-border-bottom");
        portfolioWebDesign.removeClass("portfolio-border-bottom");
        portfolioBranding.removeClass("portfolio-border-bottom");
        portfolioMockups.addClass("portfolio-border-bottom");
        portfolioPhotography.removeClass("portfolio-border-bottom");
        portfolioWebDesignSub.hide();
        portfolioBrandingSub.hide();
        portfolioMockupsSub.show();
        portfolioPhotographySub.hide();
    })
    portfolioPhotography.click(function () {
        portfolioAllCategories.removeClass("portfolio-border-bottom");
        portfolioWebDesign.removeClass("portfolio-border-bottom");
        portfolioBranding.removeClass("portfolio-border-bottom");
        portfolioMockups.removeClass("portfolio-border-bottom");
        portfolioPhotography.addClass("portfolio-border-bottom");
        portfolioWebDesignSub.hide();
        portfolioBrandingSub.hide();
        portfolioMockupsSub.hide();
        portfolioPhotographySub.show();
    })

})