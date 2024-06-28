import { Router } from "express";
import { TeamModel } from "../db/models/TeamModel.js";

export const router = Router();

router.get("/", async (req, res) => {
    try {
        const teams = await TeamModel.find();
        res.json(teams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
);

router.post("/", async (req, res) => {
    const team = new TeamModel({
        name: req.body.name,
        logo: req.body.logo,
        members: req.body.members,
    });

    try {
        const newTeam = await team.save();
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const team = await TeamModel.findById(req.params.id);
        if (!team) {
            return res.status(404).json({ message: "Team not found" });
        }
        res.json({message: "Success", team: team});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const team = await TeamModel.findById(req.params.id);
        if (!team) {
            return res.status(404).json({ message: "Team not found" });
        }
        team.name = req.body.name;
        team.logo = req.body.logo;
        team.members = req.body.members;
        const updatedTeam = await team.save();
        res.json({ message: "Success", team: updatedTeam });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const team = await TeamModel.findById(req.params.id);
        if (!team) {
            return res.status(404).json({ message: "Team not found" });
        }
        await team.remove();
        res.json({ message: "Team deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
