const sqlite = require("sqlite3").verbose()
const db = new sqlite.Database('./example.db', (err) => {
  if(err) return console.log(err)
  console.log("DB connection established")
})

db.serialize( () => {
  try {
    // db.run("DROP TABLE IF EXISTS games");
    db.run("CREATE TABLE IF NOT EXISTS games (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, platform TEXT, year TEXT)");
    db.run("INSERT INTO games(title, platform, year) VALUES (?, ?, ?)", [ "Super Mario Bros", "NES", 1984]) 
    // db.run("INSERT INTO games(title, platform, year) VALUES (?, ?, ?)", [ "Super Mario Bros Two", "NES", 1989]) 
    db.get("SELECT * FROM GAMES", (err, row) => {
      if(err) return console.log(err)
      console.log(row)
    })
  } catch (err){
    console.log(err)
  }
});

db.close((err) => {
  if(err) return console.log(err)
  console.log("Database connection closed")
})



