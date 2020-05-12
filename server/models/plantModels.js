const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../config/config.env') });

// console.log(path.resolve(__dirname, '../../config/config.env'));

const { MONGO_URI } = process.env;
console.log('MONGO_URI -', MONGO_URI);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'greenthumb',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const { Schema } = mongoose;

const plantSchema = new Schema({
  id: Number,
  common_name: String,
  scientific_name: String,
  image_url: String,
  seed_period_begin: String,
  seed_period_end: String,
  moisture_use: String,
  ph_maximum: Number,
  ph_minimum: Number,
  precipition_maximum: Number,
  precipitaiton_minimum: Number,
  drought_tolerance: String,
  resprout_ability: Boolean,
  shade_tolerance: String,
  bloom_period: String,
  commercial_availability: String,
  growth_form: String,
  growth_habit: String,
  growth_period: String,
  growth_rate: String,
  mature_height: Number,
});

const Plant = mongoose.model('plant', plantSchema);

module.exports = Plant;
