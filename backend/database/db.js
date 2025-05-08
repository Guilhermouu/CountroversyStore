const sqlite3=('sqlite3').verbose();
const db= new sqlite3.Database('/.database/database.db')

db.seralize(() =>{
    db.run()
}