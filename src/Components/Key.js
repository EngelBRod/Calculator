import React,{Component} from 'react';


class Key extends Component{
constructor(props){
    super(props);
}
onClickHandler(Character,CharacterToScreen){
   
    CharacterToScreen(Character);
}

render(){
    return(
        <div class="col-4">
            <div class="bt  m-4" onClick={()=>this.onClickHandler(this.props.Character,this.props.CharacterToScreen)}>{this.props.Character}</div>
        </div>
        
    );
}

}

export default Key