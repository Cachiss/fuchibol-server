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
        category: req.body.category,
        logo: req.body.logo,
        members: req.body.members,
        country: req.body.country,
    });

    try {
        const newTeam = await TeamModel.create(team);
        res.status(201).json({ message: "Success", team: newTeam });
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

router.put("/:id", async (req, res) => {
    try {
        const team = await TeamModel.findById(req.params.id);
        if (!team) {
            return res.status(404).json({ message: "Team not found" });
        }
        const updatedTeam = await TeamModel.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: "Success", team: updatedTeam });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await TeamModel.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "Success" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
