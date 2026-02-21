// src/EndurancePowerChart.jsx
import { useEffect, useState } from 'react';
import api from './api';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Box, Typography } from '@mui/material';

export default function EndurancePowerChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('/endurance-power-score').then((res) => {
      setData([
        { trait: 'Endurance', score: res.data.endurance },
        { trait: 'Power', score: res.data.power },
      ]);
    });
  }, []);

  return (
    <Box sx={{ width: '100%', height: 220 }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Endurance vs Power (genetic tendency)
      </Typography>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.15)"
          />
          <XAxis dataKey="trait" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="score"
            fill="#90caf9"
            radius={[4, 4, 0, 0]}
            animationDuration={800}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
