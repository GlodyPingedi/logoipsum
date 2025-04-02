import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <section className="flex justify-around items-center py-30">
        <div className="max-w-sm">
          <h5 className="text-[35px] font-[Goldman] mb-8 font-bold tracking-tight text-gray-900 dark:text-white animate-fade-right animate-duration-[2000ms]">
            Nous vous aidons à agrandir votre entreprise !
          </h5>
          <p className="font-normal mb-4 text-gray-700 dark:text-gray-400 animate-fade animate-duration-[2000ms] animate-delay-1000">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <Button className="bg-[#394149] px-6 animate-jump animate-duration-[2000ms] animate-delay-[2000ms]">
            COMMENCER !
          </Button>
        </div>
        <div className="relative max-w-sm bg-[#394149] outline outline-1 outline-offset-10 outline-solid w-[270px] h-[450px] rounded-full flex justify-center items-center overflow-hidden before:content-[''] before:absolute before:w-[250px] before:h-[420px] before:rounded-full before:border before:border-white before:z-0 animate-jump-in animate-duration-[2000ms] animate-delay-1000">
          <Image
            className="w-full h-full object-cover object-center z-10"
            src="/images/fond-femme.png"
            alt="Logo Logo Ipsum"
            width={754}
            height={654}
          />
        </div>
      </section>

      <section className="bg-[#394149] flex justify-around items-center py-6 mb-6">
        <h5 className=" font-bold tracking-tight text-white dark:text-white">
          Cru par +200 entreprises
        </h5>
        <Image
          src={'/images/logoispum.svg'}
          alt="e"
          width={150}
          height={39.5}
        />
        <Image
          src={'/images/courbes.svg'}
          alt="e"
          width={80}
          height={39.5}
        />
        <Image
          src={'/images/drapLogo.svg'}
          alt="e"
          width={150}
          height={39.5}
        />
        <Image
          src={'/images/logoObjet.svg'}
          alt="e"
          width={65}
          height={39.5}
        />
        <Image
          src={'/images/logoFm.svg'}
          alt="e"
          width={100}
          height={39.5}
        />
      </section>

      <section className="px-16 py-6 mb-8 flex flex-col items-center">
        <div className="flex justify-between items-center text-center md:text-left max-w-4xl w-full">
          <h5 className="text-[28px] max-w-sm font-[Goldman] font-bold tracking-tight text-[#394149] dark:text-white">
            Ramener votre marketing en ligne à un autre niveau !
          </h5>
          <div>
            <Button className="bg-[#394149] px-6">EN SAVOIR PLUS !</Button>
          </div>
        </div>

        <div className="mt-18 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-8">Planification directe</h3>
            <p className="text-sm text-gray-500 mb-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex justify-end">
              <Button className="mt-4 bg-[#394149] rounded-2xl w-16 p-4 flex items-center justify-center">
                <svg className="h-4 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
            <h3 className="text-xl font-semibold">Grille de magasin</h3>
            <p className="text-sm text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex justify-end">
              <Button className="mt-4 bg-[#394149] rounded-2xl w-16 p-4 flex items-center justify-center">
                <svg className="h-4 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
            <h3 className="text-xl font-semibold">Rappels</h3>
            <p className="text-sm text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex justify-end">
              <Button className="mt-4 bg-[#394149] rounded-2xl w-16 p-4 flex items-center justify-center">
                <svg className="h-4 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#394149] flex justify-center items-center gap-14 py-20">
        <div className="relative w-[410px] h-[450px] rounded-4xl  flex justify-center items-center overflow-hidden">
          <Image
            className="w-full h-full object-cover object-left z-10"
            src="/images/fille2.svg"
            alt="Logo Logo Ipsum"
            width={650}
            height={654}
          />
        </div>
        <div className=" max-w-xl">
          <h5 className="text-[35px] font-[Goldman] mb-8 font-bold tracking-tight text-white dark:text-white ">
            Une solution unique pour votre entreprise !
          </h5>
          <p className="font-normal mb-4 text-[#ffffff]/50 dark:text-gray-400 animate-fade">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <Button className="bg-white text-[#191b1d] px-6">
            EN SAVOIR PLUS
          </Button>
        </div>
      </section>

      <section className="flex justify-center px-16 py-6 mb-8">
        <div className="grid grid-cols-3 gap-4 max-w-4xl w-full">
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
            <h3 className="text-xl font-semibold">Réduire vos heures</h3>
            <p className="text-sm text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex justify-end">
              <Button className="mt-4 bg-[#394149] rounded-2xl w-16 p-4 flex items-center justify-center">
                <svg className="h-4 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="row-span-2 bg-transparent rounded-xl overflow-hidden flex flex-col space-y-4">
            <div className="h-2/3 rounded-xl shadow-md">
              <Image
                src="/images/fondHomme.svg"
                alt="Coaching"
                width={500}
                height={500}
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="h-1/3 rounded-xl shadow-md bg-gray-900 text-white p-6 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold">Réservez une séance de coaching</h3>
              <div className="flex justify-end w-full">
                <Button className="mt-4 bg-[#ffff] text-gray-900 rounded-2xl w-16 p-4 flex items-center justify-center">
                  <svg className="h-4 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
            <h3 className="text-xl font-semibold">Réduire vos heures</h3>
            <p className="text-sm text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex justify-end">
              <Button className="mt-4 bg-[#394149] rounded-2xl w-16 p-4 flex items-center justify-center">
                <svg className="h-4 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
            <h3 className="text-xl font-semibold">Réduire vos heures</h3>
            <p className="text-sm text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex justify-end">
              <Button className="mt-4 bg-[#394149] rounded-2xl w-16 p-4 flex items-center justify-center">
                <svg className="h-4 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
            <h3 className="text-xl font-semibold">Réduire vos heures</h3>
            <p className="text-sm text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex justify-end">
              <Button className="mt-4 bg-[#394149] rounded-2xl w-16 p-4 flex items-center justify-center">
                <svg className="h-4 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>

      </section>

      <section className="bg-[#394149] mx-10 rounded-[65px]">
        <div className=" flex justify-between items-center py-8 px-18 mb-6">
          <Image
            src={'/images/logo-5.svg'}
            alt="e"
            width={140}
            height={40}
          />
          <Image
            src={'/images/Group.svg'}
            alt="e"
            width={40}
            height={40}
          />
        </div>

        <div className="flex justify-center items-center pb-8">
          <div className=" max-w-xl">
            <h5 className="text-[45px] font-[Goldman] mb-8 font-bold tracking-tight text-white text-center dark:text-white ">
              Parlons et discutons ensemble !
            </h5>
            <p className="font-normal text-center mb-12 text-[#ffffff]/50 dark:text-gray-400 animate-fade">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <div className="flex justify-center">
              <div className="flex items-center bg-white p-2 rounded-full max-w-md">
                <div className="flex items-center px-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#394149] size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>

                </div>
                <input
                  type="email"
                  placeholder="Votre Adresse mail"
                  className="bg-white flex-1 px-10  text-gray-900 placeholder-gray-500 outline-none"
                />
                <Button className="bg-[#394149] text-white rounded-full w-16 h-10 flex items-center justify-center">
                  <svg className="w-5 h-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-around items-center py-6 m-2">
        <h5 className=" text-[#394149]">
        Copyright ©, Tous droits réservés
        </h5>
        <div className="space-x-5">
          <Link href="" className="text-[#394149]">Instagram</Link>
          <Link href="" className="text-[#394149]">Twitter</Link>
          <Link href="" className="text-[#394149]">LinkedIn</Link>
          <Link href="" className="text-[#394149]">Meta</Link>
        </div>
      </section>
    </div>
  );
}
