import Page from "./Page";

class FullscreenMode extends Page {
  get btnFullscreen() {
    return $('[aria-hidden = "false"] .smartimage-interaction-icon');
  }
  get SmartImageCheck() {
    return $('[aria-hidden = "false"] .swiper-slide-active img ');
  }
  get FullscreenImageSizeLink() {
    return $("div.n2-appshell-styles  img");
  }
  get FullscrenImageHeightLink() {
    return $("div.n2-appshell-styles  img");
  }
  get FullscreenImageWidthLink() {
    return $("div.n2-appshell-styles .swiper-zoom-container img");
  }
  get IndicatorFullscreen() {
    return $("div.n2-appshell-styles .caption-truncated b");
  }
  async open() {
    super.open(
      "https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/smartimage/"
    );
  }

  async submit() {
    await this.SmartImageCheck.click();
  }
  async GetSizeSmartImage() {
    await this.SmartImageCheck.getSize();
  }
  async GetSizeFullscreenImage() {
    await this.FullscreenImageSizeLink.getSize();
  }

  ///Three Image
}

export default new FullscreenMode();
