const express = require("express");
const request = require("request");
const app = express();

const port = process.env.PORT || 7000;

app.get("/", (req, res) => {
  const varA = 111;

  console.log(`varA = ${varA}`);
  const fastapiHealthcheck = "http://localhost:9000/health-check";

  request(fastapiHealthcheck, function (error, response, body) {
    console.error("error:", error);

    console.log("statusCode:", response && response.statusCode);
    console.log("body:", body);
    res.send({
      nodejs: "OK",
      Python: JSON.parse(body),
    });
  });
});

app.listen(port, () => console.log(`NJS1 app listening on port ${port}!`));
