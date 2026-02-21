import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from './api';
import {
  Container,
  Typography,
  IconButton,
  Card,
  CardContent,
  Grid,
  Chip,
  Box,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BiotechIcon from '@mui/icons-material/Biotech';
import EndurancePowerChart from './EndurancePowerChart';
import RiskScaleChart from './RiskScaleChart';
import TraitSnpsTable from './TraitSnpsTable';
import TraitExplanation from './TraitExplanation';

export default function TraitDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trait, setTrait] = useState(null);

  useEffect(() => {
    api.get('/traits').then((res) => {
      const found = res.data.find((t) => String(t.id) === String(id));
      setTrait(found || null);
    });
  }, [id]);

  if (!trait) {
    return null;
  }

  const traitId = Number(id);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <IconButton onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        <ArrowBackIcon />
      </IconButton>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <BiotechIcon color="primary" />
            {trait.name}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            {trait.overall_summary}
          </Typography>
          <Chip
            label={
              traitId === 1
                ? 'Behaviour'
                : traitId === 2
                ? 'Athletic Profile'
                : 'Immune System'
            }
            color="primary"
            variant="outlined"
          />
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              overflow: 'hidden',
              position: 'relative',
              minHeight: 320,
              backgroundImage: 'url("/DNA.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at top left, rgba(0,150,255,0.4), transparent 60%), rgba(0,0,0,0.65)',
              }}
            />

            <CardContent
              sx={{
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 999,
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  mb: 2,
                  backdropFilter: 'blur(6px)',
                }}
              >
                <Box
                  sx={{
                    width: 18,
                    height: 36,
                    borderRadius: 999,
                    border: '2px solid rgba(144,202,249,0.9)',
                    boxShadow: '0 0 10px rgba(144,202,249,0.9)',
                  }}
                />
                <Typography variant="caption" sx={{ letterSpacing: 1 }}>
                  GENOMIC VIEW
                </Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: 'rgba(0,0,0,0.45)',
                  borderRadius: 2,
                  p: 2,
                  backdropFilter: 'blur(8px)',
                }}
              >
                {traitId === 1 && <RiskScaleChart />}
                {traitId === 2 && <EndurancePowerChart />}
                {traitId === 3 && (
                  <>
                    <Typography variant="h6">HIV Resistance Status</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      No CCR5-Δ32–based genetic resistance. The CCR5 receptor is
                      present and functional, so standard HIV prevention
                      measures remain essential.
                    </Typography>
                  </>
                )}
              </Box>
            </CardContent>
          </Card>

          <TraitExplanation traitId={traitId} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TraitSnpsTable traitId={traitId} />
        </Grid>
      </Grid>
    </Container>
  );
}
