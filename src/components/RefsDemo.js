import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      //incase of input ref
        this.inputRef= React.createRef()


        //Incase of callback refs
        this.CbRef=null
        this.setCbRef=(element)=>{
            this.CbRef=element
        }

    }
    componentDidMount(){
        //incase of input ref

        // this.inputRef.current.focus() 
        // console.log(this.inputRef)

        //incase of callback ref
        if(this.CbRef){
            this.CbRef.focus()
        }
        

        
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
         <input type='text' ref={this.inputRef}/>
         <input type='text' ref={this.setCbRef} />
         <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default RefsDemo
