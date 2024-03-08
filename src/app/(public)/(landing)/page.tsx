import logoEmblem from '@/assets/icons/Momentum_Logo.png';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

// * Page: LandingPage
export default function LandingPage() {
  // * Render
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-slate-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          />
        </svg>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            {/* <Image
              className="h-16 w-auto rounded-sm lg:h-20 lg:w-auto lg:rounded-md"
              src={logoEmblem.src}
              alt="Momentum 30"
              width={40}
              height={40}
              priority
            /> */}
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-cyan-600/10 px-3 py-1 text-sm font-semibold leading-6 text-cyan-600 ring-1 ring-inset ring-cyan-600/10">
                  Try it Today
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-slate-600">
                  <span>Change Was Never So Simple</span>
                  <ChevronRightIcon
                    className="h-5 w-5 text-slate-400"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              <span className="text-cyan-500 underline">Finally</span>, a better
              way to <span className="italic">ease</span> into exercise.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Momentum 30 is a simple, effective, and fun way to ease into
              exercise. It&apos;s a 30-day program that&apos;s designed to help
              you form healthy habits and slowly increase your activity level.
              Anyone can do it, no matter your age or fitness level.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                Start your journey
              </a>

              <a
                href="#"
                className="text-sm font-semibold leading-6 text-slate-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  // src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                  src={logoEmblem.src}
                  alt="App screenshot"
                  // width={2432}
                  // height={1442}
                  width={608}
                  height={361}
                  // className="w-[76rem] rounded-md shadow-2xl ring-1 ring-slate-900/10"
                  className="w-[40rem] rounded-md shadow-2xl ring-1 ring-slate-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
