const express = require("express");
const {
  getAllManagers,
  createManager
} = require("../../controllers/admin/managerController.js"); 

const managerRouter = express.Router();

managerRouter
  .route("/managers")
  .get(getAllManagers) 
  .post(createManager); 

module.exports = managerRouter;