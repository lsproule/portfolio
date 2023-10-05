// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import { Footer, Navbar } from "./components";
export default function Root() {

  return (
    <Html lang="en">
      <Head>
        <Title>Lucas Sproule</Title>
        <Meta charset="utf-8" />
        <Meta name="description" content="Lucas Sproule's personal website" />
        <Meta name="author" content="Lucas Sproule" />
        <Meta name="theme-color" content="#272727;" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
        <Navbar />
          <ErrorBoundary>


            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
