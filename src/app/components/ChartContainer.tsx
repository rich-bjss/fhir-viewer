import React from "react";

function ChartContainer(props: any) {

    return (
    <div className="w-full bg-gray-200 rounded text-black p-2 mb-2" > 
        {props.chart}
        <div className="pt-2 text-right">
            {props.buttons}
        </div>
        
    </div>
    )
}

export default ChartContainer;