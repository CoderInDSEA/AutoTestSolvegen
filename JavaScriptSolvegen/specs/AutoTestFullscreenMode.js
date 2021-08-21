describe('auto tests for testing full screen mode of smart image',  () => {
    it('should expanding first image', async () => {
        const buttonFullscreen = await $('#wrpr_554967d44a32cua #text_1430959689730')
        const SmartImageCheck = await $('.zoom-image-cover')

        await browser.url('https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/smartimage/')
        await browser.setWindowSize(1920,1080)

        const SmartImageSize = await SmartImageCheck.getSize()

        await SmartImageCheck.click()

        const CheckSmartImageSize = await SmartImageCheck.getSize()

        const FullscreenImageSizeLink = await $('div.n2-appshell-styles  img') 
        const FullscrenImageHeightLink = await $('div.n2-appshell-styles  img') 
        const FullscreenImageWidthLink =  await $('div.n2-appshell-styles .swiper-zoom-container img')

        if(CheckSmartImageSize != SmartImageSize){
        const IndicatorFullScreen = await $('div.n2-appshell-styles .caption-truncated b')    
        const FullscreenImageWidth = await FullscrenImageHeightLink.getSize('width')
        const FullscreenImageHeight = await FullscreenImageWidthLink.getSize('height')

        await expect(buttonFullscreen).toExist()
        await expect(buttonFullscreen).toHaveAttributeContaining('n2-actions', 'fullscreen')
        await expect(IndicatorFullScreen).toHaveText('Golden Gate Bridge')
        await expect(FullscreenImageSizeLink).toHaveElementProperty('width', FullscreenImageWidth)
        await expect(FullscreenImageSizeLink).toHaveElementProperty('height', FullscreenImageHeight)
        }
    });
    it('should expanding second image', async () => {
        const SmartImageCheck = await $('#hash--2085246449 .zoom-image-contain')
        const buttonFullscreen = await $('#hash--2085246449 .smartimage-interaction-icon')     

        await browser.url('https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/smartimage-contain/')
        await browser.setWindowSize(1920,1080)

        const SmartImageSize = await SmartImageCheck.getSize()

        await SmartImageCheck.click()

        const CheckSmartImageSize = await SmartImageCheck.getSize()

        const FullscreenImageSizeLink = await $('div.n2-appshell-styles  img') 
        const FullscreenImageHeightLink = await $('div.n2-appshell-styles  img') 
        const FullscreenImageWidthLink =  await $('div.n2-appshell-styles .swiper-zoom-container img')
        
        if(CheckSmartImageSize != SmartImageSize){
            const IndicatorFullScreen = await $('div.n2-appshell-styles .caption-truncated b')
            const widthFullscreenImage = await FullscreenImageHeightLink.getSize('width')
            const heightFullscreenImage = await FullscreenImageWidthLink.getSize('height')

            await expect(buttonFullscreen).toExist()
            await expect(buttonFullscreen).toHaveAttributeContaining('aria-label', 'fullscreen')
            await expect(IndicatorFullScreen).toHaveText('Golden Gate Bridge')
            await expect(FullscreenImageSizeLink).toHaveElementProperty('width', widthFullscreenImage)
            await expect(FullscreenImageSizeLink).toHaveElementProperty('height', heightFullscreenImage)
        }
});
it('should expanding third image', async () => {
        const SmartImageCheck = await $('#hash-1466146511 .zoom-image-contain')
        const buttonFullscreen = await $('#hash-1466146511 .smartimage-interaction-icon')     

        await browser.url('https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/smartimage-auto-height/')
        await browser.setWindowSize(1920,1080)

        const SmartImageSize = await SmartImageCheck.getSize()
        

        await SmartImageCheck.click()

        const CheckSmartImageSize = await SmartImageCheck.getSize()

        const FullscreenImageSizeLink = await $('div.n2-appshell-styles  img') 
        const FullscreenImageHeightLink = await $('div.n2-appshell-styles  img') 
        const FullscreenImageWidthLink =  await $('div.n2-appshell-styles .swiper-zoom-container img')
        
        if(CheckSmartImageSize != SmartImageSize){
            const IndicatorFullScreen = await $('div.n2-appshell-styles .caption-truncated b')
            const FullscreenImageHeight = await FullscreenImageHeightLink.getSize('width')
            const FullscreenImageWidth = await FullscreenImageWidthLink.getSize('height')

            await expect(buttonFullscreen).toExist()
            await expect(buttonFullscreen).toHaveAttributeContaining('aria-label', 'fullscreen')
            await expect(IndicatorFullScreen).toHaveText('Golden Gate Bridge')
            await expect(FullscreenImageSizeLink).toHaveElementProperty('width', FullscreenImageHeight)
            await expect(FullscreenImageSizeLink).toHaveElementProperty('height', FullscreenImageWidth)
        }
    });
it('should expanding fourth image', async () => {
        const SmartImageHeigth = [] , SmartImageWidth = [], SmartImageCheck = [], ButtonToFullscreen = []
        const FullscreenImageSizeLink = [], FullscreenImageHeightLink = [], FullscreenImageWidthLink = []
        const FullscreenImageSize = [], FullscreenImageHeight = [], FullscreenImageWidth = [] , TestingText = []
        const Text = ['New York Station','Fox', 'Golden Gate Bridge'] 

        SmartImageCheck[0] = await $('#hash--508119828 .swiper-slide-active')
        ButtonToFullscreen[0] = await $('#hash--508119828 .smartimage-interaction-icon')  
        
        SmartImageCheck[1] = await $('#hash-113815255 .swiper-slide-active')
        ButtonToFullscreen[1] = await $('#hash-113815255 .smartimage-interaction-icon')

        SmartImageCheck[2] = await $('#hash--2124326262 .swiper-slide-active')
        ButtonToFullscreen[2] = await $('#hash--2124326262 .smartimage-interaction-icon')

        await browser.url('https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/smartimage-group/')
        await browser.setWindowSize(1920,1080)

        for (var i = 0 ; i < SmartImageCheck.length ; i++){
            SmartImageHeigth[i] = await SmartImageCheck[i].getSize('height')
            SmartImageWidth[i] = await SmartImageCheck[i].getSize('width')
        }

        //Open Fullscreen mode
        await SmartImageCheck[0].click()


        let ChildCounter = 1
        for (var i = 0 ; i < SmartImageCheck.length; i++ ){
             
            FullscreenImageSizeLink[i] = await $(`#hash--508119828  figure:nth-child(${ChildCounter})`) 
            ChildCounter++
        }
        for (var i = 0 ; i < SmartImageCheck.length; i++ ){
           ChildCounter != 0 ? ChildCounter = 1 : ChildCounter = ChildCounter
            FullscreenImageHeightLink[i] = await $(`#hash--508119828  figure:nth-child(${ChildCounter})`) 
            ChildCounter++
        }
        for (var i = 0 ; i < SmartImageCheck.length; i++ ){
            ChildCounter != 0 ? ChildCounter = 1 : ChildCounter = ChildCounter
            FullscreenImageWidthLink[i] = await $(`#hash--508119828  figure:nth-child(${ChildCounter})`) 
            ChildCounter++
        }

        const NavigationBar = await $('#hash--508119828 .side-navigation-right')
        const CloseFullscreen = await $('#hash--2124326262 .gallery-close-icon')
 
        TestingText [0] =  await $('#hash--508119828 figure:nth-child(1) p:nth-child(1) b')
        TestingText [1] =  await $('#hash--508119828 figure:nth-child(2) p:nth-child(1) b')
        TestingText [2] =  await $('#hash--508119828 figure:nth-child(3) p:nth-child(1) b')


        for (var i = 0 ; i < SmartImageCheck.length; i++ ){
            FullscreenImageSize[i] = await FullscreenImageSizeLink[i].getSize() 
        }
        for (var i = 0 ; i < SmartImageCheck.length; i++ ){
            FullscreenImageHeight[i] = await FullscreenImageHeightLink[i].getSize('height')
        }
        for (var i = 0 ; i < SmartImageCheck.length; i++ ){
            FullscreenImageWidth[i] = await FullscreenImageWidthLink[i].getSize('width') 
        }

        
        for (var i = 0 ; i < SmartImageWidth.length && i < SmartImageHeigth.length ; i++) {
        if(SmartImageWidth[i] != FullscreenImageWidth[i] && SmartImageHeigth[i] != FullscreenImageHeight[i]){
            await expect(TestingText[i]).toHaveText(Text[i])
            await expect(ButtonToFullscreen[i]).toHaveAttributeContaining('aria-label', 'fullscreen')
            i-1 < SmartImageWidth.length ? await NavigationBar.click() : await CloseFullscreen.click()
        }
    }
    });
it('should expanding fifth image', async () => {
        const SmartImageCheck  = await $('div[y-location="4"]  img')
        const FullscreenImageSizeLink = await $('div[y-location="4"]  img')
        const FullscreenImageLinkWidthHeight = await $('div[y-location="4"] #wrpr_554967d44a22bp img')

        await browser.url('https://raminjshsdgadfaddasjhhbjkafaadfbjsd.stage.storied.co/components-test-app/smartimage-non-expandable')
        await browser.setWindowSize(1280,1020)

        const SmartImageSize = await SmartImageCheck.getSize()
        const SmartImageHeight = await SmartImageCheck.getSize('height')
        const SmartImageWidth = await SmartImageCheck.getSize('width')

        await expect(SmartImageSize).not.toBeClickable();  

        await SmartImageCheck.click()

        const FullscreenImageHeight = await FullscreenImageLinkWidthHeight.getSize('height')
        const FullscreenImageWidth = await FullscreenImageLinkWidthHeight.getSize('width')

        if (SmartImageWidth != FullscreenImageWidth && SmartImageHeight != FullscreenImageHeight)
        {
            await expect(FullscreenImageSizeLink).not.toHaveAttributeContaining('non-expandable', 'false')
            await expect(SmartImageCheck).not.toHaveElementProperty('height', FullscreenImageHeight ) 
            await expect(SmartImageCheck).not.toHaveElementProperty('width', FullscreenImageWidth)  
        }else if (SmartImageWidth == FullscreenImageWidth && SmartImageHeight == FullscreenImageHeight){
            await expect(FullscreenImageSizeLink).toHaveAttributeContaining('non-expandable', 'true')
            await expect(SmartImageCheck).toHaveElementProperty('width', FullscreenImageWidth)
            await expect(SmartImageCheck).toHaveElementProperty('height', FullscreenImageHeight ) 
             
        } 
});
})