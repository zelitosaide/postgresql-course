import pg from "pg";

const { Client } = pg;

const client = new Client({
  database: "mydb",
  user: "zas"
});

client.connect(function(error) {
  if (error) {
    console.log(error, "zas");
  } else {
    console.log("Connected!");
  }
});