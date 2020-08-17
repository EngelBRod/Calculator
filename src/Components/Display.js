import React from 'react';

function Display(props){
return(

        <div class="sc m-md-4 my-4">
            <p>{props.DisplayScreen}</p>
            <p>{props.DisplayResult}</p>
        </div>



);
}

export default Display;
