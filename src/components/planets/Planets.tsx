import React from 'react';
import Planet from './Planet';
import SearchForm from '../form/SearchForm';


function Planets() {
    return (

        <div className="bg-black w-full min-h-screen mb-0">
            <div className='border-b-2  m-auto w-11/12 mt-4' />
            <div className='bg-zinc-700	 w-4/5 m-auto mt-10 rounded-md	'>
                <SearchForm />
            </div>
            <div className='container mx-auto md:container md:mx-auto mt-10 flex'>
                <Planet />
            </div>
        </div>
    )
}




export default Planets;