const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// Set up CORS options
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your React app's origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  //get data
  app.get("/api/data", (req, res) => {
    // Perform database operations here

    const sql = require("mssql");

    const config = {
      user: "sa",
      password: "sa",
      server: "RDell", // You can use an IP address or server name
      database: "Travizz",
      encrypt: false,
    };

    sql.connect(config, (err) => {
      if (err) {
        console.error("Error connecting to SQL Server: " + err.stack);
        return;
      }

      console.log("Connected to SQL Server");

      // Return data as JSON response

      //get cityname in variable
      const cn = req.query.n;
      // Query data from a table
      const request = new sql.Request();
      request.query(
        "SELECT * FROM City where CityName='" + cn + "'",
        (err, result) => {
          if (err) {
            console.error("Error querying the database: " + err.stack);
            return;
          }

          //        console.log("Query results:", result.recordset);
          const jsonData = result.recordset;
          // Close the database connection
          sql.close();

          // Return the JSON data as the response
          res.json(jsonData);
        }
      );
    });

    //end of get data
  });
});
