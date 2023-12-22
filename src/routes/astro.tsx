import { Footer } from "~/components";

export default function astro() {
  return (
    <main class="text-white m-0">
      <div class="py-20 px-4 md:px-20 lg:px-40">
        <img src="/astro.png" alt="astro" />
        <div class="text-3xl font-bold my-5">
          About
        </div>
        <div class="my-4">
          I like to mention this because I am a big fan of open source software, and this was my first contribution.
        </div>
        <div class="my-4">
          There was a bug in the lspconfig plugin for neovim, and I was able to fix it for better clangd support.
        </div>
        <div class="my-4">
          I also love neovim, so it felt good to contribute to the community.
        </div>
        <div class="my-4">
          Since Astro was my first distro I used with neovim. I also owe it a lot since when I wrote my own config from scratch. I took heavy inspiration from them.
        </div>
        <div class="my-4">
          I am also a big fan of lua, and I love the way that they use lua to configure neovim.
        </div>
      </div>
      <Footer></Footer>

    </main>
  )
}
