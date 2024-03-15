import React from "react";
function BrainAreaList(props){
    let color = "red";
    
    return(
        <div className="text-left px-4">
            <li className={`marker:text-${color}-500`}>{props.title}</li>
            {/* <li className={`marker:text-${color}-500`}>{props.title}</li> */}
            <p className="text-gray-500 text-sm pl-6">{props.content}</p>
        </div>
    );
}

export default BrainAreaList;