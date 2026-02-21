import { useMemo } from 'react';
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { Box, Typography, Chip } from '@mui/material';

// 0–100 style scale. Your genetics lean lower-risk, so ~30 is reasonable
const RISK_SCORE = 30;

export default function RiskScaleChart() {
  const chartData = useMemo(
    () => [
      { name: 'Background', value: 100, fill: 'rgba(120,144,156,0.3)' },
      { name: 'Risk', value: RISK_SCORE, fill: 'url(#riskGradient)' },
    ],
    []
  );

  const category =
    RISK_SCORE < 35 ? 'Lower' : RISK_SCORE < 65 ? 'Average' : 'Higher';

  return (
    <Box sx={{ width: '100%', height: 220 }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Genetic risk-taking tendency
      </Typography>
      <ResponsiveContainer>
        <RadialBarChart
          innerRadius="60%"
          outerRadius="100%"
          data={chartData}
          startAngle={220}
          endAngle={-40}
        >
          <defs>
            <linearGradient id="riskGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#66bb6a" />
              <stop offset="50%" stopColor="#ffee58" />
              <stop offset="100%" stopColor="#ef5350" />
            </linearGradient>
          </defs>
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            tick={false}
          />
          <RadialBar
            dataKey="value"
            cornerRadius={8}
            background
            clockWise
          />
        </RadialBarChart>
      </ResponsiveContainer>

      {/* center overlay */}
      <Box
        sx={{
          position: 'relative',
          mt: -12,
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        <Typography variant="h4" component="div">
          {RISK_SCORE}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          / 100
        </Typography>
        <Chip
          size="small"
          label={`${category} genetic predisposition`}
          sx={{ mt: 1, backgroundColor: 'rgba(38,166,154,0.2)', color: '#e0f2f1' }}
        />
      </Box>
    </Box>
  );
}
