const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

// Configure CORS to trust your frontend domain
app.use(cors({
  origin: 'https://rememberingsirkosy.com',
  methods: ['GET', 'POST'],
  credentials: true
}));

//app.use(cors());
app.use(bodyParser.json());

// Submit tribute
app.post('/api/tributes', async (req, res) => {
  try {
    const { name, relationship, category, phone, message } = req.body;
    const tribute = await prisma.tribute.create({
      data: { name, relationship, category, phone, message }
    });
    res.status(201).json(tribute);
  } catch (error) {
    res.status(500).json({ error: 'Error submitting tribute' });
  }
});

// Get tributes
app.get('/api/tributes', async (req, res) => {
  try {
    const tributes = await prisma.tribute.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(tributes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tributes' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));