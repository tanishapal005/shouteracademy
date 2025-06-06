const Content = require('../models/digitalmarketingmodel',);


// GET content by section
exports.getContent = async (req, res) => {
  try {
    const section = req.params.section.trim();
    const content = await Content.findOne({ section });

    if (!content) { 
      return res.status(404).json({ message: 'Content not found' });
    }

    res.json(content);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// PUT (Update or Create) content
exports.updateContent = async (req, res) => {
  try {
    const section = req.params.section.trim();
    const { title, description, imageUrl } = req.body;

    let content = await Content.findOne({ section });
    if (!content) {
      content = new Content({ section });
    }

    content.title = title;
    content.description = description;
    content.imageUrl = imageUrl;
    await content.save();

    res.json({ success: true, content });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// POST (Optional - create new content only)
exports.createContent = async (req, res) => {
  try {
    const { section, title, description, imageUrl } = req.body;

    const existing = await Content.findOne({ section });
    if (existing) {
      return res.status(400).json({ message: 'Content already exists for this section' });
    }

    const content = new Content({ section, title, description, imageUrl });
    await content.save();

    res.json({ success: true, content });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
