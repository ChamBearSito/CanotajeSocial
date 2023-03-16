import React from 'react'
import rio from "../../assets/img/rio.jpg"
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, UserIcon,StarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Subir Fotos de Lugares',
    description:
      'Tendras la Oportunidad de subir una foto del lugar en el cual pasaste o recomendaste realizar canotaje.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Rating',
    description:
      'Podras calificar los lugares que publiquen los demas usuarios, para posicionar a los mejores lugares.',
    icon: StarIcon,
  },
  {
    name: 'Perfil Personal',
    description:
      'Contaras con un perfil personal con el cual podras, subir, bajar,calificar,recomendar lugares y mucho mas.',
    icon: UserIcon,
  },
  {
    name: 'Seguridad Avanzada',
    description:
      'Contamos con un equipo de soporte altamente capacitado para cualquier problema de Seguridad de tu cuenta.',
    icon: FingerPrintIcon,
  },
]




const QuienesSomos = () => {
  return (
    <>
      <div className="overflow-hidden  py-16 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
             
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Comparte tu Experiencia</p>
              <p className="mt-6 text-lg leading-8">
              En nuestra plataforma, encontrarás una variedad de opciones de canotaje en todo el mundo, desde ríos tranquilos y lagos serenos hasta desafiantes corrientes de aguas bravas. Nuestro objetivo es crear una comunidad de entusiastas del canotaje que compartan sus conocimientos y experiencias para ayudar a otros a encontrar los mejores lugares para disfrutar de su deporte favorito.
              </p>
              <p className="mt-6 text-lg leading-8 ">
               Creemos en la importancia de preservar los recursos naturales y promover prácticas de canotaje responsables. Al publicar tus fotos y recomendaciones, puedes ayudar a otros a disfrutar del canotaje de manera segura y sostenible. Juntos, podemos proteger nuestros ríos y lagos para que las futuras generaciones puedan disfrutar de estos hermosos lugares.
              </p>


             
            
            </div>
          </div>
          <img
            src={rio}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>















    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           Que podras hacer en nuestra App
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Además de las fotos y las calificaciones, también ofrecemos información útil sobre cada lugar de canotaje, como la dificultad, el tipo de agua y los servicios disponibles. También puedes conectarte con otros usuarios para intercambiar información y consejos sobre los mejores lugares para canotaje en todo el mundo.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    

    </>
  )
}

export default QuienesSomos