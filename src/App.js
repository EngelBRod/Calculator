import React,{Component} from 'react';
import Key from './Components/Key';
import Display from './Components/Display';


class App extends Component {
  
 
    state = {
      screen:'',
      currentNumber:'0',
      currentOperation:'',
      result:0,
      setToWrite:true,
      setToOperate:true
    }
  
  
  displayScreen= (value)=>{
    let tempScreen
    let tempResult=0;
    let setToWrite=this.state.setToWrite;

    
   

    if(value==='+' || value==='-' || value==='*' || value==='/' || value==='='){
     
      if( this.state.setToOperate){
        let currentOperator=this.state.currentOperation;
        tempScreen=[...this.state.screen]
        tempScreen= tempScreen.concat(this.state.currentNumber);


        if(value !=='=' && value !=='CE' && value !=='C'){         
          
          tempScreen= tempScreen.concat( value);        

        }       
        
        tempScreen=tempScreen.join('');
        console.log('testing screen'+tempScreen)
        this.setState({screen:tempScreen})
        console.log('writing'+ value);

        switch(currentOperator){
        
          case '+':
            tempResult=  this.state.result + parseInt(this.state.currentNumber)  ;
            this.setState({setToOperate:false});
            break;
           // return tempResult;
          case '-':
            tempResult=  this.state.result - parseInt(this.state.currentNumber)  ;
            this.setState({setToOperate:false});
            break;
          case '*':
            tempResult=  this.state.result * (this.state.currentNumber)  ;
            this.setState({setToOperate:false});
            break;
          case '/':
            tempResult= this.state.result / parseInt(this.state.currentNumber);
            this.setState({setToOperate:false});
            break;
          case '=':
            // tempResult= this.state.result / parseInt(this.state.currentNumber);
            // this.setState({setToOperate:false});
            break;
          default:
            tempResult=parseInt(this.state.currentNumber);
            break
            
        }
        
        console.log(tempResult+'temp')
        this.setState({result:tempResult})
        tempResult=tempResult.toString()
        this.setState({currentNumber:tempResult});
        setToWrite=true;
        this.setState({setToWrite})

      }
      if(value!=='='){
        this.setState({currentOperation:value.toString()})
      }
      
      
    
     

    }else if(value==='C'){
      this.setState({
        currentNumber:'0',
        setToWrite:true
      });
    }else if(value==='CE'){
    
      this.setState({
        currentNumber:'0',
        screen:'',
        currentOperation:'',
        result:0,
        setToWrite:true,
        setToOperate:true

      })
    }
    else{

      if(setToWrite){
        tempScreen=value.toString();
        setToWrite=false;
        this.setState({setToWrite});
        this.setState({setToOperate:true});
        this.setState({currentNumber:tempScreen})
        
       }else{
         tempScreen=[...this.state.currentNumber]
         tempScreen= tempScreen.concat( value.toString());
         tempScreen=tempScreen.join('');
         //console.log(tempScreen.join(''));
         this.setState({currentNumber:tempScreen});
         console.log('test writing');
         
       }
      
    }
    
   
  }
  render(){
    return (
      <div >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-6">
              <Display
                  DisplayScreen={this.state.screen}
                  DisplayResult={this.state.currentNumber}
              />

            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-md-6 justify-content-center">
              <div class="row">
              
              <Key 
              Character={'C'}
              CharacterToScreen={this.displayScreen}
              /> 
              <Key 
              Character={'CE'}
              CharacterToScreen={this.displayScreen}
              />
              <Key 
              Character={'<-'}
              CharacterToScreen={this.displayScreen}
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
              Character={'+'}
              CharacterToScreen={this.displayScreen}
              />
              <Key 
              Character={0}
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
              Character={'='}
              CharacterToScreen={this.displayScreen}
              />
              <Key 
              Character={'/'}
              CharacterToScreen={this.displayScreen}
              />

              </div>
            

            </div>
              
        
              

            

          </div>

        </div>
        
      </div>
    );
  }
 
}

export default App;
