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
        <div class="col-4 d-flex justify-content-center">
            <div class="bt mb-4" onClick={()=>this.onClickHandler(this.props.Character,this.props.CharacterToScreen)}>{this.props.Character}</div>
        </div>
        
    );
}

}

export default Key