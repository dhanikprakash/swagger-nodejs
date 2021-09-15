const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require("swagger-ui-express");
const app = express();

const port = process.env.PORT || 5001;

const swaggerOptions = {
   swaggerDefinition: {
     info:{
       title:"Customer Api", 
       description: "Customer Api Information", 
       contact:{
         name: "Top Developer"
       },
       version:"1.0.1",
       Servers: ["http://localhost:5001"]
     }
   },
   apis:["app.js"]
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve , swaggerUI.setup(swaggerDocs));

app.listen(port, (req, res) => {
  console.log(`Server listening on port ${port}`);
});


// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/customers', (req,res) => {
  res.send("List of customers");
})