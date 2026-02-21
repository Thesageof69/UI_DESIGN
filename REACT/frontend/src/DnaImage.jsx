import { Box } from '@mui/material';

export default function DnaImage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 2,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 80,
          height: 160,
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.05)',
          },
          transition: 'transform 0.2s ease-out',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: '25%',
            top: 0,
            width: 4,
            height: '100%',
            borderRadius: 2,
            background: 'linear-gradient(180deg,#42a5f5,#7e57c2)',
            animation: 'dnaWave 3s linear infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            right: '25%',
            top: 0,
            width: 4,
            height: '100%',
            borderRadius: 2,
            background: 'linear-gradient(180deg,#ef5350,#ffb74d)',
            animation: 'dnaWave 3s linear infinite reverse',
          }}
        />
        {Array.from({ length: 9 }).map((_, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              left: '25%',
              width: '50%',
              height: 4,
              borderRadius: 2,
              top: `${10 + i * 10}%`,
              background:
                i % 2 === 0 ? 'rgba(66,165,245,0.7)' : 'rgba(239,83,80,0.7)',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
