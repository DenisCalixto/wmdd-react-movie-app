import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { getShows } from '../services/api'
import Shows from '../components/Shows'

class ShowsContainer extends Component {
  state = {
    shows: [],
    api_url: "",
    category: "",
    categories: []
  }

  constructor(props) {
    super(props);
    this.state.category = props.category;
    this.state.api_url = props.api_url;
    this.state.categories = props.categories;
  }

  componentDidMount() {
    const { category } = this.state
    this.fetchData(category)
  }

  fetchData = (category) => {
    getShows(category, this.state.api_url).then(showsResponse => {
      this.setState({
        shows: showsResponse
      })
    })
  }

  handleChange = event => {
    this.setState({
      category: event.target.value
    })
    this.fetchData(event.target.value)
  };

  render() {
    const { shows } = this.state
    return (
      <div>
        <FormControl variant="outlined">
          <InputLabel shrink id="categoryLabelId">
            Category
          </InputLabel>
          <Select
            labelId="categoryLabelId"
            id="demo-simple-select-outlined"
            value={this.state.category}
            onChange={this.handleChange}
            className='combo'
          >
          {this.state.categories.map(category => {
            return (
              <MenuItem value={category}>{category}</MenuItem>
            )
          })}
          </Select>
        </FormControl>
        {/* send to the stateless component Movies the list of the recipes returned from the API  */}
        <Shows shows={shows} />
      </div>
    );
  }
}

export default ShowsContainer
