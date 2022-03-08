import React, { Component } from 'react';
import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";





class App extends Component {
  // 컴포넌트를 초기화.
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'world wide web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText ...'},
        {id:2, title:'CSS', desc:'CSS is for design ...'},
        {id:3, title:'JS', desc:'JS is for interactive ...'},
      ]
    }
  }
  // 
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject 
          title={this.state.subject.title} sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function(e){
            // a 태그를 클릭 시 화면 전환이 되지 않고 값만 출력.
            // event안의 함수에서의 this는 아무것도 가르키고 있지 않다. -> 뒤에 .bind(this)를 추가해야함.
            console.log(e);
            e.preventDefault();
            this.setState({
              mode:'welcome'
            });
            // end
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
