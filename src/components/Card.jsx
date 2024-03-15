import React from "react";
import list from "./list";
import BrainAreaList from "./BrainAreaList";
function Card(props) {
    return (
        // card
        <div className="border-2 w-[384px] h-[512px] border-black rounded-[12px]"> 
            {/* heading */}
            <div className="flex justify-center items-center gap-28 p-3"> 
                <div className="flex">
                    <img src="/Vector.svg" alt="" />
                    <h1 className="px-3 py-0.5 text-lg font-medium">Phenotype</h1>
                </div>
                <div>
                    <button className="bg-gray-100 p-2 rounded-[5px] text-blue-400 text-xs">View Details</button>
                </div>
            </div>
            <div className="flex justify-center">
                <hr className="rounded bg-gray w-[300px]"></hr>
            </div>

            {/* image + right content */}
            <div className="flex p-4 gap-4">
                <div>
                    <img src="/brain.png" alt="" />
                </div>
                <div className="w-[152px]">
                    <h2 className="text-left">Phenotype Name</h2>
                    <p className="text-left text-gray-500 text-xs">Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
                </div>
            </div>

            {
                list.map((listItem, index) =>(
                    <BrainAreaList 
                        key = {index}
                        title = {listItem.title}
                        content = {listItem.content}
                        color = {index}
                    />
                    // <div className="text-left px-4">
                    //     <li>{listItem.title}</li>
                    //     <p className="text-gray-500 text-sm pl-6">{listItem.content}</p>
                    //     {console.log("hello")}
                    // </div>
                ))
            }
        </div>
    );

}

export default Card;