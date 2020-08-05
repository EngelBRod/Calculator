import React,{Component} from 'react';
import Key from './Components/Key';
import Display from './Components/Display';


class App extends Component {
  
 
    state = {
      screen:'',
      currentNumber:'0',
      result:0,
      setToWrite:true
    }
  
  
  displayScreen= (value)=>{
    let tempScreen
    let tempResult=0;
    let setToWrite=this.state.setToWrite;

    
   

    if(value==='+' || value==='-' || value==='*' || value==='/'){
      tempScreen=[...this.state.currentNumber]
      tempScreen= tempScreen.concat( value.toString());
      tempScreen= tempScreen.concat(this.state.screen);
      tempScreen=tempScreen.join('');
      console.log(tempScreen)
      this.setState({screen:tempScreen})
      switch(value){
        
        case '+':
          tempResult=  parseInt(this.state.currentNumber) + this.state.result;
          break;
         // return tempResult;
        case '-':
          tempResult=  parseInt(this.state.currentNumber) - this.state.result;
          break;
        case '*':
          tempResult=  parseInt(this.state.currentNumber) * this.state.result;
          break;
        case '/':
          tempResult=  parseInt(this.state.currentNumber) / this.state.result;
          break;
        default:
          break

          
      }
    
      console.log(tempResult+'temp')
      this.setState({result:tempResult})
      tempResult=tempResult.toString()
      this.setState({currentNumber:tempResult});
      setToWrite=true;
      this.setState({setToWrite})

    }
    else{

      if(setToWrite){
        tempScreen=value.toString();
        setToWrite=false;
        this.setState({setToWrite})
        this.setState({currentNumber:tempScreen})
        
       }else{
         tempScreen=[...this.state.currentNumber]
         tempScreen= tempScreen.concat( value.toString());
         tempScreen=tempScreen.join('');
         //console.log(tempScreen.join(''));
         this.setState({currentNumber:tempScreen})
         
       }
      
    }
    
   
  }
  render(){
    return (
      <div className="App">
        <Display
        DisplayScreen={this.state.screen}
        DisplayResult={this.state.currentNumber}
        />
        
        <Key 
        Character={1}
        CharacterToScreen={this.displayScreen}
        />
        <Key 
        Character={2}
        CharacterToScreen={this.displayScreen}
        />
        <Key 
        Character={3}
        CharacterToScreen={this.displayScreen}
        />
        <Key 
        Character={4}
        CharacterToScreen={this.displayScreen}
        />
        <Key 
        Character={5}
        CharacterToScreen={this.displayScreen}
        />
        <Key 
        Character={6}
        CharacterToScreen={this.displayScreen}
        />
        <Key 
        Character={7}
        CharacterToScreen={this.displayScreen}
        />
        <Key 
        Character={8}
        CharacterToScreen={this.displayScreen}
        />
        <Key 
        Character={9}
        CharacterToScreen={this.displayScreen}
        />
        <Key 
        Character={0}
        CharacterToScreen={this.displayScreen}
        />
        <Key 
        Character={'+'}
        CharacterToScreen={this.displayScreen}
        />
         <Key 
        Character={'-'}
        CharacterToScreen={this.displayScreen}
        />
        <Key 
        Character={'*'}
        CharacterToScreen={this.displayScreen}
        />
        <Key 
        Character={'/'}
        CharacterToScreen={this.displayScreen}
        />
      </div>
    );
  }
 
}

export default App;
