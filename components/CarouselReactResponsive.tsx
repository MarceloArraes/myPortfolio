import { useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // Import carousel styles
import { Carousel } from 'react-responsive-carousel' // Import carousel component
import { AlertOctagon } from 'react-feather'
import Image from 'next/image'

type Project = {
  name: string
  description: string
  site: string
  src: string
  darkimage: boolean
  siteIcon: string
  active: boolean
  tecDescription: string
  tecIcon1: string
  tecIcon2: string
  tecIcon3: string
}
//array of projects
const mainProjects = [
  {
    name: 'GeoCapital stock Tracker',
    description: 'A stock tracker for GeoCapital',
    site: 'https://geo-capital-online-portfolio.vercel.app/',
    src: '/GeoCapitalTest.png',
    darkimage: true,
    siteIcon: '/nutriNotes.png',

    active: true,
    tecDescription: 'Typescript, Nextjs, Tailwindcss',
    tecIcon1: '/typescripticon.png',
    tecIcon2: '/nextjsicon.png',
    tecIcon3: '/tailwindcssLogo.png',
  },
  {
    name: 'Nutri Notes',
    description: 'Nutritional information for health professionals',
    site: 'https://nutri-notes.vercel.app/',
    src: '/nutrinotesbg.png',
    darkimage: false,

    active: true,
    siteIcon: '/nutriNotes.png',
    tecDescription: 'Nextjs, Supabase, MaterialUi',
    tecIcon1: '/nextjsicon.png',
    tecIcon2: '/supabaseicon.png',
    tecIcon3: '/muiicon.png',
  },
  {
    name: 'Web Widget',
    description: 'A web widget for the web',
    site: 'https://vercel.com/marceloarraes/web-widget',
    src: '/webwidget_gif.gif',
    darkimage: true,
    siteIcon: '/webwidgetIcon.png',

    active: false,
    tecDescription: 'Vite, Typescript, Tailwindcss',
    tecIcon1: '/vitelogo.svg',
    tecIcon2: '/typescripticon.png',
    tecIcon3: '/tailwindcssLogo.png',
  },
]

const secondProjects = [
  {
    name: 'Bem Paggo Form',
    description: 'A front-end site for Bem Paggo company',
    site: 'https://bem-pago-form.vercel.app/',
    src: '/bempagobg.png',
    darkimage: false,
    siteIcon: '/bempaggoicon2.png',

    active: true,
    tecDescription: 'Typescript, MaterialUI, Styled Components',
    tecIcon1: '/typescripticon.png',
    tecIcon2: '/muiicon.png',
    tecIcon3: '/styledcomponentsicon3.png',
  },
  {
    name: 'Event Platform',
    description: 'A platform to display a online event',
    site: 'https://event-platform-etdp6plb8-marceloarraes.vercel.app/',
    src: '/eventplatform.png',
    darkimage: true,
    siteIcon: '/adamintericon.svg',

    active: true,
    tecDescription: 'Reactjs, Vite, Graphql, vime, tailwindcss',
    tecIcon1: '/reacticon.png',
    tecIcon2: '/typescripticon.png',
    tecIcon3: '/tailwindcssLogo.png',
  },
  {
    name: 'My Portfolio',
    description: 'My portfolio with some projects.',
    site: 'https://marcelosportfolio.vercel.app/',
    src: '/marcelosPortfolioImage.png',
    darkimage: true,

    active: true,
    siteIcon: '/nutriNotes.png',
    tecDescription: 'Typescript, Nextjs, Tailwindcss',
    tecIcon1: '/typescripticon.png',
    tecIcon2: '/nextjsicon.png',
    tecIcon3: '/tailwindcssLogo.png',
  },
]

const oldProjects = [
  {
    name: 'Nasa Project',
    description: 'Space mission scheduler',
    site: 'https://gold-expensive-bream.cyclic.app/',
    src: '/nasaProjectBack.png',
    darkimage: true,
    siteIcon: '/adamintericon.svg',

    active: false,
    tecDescription: 'Nodejs, Reactjs, MongoDb',
    tecIcon1: '/nodejsicon.png',
    tecIcon2: '/reacticon.png',
    tecIcon3: '/nodejsicon.png',
  },
  {
    name: 'Adaminter.org',
    description: 'Nft Creator on Cardano blockchain',
    site: 'https://www.adaminter.org',
    src: '/adaminterback.png',
    darkimage: false,
    siteIcon: '/adamintericon.svg',

    active: false,
    tecDescription: 'Blockchain, Nextjs, Django, Nodejs',
    tecIcon1: '/reacticon.png',
    tecIcon2: '/djangoicon.png',
    tecIcon3: '/nodejsicon.png',
  },
]
const mobileProjects = [
  {
    name: 'App Helper',
    description: 'A tickering platform for technical support',
    site: '',
    src: '/144203-720x1604_AdobeExpress.gif',
    darkimage: true,
    siteIcon: '',

    active: false,
    tecDescription: 'React-Native, native-base, MongoDB, firestore',
    tecIcon1: '/reacticon.png',
    tecIcon2: '/typescripticon.png',
    tecIcon3: '/tailwindcssLogo.png',
  },
  // {
  //   name: 'App Helper',
  //   description: 'A tickering platform for technical support',
  //   site: '',
  //   src: '/144203-720x1604_AdobeExpress.gif',
  //   darkimage: true,
  //   siteIcon: '',

  //   active: false,
  //   tecDescription: 'React-Native, native-base, MongoDB, firestore',
  //   tecIcon1: '/reacticon.png',
  //   tecIcon2: '/typescripticon.png',
  //   tecIcon3: '/tailwindcssLogo.png',
  // },
  // {
  //   name: 'App Helper',
  //   description: 'A tickering platform for technical support',
  //   site: '',
  //   src: '/144203-720x1604_AdobeExpress.gif',
  //   darkimage: true,
  //   siteIcon: '',

  //   active: false,
  //   tecDescription: 'React-Native, native-base, MongoDB, firestore',
  //   tecIcon1: '/reacticon.png',
  //   tecIcon2: '/typescripticon.png',
  //   tecIcon3: '/tailwindcssLogo.png',
  // },
]

const MyCarousel = ({ projectType = 'main' }) => {
  const [inactive, setInactive] = useState(false)
  let projects: Project[] = []

  if (projectType === 'main') {
    projects = mainProjects
  } else if (projectType === 'second') {
    projects = secondProjects
  } else if (projectType === 'old') {
    projects = oldProjects
  } else if (projectType === 'mobile') {
    projects = mobileProjects
  }
  const handleClick = (props: any) => {
    if (projects[props].active) {
      window.open(projects[props].site, '_blank')
    } else {
      setInactive(!inactive)
    }
  }

  return (
    <div className="max-w-lg">
      <Carousel
        autoPlay
        infiniteLoop
        onClickItem={handleClick}
        onChange={() => setInactive(false)}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        className="carousel-container"
      >
        {projects.map((project, index) => {
          let inactiveLabelColor = project.darkimage
            ? 'text-red-800'
            : 'text-black'
          return (
            <div className="items-center justify-center" key={`index${index}`}>
              <Image
                src={project.src}
                alt={`Image ${index}`}
                width={300}
                height={300}
              />
              {inactive && (
                <div className="absolute inset-0 flex animate-pulse items-center justify-center opacity-0 transition-opacity delay-500 duration-300">
                  <div className="flex items-center justify-center">
                    <AlertOctagon
                      size={200}
                      className={`flex ${inactiveLabelColor}`}
                    />
                    <p className={`${inactiveLabelColor} text-lg font-bold `}>
                      Deployment offline :/
                    </p>
                  </div>
                </div>
              )}
              <p className="legend absolute w-full overflow-hidden text-ellipsis text-center">
                {project.description} using {project.tecDescription}
              </p>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

const MyMobileCarousel = () => {
  const [inactive, setInactive] = useState(false)

  const handleClick = (props: any) => {
    if (mobileProjects[props].active) {
      window.open(mobileProjects[props].site, '_blank')
    } else {
      setInactive(!inactive)
    }
  }

  return (
    <div className="h-1/4">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        onClickItem={handleClick}
        onChange={() => setInactive(false)}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        className="carousel-container"
      >
        {mobileProjects.map((project, index) => {
          let inactiveLabelColor = project.darkimage
            ? 'text-red-800'
            : 'text-black'
          return (
            <div className="items-center justify-center" key={`index${index}`}>
              <Image
                src={project.src}
                alt={`Image ${index}`}
                width={300}
                height={300}
              />
              {inactive && (
                <div className="absolute inset-0 flex animate-pulse items-center justify-center opacity-0 transition-opacity delay-500 duration-300">
                  <div className="flex items-center justify-center">
                    <AlertOctagon
                      size={200}
                      className={`flex ${inactiveLabelColor}`}
                    />
                    <p className={`${inactiveLabelColor} text-lg font-bold `}>
                      Deployment offline :/
                    </p>
                  </div>
                </div>
              )}
              <p className="legend absolute w-full overflow-hidden text-ellipsis text-center">
                {project.description} using {project.tecDescription}
              </p>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export { MyCarousel, MyMobileCarousel }
