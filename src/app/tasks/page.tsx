import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { JSX } from 'react'

export default function TasksPage (): JSX.Element {
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
          Tasks Page
        </Typography>
      </Box>
    </Container>
  )
}
