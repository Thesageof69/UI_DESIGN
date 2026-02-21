// src/TraitSnpsTable.jsx
import { useEffect, useState } from 'react';
import api from './api';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

export default function TraitSnpsTable({ traitId }) {
  const [snps, setSnps] = useState([]);

  useEffect(() => {
    api.get(`/traits/${traitId}/snps`).then((res) => setSnps(res.data));
  }, [traitId]);

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 4,
        border: '1px solid rgba(144,202,249,0.4)',
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Variant-level details
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>rsID</TableCell>
              <TableCell>Gene</TableCell>
              <TableCell>Effect allele</TableCell>
              <TableCell>Your genotype</TableCell>
              <TableCell>Copies</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {snps.map((s) => (
              <TableRow
                key={s.rsid + s.gene}
                sx={{
                  '&:hover': {
                    background:
                      'linear-gradient(90deg, rgba(144,202,249,0.15), rgba(206,147,216,0.15))',
                    cursor: 'pointer',
                    '& td': {
                      borderBottomColor: 'transparent',
                    },
                  },
                }}
              >
                <TableCell>{s.rsid}</TableCell>
                <TableCell>{s.gene}</TableCell>
                <TableCell>{s.effect_allele}</TableCell>
                <TableCell>{s.user_genotype}</TableCell>
                <TableCell>{s.copies_effect_allele}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
