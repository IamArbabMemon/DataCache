const puppeteer = require('puppeteer');


async function getTotalProductsFromZestro(){
try{
    const data = (await Promise.all([getGamingPcData(),getGraphicCardData(),getProcessorsData()])).flat(Infinity);
    return data;    
}catch(err){
        console.log(err);

 }
    
}


async function getGamingPcData(){

    try{
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://zestrogaming.com/product-category/gaming-pc-price-in-pakistan/');
  
    const data = await page.evaluate(()=>{
        let data = [];
        let i=1;
            
        const products = document.querySelectorAll('.jet-woo-products__item.jet-woo-builder-product');
        console.log(products[0].innerHTML)
        for(let product of products){
            data.push({
                itemNo:i++,
                category:'Gaming PC',
                item:product.querySelector('.jet-woo-product-title').innerText,
                price:String((product.querySelector('.jet-woo-product-price').innerText)).slice(1),
                link:product.querySelector('.jet-woo-product-title a').href
            })
        }

        return data;
    });

    await browser.close();
    return data;

    }catch(err){
        console.log(err);
        await browser.close();
    }



}


async function getGraphicCardData(){

 try{
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://zestrogaming.com/product-category/graphics-card-price-in-pakistan/');
  
    const data = await page.evaluate(()=>{
        let data = [];
        let i=1;
            
        const products = document.querySelectorAll('.jet-woo-products__item.jet-woo-builder-product');
        console.log(products[0].innerHTML)
        for(let product of products){
            data.push({
                itemNo:i++,
                category:'Graphic Cards',
                item:product.querySelector('.jet-woo-product-title').innerText,
                price:String((product.querySelector('.jet-woo-product-price').innerText)).slice(1),
                link:product.querySelector('.jet-woo-product-title a').href
            })
        }

        return data;
    });

    await browser.close();
    return data;
 
}catch(err){
    console.log(err);
    await browser.close();
}

}





async function getProcessorsData(){

  try{
 
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://zestrogaming.com/product-category/processor-price-in-pakistan/');
  
    const data = await page.evaluate(()=>{
        let data = [];
        let i=1;
            
        const products = document.querySelectorAll('.jet-woo-products__item.jet-woo-builder-product');
        console.log(products[0].innerHTML)
        for(let product of products){
            data.push({
                itemNo:i++,
                category:'Processors',
                item:product.querySelector('.jet-woo-product-title').innerText,
                price:String((product.querySelector('.jet-woo-product-price').innerText)).slice(1),
                link:product.querySelector('.jet-woo-product-title a').href
            })
        }

        return data;
    });

    await browser.close();
    return data;

}catch(err){
    console.log(err);
    await browser.close();
}

}



module.exports = {
    getTotalProductsFromZestro
}
