import { Routes, Route } from 'react-router-dom';
import TraitListPage from './TraitListPage';
import TraitDetailPage from './TraitDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TraitListPage />} />
      <Route path="/traits/:id" element={<TraitDetailPage />} />
    </Routes>
  );
}

export default App;
