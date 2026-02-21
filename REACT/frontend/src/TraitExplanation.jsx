import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

export default function TraitExplanation({ traitId }) {
  let title = '';
  let points = [];

  if (traitId === 1) {
    title = 'How to read this';
    points = [
      'The gauge shows your relative genetic tendency to take impulsive risks on a 0–100 scale.',
      'Your score sits in the lower zone, suggesting a more cautious, considered decision style by default.',
      'Everyday behaviour is still shaped strongly by experience, habits, and environment—not genetics alone.',
    ];
  } else if (traitId === 2) {
    title = 'How to read this';
    points = [
      'The chart compares genetic support for endurance activities versus short, explosive power efforts.',
      'Your profile leans toward endurance, with variants in PPARGC1A and PPARA supporting aerobic capacity and fat use.',
      'Training, recovery, and nutrition can amplify or override these tendencies, so you can still build power if you train for it.',
    ];
  } else if (traitId === 3) {
    title = 'How to read this';
    points = [
      'Some people carry a CCR5-Δ32 deletion that can reduce susceptibility to certain HIV strains.',
      'Your result shows no CCR5-Δ32 deletion, meaning the CCR5 receptor is present and functional on immune cells.',
      'This report does not change HIV risk management: standard prevention and medical guidance remain essential.',
    ];
  }

  return (
    <Card sx={{ mt: 2, backgroundColor: 'rgba(0,0,0,0.35)' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <List dense>
          {points.map((p, i) => (
            <ListItem key={i} sx={{ py: 0.3 }}>
              <ListItemText primary={p} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
