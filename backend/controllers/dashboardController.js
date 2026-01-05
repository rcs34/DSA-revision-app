import Concept from "../models/Concept.js";

export const getDashboardSummary = async (req, res) => {
  try {
    const userId = req.user._id;

    const conceptsCount = await Concept.countDocuments({ user: userId });

    res.status(200).json({
      concepts: conceptsCount,
      problems: 0,
      tests: 0
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to load dashboard summary" });
  }
};
