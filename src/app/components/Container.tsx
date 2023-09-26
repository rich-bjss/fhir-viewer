import React from "react";

function Container(props: any) {

    return (
    <div className="w-full pt-0 h-full bg-gray-100 rounded text-black shadow-xl mb-5" > 
        <div className="w-full pt-0 h-full bg-gray-100 rounded text-black shadow-xl" > 
            <div className="w-full">
                <h2 className="p-5 rounded bg-blue-300 font-bold">{props.title}</h2>
            </div>
              
            <div className="w-full p-5 text-sm">
                {props.content}
            </div>
        </div>
    </div>
    )
}

export default Container;