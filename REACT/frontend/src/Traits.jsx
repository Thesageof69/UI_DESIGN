import { useEffect, useState } from 'react';
import api from './api';

export default function TraitsOverview({ onSelectTrait }) {
  const [traits, setTraits] = useState([]);

  useEffect(() => {
    api.get('/traits').then(res => setTraits(res.data));
  }, []);

  return (
    <div>
      <h2>Genetic Traits</h2>
      <ul>
        {traits.map(t => (
          <li
            key={t.id}
            style={{ cursor: 'pointer', marginBottom: '0.5rem' }}
            onClick={() => onSelectTrait(t.id)}
          >
            <strong>{t.name}</strong>
            <br />
            <span>{t.overall_summary}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
