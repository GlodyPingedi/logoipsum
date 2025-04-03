import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <section className="flex flex-wrap sm:flex-wrap-reverse justify-center sm:justify-between items-center pt-25 pb-15 sm:py-25 sm:max-w-[80%] sm:mx-auto space-y-6">
        <div className="sm:max-w-2/3 sm:pr-10">
          <h5 className="text-[35px] sm:text-[65px]  sm:text-start px-2 sm:px-0 font-[Goldman] mb-4 sm:mb-8 font-bold tracking-tight text-[#394149]  animate-fade-right animate-duration-[2000ms]">
            Nous vous aidons à agrandir votre entreprise !
          </h5>
          <p className="font-normal text-justify px-2 sm:px-0 mb-4 text-gray-700  animate-fade animate-duration-[2000ms] animate-delay-1000">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <Button className="bg-[#394149] hover:bg-[#394149]/85 dark:bg-[#394149] dark:hover:bg-[#394149]/85 mx-2 sm:mx-0 px-6 animate-jump animate-duration-[2000ms] animate-delay-[2000ms]">
            COMMENCER !
          </Button>
        </div>
        <div className="relative mt-8 sm:mt-0 sm:max-w-1/3 bg-[#394149] outline-1 outline-offset-10 outline-solid w-[250px] sm:w-[350px] h-[400px] sm:h-[550px] rounded-full flex justify-center items-center overflow-hidden before:content-[''] before:absolute before:w-[230px] sm:before:w-[330px] before:h-[380px] sm:before:h-[520px] before:rounded-full before:border before:border-white before:z-0 animate-jump-in animate-duration-[2000ms] animate-delay-1000">
          <Image
            className="w-full h-full object-cover object-center z-10"
            src="/images/fond-femme.png"
            alt="Logo Logo Ipsum"
            width={754}
            height={654}
          />
        </div>
      </section>

      <section className="bg-[#394149] flex overflow-hidden  mb-6">
        <div className="relative z-10  flex bg-[#394149] items-center">
          <h5 className="font-bold  text-white text-[10px] sm:text-2xl py-4 sm:py-0 py-auto whitespace-nowrap px-2 sm:px-4">
            Cru par +200 entreprises
          </h5>
        </div>
        <div className="flex items-center justify-around min-w-full animate-marquee sm:py-6 space-x-10">
          <Image className="w-20 sm:w-32" src="/images/logoispum.svg" alt="" width={150} height={39.5} />
          <Image className="w-14 sm:w-24" src="/images/courbes.svg" alt="" width={80} height={39.5} />
          <Image className="w-20 sm:w-32" src="/images/drapLogo.svg" alt="" width={150} height={39.5} />
          <Image className="w-10 sm:w-16" src="/images/logoObjet.svg" alt="" width={65} height={39.5} />
          <Image className="w-14 sm:w-24" src="/images/logoFm.svg" alt="" width={100} height={39.5} />
        </div>
      </section>

      <section className="px-2 sm:px-0 py-6 mb-4 sm:mb-8 flex flex-col items-center">
        <div className="flex flex-wrap sm:flex-wrap-reverse justify-between items-center sm:text-left sm:max-w-[80%] sm:mx-auto w-full text-justify space-y-4">
          <h5 className="text-[22px] sm:text-[28px] max-w-sm font-[Goldman] font-bold tracking-tight text-[#394149]">
            Ramener votre marketing en ligne à un autre niveau !
          </h5>
          <div>
            <Button className="bg-[#394149] hover:bg-[#394149]/85 dark:bg-[#394149] dark:hover:bg-[#394149]/85 px-6">EN SAVOIR PLUS !</Button>
          </div>
        </div>

        <div className="mt-10 sm:mt-18 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:max-w-[80%] sm:mx-auto w-full mx-auto">
          <div className="bg-[#ffff]/50 p-6 rounded-xl outline outline-offset-0 flex flex-col justify-between">
            <h3 className="text-[38px]  mb-8">Planification directe</h3>
            <p className="text-sm text-justify  text-gray-500 mb-20">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex justify-end">
              <Button className="mt-4 bg-[#394149] hover:bg-[#394149]/85 dark:bg-[#394149] dark:hover:bg-[#394149]/85 rounded-full w-16 p-4 flex items-center justify-center">
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

          <div className="bg-[#ffff]/50 p-6 rounded-xl outline outline-offset-0 flex flex-col justify-between">
            <h3 className="text-[38px] mb-8">Grille de magasin</h3>
            <p className="text-sm text-justify  text-gray-500 mb-20">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex justify-end">
              <Button className="mt-4 bg-[#394149] hover:bg-[#394149]/85 dark:bg-[#394149] dark:hover:bg-[#394149]/85 rounded-full w-16 p-4 flex items-center justify-center">
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

          <div className="bg-[#ffff]/50 p-6 rounded-xl outline outline-offset-0 flex flex-col justify-between">
            <h3 className="text-[38px] mb-8">Rappels</h3>
            <p className="text-sm text-justify  text-gray-500 mb-20">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex justify-end">
              <Button className="mt-4 bg-[#394149] hover:bg-[#394149]/85 dark:bg-[#394149] dark:hover:bg-[#394149]/85 rounded-full w-16 p-4 flex items-center justify-center">
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

      <section className="bg-[#394149] flex flex-wrap sm:flex-wrap-reverse justify-center sm:justify-between items-center px-2 sm:px-0 py-10 sm:py-20 sm:pl-[10%] sm:pr-[10%] sm:mx-auto">
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
          <h5 className="text-[25px]  sm:text-[35px] font-[Goldman] mb-4 sm:mb-8 font-bold sm:tracking-tight text-justify text-white dark:text-white ">
            Une solution unique pour votre entreprise !
          </h5>
          <p className="font-normal mb-4 text-[#ffffff]/50 text-justify  dark:text-gray-400 animate-fade">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <Button className="bg-white hover:bg-gray-300 dark:bg-white dark:hover:bg-gray-300  text-[#191b1d] px-6">
            EN SAVOIR PLUS
          </Button>
        </div>
      </section>

      <section className="flex  justify-center px-2 sm:px-0 py-10 sm:py-16 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:max-w-[80%] sm:mx-auto w-full">
          <div className="bg-[#ffff]/50 p-6 rounded-xl outline outline-offset-0  flex flex-col justify-between">
            <h3 className="text-[38px] mb-8">Réduire vos heures</h3>
            <p className="text-sm text-justify  text-gray-500 mb-20">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex justify-end">
              <Button className="mt-4 bg-[#394149] hover:bg-[#394149]/85 dark:bg-[#394149] dark:hover:bg-[#394149]/85 rounded-full w-16 p-4 flex items-center justify-center">
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

          <div className="row-span-2 bg-transparent rounded-xl overflow-hidden flex flex-col space-y-4 order-1 sm:order-none ">
            <div className="h-2/3 rounded-xl ">
              <Image
                src="/images/fondHomme.svg"
                alt="Coaching"
                width={500}
                height={500}
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="h-1/3 rounded-xl  bg-gray-900 text-white p-6 flex flex-col items-center justify-center">
              <h3 className="text-[30px]">Réservez une séance de coaching</h3>
              <div className="flex justify-start w-full">
                <Button className="mt-4 bg-[#ffff] hover:bg-gray-300 dark:bg-white dark:hover:bg-gray-300 text-gray-900 rounded-full w-16 p-4 flex items-center justify-center">
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

          <div className="bg-[#ffff]/50 p-6 rounded-xl outline outline-offset-0 className flex flex-col justify-between">
            <h3 className="text-[38px] mb-8">Réduire vos heures</h3>
            <p className="text-sm text-justify  text-gray-500 mb-20">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex justify-end">
              <Button className="mt-4 bg-[#394149] hover:bg-[#394149]/85 dark:bg-[#394149] dark:hover:bg-[#394149]/85 rounded-full w-16 p-4 flex items-center justify-center">
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
          <div className="bg-[#ffff]/50 p-6 rounded-xl outline outline-offset-0 className flex flex-col justify-between">
            <h3 className="text-[38px] mb-8">Réduire vos heures</h3>
            <p className="text-sm text-justify  text-gray-500 mb-20">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex justify-end">
              <Button className="mt-4 bg-[#394149] hover:bg-[#394149]/85 dark:bg-[#394149] dark:hover:bg-[#394149]/85 rounded-full w-16 p-4 flex items-center justify-center">
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
          <div className="bg-[#ffff]/50 p-6 rounded-xl outline outline-offset-0 className flex flex-col justify-between">
            <h3 className="text-[38px] mb-8">Réduire vos heures</h3>
            <p className="text-sm text-justify  text-gray-500 mb-20">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="flex justify-end">
              <Button className="mt-4 bg-[#394149] hover:bg-[#394149]/85 dark:bg-[#394149] dark:hover:bg-[#394149]/85 rounded-full w-16 p-4 flex items-center justify-center">
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

      <section className="bg-[#394149] mx-2 sm:mx-10 rounded-[45px]">
        <div className=" flex justify-between items-center py-8 px-6 sm:px-0 mb-6 sm:max-w-[85%] sm:mx-auto">
          <Image
            src={'/images/logo-5.svg'}
            alt=""
            width={140}
            height={40}
            className="sm:w-[140px] sm:h-[40px] w-[120px] h-[30px]"
          />
          <Image
            src={'/images/Group.svg'}
            alt=""
            width={40}
            height={40}
            className="sm:w-[40px] sm:h-[40px] w-[25px] h-[25px]"
          />

        </div>

        <div className="flex justify-center items-center pb-8">
          <div className=" max-w-xl">
            <h5 className="text-[30px] sm:text-[45px] font-[Goldman] mb-8 font-bold tracking-tight text-white text-center dark:text-white ">
              Parlons et discutons ensemble !
            </h5>
            <p className="font-normal text-justify sm:text-center px-8 sm:px-0 mb-12 text-[#ffffff]/50 dark:text-gray-400 animate-fade">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <div className="flex justify-center">
              <div className="flex items-center bg-white p-2 rounded-full max-w-sm">
                <div className="flex items-center px-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-[#394149] size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>

                </div>
                <input
                  type="email"
                  placeholder="Votre Adresse mail"
                  className="bg-white flex-1 sm:px-10  text-gray-900 placeholder-gray-500 outline-none"
                />
                <Button className="bg-[#394149] hover:bg-[#394149]/85 dark:bg-[#394149] dark:hover:bg-[#394149]/85 text-white rounded-full w-16 h-10 flex items-center justify-center">
                  <svg className="w-5 h-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap sm:flex-wrap-reverse justify-center sm:justify-between items-center py-6 m-2 sm:m-0 sm:max-w-[80%] sm:mx-auto sm:space-y-4">
        <h5 className="order-1 sm:order-none">
          Copyright ©, Tous droits réservés
        </h5>
        <div className="flex py-8 sm:py-0 space-x-4 items-center">
          <Link href="" >Instagram</Link>
          <Link href="">Twitter</Link>
          <Link href="">LinkedIn</Link>
          <Link href="">Meta</Link>
        </div>
      </section>
    </div>
  );
}
