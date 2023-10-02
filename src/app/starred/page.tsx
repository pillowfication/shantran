import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { JSX } from 'react'

export default function StarredPage (): JSX.Element {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant='body1' gutterBottom>
          Starred Page
        </Typography>
      </Box>
    </Container>
  )
}
