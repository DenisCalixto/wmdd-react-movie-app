import React from 'react'

import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formControl: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  textField: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1)
  }
}))

const SearchForm = (props) => {
  const classes = useStyles()
  const { onInputChange, onChangeCategory, onSearch, category } = props
  return (
    <form className={classes.form}>
      <FormControl variant="outlined" className={classes.formControl}>
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
          defaultValue={category}
          onChange={e => onChangeCategory('category', e.target.value)}
          className='combo'
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

// class SearchForm extends Component {
//   state = {
//     onInputChange: null,
//     onChangeCategory: null,
//     onChangeCategory: null,
//     category: ""
//   }

//   constructor(props) {
//     super(props);
//     console.log(props);
//     this.state.onInputChange = props.onInputChange;
//     this.state.onChangeCategory = props.onChangeCategory;
//     this.state.onSearch = props.onSearch;
//     this.state.category = props.category;
//     this.state.onChangeCategory('category', this.state.category)
//   }

//   useStyles = makeStyles(theme => ({
//     textField: {
//       display: 'flex',
//       margin: theme.spacing(1),
//       width: '40%'
//     },
//     button: {
//       margin: theme.spacing(1)
//     }
//   }))

//   handleChange = event => {
//     this.state.category = event.target.value
//     this.state.onChangeCategory('category', event.target.value)
//   };

//   handleSearchClick = event => {
//     this.state.onSearch()
//   };

//   render() {
//     const { category, onInputChange, onChangeCategory, onSearch } = this.state
//     return (
//       <form>
//         <FormControl variant="outlined">
//           <TextField
//             className={this.useStyles.textField}
//             label='Search'
//             margin='normal'
//             name='searchText'
//             onChange={e => onInputChange('searchText', e.target.value)}
//             type='search'
//             variant='outlined'
//             InputLabelProps={{
//               required: true,
//               primary: 'white',
//               shrink: true
//             }}
//           />
//         </FormControl>
//         <FormControl variant="outlined">
//           <InputLabel id="demo-simple-select-outlined-label">
//             Category
//           </InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             value={this.state.category}
//             onChange={this.handleChange}
//           >
//             <MenuItem value={'movie'}>movie</MenuItem>
//             <MenuItem value={'multi'}>multi</MenuItem>
//             <MenuItem value={'tv'}>tv</MenuItem>
//           </Select>
//         </FormControl>
//         <Button
//           className={this.useStyles.button}
//           color='primary'
//           onClick={this.handleSearchClick}
//           variant='contained'
//         >
//           SEARCH
//         </Button>
//       </form>
//     );
//   }
  
// }

// export default SearchForm