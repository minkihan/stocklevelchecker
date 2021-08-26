import puppeteer from "puppeteer" ;
import * as cheerio from "cheerio" ;

// puppeteer(ajax 포함한 모든 dom 로딩 완료 시점) 로 url 읽어서 html 리턴
const getHtml = async ( href ) => {
    try {
        process.setMaxListeners( 30 ) ;
        const browser = await puppeteer.launch() ;
        // const browser = await puppeteer.launch( {
        //     "executablePath": "/usr/bin/chromium-browser"
        //     , "headless": false
        // } ) ;
        const page = await browser.newPage() ;
        page.setDefaultNavigationTimeout( 0 ) ;
        await page.goto( href ) ;
        const pageModel = await page.$( "html" ) ;
        let content = await pageModel.evaluate( ( body ) => body.innerHTML ) ;
        await browser.close() ;
        return cheerio.load( content ) ;
    } catch( e ) {
        console.error( e ) ;
    }
} ;
 
export { getHtml }