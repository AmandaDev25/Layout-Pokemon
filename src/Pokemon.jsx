import { TextField, Grid, Button, Typography } from '@mui/material';

 
export default function Pokemon() {
  return (
    <>
      <Typography
        variant='h5'
        display={'flex'}
        m={5}
        justifyContent={'center'}
        sx={{ fontFamily: 'fantasy' }}
      >
        Dados do pokémon
      </Typography>

      <Grid container spacing={2}>
        <Grid item md={5} sm={6} xs={12} display='flex' justifyContent='center' >
          <img src='../public/assets/pokemon.jpg' height={400} />
        </Grid>

        <Grid item md={7} sm={6} xs={12}>
          <Grid container spacing={2}>

          <Grid item md={2} sm={12} xs={12}>
              <TextField size='small' label='numero' fullWidth />
            </Grid>

            <Grid item md={7} sm={12} xs={12}>
              <TextField size='small' label='nome' fullWidth />
            </Grid>

            <Grid item md={3} sm={12} xs={12}>
              <TextField size='small' label='shiny' fullWidth />
            </Grid>

            <Grid item md={3} sm={12} xs={12}>
              <TextField size='small' label='tipo 1' fullWidth />
            </Grid>

            <Grid item md={3} sm={12} xs={12}>
              <TextField size='small' label='tipo 2' fullWidth />
            </Grid>

            <Grid item md={3} sm={12} xs={12}>
              <TextField size='small' label='sexo' fullWidth />
            </Grid>

            <Grid item md={3} sm={12} xs={12}>
              <TextField size='small' label='peso' fullWidth />
            </Grid>

            <Grid item md={8} sm={12} xs={12}>
              <TextField size='small' label='fraquezas' fullWidth />
            </Grid>

             <Grid item md={4} sm={12} xs={12}>
              <Button variant='contained' color='inherit' fullWidth >
                Clique
              </Button>
            </Grid>

            <Grid item md={8} sm={12} xs={12}>
              <TextField size='small' label='resistencias' fullWidth />
            </Grid>

            <Grid item md={4} sm={12} xs={12}>
              <Button variant='contained' color='inherit' fullWidth >
                Clique
              </Button>
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
              <Button variant='contained' color='success' fullWidth >
                Adicionar
              </Button>
            </Grid>
            
          </Grid>
        </Grid>

      </Grid>
    </>
  )
}