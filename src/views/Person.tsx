
function Person(){
    return (
        <div className="bg-black text-white">
            <div className="person-section">
                <div className="card-section">
                    <div className="flex justify-center items-center w-100%">
                        <div className="flex flex-col md:flex-row max-w-[80%] m-6 rounded-lg bg-gray-800 shadow-lg">
                            <img className=" w-full h-[500px] md:h-[600px] object-cover md:w-[600px] rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/14561255/pexels-photo-14561255.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray-500 text-xl font-medium mb-2">Darth Vader</h5>
                                <p className="text-white-700 text-base mb-4">Once the heroic Jedi Knight named Anakin Skywalker, Darth Vader was seduced by the dark side of the Force. Forever scarred by his defeat on Mustafar, Vader was transformed into a cybernetically-enhanced Sith Lord. At the dawn of the Empire, Vader led the Empire’s eradication of the Jedi Order and the search for survivors. He remained in service of the Emperor -- the evil Darth Sidious -- for decades, enforcing his Master’s will and seeking to crush the Rebel Alliance and other detractors. But there was still good in him…</p>
                                <p className="text-yellow-300 text-xs italic">"Luke, I am your father"</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="data-section mb-[20px] mt-[20px]">

                    <div className="flex flex-col justify-center">
                    <h2 className="p-6 text-xl font-large">STATS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-start " >
                        <div className="flex flex-col items-center p-6">
                            
                            
                            <div className="items-start">
                                <h3 className="text-gray-700 text-xl font-medium mb-2">Origin</h3>
                                <p>Species: Human</p>
                                <p> Homeworld: Tatooine</p>
                                <p>Birth Year: 41.9 BBY</p>
                                <p>Gender: Male</p>
                            </div>
                            
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <div className="items-start">
                            <h3 className="text-gray-700 text-xl font-medium mb-2">Appearance</h3>
                                <p>Height: 202</p>
                                <p> Mass: 136</p>
                                <p>Eye color: Yellow</p>
                                <p>Hair color: None</p>
                                <p>Skin color: White </p>
                            </div>
                            
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <div className="items-start">
                            <h3 className="text-gray-700 text-xl font-medium mb-2">Films</h3>
                            <p>Star Wars: A New Hope</p>
                            <p>Star Wars: The Empire Strikes Back</p>
                            <p>Star Wars: Return of the Jedi</p>
                            <p>Star Wars: Revenge of the Sith</p>

                            </div>
                            
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <div className="items-start">
                            <h3 className="text-gray-700 text-xl font-medium mb-2">Databank</h3>
                            <p>Vehicles: TIE Advanced x1</p>
                            </div>
                        </div>

                    </div>
                    </div>
                   
                </div>

            </div>
            <div className="others mb-[20px]">
                <div className="flex flex-col">
                    <h3 className="p-6 text-xl font-large">MORE CHARACTERS</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
                       
                        <div className="flex justify-center items-center">
                            <div className="max-w-lg justify-center m-2">
                                <img className="h-[300px] object-cover max-w-full rounded-lg" src="https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="c3po"/>
                                <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Yoda</p>
                            </div>

                        </div>
                        <div className="flex justify-center items-center" >

                        <div className="max-w-lg justify-center m-2 ">
                            <img className="h-[300px] max-w-full rounded-lg" src="https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="yoda"/>
                            <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Yoda</p>
                        </div>

                        </div>
                        <div className="flex justify-center items-center">
                            <div className="max-w-lg justify-center m-2">
                                <img className="h-[300px] max-w-full rounded-lg" src="https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="leah"/>
                                <p className="mt-2 text-center text-sm  text-gray-500 dark:text-gray-400">Yoda</p>
                            </div>

                        </div>
                        <div className="flex justify-center items-center">
                            <div className="max-w-lg justify-center m-2">
                                <img className="h-[300px] max-w-full rounded-lg" src="https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                                <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Yoda</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Person