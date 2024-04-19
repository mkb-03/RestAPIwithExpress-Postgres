const pool = require('../db')

const getStudents = (req, res) =>{

    // Query to get data from PostgreSQL
    pool.query("SELECT * FROM students" , (error, results)=>{
        if(error) throw error;

        res.status(200).json(results.rows)
    })
}


module.exports = {
    getStudents,
}