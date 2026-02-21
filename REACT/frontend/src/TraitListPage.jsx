// src/TraitListPage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
} from '@mui/material';
import BiotechIcon from '@mui/icons-material/Biotech';

export default function TraitListPage() {
  const [traits, setTraits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/traits').then((res) => setTraits(res.data));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
        Your genomic insights
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 4, maxWidth: 600 }}
      >
        Each card opens a deep-dive view for a specific trait, combining
        variant-level data with clear, easy-to-read interpretations.
      </Typography>

      <Grid container spacing={3}>
        {traits.map((t) => (
          <Grid item xs={12} md={6} key={t.id}>
            <Card
              sx={{
                background:
                  'linear-gradient(135deg, rgba(33,150,243,0.12), rgba(156,39,176,0.12))',
                borderRadius: 3,
                border: '1px solid rgba(144,202,249,0.35)',
                boxShadow: 4,
                '&:hover': {
                  boxShadow: 10,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease-out',
              }}
            >
              <CardActionArea onClick={() => navigate(`/traits/${t.id}`)}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                  >
                    <BiotechIcon color="primary" />
                    {t.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {t.overall_summary}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
