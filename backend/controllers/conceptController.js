import Concept from "../models/Concept.js";

export const createConcept = async (req, res) => {
  try {
    const concept = await Concept.create({
      user: req.user._id,
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags || []
    });

    res.status(201).json(concept);
  } catch (err) {
    res.status(500).json({ message: "Failed to create concept" });
  }
};

export const getConcepts = async (req, res) => {
  try {
    const concepts = await Concept.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.json(concepts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch concepts" });
  }
};

export const addConceptWithFiles = async (req, res) => {
    try {
      const attachments = (req.files || []).map((file) => ({
        filename: file.filename,
        originalName: file.originalname,
        mimeType: file.mimetype,
        path: file.path,
      }));
  
      const concept = await Concept.create({
        user: req.user._id,
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags ? JSON.parse(req.body.tags) : [],
        attachments,
      });
  
      res.status(201).json(concept);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to create concept with files" });
    }
  };
  