import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
const Fries = () => {
  const friesStyle = {
    height: "490px",
    width: "99%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="fries" style={friesStyle}>
    <h1 className="text-white px-3 pt-4">Fries:</h1>
    <p className="text-secondary px-3">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet accusamus
      voluptates ullam neque. Velit totam consequatur aut magnam ratione,
      atque id quasi ex distinctio quaerat, porro enim. Totam, perspiciatis
      beatae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
      nemo dolorum recusandae, voluptatum ea sapiente, voluptas quos similique
      tenetur, error commodi voluptatem enim dignissimos? Dolore accusantium
      animi doloribus numquam iusto.
    </p>
  </div>
  )
}

export default Fries
