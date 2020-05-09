const fetch = require('node-fetch');

async function fetchData(pageNum) {
  await fetch(
    `https://trefle.io/api/plants/?token=NGI4S1VkZzBtOUdOMGZ6TEsydjNQUT09&page=${pageNum}`
  )
    .then(res => res.json())
    .then(data => {
      const resultArray = [];
      data.forEach(el => {
        console.log('id =', el.id, ', common name =', el.common_name);
        resultArray.push(el.id);
      });
      return resultArray;
    });
}

const PlantController = {
  getData(req, res, next) {
    const idArray = [];
    for (let pageNumber = 1; pageNumber < 4000; pageNumber++) {
      idArray.concat(fetchData(pageNumber));
    }
    console.log(idArray);
    return next();
  },
};

module.exports = PlantController;
