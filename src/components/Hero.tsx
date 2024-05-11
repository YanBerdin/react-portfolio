import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline text-justify">
            Welcome{" "}
              <img
                src="/assets/waving-hand.webp"
                alt="waving hand"
                className="w-14 h-14 inline transform rotate-15 animate-waving ease-linear relative top-[-10px]"
                srcSet="./src/assets/waving-hand.webp 1x, /assets/waving-hand.webp 2x"
              />
              <br />
              I'm{" "}
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Yan
            </span>{" "}
          </h1>{" "}
          <br />
          {" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Frontend
            </span>{" "}
            Developer
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          I 💖 creating elegant and intuitive solutions. Explore my portfolio to discover my projects and skills in web development.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Contact</Button>
          <a
            rel="noreferrer noopener"
            href="https://github.com/YanBerdin"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            My Github
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
