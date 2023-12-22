import { Footer } from "~/components";
import "./styles/frate.css";
export default function Frate() {
  return (
    <main class="text-white mt-4">
      <div class="parallax overflow-y-hidden z-0 max-h-screen">
        <div class="flex justify-center">
          <img src="/frate-containers.webp" class="parrallax-bg blur-sm brightness-50 lg:aspect-square -z-10 lg:hidden max-h-screen w-full object-cover" />
          <img src="/frate-containers-wide.webp" class="parrallax-bg blur-sm brightness-50 lg:aspect-square -z-10 hidden lg:block max-h-screen w-full object-cover" />
        </div>
        <div class="h-auto para-header absolute top-56 left-1/2 right-1/2 text-white  text-6xl">
          <div class="flex justify-center">
            <div class=" font-semibold  lg:font-bold  rounded-lg p-2">
              Frate
            </div>
          </div>
        </div>
        <img src="/fratelogo.svg" class="w-36 para-logo text-white mt-20 mx-auto" />
        <div class="text-2xl text-white para-desc flex items-center justify-center">
          <div class="rounded-lg mt-20 md:mt-0 text-center p-2">
            A modern C++ package manager inspired heavily by cargo
          </div>
        </div>
      </div>
      <div class="px-4 z-10 pt-20 bg-neutral-800 mb-20 h-auto">
        <div class="md:text-center">
          Frate is a project I have been working on to make c++ package management as easy
          as it is in other languages. It is heavily inspired by cargo, the rust package manager.
        </div>
        <div class="md:text-center my-4">
          <div class="my-5 font-bold">Timeline</div>
          Frate is still in early development, but it has nearly 100 stars on github and is being used by some developers to simplfy their
          workflow.
        </div>

        <div>
          <div class="my-5 font-bold">Features</div>
          Frate is built on top of cmake with the philosophy that it should be as easy as possible to integrate into existing projects.
          We accomplish this by having a powerful <span class="font-bold">templating system</span> that allows you to write your own callbacks in lua.
          This allows us to do things like automatically setup the cmake build system, manage dependencies, and even run tests.
        </div>
        <div>
          <ul class="list-disc my-4 list-inside">
            <li>dependency management</li>
            <li>automatic compilation</li>
            <li>automatic testing</li>
            <li>cross platform compilation</li>
            <li>automatic packaging</li>
          </ul>
        </div>
        <div class="flex justify-center">
          <a class="text-green-500 my-20 font-bold" href="https://docs.frate.dev" >Check out the Docs</a>
        </div>
      </div>
      <Footer></Footer>

    </main>
  );
}
