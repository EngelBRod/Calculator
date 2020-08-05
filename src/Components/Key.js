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
        <button onClick={()=>this.onClickHandler(this.props.Character,this.props.CharacterToScreen)}>{this.props.Character}</button>
    );
}

}

export default Key