require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/traits', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, name, overall_summary FROM traits ORDER BY id'
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/traits/:id/snps', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query(
      'SELECT rsid, gene, effect_allele, user_genotype, copies_effect_allele, interpretation FROM snps WHERE trait_id = $1 ORDER BY id',
      [id]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/endurance-power-score', async (req, res) => {
  res.json({ endurance: 11, power: 4 });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API running on port ${port}`));
