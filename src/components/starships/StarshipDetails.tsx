import React from "react";

export function StarshipDetails({ id, title, logo, description, speed, passengers, manufacturers, starshipClass, rating }) {
    return (
        <div id={id}
             tabIndex={-1}
             aria-hidden={true}
             className={'fixed top-0 left-0 right-0 z-50 hidden w-full p-4 ' +
                 'overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full'}>

            <div className={'relative w-full h-full max-w-2xl md:h-auto'}>

                <div className={'relative bg-[#000000] rounded-lg shadow'}>

                    <div className={'flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'}>
                        <h3 className={'text-4xl font-semibold text-white'}>
                            {title}
                        </h3>

                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900
                        rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide={id}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className={'p-6 space-y-6'}>
                        <img className={'h-96 object-cover w-full'} src={logo} alt={title}/>
                        <p className={'text-l text-white font-extralight'}>
                            {description}
                        </p>

                        <div className={'flex flex-row'}>
                            <p className={'text-2xl font-bold text-[#E02312]'}>SPEED :</p>
                            <p className={'text-white text-xl justify-center ml-4'}>{speed}</p>
                        </div>

                        <div className={'flex flex-row'}>
                            <p className={'text-2xl font-bold text-[#E02312]'}>NO. PASSENGERS :</p>
                            <p className={'text-white text-xl justify-center ml-4'}>{passengers}</p>
                        </div>

                        <div className={'flex flex-row'}>
                            <p className={'text-2xl font-bold text-[#E02312]'}>MANUFACTURERS :</p>
                            <p className={'text-white text-xl justify-center ml-4'}>{manufacturers}</p>
                        </div>

                        <div className={'flex flex-row'}>
                            <p className={'text-2xl font-bold text-[#E02312]'}>CLASS :</p>
                            <p className={'text-white text-xl justify-center ml-4'}>{starshipClass}</p>
                        </div>

                        <div className={'flex flex-row'}>
                            <p className={'text-2xl font-bold text-[#E02312]'}>RATING :</p>
                            <p className={'text-white text-xl justify-center ml-4'}>{rating}/5</p>
                        </div>

                    </div>

                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide={id} type="button" className="border border-2 rounded-2xl border-[#E02312] text-white p-4 hover:bg-[#E02312] w-max font-semibold">CLOSE</button>
                    </div>

                </div>

            </div>

        </div>
    )
}