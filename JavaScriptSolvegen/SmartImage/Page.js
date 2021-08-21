const FirtParagraphText =  $('.vertical-pane-container-active #text_5abe7f3fb8987 span')
        const FirstLetterAnimationText =  $('#text_5abe7f3fb8af0 .n2-text-animated:nth-child(1) span:nth-child(1)')
        const LastParagraphText = $('.vertical-pane-container-active #text_5abe7f3fb8c5b span')

         browser.url('https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/text-animations-scroll/')
         browser.setWindowSize(1920,1080)
         FirstLetterAnimationText.scrollIntoView()

         expect(FirstLetterAnimationText).toBeDisplayedInViewport()

        const AnimatioProperty =   FirstLetterAnimationText.getCSSProperty('animation-name')
        console.log(AnimatioProperty)