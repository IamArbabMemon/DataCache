const puppeteer = require('puppeteer');


async function getTotalProductsFromDaraz(){
    try{
        const data = (await Promise.all([getTotalLaptopsData(),getTotalGamingAccessoriesData(),getTotalMonitorsData()])).flat(Infinity);
        return data; 
           
    }catch(err){
            console.log(err);
            process.exit(1);        
     }
        
 }
    



async function getTotalPages(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(url);

    const totalPages = await page.evaluate(() => {
        const pages = document.querySelectorAll('.ant-pagination-item');
        return parseInt(pages[pages.length - 1].innerText);
    });



    await browser.close();
    return totalPages;
};




async function getTotalLaptopsData() {
    const totalPagestoNavigate = await getTotalPages('https://www.daraz.pk/catalog/?_keyori=ss&from=input&page=1&q=laptop&spm=a2a0e.home.search.go.35e34076gXcEOq');

    if (!totalPagestoNavigate)
        throw new Error("cannot find total number of pages to navigate");

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const dataSet = [];
    try {
        for (let i = 1; i <= totalPagestoNavigate; i++) {
            await page.goto(`https://www.daraz.pk/catalog/?_keyori=ss&from=input&page=${i}&q=laptop&spm=a2a0e.home.search.go.35e34076gXcEOq`);
            const dataArray = await page.evaluate(() => {
                const data = [];
                const items = document.querySelectorAll('.gridItem--Yd0sa');
                for (let item of items) {
                    data.push({
                        category: 'Laptop',
                        link: item.querySelector("#id-a-link").href,
                        ProductTitle: item.querySelector(".description--H8JN9 .title-wrapper--IaQ0m").innerText,
                        price: item.querySelector('.currency--GVKjl').innerText,
                        productImage: item.querySelector('.image-wrapper--ydch1 img').src

                    });

                };


                return data;

            })

            dataSet.push(dataArray);
        };


        await browser.close();
        return dataSet;



    } catch (err) {

        console.log(err , 'Error in daraz');

        await browser.close()
        return dataSet;
    }

}





async function getTotalMonitorsData() {
    const totalPagestoNavigate = await getTotalPages('https://www.daraz.pk/monitors/?page=1&spm=a2a0e.searchlistcategory.pagination.1.284e387cpwO6TR');
    console.log(totalPagestoNavigate);
    if (!totalPagestoNavigate)
        throw new Error("cannot find total number of pages to navigate");

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const dataSet = [];
    try {
        for (let i = 1; i <= totalPagestoNavigate; i++) {
            
            await page.goto(`https://www.daraz.pk/monitors/?page=${i}&spm=a2a0e.searchlistcategory.pagination.1.284e387cpwO6TR`);
            const dataArray = await page.evaluate(() => {
                const data = [];
                const items = document.querySelectorAll('.gridItem--Yd0sa');
                for (let item of items) {
                    data.push({
                        category: 'Monitors',
                        link: item.querySelector("#id-a-link").href,
                        ProductTitle: item.querySelector(".description--H8JN9 .title-wrapper--IaQ0m").innerText,
                        price: item.querySelector('.currency--GVKjl').innerText,
                        productImage: item.querySelector('.image-wrapper--ydch1 img').src

                    });

                };

                return data;

            })

            dataSet.push(dataArray);

        };

        await browser.close();
        return dataSet;

    } catch (err) {

        
        console.log(err , 'Error in daraz');       
        await browser.close();
        return dataSet;
    }


}



async function getTotalGamingAccessoriesData(){
    const totalPagestoNavigate = await getTotalPages('https://www.daraz.pk/gaming/?page=1&spm=a2a0e.searchlist.cate_8.11.51e547f14B2qjG');
    console.log(totalPagestoNavigate);
    if (!totalPagestoNavigate)
        throw new Error("cannot find total number of pages to navigate");

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const dataSet = [];
    try {
        for (let i = 1; i <= totalPagestoNavigate; i++) {
            console.log(i);
            await page.goto(`https://www.daraz.pk/gaming/?page=${i}&spm=a2a0e.searchlist.cate_8.11.51e547f14B2qjG`);
            const dataArray = await page.evaluate(() => {
                const data = [];
                const items = document.querySelectorAll('.gridItem--Yd0sa');
                for (let item of items) {
                    data.push({
                        category: 'Gaming Accessories',
                        link: item.querySelector("#id-a-link").href,
                        ProductTitle: item.querySelector(".description--H8JN9 .title-wrapper--IaQ0m").innerText,
                        price: item.querySelector('.currency--GVKjl').innerText,
                        productImage: item.querySelector('.image-wrapper--ydch1 img').src

                    });

                };

                return data;

            })

            dataSet.push(dataArray);

        };

        await browser.close();
        return dataSet;

    } catch (err) {

        console.log(err , 'Error in daraz');
        await browser.close();
        return dataSet;
    }

}


module.exports = {
    getTotalProductsFromDaraz
}