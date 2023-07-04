import { useRef, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Inline from 'yet-another-react-lightbox/plugins/inline'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import Image from 'next/image'
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
} from 'yet-another-react-lightbox'
import { AlertOctagon } from 'react-feather'

function isNextJsImage(slide: any) {
  return (
    isImageSlide(slide) &&
    typeof slide.width === 'number' &&
    typeof slide.height === 'number'
  )
}

function NextJsImage({ slide, rect }: any) {
  console.log('slide:', slide) // Check if the slide object is passed correctly

  const { imageFit } = useLightboxProps().carousel
  const cover = isImageSlide(slide.src) && isImageFitCover(slide.src, imageFit)

  if (!isNextJsImage(slide.src)) return undefined

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slide.src.height) * slide.src.width)
      )
    : rect.width

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / slide.src.width) * slide.src.height)
      )
    : rect.height

  return (
    <div className="" style={{ width, height }}>
      <Image
        fill
        alt=""
        src={slide.src}
        loading="eager"
        draggable={false}
        placeholder={slide.src.blurDataURL ? 'blur' : undefined}
        style={{ objectFit: cover ? 'cover' : 'contain' }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
      <p className="w-full overflow-hidden text-ellipsis text-center text-black">
        {slide.description} using {slide.tecDescription}
      </p>
      <br />
    </div>
  )
}

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

const allProjects = [
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
    src: '/webwidget_gif2.gif',
    darkimage: true,
    siteIcon: '/webwidgetIcon.png',

    active: false,
    tecDescription: 'Vite, Typescript, Tailwindcss',
    tecIcon1: '/vitelogo.svg',
    tecIcon2: '/typescripticon.png',
    tecIcon3: '/tailwindcssLogo.png',
  },
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

const CarouselLight = () => {
  const [open, setOpen] = useState(true)
  const [inactive, setInactive] = useState(false)
  const [showToggle, setShowToggle] = useState(true)
  const [descriptionMaxLines, setDescriptionMaxLines] = useState(3)
  const [descriptionTextAlign, setDescriptionTextAlign] = useState<
    'start' | 'end' | 'center'
  >('start')
  return (
    <div className="aspect-video w-full sm:w-3/5">
      {inactive && (
        <div className="absolute inset-0 z-10 flex animate-pulse items-center justify-center border-2 border-red-700 opacity-0 transition-opacity delay-500 duration-300">
          <div className="flex items-center justify-center">
            <AlertOctagon size={200} className={`flex text-red-800`} />
            <p className={`text-lg font-bold text-red-800 `}>
              Deployment offline :/
            </p>
          </div>
        </div>
      )}
      <Lightbox
        open={open}
        captions={{ showToggle, descriptionTextAlign, descriptionMaxLines }}
        slideshow={{ autoplay: true, delay: 4000 }}
        plugins={[Inline, Captions, Slideshow]}
        carousel={{ preload: 3 }}
        on={{
          click: (elemnt) => {
            if (!allProjects[elemnt.index].active) {
              return
            } else {
              window.open(allProjects[elemnt.index].site, '_blank')
            }
          },
          view: () => {
            setInactive(false)
            console.log('view')
          },
        }}
        close={() => setOpen(false)}
        slides={allProjects.map((project) => {
          return {
            ...project,
            src: project.src,
            title: project.name,
            description: project.description,
          }
        })}
        // render={{ slide: NextJsImage }}
      />
    </div>
  )
}

export { CarouselLight }
