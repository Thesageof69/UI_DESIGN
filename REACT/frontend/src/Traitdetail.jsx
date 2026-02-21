import { useEffect, useState } from 'react';
import api from './api';

export default function TraitDetail({ traitId }) {
  const [snps, setSnps] = useState([]);

  useEffect(() => {
    if (!traitId) return;
    api.get(`/traits/${traitId}/snps`).then(res => setSnps(res.data));
  }, [traitId]);

  if (!traitId) {
    return <p>Select a trait to see variant details.</p>;
  }

  return (
    <div>
      <h3>Variant-level details</h3>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>rsID</th>
            <th>Gene</th>
            <th>Effect allele</th>
            <th>Your genotype</th>
            <th>Copies</th>
          </tr>
        </thead>
        <tbody>
          {snps.map((s) => (
            <tr key={s.rsid + s.gene}>
              <td>{s.rsid}</td>
              <td>{s.gene}</td>
              <td>{s.effect_allele}</td>
              <td>{s.user_genotype}</td>
              <td>{s.copies_effect_allele}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
