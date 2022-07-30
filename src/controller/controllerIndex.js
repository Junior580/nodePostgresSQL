const pool = require("../database/conn");

const controller = {
    get: async (req, res) => {
        return res.json({ msg: "hello world" });
    },
    post: async (req, res) => {
        const { name, email } = req.body;
        const userExists = await pool.query(
            "SELECT * FROM persons WHERE email = ($1)",
            [email]
        );
        console.log(userExists.rows);
        if ((userExists.rows = "")) {
            return res.status(500).json({ msg: "User already exists!" });
        }

        try {
            const newUser = await pool.query(
                "INSERT INTO persons (name,email) VALUES ($1,$2) RETURNING *",
                [name, email]
            );
            return res.status(201).json({ msg: "User created successfully" });
        } catch (error) {
            return res.status(400).json(error);
        }
    },
};

module.exports = controller;
