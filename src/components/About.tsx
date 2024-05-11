import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                LET ME{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  INTRODUCE{" "}
                </span>
                MYSELF
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                In 2023, I obtained my professional title DWWM* from O’clock, a school specializing in remote training. With 20 years of experience in commerce, including as a retail store manager and e-commerce manager, my passion for the Web naturally led me to development.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                My interest in programming dates back to my youth, influenced by my brother who became an architect. After exploring design and visual creation tools, I decided to take on the challenge and embark on this new adventure.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                Every obstacle encountered has been an opportunity for me to acquire new skills and strengthen my love for programming. The complexity of certain aspects of the training has reinforced my passion and determination to excel in this field. The more I practice, the more I discover the beauty and ingenuity of web development.

                I am eager to continue expanding my knowledge and honing my skills in upcoming projects.
                </p>
                <p className="text-xl text-muted-foreground mt-4">
                * DWWM = Web and Mobile Web Developer
              </p>
            </div>

            {/*<Statistics />*/}
          </div>
        </div>
      </div>
    </section>
  );
};
