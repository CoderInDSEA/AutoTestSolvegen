describe("auto tests for testing text animation on scroll down and up", () => {
  it("Scroll down and up", async () => {
    const FirtParagraphText = await $(
      ".vertical-pane-container-active #text_5abe7f3fb8987 span"
    );
    const FirstLetterAnimationText = await $(
      "#text_5abe7f3fb8af0 .n2-text-animated:nth-child(1) span:nth-child(1)"
    );
    const LastParagraphText = await $(
      ".vertical-pane-container-active #text_5abe7f3fb8c5b span"
    );

    await browser.url(
      "https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/text-animations-scroll/"
    );
    await browser.setWindowSize(1920, 1080);
    await FirstLetterAnimationText.scrollIntoView();

    await expect(FirstLetterAnimationText).toBeDisplayedInViewport();

    await expect(FirstLetterAnimationText).toBeDisplayed();

    await LastParagraphText.scrollIntoView();

    await expect(LastParagraphText).toBeDisplayedInViewport();

    await FirtParagraphText.scrollIntoView();

    await expect(FirtParagraphText).toBeDisplayedInViewport();
  });
});
