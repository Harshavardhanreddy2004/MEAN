const mongoose = require('mongoose');
const Loc = mongoose.model('Location');
const reviewsCreate = (req, res) => {
    res
    .status(200)
    .json({"status" : "success Create"});
    };
    const mongoose = require('mongoose');
const Loc = mongoose.model('Location');
const reviewsReadOne= (req, res) => {
    res
    .status(200)
    .json({"status" : "success ReadOne"});
    };
    const mongoose = require('mongoose');
const Loc = mongoose.model('Location');
const reviewsUpdateOne = (req, res) => {
    res
    .status(200)
    .json({"status" : "success UpdateOne"});
    };
    const mongoose = require('mongoose');
const Loc = mongoose.model('Location');
const reviewsDeleteOne = (req, res) => {
    res
    .status(200)
    .json({"status" : "success DeleteOne"});
    };