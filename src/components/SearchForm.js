import React from 'react'

import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  textField: {
    display: 'flex',
    margin: theme.spacing(1),
    width: '40%'
  },
  button: {
    margin: theme.spacing(1)
  }
}))

const SearchForm = (props) => {
  const classes = useStyles()
  const { onInputChange, onChangeCategory, onSearch } = props
  return (
    <form>
    <FormControl variant="outlined">
      <TextField
        className={classes.textField}
        label='Search'
        margin='normal'
        name='searchText'
        onChange={e => onInputChange('searchText', e.target.value)}
        type='search'
        variant='outlined'
        InputLabelProps={{
          required: true,
          primary: 'white',
          shrink: true
        }}
      />
      </FormControl>
      <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            defaultValue="movie"
            onChange={e => onChangeCategory('category', e.target.value)}
          >
            <MenuItem value={'movie'}>movie</MenuItem>
            <MenuItem value={'multi'}>multi</MenuItem>
            <MenuItem value={'tv'}>tv</MenuItem>
          </Select>
        </FormControl>
      <Button
        className={classes.button}
        color='primary'
        onClick={onSearch}
        variant='contained'
      >
        SEARCH
      </Button>
    </form>
  )
}

export default SearchForm
