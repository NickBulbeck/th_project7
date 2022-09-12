import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav'
import Home from './components/Home';
import Torridon from './components/Torridon';
import Fisherfield from './components/Fisherfield';
import Cuillin from './components/Cuillin';
import Loading from './components/Loading';
import flickr from './config.js';


class App extends Component {
  state = {
    foties: [],
    searchTerm: "forever friends bear",
    key: flickr.key,
    perPage: 24,
    loading: false,
    setSearchTerm: (newSearchTerm) => {
                      this.setState( {searchTerm: newSearchTerm});
                    ;}
  }

  setSearchTerm = (newSearchTerm) => {
    this.setState({searchTerm: newSearchTerm});
  }

  search = (searchTerm) => {
    this.setState({loading: true});
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.key}&text=%22${searchTerm}%22&per_page=${this.state.perPage}&format=json&nojsoncallback=1`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          foties: data.photos.photo,
          loading:false
        });
      })
      .catch(error => {
        console.log(`Error in fetch: ${error}`)
      })
  }

  componentDidMount () {
    this.search(this.state.searchTerm);
  }
// Actually need to render routes. The overall structure isn't right.

  render () {
    if (this.state.loading) {
      return(
        <Loading />
      )
    }
    // consider adding a 
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm search={this.search} setSearchTerm={this.setSearchTerm}/>
          <MainNav search={this.search} setSearchTerm={this.setSearchTerm}/>
          <Routes>
            <Route exact path="/" element={<Home content={this.state.foties} />} />
            <Route path="/torridon" element={<Torridon content={this.state.foties} />} />
            <Route path="/fisherfield" element={<Fisherfield content={this.state.foties} />} />
            <Route path="/cuillin" element={<Cuillin content={this.state.foties} />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;