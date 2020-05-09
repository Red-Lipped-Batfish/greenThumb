const PlantController = {


    getData(req, res, next) {
        let idArray = [];
        for (let pageNumber=1; pageNumber<4000; pageNumber++){
            idArray.concat(fetchData(pageNumber))
        }
        console.log(idArray);
        return next()
    }





}

function fetchData(pageNum){
    const resultArray = [];
    fetch(`https://trefle.io/api/plants/?token=NGI4S1VkZzBtOUdOMGZ6TEsydjNQUT09&page=${pageNum}`)
    .then(res => res.json())
    .then(data => {
        data.forEach(el => {
            console.log("id =", el.id, ", common name =", el.common_name)
            resultArray.push(el.id);
        })
        return resultArray;
    })

}