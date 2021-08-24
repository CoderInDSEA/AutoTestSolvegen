import FullscreenMode from "../SmartImage/FullscreenMode.Page";

describe("auto tests for testing full screen mode of smart image", () => {
  it("should expanding first image", async () => {
    var CheckList = 0;
    await FullscreenMode.open();
    await browser.setWindowSize(1920, 1080);

    const SmartImageSize = await FullscreenMode.GetSizeSmartImage();

    await FullscreenMode.submit();

    const CheckSmartImageSize = await FullscreenMode.GetSizeFullscreenImage();

    if (CheckSmartImageSize != SmartImageSize) {
      const FullscreenImageWidth = await FullscreenMode.GetSizeFullscreenImage(
        "width"
      );
      const FullscreenImageHeight = await FullscreenMode.GetSizeFullscreenImage(
        "height"
      );

      await expect(FullscreenMode.buttonFullscreen).toExist();
      await expect(FullscreenMode.buttonFullscreen).toHaveAttributeContaining(
        "n2-actions",
        "fullscreen"
      );
      await expect(FullscreenMode.IndicatorFullscreen).toHaveText(
        "Golden Gate Bridge"
      );
      await expect(
        FullscreenMode.FullscreenImageSizeLink
      ).toHaveElementProperty("width", FullscreenMode.FullscreenImageWidth);
      await expect(
        FullscreenMode.FullscreenImageSizeLink
      ).toHaveElementProperty("height", FullscreenMode.FullscreenImageHeight);
    }
  });
  it("should expanding second image", async () => {
    await browser.url(
      "https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/smartimage-contain/"
    );
    await browser.setWindowSize(1920, 1080);

    const SmartImageSize = await FullscreenMode.GetSizeSmartImage();

    await FullscreenMode.submit();

    const CheckSmartImageSize = await FullscreenMode.GetSizeFullscreenImage();

    if (CheckSmartImageSize != SmartImageSize) {
      const widthFullscreenImage =
        await FullscreenMode.FullscreenImageHeightLink.getSize("width");
      const heightFullscreenImage =
        await FullscreenMode.FullscreenImageWidthLink.getSize("height");

      await expect(FullscreenMode.buttonFullscreen).toExist();
      await expect(FullscreenMode.buttonFullscreen).toHaveAttributeContaining(
        "aria-label",
        "fullscreen"
      );
      await expect(FullscreenMode.IndicatorFullScreen).toHaveText(
        "Golden Gate Bridge"
      );
      await expect(
        FullscreenMode.FullscreenImageSizeLink
      ).toHaveElementProperty("width", FullscreenMode.widthFullscreenImage);
      await expect(
        FullscreenMode.FullscreenImageSizeLink
      ).toHaveElementProperty("height", FullscreenMode.heightFullscreenImage);
    }
  });
  it("should expanding third image", async () => {
    await browser.url(
      "https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/smartimage-auto-height/"
    );
    await browser.setWindowSize(1920, 1080);

    const SmartImageSize = await FullscreenMode.GetSizeSmartImage();

    await FullscreenMode.submit();

    const CheckSmartImageSize = await FullscreenMode.GetSizeFullscreenImage();

    if (CheckSmartImageSize != SmartImageSize) {
      const FullscreenImageHeight =
        await FullscreenMode.FullscreenImageHeightLink.getSize("width");
      const FullscreenImageWidth =
        await FullscreenMode.FullscreenImageWidthLink.getSize("height");

      await expect(FullscreenMode.buttonFullscreen).toExist();
      await expect(FullscreenMode.buttonFullscreen).toHaveAttributeContaining(
        "aria-label",
        "fullscreen"
      );
      await expect(FullscreenMode.IndicatorFullScreen).toHaveText(
        "Golden Gate Bridge"
      );
      await expect(
        FullscreenMode.FullscreenImageSizeLink
      ).toHaveElementProperty("width", FullscreenMode.FullscreenImageHeight);
      await expect(
        FullscreenMode.FullscreenImageSizeLink
      ).toHaveElementProperty("height", FullscreenMode.FullscreenImageWidth);
    }
  });
  it("should expanding fourth image", async () => {
    const SmartImageHeigth = [],
      SmartImageWidth = [],
      SmartImageCheck = [],
      ButtonToFullscreen = [];
    const FullscreenImageSizeLink = [],
      FullscreenImageHeightLink = [],
      FullscreenImageWidthLink = [];
    const FullscreenImageSize = [],
      FullscreenImageHeight = [],
      FullscreenImageWidth = [],
      TestingText = [];
    const Text = ["New York Station", "Fox", "Golden Gate Bridge"];

    SmartImageCheck[0] = await $(
      '[aria-hidden = "false"] .swiper-slide-active[aria-label = "1 / 3"]'
    );
    ButtonToFullscreen[0] = await $(
      '[aria-hidden = "false"] [caption-short*="New"] .smartimage-interaction-icon'
    );

    SmartImageCheck[1] = await $(
      '[aria-hidden = "false"] .swiper-slide-active[aria-label = "2 / 3"]'
    );
    ButtonToFullscreen[1] = await $(
      '[aria-hidden = "false"] [caption-short*="New"] .smartimage-interaction-icon'
    );

    SmartImageCheck[2] = await $(
      '[aria-hidden = "false"] .swiper-slide-active[aria-label = "3 / 3"]'
    );

    await browser.url(
      "https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/smartimage-group/"
    );
    await browser.setWindowSize(1920, 1080);

    for (var i = 0; i < SmartImageCheck.length; i++) {
      SmartImageHeigth[i] = await SmartImageCheck[i].getSize("height");
      SmartImageWidth[i] = await SmartImageCheck[i].getSize("width");
    }

    await SmartImageCheck[0].click();

    let ChildCounter = 1;
    for (var i = 0; i < SmartImageCheck.length; i++) {
      FullscreenImageSizeLink[i] = await $(
        `#hash--508119828  figure:nth-child(${ChildCounter})`
      );
      ChildCounter++;
    }
    for (var i = 0; i < SmartImageCheck.length; i++) {
      ChildCounter != 0 ? (ChildCounter = 1) : (ChildCounter = ChildCounter);
      FullscreenImageHeightLink[i] = await $(
        `#hash--508119828  figure:nth-child(${ChildCounter})`
      );
      ChildCounter++;
    }
    for (var i = 0; i < SmartImageCheck.length; i++) {
      ChildCounter != 0 ? (ChildCounter = 1) : (ChildCounter = ChildCounter);
      FullscreenImageWidthLink[i] = await $(
        `#hash--508119828  figure:nth-child(${ChildCounter})`
      );
      ChildCounter++;
    }

    const NavigationBar = await $("#hash--508119828 .side-navigation-right");
    const CloseFullscreen = await $("#hash--2124326262 .gallery-close-icon");

    TestingText[0] = await $(
      "#hash--508119828 figure:nth-child(1) p:nth-child(1) b"
    );
    TestingText[1] = await $(
      "#hash--508119828 figure:nth-child(2) p:nth-child(1) b"
    );
    TestingText[2] = await $(
      "#hash--508119828 figure:nth-child(3) p:nth-child(1) b"
    );

    for (var i = 0; i < SmartImageCheck.length; i++) {
      FullscreenImageSize[i] = await FullscreenImageSizeLink[i].getSize();
    }
    for (var i = 0; i < SmartImageCheck.length; i++) {
      FullscreenImageHeight[i] = await FullscreenImageHeightLink[i].getSize(
        "height"
      );
    }
    for (var i = 0; i < SmartImageCheck.length; i++) {
      FullscreenImageWidth[i] = await FullscreenImageWidthLink[i].getSize(
        "width"
      );
    }

    for (
      var i = 0;
      i < SmartImageWidth.length && i < SmartImageHeigth.length;
      i++
    ) {
      if (
        SmartImageWidth[i] != FullscreenImageWidth[i] &&
        SmartImageHeigth[i] != FullscreenImageHeight[i]
      ) {
        await expect(TestingText[i]).toHaveText(Text[i]);

        if (i - 1 < SmartImageWidth.length) {
          await expect(ButtonToFullscreen[i]).not.toExist();
          await NavigationBar.click();
        } else {
          await CloseFullscreen.click();
        }
      }
    }
  });

  it("should expanding fifth image", async () => {
    const SmartImageCheck = await $('div[y-location="4"]  img');
    const FullscreenImageSizeLink = await $('div[y-location="4"]  img');
    const FullscreenImageLinkWidthHeight = await $(
      'div[y-location="4"] #wrpr_554967d44a22bp img'
    );

    await browser.url(
      "https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/smartimage-non-expandable"
    );
    await browser.setWindowSize(1280, 1020);

    const SmartImageSize = await SmartImageCheck.getSize();
    const SmartImageHeight = await SmartImageCheck.getSize("height");
    const SmartImageWidth = await SmartImageCheck.getSize("width");

    await expect(SmartImageSize).not.toBeClickable();

    await SmartImageCheck.click();

    const FullscreenImageHeight = await FullscreenImageLinkWidthHeight.getSize(
      "height"
    );
    const FullscreenImageWidth = await FullscreenImageLinkWidthHeight.getSize(
      "width"
    );

    if (
      SmartImageWidth != FullscreenImageWidth &&
      SmartImageHeight != FullscreenImageHeight
    ) {
      await expect(FullscreenImageSizeLink).not.toHaveAttributeContaining(
        "non-expandable",
        "false"
      );
      await expect(SmartImageCheck).not.toHaveElementProperty(
        "height",
        FullscreenImageHeight
      );
      await expect(SmartImageCheck).not.toHaveElementProperty(
        "width",
        FullscreenImageWidth
      );
    } else if (
      SmartImageWidth == FullscreenImageWidth &&
      SmartImageHeight == FullscreenImageHeight
    ) {
      await expect(FullscreenImageSizeLink).toHaveAttributeContaining(
        "non-expandable",
        "true"
      );
      await expect(SmartImageCheck).toHaveElementProperty(
        "width",
        FullscreenImageWidth
      );
      await expect(SmartImageCheck).toHaveElementProperty(
        "height",
        FullscreenImageHeight
      );
    }
  });
});
