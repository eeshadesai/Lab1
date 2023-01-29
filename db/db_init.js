// (Re)Sets up the database, including a little bit of sample data
const db = require("./db_connection");

/**** Delete existing table, if any ****/
const drop_stuff_table_sql = "DROP TABLE IF EXISTS `stuff`;"
db.execute(drop_stuff_table_sql);

/**** Create "stuff" table (again)  ****/

const create_stuff_table_sql = `
    CREATE TABLE stuff (
        id INT NOT NULL AUTO_INCREMENT,
        item VARCHAR(45) NOT NULL,
        type VARCHAR(45) NOT NULL,
        date VARCHAR(45) NOT NULL,
        description VARCHAR(150) NULL,
        PRIMARY KEY (id)
    );
`
db.execute(create_stuff_table_sql);

/**** Create some sample items ****/

const insert_stuff_table_sql = `
    INSERT INTO stuff 
        (item, type, date,description) 
    VALUES 
        (?, ?, ?, ?);
`
db.execute(insert_stuff_table_sql, ['Prototype app', 'lab', 'January 31, 2023','Follow tutorial for lab 3']);

db.execute(insert_stuff_table_sql, ['Test','test', 'February 1, 2023','Bonding,States,and Solutions']);

db.execute(insert_stuff_table_sql, ['Annotated Bibliography','Project','February 3, 2023','Go through each resource and take notes']);

db.execute(insert_stuff_table_sql, ['Learner Portfolio','assignment','February 8, 2023','IB concepts and Area of Interests']);

/**** Read the sample items inserted ****/

const read_stuff_table_sql = "SELECT * FROM stuff";

db.execute(read_stuff_table_sql, 
    (error, results) => {
        if (error) 
            throw error;

        console.log("Table 'stuff' initialized with:")
        console.log(results);
    }
);

db.end();

/*
Alternate method to replace SQL strings:
const fs = require("fs");
const drop_stuff_table_sql = fs.readFileSync(__dirname + "/db/queries/init/drop_stuff_table.sql", { encoding: "UTF-8" })
const create_stuff_table_sql = fs.readFileSync(__dirname + "/db/queries/init/create_stuff_table.sql", { encoding: "UTF-8" })
const insert_stuff_table_sql = fs.readFileSync(__dirname + "/db/queries/init/insert_stuff_table.sql", { encoding: "UTF-8" })
const read_stuff_table_sql = fs.readFileSync(__dirname + "/db/queries/init/read_stuff_table.sql", { encoding: "UTF-8" })
*/