import React from "react";
import ChartBar from '../components/ChartBar.jsx'

function FullScreenModal(props: any) {
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
                    className="pointer-events-none relative w-auto opacity-100 transition-all duration-300 ease-in-out">
                    <div
                    className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                    <div
                        className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                        <h5
                        className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                        id="exampleModalComponentsLabel">
                        Full Screen
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
                        {props.dataType == "newsScores" 
                                ? <ChartBar title={props.dataType} data={props.data[props.dataType]} height="100" showAllLabels={props.showAllLabels} />
                                : <ChartBar title={props.dataType} data={props.data.observations[props.dataType]} height="100" showAllLabels={props.showAllLabels} />
                        }
                        {/* <pre>{JSON.stringify(props.data.observations[props.dataType], null, 2)}</pre> */}
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

export default FullScreenModal;