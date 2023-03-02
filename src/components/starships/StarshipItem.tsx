import React from "react";

export function StarshipItem ({ id, logo,  title, description }) {
    return (
        <div className={'flex flex-col min-h-[100px]'}>
            <img className={'object-cover h-96 rounded-t-lg'} src={logo} alt={''}/>
            <div className={'flex flex-col h-[20vh] items-start justify-between'}>
                <h1 className={'text-2xl px-1 text-white'}>
                    {title}
                </h1>
                <p className={'px-1 mt-2 text-white text-l'}>
                    {description}
                </p>
                <button
                    data-modal-target={id}
                    data-modal-toggle={id}
                    className={'border border-2 rounded-md mt-4 border-[#E02312] text-white p-2 hover:bg-[#E02312] w-max'}>
                    SHIP DETAILS
                </button>
            </div>
        </div>
    )
}