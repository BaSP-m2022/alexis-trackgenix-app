class footer {
  //Getters
  get footerContainer() {
    return $('#root > div > footer');
  }
  get twitterIcon() {
    return $('#root > div > footer > div.footer_socialContainer__3bbz9 > a:nth-child(1)');
  }
  get facebookIcon() {
    return $('#root > div > footer > div.footer_socialContainer__3bbz9 > a:nth-child(2)');
  }
  get instagramIcon() {
    return $('#root > div > footer > div.footer_socialContainer__3bbz9 > a:nth-child(3)');
  }
  get githubIcon() {
    return $('#root > div > footer > div.footer_socialContainer__3bbz9 > a:nth-child(4)');
  }
  get location() {
    return $('#root > div > footer > div.footer_license__1FrkS > div.footer_location__2VI6J');
  }
  get copyright() {
    return $('#root > div > footer > div.footer_license__1FrkS > div.footer_copyright__1FoOh');
  }
}
module.exports = new footer();
