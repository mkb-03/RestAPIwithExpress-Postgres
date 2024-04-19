const pool = require('../db')
const queries = require('./queries')

const getStudents = (req, res) =>{

    // Query to get data from PostgreSQL
    pool.query(queries.getStudents , (error, results)=>{
        if(error) throw error;

        res.status(200).json(results.rows)
    })
}

// controller to get user by ID
const getStudentById = (req, res) => {
    const id = parseInt(req.params.id)
    // Query to get data from PostgreSQL
    pool.query(queries.getStudentById, [id] , (error, results)=>{
        if(error) throw error;

        res.status(200).json(results.rows)
    })
}


module.exports = {
    getStudents,
    getStudentById
}