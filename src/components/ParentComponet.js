import React, { Component } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComponent from './RegComponent';

export class ParentComponet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Siva'
      }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'Siva'
            })
        }, 2000);
    }
    render() {
        console.log('************Parent Componet***************')
    return (
      <div>
        Parent component

        <MemoComp name={this.state.name} />
        {/* <RegComponent name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComponet
