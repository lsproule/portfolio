import "./styles/frate.css";
export default function Frate() {
  return (
    <main class="text-white mt-4">
      <div class="parallax z-0 max-h-screen">
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
      <div class="px-4 z-10 pt-20 bg-neutral-800 h-screen">
        <div class="text-center">
          Frate is a project I have been working on to make c++ package management as easy
          as it is in other languages. It is heavily inspired by cargo, the rust package manager.
        </div>
        <div class="text-center mt-4">
          Frate is still in early development, but it has nearly 100 stars on github and is being used by some developers to simplfy their
          workflow.
        </div>
        <div>
          Frate is built on top of cmake with the philosophy that it should be as easy as possible to integrate into existing projects.
          It has a powerful templating system that allows you to easily create new projects with a single command.
        </div>
        <div>
          <div>some  of the features of frate include:</div>
          <ul class="list-disc list-inside">
            <li>automatic dependency management</li>
            <li>automatic compilation</li>
            <li>automatic testing</li>
            <li>painless cross platform compilation</li>
            <li>automatic packaging</li>
          </ul>
        </div>
        <div class="flex justify-center">
          <a class="text-white" href="https://docs.frate.dev" >check out the docs</a>
        </div>
      </div>

    </main>
  );
}
