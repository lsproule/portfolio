import { Footer } from "~/components";

export default function nvim() {
  return (
    <main class="text-white m-0">
      <div class="py-20 px-4 md:px-20 lg:px-40">
        <img src="/nvim.png" alt="nvim" />
        <div class="text-3xl my-5">
          About
        </div>
        <div>
          One day someone told me about code server, and I thought it was really cool. I liked the idea of an IDE being embeded into the browser.
        </div>
        <div class="my-4">
          So I built a docker container, setup a server, and I used file descriptors to embed the neovim runtime into the container.
        </div>
        <div class="my-4">
          I built a simple UI with javascript and python, and I used websockets to communicate with the server.
        </div>
        <div class="my-4">
          Then I had an idea for creating a resume website, built in neovim, embedded into the browser.
        </div>
        <div>
          Overall, it was a fun project. I don't know that it has any practical use, but it was a fun way to practice with file descriptors and websockets.
        </div>
        <div class="my-5">
          If you'd like to see the code, it's on my github. 
        </div>
        <div class="flex justify-center">
          <a class="text-green-500 my-20 font-bold" href="https://github.com/lsproule/neovim" >Github</a>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
