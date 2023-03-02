import React from 'react';
import Planet from '../components/planets/Planet';
import SearchForm from '../components/form/SearchForm';


function Planets() {
    return (

        <div className="bg-black w-full min-h-screen mb-0">
            <div className='mt-10 flex'>
                <Planet />
            </div>
        </div>
    )
}




export default Planets;