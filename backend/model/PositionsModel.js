const {model} = require('mongoose');

const {PositionsModel} = require('../schemas/PositionsModel');

const PositionsModel = model('position', PositionsModel);

module.exports = {PositionsModel};