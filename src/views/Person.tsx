
function Person(){
    return (
        <div className="bg-black text-white">
            <div className="person-section">
                <div className="card-section">
                    <div className="flex justify-center w-100%">
                        <div className="flex flex-col md:flex-row max-w-screen-md rounded-lg bg-gray-800 shadow-lg">
                            <img className=" w-full h-96 md:h-auto object-cover md:w-full rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/14561255/pexels-photo-14561255.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div className="p-6 flex flex-col justify-start">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Darth Vader</h5>
                                <p className="text-gray-700 text-base mb-4">Once the heroic Jedi Knight named Anakin Skywalker, Darth Vader was seduced by the dark side of the Force. Forever scarred by his defeat on Mustafar, Vader was transformed into a cybernetically-enhanced Sith Lord. At the dawn of the Empire, Vader led the Empire’s eradication of the Jedi Order and the search for survivors. He remained in service of the Emperor -- the evil Darth Sidious -- for decades, enforcing his Master’s will and seeking to crush the Rebel Alliance and other detractors. But there was still good in him…</p>
                                <p className="text-gray-600 text-xs italic">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="data-section ">

                    <div className="flex flex-col ">
                    <h2>STATS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
                        <div className="flex flex-col">
                            <h3 className="text-gray-700 text-xl font-medium mb-2">Origin</h3>
                            <p>Species: Human</p>
                            <p> Homeworld: Tatooine</p>
                            <p>Birth Year: 41.9 BBY</p>
                            <p>Gender: Male</p>
                        </div>
                        <div>
                            <h3 className="text-gray-700 text-xl font-medium mb-2">Appearance</h3>
                            <p>Height: 202</p>
                            <p> Mass: 136</p>
                            <p>Eye color: Yellow</p>
                            <p>Hair color: None</p>
                            <p>Skin color: White </p>
                        </div>
                        <div>
                            <h3 className="text-gray-700 text-xl font-medium mb-2">Films</h3>
                            <p>Star Wars: A New Hope</p>
                            <p>Star Wars: The Empire Strikes Back</p>
                            <p>Star Wars: Return of the Jedi</p>
                            <p>Star Wars: Revenge of the Sith</p>

                        </div>
                        <div>
                            <h3 className="text-gray-700 text-xl font-medium mb-2">Databank</h3>
                            <p>Vehicles: TIE Advanced x1</p>
                        </div>

                    </div>
                    </div>
                   
                </div>

            </div>
            <div className="others">
                <div className="flex flex-col">
                    <h3>MORE CHARACTERS</h3>
                    <div className="grid grid-cols-4 gap-4">
                        <div>

                            <figure className="max-w-lg">
                                <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"/>
                                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Yoda</figcaption>
                            </figure>

                        </div>
                        <div className="flex justify-center align-center">
                            <figure className="max-w-lg">
                                <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"/>
                                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Yoda</figcaption>
                            </figure>

                        </div>
                        <div>
                            <figure className="max-w-lg">
                                <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"/>
                                <figcaption className="mt-2 text-center text-sm  text-gray-500 dark:text-gray-400">Yoda</figcaption>
                            </figure>

                        </div>
                        <div>
                            <figure className="max-w-lg">
                                <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image description"/>
                                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Yoda</figcaption>
                            </figure>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Person