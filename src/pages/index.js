import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TowerCard from "../components/TowerCard";
import EventCard from "../components/EventCard";
import logo from "../images/logo-black.png"

// import SliderBg from "../images/slider-bg.jpg"

const IndexPage = () => (
  <Layout headerType="transparent">
    <SEO title="RCCG Tower of David" />
    <section className="bg-slider-1 h-screen w-screen -mt-16 flex flex-col" >
      <div className="flex-1 flex justify-center items-center">
        <div className="text-white text-center z-10">
          <div className="mb-4">
            <p className="text-3xl">Welcome to</p>
            <h1 className="font-bold text-6xl uppercase ">Tower of David</h1>
          </div>
          <a className="bg-white hover:bg-black text-black hover:text-white font-bold py-3 px-12 ">New Here?</a>

        </div>
      </div>

      {/* slider trigger and latest sermon  */}
      <div className="z-10 bg-white h-20 w-full flex">
        <div className="flex-1">
          {/* whtie */}
        </div>
        <div className="flex-1 bg-black flex items-center content-center text-white flex justify-between px-12   py-2">
          <div>
            <h2 className="text-sm font-bold uppercase">Latest Simon</h2>
            <p className="font-thin">My Maker is My Mirror. - Pst Kayode Ladele. May 5 2019</p>
          </div>
          <div>
            <a className="text-sm text-white hover:text-black hover:bg-white font-medium border border-white px-3 py-1 cursor-pointer mr-2" >Listen</a>
            <a className="text-sm text-white hover:text-black hover:bg-white font-medium border border-white px-3 py-1 cursor-pointer" >Watch Now</a>

          </div>

          {/* black */}
        </div>

      </div>
    </section>
    <section className="container m-auto flex flex-col items-center">
      <p className="text-3xl text-center mt-32 mb-32">We are Uncommon People, Walking in Uncommon Greatness,<br /> Manifesting Uncommon Exploits!</p>
    </section>
    <section className="container m-auto flex flex-col items-center mb-20">

      <div className="w-full flex h-xl text-white">
        <div className="bg-gray-400 w-2/4 rounded ml-2 p-8 flex flex-col justify-between">
          {/* First Box */}
          <div>
            <h2>TOD Connect</h2>
            <p>Explore our departments, VG-Groups, and Clusters <br />
              - see where you might plug in and grow!
            </p>
          </div>
          <div className="flex justify-end">
            <a className="uppercase font-bold">Get Involved</a>
          </div>

        </div>
        <div className="bg-gray-500 w-1/4 rounded ml-2 p-8 flex flex-col justify-between">
          {/* Second Box */}
          <div>
            <h2>TOD Connect</h2>
            <p>Explore our departments, VG-Groups, and Clusters <br />
              - see where you might plug in and grow!
            </p>
          </div>
          <div className="flex justify-end">
            <a className="uppercase font-bold">Get Involved</a>
          </div>

        </div>

        <div className="w-1/4 rounded ml-2 flex flex-col">
          <div className="p-8 bg-gray-600 mb-2 rounded flex-1 flex flex-col justify-between">
            {/* third box */}
            <div>
              <h2>TOD Connect</h2>
              <p>Explore our departments, VG-Groups, and Clusters <br />
                - see where you might plug in and grow!
            </p>
            </div>
            <div className="flex justify-end">
              <a className="uppercase font-bold">Get Involved</a>
            </div>

          </div>
          <div className="p-8 bg-gray-600 rounded flex-1 flex flex-col justify-between">

            {/* fourth box  */}
            <div>
              <h2>TOD Connect</h2>
              <p>Explore our departments, VG-Groups, and Clusters <br />
                - see where you might plug in and grow!
            </p>
            </div>
            <div className="flex justify-end">
              <a className="uppercase font-bold">Get Involved</a>
            </div>
          </div>
        </div>
      </div>


    </section>

    <section className="section-background-gray">
      <div className=" container m-auto">
        <div className="mt-4 pt-20 flex justify-between items-center">
          {/* left Headings */}
          <h2 className="font-medium font-medium text-xl leading-tight">Latest from the <span className="block text-5xl font-black leading-tight">Tower</span></h2>
          {/* post categories */}
          <div>
            <ul className="flex">
              <li className="rounded-full bg-white hover:bg-gray-300 hover:text-white font-bold px-6 py-2 mr-2"><a>King & 1</a></li>
              <li className="rounded-full bg-white hover:bg-gray-300 hover:text-white font-bold px-6 py-2 mr-2"><a>Worship</a></li>
              <li className="rounded-full bg-white hover:bg-gray-300 hover:text-white font-bold px-6 py-2 mr-2"><a>Soteria</a></li>
              <li className="rounded-full bg-white hover:bg-gray-300 hover:text-white font-bold px-6 py-2 mr-2"><a>Sermon</a></li>
              <li className="rounded-full bg-white hover:bg-gray-300 hover:text-white font-bold px-6 py-2 mr-2"><a>Pastor K</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full flex mb-48 mt-10 mr-10">

          <TowerCard />
          <TowerCard />
          <TowerCard />
          <TowerCard />

        </div>
      </div>
    </section>

    {/* song of the week */}
    <section className="h-md">
      <div className=" container m-auto">
        <div className="mt-4 pt-20 flex justify-between items-center">

          <div>
            <h2>Song of the Week </h2>
            <p className="text-3xl">What a Beautiful Name</p>
            <p className="text-right font-bold text-orange-400">Hillsong</p>
          </div>

          <div className="bg-black">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nQWFzMvCfLE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* video here  */}
          </div>
        </div>
      </div>
    </section>

    <section className="section-background-gray straight ">
      <div className=" container m-auto mb-64">
        <div className="mt-4 pt-20 flex justify-between items-center">
          {/* left Headings */}
          <h2 className="font-medium font-medium text-xl leading-tight tracking-half text-center">Upcoming<span className="block text-5xl font-black leading-tight tracking-wider">Events</span></h2>
          {/* post categories */}
          <div>
            <a>View All</a>
          </div>
        </div>
        <div className="w-full flex mb-48 mt-10 mr-10">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </section>
{/* newsletter */}
    <section className="container m-auto">
      <div className="flex flex-col items-center pt-20 pb-32">
        <p className="text-3xl text-center tracking-widest pb-2">OUR NEWSLETTER</p>
        <p className="text-3xl text-center font-black">GET SCRIPTURES AND<br/> UPDATES IN YOUR INBOX <span className="block font-medium">"AS E DEY HOT"</span></p>
        <p className="text-center text-sm">A nightly brief of new resources, and peeks behind the scenes from our editorial team</p>
        <form className="flex h-12 w-1/3 mt-4">
          <input className="flex-1 h-full bg-white shadow-lg p-2" placeholder="Email" /> <button className="bg-blue-200 py-2 px-6  shadow-lg">SUBSCRIBE</button>
        </form>
      </div>
    </section>

    {/* app showcase */}

    <section className="section-background-gray straight ">
      <div className=" container m-auto mb-32">
        <div className="h-64 mt-4 pt-20 flex justify-between items-center">
        <div className="w-1/3 h-full">
          <h4 className="text-xl">
            You don't have to say goodbye anymore
          </h4>
          <p className="pb-4">Take TOD App With you for instant Inspiration</p>
            <a className="bg-orange-300 py-2 px-6  shadow-lg text-white font-bold">SUBSCRIBE</a>
        </div>
        <div>
            <Image />
        </div>
      </div>
    </div>
    </section>

  </Layout>
)

export default IndexPage
