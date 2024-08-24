import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 flex items-center">
            <div className="grid w-4/6 px-6">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The ultimate starter for building modern web apps
                  </h1>
                  <section className="my-12">
                    <h2 className="text-3xl font-bold mb-6">
                      Why Choose Our Starter?
                    </h2>
                    <ul className="list-disc list-inside space-y-4">
                      <li>
                        <strong>Next.js</strong>: Leverage the power of Next.js
                        for server-side rendering, static site generation, and
                        an optimized React experience.
                      </li>
                      <li>
                        <strong>Tailwind CSS</strong>: Style your components
                        quickly with a utility-first CSS framework that promotes
                        design consistency and rapid development.
                      </li>
                      <li>
                        <strong>TypeScript</strong>: Ensure type safety and
                        robust code with TypeScript, reducing errors and
                        improving code quality.
                      </li>
                      <li>
                        <strong>next-intl</strong>: Seamless
                        internationalization support to build globally
                        accessible applications.
                      </li>
                      <li>
                        <strong>Husky</strong>: Implement Git hooks easily to
                        automate tasks like linting and testing before commits,
                        ensuring code quality and consistency.
                      </li>
                      <li>
                        <strong>ESLint & Prettier</strong>: Keep your code clean
                        and consistent with integrated linting and formatting
                        tools.
                      </li>
                      <li>
                        <strong>Jest & Testing Library</strong>: Write reliable
                        and maintainable tests to ensure your application works
                        as expected.
                      </li>
                      <li>
                        <strong>Clean Architecture</strong>: Organize your
                        project following clean architecture principles to
                        ensure scalability, maintainability, and separation of
                        concerns.
                      </li>
                      <li>
                        <strong>Commitlint</strong>: Enforce commit message
                        conventions to maintain a consistent and clear commit
                        history.
                      </li>
                      <li>
                        <strong>Storybook</strong>: Develop UI components in
                        isolation with Storybook, making it easier to design and
                        document your UI elements.
                      </li>
                      <li>
                        <strong>Webpack & Babel</strong>: Customize your build
                        process with powerful tools like Webpack and Babel for
                        optimized asset bundling and transpilation.
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="https://github.com/anbrela/ultimate-next14-starter-i18n-tailwind-typescript-shadcn"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Repository
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-2/6">
              <Image
                src="/landing.png"
                alt="landing"
                className="object-cover h-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
