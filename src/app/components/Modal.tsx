"use client"
import React from "react";
import { useState, useEffect } from 'react';


function Modal(props: any) {

    const [showTable, setShowTable] = useState(true); //Otherwise show JSON

    function getCode(){
            if (props.dataType === "newsScores"){

                // return typeof(props.data[props.dataType])
                if (props.data[props.dataType] != null){
                    if (props.data[props.dataType].length > 0){
                        var x = props.data[props.dataType]
                        return x[0].code
                    }
                }
            }
            else {
                // console.log(props.data.observations[props.dataType])
                // return typeof(props.data.observations[props.dataType])
                if (props.data.observations[props.dataType] != null){
                    if (props.data.observations[props.dataType].length > 0){
                        var x = props.data.observations[props.dataType]
                        return x[0].code
                    }
                }
            }
        
    }

    function getResults(){

    }

    function handleOpenTable(){
        setShowTable(true);
    }

    function handleOpenJSON(){
        setShowTable(false);
    }

    return (
        <div className={props.show ? "inline-block" : "hidden"} >
            <div
                data-te-modal-init
                data-te-backdrop="false"
                className="fixed left-0 top-0 z-100 block h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModalComponents"
                // {tabindex="-1"}
                aria-labelledby="exampleModalComponentsLabel"
                aria-hidden="true">
                <div
                    data-te-modal-dialog-ref
                    className="pointer-events-none relative w-auto opacity-100 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:my-7 min-[576px]:max-w-[500px]">
                    <div
                    className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                    <div
                        className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                        <h5
                        className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                        id="exampleModalComponentsLabel">
                        {props.dataType}
                        </h5>
                        <button
                        type="button"
                        className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss
                        aria-label="Close"
                        onClick={props.handleClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div className="relative flex-auto p-4" data-te-modal-body-ref>
                        <button onClick={() => handleOpenTable()} className=" px-2 mr-2 mb-2 border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 rounded">
                            {"TABLE"}
                        </button>
                        <button onClick={() => handleOpenJSON()} className=" px-2 border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 rounded">
                            {"JSON"}
                        </button>

                        {/* TABLE FORMAT */}
                        <table className={showTable ? "w-full text-sm text-left text-gray-500 dark:text-gray-400" : "hidden"}>
                            <thead className="text-sm text-left text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Timestamp
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Value <span className="text-xs italic font-normal">{getCode()}</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-left">
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* JSON FORMAT */}
                        <pre className={showTable ? "hidden" : "inline-block"}>
                            {props.dataType == "newsScores" 
                                ? JSON.stringify(props.data[props.dataType], null, 2) 
                                : JSON.stringify(props.data.observations[props.dataType], null, 2)
                            }
                        </pre>
                    </div>
                    <div
                        className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                        <button
                        type="button"
                        className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                        data-te-modal-dismiss
                        data-te-ripple-init
                        data-te-ripple-color="light" 
                        onClick={props.handleClose}>
                        Close
                        </button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Modal;