const Project = require("../models/project");

const createProject = async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({
                message: "Project name is required"
            });
        }

        const project = await Project.create({
            name: name.trim(),
            description,
            user: req.user.id
        });

        return res.status(201).json({
            message: "Project created successfully",
            project
        });

    } catch (error) {
        console.log("Create Project Error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

module.exports = { createProject };