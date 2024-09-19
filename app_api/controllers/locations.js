    const mongoose = require('mongoose');
const Loc = mongoose.model('Location');
const locationsListByDistance = (req, res) => {
    res
    .status(200)
    .json({"status" : "success ListByDistance"});
    };
     const mongoose = require('mongoose');
const Loc = mongoose.model('Location');
const locationsCreate = (req, res) => {
    res
    .status(200)
    .json({"status" : "success Create"});
    };
     const mongoose = require('mongoose');
const Loc = mongoose.model('Location');
const locationsReadOne = (req, res) => {
    res
    .status(200)
    .json({"status" : "success ReadOne "});
    };
    const mongoose = require('mongoose');
const Loc = mongoose.model('Location');
const  locationsUpdateOne = (req, res) => {
    res
    .status(200)
    .json({"status" : "success UpdateOne"});
    };
    const mongoose = require('mongoose');
const Loc = mongoose.model('Location');
const locationsDeleteOne = (req, res) => {
    res
    .status(200)
    .json({"status" : "success DeleteOne"});
    };

    

    

    module.exports = {
        locationsListByDistance,
        locationsCreate,
        locationsReadOne,
        locationsUpdateOne,
        locationsDeleteOne
        };