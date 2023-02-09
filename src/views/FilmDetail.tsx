function FilmDetail() {
  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-2 gap-4 h-1/2">
        <div className="col-span-1">
          <img
            src="https://images.unsplash.com/photo-1432457990754-c8b5f21448de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            className="w-full h-1/2 object-cover"
            alt="Image"
          />
        </div>
        <div
          className="col-span-1 pl-4 pt-10 h-1/2 text-white"
          style={{ backgroundColor: "#423E3E" }}>
          <h2 className="font-bold" style={{fontSize:"30px"}}>Star Wars: The Phantom</h2>
          <p className="text-lg mt-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            quibusdam quos dicta minima est necessitatibus recusandae fugit
            saepe odio autem assumenda voluptatum beatae molestias facere,
            officiis laborum tenetur voluptatibus dolorum. Dolore, error sit
            molestias sunt numquam temporibus commodi sapiente voluptas quos
            voluptatibus repellendus dolores cumque nesciunt nihil, placeat,
            perferendis quae nisi dolorem accusamus magnam deleniti. Repellendus
            perspiciatis nobis molestiae perferendis blanditiis sed obcaecati,
            inventore praesentium nesciunt odit fugiat delectus aliquam
          </p>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white" style={{marginTop:"-480px",marginLeft:"20px"}}>Databank: The Phantom</h3>
      <hr className="w-100 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
    </div>
  );
}

export default FilmDetail;
