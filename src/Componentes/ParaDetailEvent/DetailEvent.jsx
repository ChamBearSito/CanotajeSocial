import React from "react";

const DetailEvent = ({aEvent, isOpen}) => {
  //Detail event es para mostrar un modal con los datos
  // de un evento seleccionado
  return (
    <>
      {isOpen && (
        <>
          <h3 className="text-lg font-bold">Detalles del Evento</h3>

          <div className="m-5  text-center">
            <h2 className="text-lg font-bold">{aEvent.name}</h2>

            <div className="text-center">
              <div className="card-body text-center">
                <div>
                {aEvent.images[0] ? 
                  <img
                    src={aEvent.images[0].url}
                    className="mx-auto shadow-md shadow-info"
                    height={100}
                    width={300}
                  />:<img
                  src={"https://via.placeholder.com/150"}
                  className="mx-auto shadow-md shadow-info"
                  height={100}
                  width={300}
                />}
                </div>

                <div>{aEvent.location}</div>
                <div>{aEvent.description}</div>
                <div>{aEvent.date}</div>
                <div style={{pointerEvents: 'none'}}>
                  <div className="rating gap-2 mt-1">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailEvent;
