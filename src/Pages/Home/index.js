import React, { Component} from 'react';

import './styles.css'

import Header from "../../components/Header";
import HomeContainer from '../../components/HomeContainer';
import SearchBar from './SearchBar';
import GetPoc from './GetPoc';
class Home extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: false
      };
  
      this.handleButtonClick = this.handleButtonClick.bind(this);
    }
  
    handleButtonClick() {
      this.setState({
        loading: true
      });
    }
  
    render() {
      const { loading } = this.state;
  
      return (
        <div className="home">
          <Header />
          <HomeContainer>
            <SearchBar handleButtonClick={this.handleButtonClick} />
            {loading && <GetPoc lat="-23.6317681" long=" -46.7014068" />}
          </HomeContainer>
        </div>
      );
    }
  }
  
  export default Home;
  