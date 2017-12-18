import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

//setting global for use during onChange events instead of just onSubmit
var firstChoice = 0;
var secondChoice = 0;
var thirdChoice = 0;


//setting a finalized component below that will be exported to app.js
export default class InputField extends React.Component{
  constructor(props){
   super(props); 
   this.handleClick = this.handleClick.bind(this);
   this.firstInputBox = this.firstInputBox.bind(this);
   this.secondInputBox = this.secondInputBox.bind(this);
   this.thirdInputBox = this.thirdInputBox.bind(this);
  }

  firstInputBox(evt){
    firstChoice = evt.target.value;
    console.log("First Number updated to: "+ firstChoice)
  }

  secondInputBox(evt){
    secondChoice = evt.target.value;
    console.log("Second number updated to: "+ secondChoice)
  }

  thirdInputBox(evt){
    thirdChoice = evt.target.value;
    console.log("Third number updated to: "+ thirdChoice)
  }

  //object literals used to you can follow along in console.log for testing
  handleClick(){
   console.log(`value of input field 1 : ${firstChoice}`);
   console.log(`value of input field 2 : ${secondChoice}`);
   console.log(`value of input field 3 : ${thirdChoice}`);
   
    //sort for proper comparison, parseInt 
    const arr = [parseInt(firstChoice),parseInt(secondChoice),parseInt(thirdChoice)].sort()
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];

    console.log(a,b,c)

    if (a===0||b===0||c===0) {
      alert('not enough information')
    } else if (a===b&&b===c){
      alert('Equilateral Triangle')
    } else if (a===b||b===c||a===c){
      alert('Isoscleles Triangle')      
    } else if (a+b>c){
      alert('Scalene Triangle')   
    } else {
      alert('Not a Triangle')
    }

  }

render() {
    return (
      <div className="mt-5 border p-5 m-5 fiveHundo bg-info text-white rounded">
        <span className="my-3"><h1>Enter your side sizes below!</h1></span>
        <br />
      <Form>
        <FormGroup className="">
          <Label for="1">Length of the first side of your triangle</Label>
          <Input type="text" id="1" 
               onChange={this.firstInputBox} />
        </FormGroup>
        <FormGroup className="">
          <Label for="2">Length of the second side of your triangle</Label>
          <Input type="text" id="2" 
               onChange={this.secondInputBox} />
        </FormGroup>
        <FormGroup className="">
          <Label for="3">Length of the third side of your triangle</Label>
          <Input type="text" id="3" 
                onChange={this.thirdInputBox} />
        </FormGroup>
        <h4>Click below to see what type of triangle you input</h4>
        <Button value="Submit" className ="bg-dark" onClick={this.handleClick}>Submit</Button>
      </Form>
      </div>
    );
  }
}


//   render(){
//     var r; 
//     r=<div>


//         <div>
//         <input type="text" id="1" 
//                onChange={this.firstInputBox} />

//         <input type="text" id="2" 
//                onChange={this.secondInputBox} />
            
//        <input type="text" id="3" 
//                 onChange={this.thirdInputBox} />

//        <input type="button" value="Submit" onClick={this.handleClick}/>

//        </div>
//     </div>;  
//     return r;
//    }
// }

