const {getTotalProductsFromDaraz} = require('./darazBot');
const {getTotalProductsFromZestro} = require('./zestroBot');

async function getData(){
    // const totalData = (await Promise.all([getTotalProductsFromDaraz(),getTotalProductsFromZestro()])).flat(Infinity);
    const zestro = await getTotalProductsFromZestro();
    const daraz = await getTotalProductsFromDaraz()
    console.log(zestro);
    console.log(daraz);
}

getData();