import React, { Component } from 'react';
import Foties from './components/Foties';
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav'
import NoResults from './components/NoResults';
import flickr from './config.js';

class App extends Component {
  state = {
    foties: [],
    searchTerm: "forever friends bear",
    key: flickr.key,
    perPage: 24
  }

  componentDidMount () {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.key}&text=%22${this.state.searchTerm}%22&per_page=${this.state.perPage}&format=json&nojsoncallback=1`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          foties: data.photos.photo
        });
      })
      .catch(error => {
        console.log(`Error in fetch: ${error}`)
      })
  }

  render () {
    return (
      <div className="container">
        <SearchForm />
        <MainNav />
        {this.state.foties.length > 0 ?
          <Foties content={this.state.foties}/>
          :
          <NoResults />
        }
  
      </div>
    );
  }

}

export default App;

// So: App is the top=level component. It's set up as a function in its own file.
// We need to set up separate files for each other component and export them in the same way; 
// then require them in here as applicable.

// map: React basics, section 3, vid 4 (iterating with map()).

// The biggest likely pitfall with statefull components is binding the methods to the class instance.
// See section 4, vid 6 (bind event handlers) for reminders.