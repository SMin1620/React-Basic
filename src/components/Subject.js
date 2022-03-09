import React, { Component } from 'react';


class Subject extends Component {
    render(){
      return (
        <header>
          {/* onClick 함수를 통해서 onChangePage 함수를 실행. */}
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

export default Subject