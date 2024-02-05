
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const router = express.Router();

const db_path = "../data/users.db"; // The path to your SQLite database


// Create a new goal
router.post('/', (req, res) => {
    const { goal } = req.body; // Assuming the goal data is sent in the request body

    // Connect to the database
    const db = new sqlite3.Database(db_path);

    // Insert the new goal into the database
    const query = `INSERT INTO goals (goal) VALUES (?)`;
    db.run(query, [goal], function (err) {
        if (err) {
            console.error(err);
            res.status(500).send("Failed to create a new goal");
        } else {
            res.status(201).send("New goal created successfully");
        }
    });

    // Close the database connection
    db.close();
});

// Read all goals
router.get('/', (req, res) => {
    // TODO: Implement the logic to fetch all goals from the database
});

// Read a single goal
router.get('/:id', (req, res) => {
    // TODO: Implement the logic to fetch a single goal from the database
});

// Update a goal
router.put('/:id', (req, res) => {
    // TODO: Implement the logic to update a goal in the database
});

// Delete a goal
router.delete('/:id', (req, res) => {
    // TODO: Implement the logic to delete a goal from the database
});

module.exports = router;
