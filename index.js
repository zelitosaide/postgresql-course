import pg from "pg";

const client = new pg.Client({
  port: 5432,
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