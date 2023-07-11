import { TextField, Grid, Button, Typography, Chip } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useFormik } from 'formik';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

//Funções
export default function Pokemon() {

  const categoryList = [
    {
      value: '',
      label: '',
    },
    {
      value: 'Fogo',
      label: 'Fogo',
    },
    {
      value: 'Água',
      label: 'Água',
    },
    {
      value: 'Planta',
      label: 'Planta',
    },
  ];

  //Variáveis & Arrays
  const guardarFraqueza = () => {
    formik.values.resultado.push(formik.values.fraqueza)
    formik.setFieldValue('fraqueza', '')
  }

  const guardarResistencia = () => {
    formik.values.resultado2.push(formik.values.resistencia)
    formik.setFieldValue('resistencia', '')
  }

  //Formik
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
        peso: '85',
        fraqueza: '',
        resistencia: '',
        resultado: [],
        resultado2: []
      }
    }
  )

  //enums
  const gender = [
    { label: 'Feminino' },
    { label: 'Masculino' },
    { label: 'Indefinido' }
  ]

  const typeList = [
    { label: 'Fogo' },
    { label: 'Água' },
    { label: 'Planta'}
  ]


  return (
    <>
      <Typography
        variant='h5'
        display={'flex'}
        m={5}
        justifyContent={'center'}
        sx={{ fontFamily: 'fantasy' }}
      >
        Cadastro do pokémon
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
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Shiny</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                  <FormControlLabel value="não" control={<Radio />} label="Não" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item md={3} sm={12} xs={12}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                name='tipo1'
                value={formik.values.tipo1}
                onChange={formik.handleChange}
                options={typeList}
                size='small'
                renderInput={(params) => <TextField {...params} label="Tipo 1" />}
              />
            </Grid>

            <Grid item md={3} sm={12} xs={12}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                name='tipo2'
                value={formik.values.tipo2}
                onChange={formik.handleChange}
                options={typeList}
                size='small'
                renderInput={(params) => <TextField {...params} label="Tipo 2" />}
              />
            </Grid>

            <Grid item md={3} sm={12} xs={12}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                name='sexo'
                value={formik.values.sexo}
                onChange={formik.handleChange}
                options={gender}
                size='small'
                fullWidth
                renderInput={(params) => <TextField {...params} label="Sexo" />}
              />
            </Grid>

            <Grid item md={3} sm={12} xs={12}>
              <TextField
                label="peso"
                id="outlined-start-adornment"
                fullWidth
                name='peso'
                value={formik.values.peso}
                onChange={formik.handleChange}
                size='small'
                InputProps={{
                  startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                }}
              />
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
              {formik.values.resultado && formik.values.resultado.map((item, idx) => <Chip key={idx} label={item} sx={{ ml: '10px' }} />)}
            </Grid>

            <Grid item md={8} sm={12} xs={12}>
              <TextField size='small' name='fraqueza' label='fraqueza' value={formik.values.fraqueza} onChange={formik.handleChange} fullWidth />
            </Grid>

            <Grid item md={4} sm={12} xs={12}>
              <Button variant='contained' color='inherit' onClick={guardarFraqueza} fullWidth >
                Adicionar
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
                Adicionar
              </Button>
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
              <Button variant='contained' color='success' fullWidth >
                Adicionar
              </Button>
            </Grid>
            {formik.values.peso}
            
            {formik.values.sexo}

          </Grid>
        </Grid>
      </Grid>
    </>
  )
}