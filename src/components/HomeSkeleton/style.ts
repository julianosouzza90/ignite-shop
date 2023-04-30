import { keyframes, styled } from '@/styles'
const loading = keyframes({
  '0%': { opacity: 0.2 },
  '100%': { opacity: 0.8 },
})

export const HomeSkeletonContainer = styled('div', {
  minHeight: '60vh',
  display: 'grid',
  gridTemplateColumns: '500px 400px',
  gap: 24,

  div: {
    width: '100%',
    display: 'flex',

    gap: '2rem',
  },
})
export const SkeletonContent = styled('div', {
  animation: `${loading} 1.5s infinite`,
  backgroundColor: '$gray800',

  backgroundSize: '200px 100%',
  backgroundRepeat: 'no-repeat',
  borderRadius: 8,
})
