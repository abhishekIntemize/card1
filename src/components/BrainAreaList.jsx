import React from "react";
function BrainAreaList(props){
    let color = "marker:text-orange-500";
    if(props.color === 1){
        color ="marker:text-blue-500";
    }
    else if(props.color ===2){
        color = "marker:text-green-500"
    }
    
    return(
        <div className="text-left px-4">
            <li className={`${color} marker:text-3xl pr-2`}>{props.title}</li>
            {/* <li className={`marker:text-${color}-500`}>{props.title}</li> */}
            <p className="text-gray-500 text-sm pl-6">{props.content}</p>
        </div>
    );
}

export default BrainAreaList;