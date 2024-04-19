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

// add a student to database
const addStudent = (req, res) => {
    const {name, email, age, dob} = req.body;
    // check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results)=>{
        if(results.rows.length)
        {
            res.send("Email already exists")
        }
    })

    // Add student to database
    pool.query(queries.addStudent, [name, email, age, dob], (error, result) =>{
        if(error) throw error;
        res.status(201).send("Student added successfully")
        console.log("Student Created")
    })
}

const removeStudent = (req, res) =>{
    const id = parseInt(req.params.id)

    pool.query(queries.removeStudent, [id] , (error, result)=>{
        const noStudent = !result.rows.length
        if(noStudent)
        {
            res.send("Students does not exist")
        }
    })
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
}