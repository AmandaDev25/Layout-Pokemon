import { TextField, Grid, Button, Typography, Chip } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useFormik } from 'formik';



//use states
export default function Pokemon() {

  //variáveis & arrays
  const guardarFraqueza = () => {
    formik.values.resultado.push( formik.values.fraqueza)
    formik.setFieldValue('fraqueza','')   
  }

  const guardarResistencia = () => {
    formik.values.resultado2.push(formik.values.resistencia)
    formik.setFieldValue('resistencia','')
  }

  //formik

  const formik = useFormik(
    {
      initialValues: {
        id: '',
        numero: '',
        nome: '',
        shiny: '',
        tipo1: '',
        tipo2: '',
        sexo: '',
        peso: '',
        fraqueza: '',
        resistencia: '',
        resultado: [],
        resultado2: []
      }
    }
  )


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

            <Grid item md={12} sm={12} xs={12}>
              {formik.values.resultado && formik.values.resultado.map((item, idx) => <Chip key={idx} label={item} sx={{ ml: '10px' }} />)}
            </Grid>

            <Grid item md={8} sm={12} xs={12}>
              <TextField size='small' name='fraqueza' label='fraqueza' value={formik.values.fraqueza} onChange={formik.handleChange} fullWidth />
            </Grid>

            <Grid item md={4} sm={12} xs={12}>
              <Button variant='contained' color='inherit' onClick={guardarFraqueza} fullWidth >
                Clique p/ add
              </Button>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              {formik.values.resultado2 && formik.values.resultado2.map((item, idx) => <Chip key={idx} label={item} sx={{ ml: '10px' }} />)}
            </Grid>

            <Grid item md={8} sm={12} xs={12}>
              <TextField size='small' name='resistencia' label='resistencia' value={formik.values.resistencia} onChange={formik.handleChange} fullWidth />
            </Grid>

            <Grid item md={4} sm={12} xs={12}>
              <Button variant='contained' color='inherit' onClick={guardarResistencia} fullWidth >
                Clique p/ add
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