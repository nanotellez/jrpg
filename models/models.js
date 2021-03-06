const mongoose = require("mongoose", { useNewUrlParser: true })
const uniqueValidator = require('mongoose-unique-validator');

mongoose.connect('mongodb://localhost/jrpgdb');

// Create a Schema for Players
var PlayerSchema = new mongoose.Schema({
    name:  { type: String, unique: true, required: true, minlength: 2},
    image_url:  { type: String, unique: true, required: true, minlength: 1},
    damage_stats: { type: Number, required: true}, // Damage Range during combat
    number_of_attacks: { type: Number, required: true}, // Higher level means more attacks per round
    health: { type: Number, required: true}
}, {timestamps: true });

// Create a Schema for Monsters
var MonsterSchema = new mongoose.Schema({
    name:  { type: String, unique: true, required: true, minlength: 2},
    image_url:  { type: String, unique: true, required: true, minlength: 1},
    damage_stats: { type: Number, required: true}, // Damage Range during combat
    number_of_attacks: { type: Number, required: true},
    health: { type: Number, required: true}
}, {timestamps: true });

MonsterSchema.plugin(uniqueValidator, { message: 'A monster with that name already exists.' });
PlayerSchema.plugin(uniqueValidator, { message: 'A player with that name already exists.' });

// Store the Schema under the name 'Player'
module.exports = mongoose.model('Player', PlayerSchema);
// Store the Schema under the name 'Monster'
module.exports = mongoose.model('Monster', MonsterSchema);



