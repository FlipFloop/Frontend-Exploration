import { Component, createEffect, Suspense } from "solid-js";
import { useRouteData } from "solid-app-router";

const About = () => {
  const name = useRouteData<() => string>();

  createEffect(() => {
    console.log(name());
  });

  return (
    <section class="bg-pink-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">About</h1>

      <p class="mt-4">A page all about this website.</p>

      <p>
        <span>We love</span>
        <Suspense
          fallback={
            <div class="spinner-border text-info" aria-role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          }
        >
          <span>&nbsp;{name()}</span>
        </Suspense>
      </p>
    </section>
  );
};

export default About;
