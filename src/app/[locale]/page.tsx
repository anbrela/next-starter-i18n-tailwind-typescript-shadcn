import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("");

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 flex items-center">
            <div className="grid w-4/6 px-6">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t("title")}
                  </h1>
                  <section className="my-12">
                    <h2 className="text-3xl font-bold mb-6">
                      {t("why_choose")}
                    </h2>
                    <ul className="list-disc list-inside space-y-4">
                      <li>
                        <strong>{t("nextjs")}</strong>
                      </li>
                      <li>
                        <strong>{t("tailwind")}</strong>
                      </li>
                      <li>
                        <strong>{t("typescript")}</strong>
                      </li>
                      <li>
                        <strong>{t("shadcn")}</strong>
                      </li>
                      <li>
                        <strong>{t("next_intl")}</strong>
                      </li>
                      <li>
                        <strong>{t("husky")}</strong>
                      </li>
                      <li>
                        <strong>{t("eslint")}</strong>
                      </li>
                      <li>
                        <strong>{t("jest")}</strong>
                      </li>
                      <li>
                        <strong>{t("clean_architecture")}</strong>
                      </li>
                      <li>
                        <strong>{t("commitlint")}</strong>
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
                    {t("view_repository")}
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
            {t("terms_of_service")}
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            {t("privacy")}
          </Link>
        </nav>
      </footer>
    </div>
  );
}
