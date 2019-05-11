import unsplash from '../api/unsplash';
import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
  state = { images: [] };

  makeSearchRequest =(term) => {
    return unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });
  } 

  onSearchSubmit = async(term)=> {
    const res = await this.makeSearchRequest(term);
    this.setState({images: res.data.results});
  }

  render(){
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
  
}

export default App;
