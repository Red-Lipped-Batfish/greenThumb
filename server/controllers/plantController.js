const fetch = require('node-fetch');
const Plant = require('../models/plantModels');

const plantController = {};

async function getPlantsInfo(){

    let resultArray = [];
    for (let pageNumber=1; pageNumber<600; pageNumber++){
        const response = await fetch(`https://trefle.io/api/plants/?token=NGI4S1VkZzBtOUdOMGZ6TEsydjNQUT09&complete_data=true&page=${pageNumber}`)
		if (response.ok) { 
			let json = await response.json();
			resultArray = resultArray.concat(json)
		} else {
			alert("HTTP-Error: " + response.status);
		}           
    }
    
   
    for(let i = 0; i < resultArray.length; i++){
         
		const fetchURL = `https://trefle.io/api/plants/${resultArray[i].id}?token=NGI4S1VkZzBtOUdOMGZ6TEsydjNQUT09`;
        const response = await fetch(fetchURL)
        
        if(response.ok){
            const resultObj = {};
            
            let json = await response.json();
            let species = json.main_species;
            resultObj.id = json.id;
            if(json.common_name){
                resultObj.common_name = json.common_name;
            } 
            if(json.scientific_name){
                resultObj.scientific_name = json.scientific_name;
            }
            if(json.images.length && json.images[0].url){
                resultObj.image_url = json.images[0].url;
            }
            if (species.fruit_or_seed.seed_period_begin){
                resultObj.seed_period_begin = species.fruit_or_seed.seed_period_begin;
            }
            if (species.fruit_or_seed.seed_period_end){
               resultObj.seed_period_end = species.fruit_or_seed.seed_period_end;
            }
            if(species.growth.moisture_use){
                resultObj.moisture_use = species.growth.moisture_use;
            }
            if(species.growth.drought_tolerance){
                resultObj.drought_tolerance = species.growth.drought_tolerance;
            }
            if(species.growth.ph_maximum){
                resultObj.ph_maximum = species.growth.ph_maximum ;
            }
            if(species.growth.ph_minimum){
                resultObj.ph_minimum = species.growth.ph_minimum;
            }
            if(species.growth.precipitation_maximum.inches){
                resultObj.precipitation_maximum = species.growth.precipitation_maximum.inches;
            }
            if(species.growth.precipitation_minimum.inches){
                resultObj.precipitation_minimum = species.growth.precipitation_minimum.inches;
            }
            if(species.growth.resprout_ability){
                resultObj.resprout_ability = species.growth.resprout_ability;
            }
            if(species.growth.shade_tolerance){
                resultObj.shade_tolerance = species.growth.shade_tolerance;
            }
            if(species.seed.bloom_period){
                resultObj.bloom_period = species.seed.bloom_period;
            }
            if(species.seed.commercial_availability){
                resultObj.commercial_availability = species.seed.commercial_availability;
            }
            if(species.specifications.length && species.specifications.growth_form){
                resultObj.growth_form = species.specifications.growth_form;
            }
            if(species.specifications.length && species.specifications.growth_habit){
                resultObj.species.specifications.growth_habit = species.specifications.growth_habit;
            }
            if(species.specifications.length && species.specifications.growth_period){
                resultObj.growth_period = species.specifications.growth_period;
            }
            if(species.specifications.growth_rate){
                resultObj.growth_rate = species.specifications.growth_rate;
            }
            if(species.specifications.mature_height.cm){
                resultObj.mature_height = species.specifications.mature_height.cm;
            }
            Plant.create(resultObj);
	    }else{
		    console.log("response not ok")
        }        
    }  
}

    // get data and add to database
	plantController.getData = (req, res) => {
        getPlantsInfo(res);
        console.log('finished getting data');
    }
    
    //find plant by req.body
    
    plantController.findAPlant = (req, res) => {
        Plant.findOne(req.query, (err, plant) => {
            if(err) return res.status(422);
            res.status(200).json(plant);
        })
    }
    // find all potential plants
    plantController.findPotentialPlants = (req, res) => {
        console.log('findPotentialPlants: req.query: ', req.query)
        Plant.find(req.query, (err, potentialPlants) => {
            if (err) return res.status(422);
            console.log('potentialPlants resp: ', potentialPlants)
            res.status(200).json(potentialPlants);
        })
    }
    

plantController.findAPlant = (req, res) => {
  Plant.findOne(req.body, (err, plant) => {
    if (err) return res.status(422);
    res.status.json(plant);
  });
};

<<<<<<< HEAD
// plantController.updateDatabase = (req, res) => {
//     console.log('printing res.locals.plants: ', res.locals.plants);
//     Plant.create(res.locals.plants, (err, plants)=>{
//         if(err)return res.status(418);
//         return res.status(200).send('Successful update');
//     })
// }

module.exports = plantController;
=======
module.exports = plantController;
>>>>>>> 02754921b64d06bb5e52b554362a56adb02795dc
