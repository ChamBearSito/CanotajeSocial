import React from 'react'
import Logo from "../../assets/img/CannotExpress.png"

const Testimonio = () => {
  return (
    <>
     <section className="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto w-28" src={Logo} alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Amo esta App, desde mi infancia salia con mis abuelos  a hacer canotaje,hace varios años que deseaba una app para recomendar lugares de canotaje
              , esto es un 10/10”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto w-28 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Lucia Suarez</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Usuario</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    </>
  )
}

export default Testimonio