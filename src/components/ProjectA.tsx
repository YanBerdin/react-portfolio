//import React from "react";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
// import { buttonVariants } from "./ui/button";
import { Badge } from "@/components/ui/badge";


const featureList: string[] = [
    "Javascript",
    "React",
    "Vite",
    "Redux",
    "Semantic.UI",
    "Axios",
];

export const ProjectA = () => {
    return (

        <section
            id="DiscO'tech"
            className="bg-muted/90 py-16 my-24 sm:my-32"
        >
            <section
                id="features"
                className="container py-1 sm:py-1 space-y-4"
            >
                <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
                    Disc
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                        O'
                    </span>
                    tech
                </h2>

                <div className="flex flex-wrap md:justify-center gap-4">
                    {featureList.map((feature: string) => (
                        <div key={feature}>
                            <Badge
                                variant="secondary"
                                className="text-sm mb-4"
                            >
                                {feature}
                            </Badge>
                        </div>
                    ))}
                </div>
            </section>
            <div className="container lg:grid lg:grid-cols-2 place-items-center ">
                <div className="lg:col-start-1 p-4 bg-card/40 rounded-2xl mt-4">

                    <p className="text-muted-foreground text-xl mb-8 lg:mb-0">
                        DiscO’tech, a tribute to the O’clock school, is a music referencing application designed in mobile first to respond to music consumption habits in the digital age.
                    </p>
                    <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">The user space is designed to be intuitive and easy to navigate. Users can search for artists or albums, explore different musical genres, create their own playlists, and centralize their music library on a single application.</p>
                    <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0 md:w-[600px]">
                        <span className="bg-gradient-to-r from-[#fde047]  to-[#eed833] text-transparent bg-clip-text">
                            🔒{" "}
                        </span>
                        Protection against XSS (Cross Site Scripting) vulnerabilities
                        <br />
                        <span className="bg-gradient-to-r from-[#fde047]  to-[#eed833] text-transparent bg-clip-text">
                            🔒{" "}
                        </span> Validation of data coming from the user and the server. Same double-validation principle as server-side.
                        <br />
                        <span className="bg-gradient-to-r from-[#fde047]  to-[#eed833] text-transparent bg-clip-text">
                            🔒{" "}
                        </span> Securing forms and data writing methods by synchronization token (random and single-use), whose access is protected by CORS
                        <br />
                        <span className="bg-gradient-to-r from-[#fde047]  to-[#eed833] text-transparent bg-clip-text">
                            🔒{" "}
                        </span>Protection against CSRF (Cross-Site Request Forgery) attacks</p>
                </div>

                <div className="space-y-4 lg:col-start-2 ">
                    <div className="w-full place-content-center mt-3">
                        <img
                            src="../src/assets/github-explorer.jpeg"
                            className="w-[700px] md:w-[700px] lg:w-[600px] object-contain rounded-md ml-8  mt-2"
                            alt="github explorer project"
                        />
                    </div>
                    <Button
                        className="w-full md:mr-4 md:w-1/3 ml-8">
                        <a
                            rel="noreferrer noopener"
                            href="https://github.com/YanBerdin"
                            target="_blank"
                            className="flex items-center justify-center w-full h-full"
                        >
                            <GitHubLogoIcon className=" mr-2 w-7 h-5" />
                            Demo
                        </a>
                    </Button>
                    <Button
                        // variant="outline"
                        className="w-full md:mr-4 md:w-1/3 border-input bg-background hover:bg-accent hover:text-accent-foreground mt-10"
                    >
                        <a
                            rel="noreferrer noopener"
                            href="https://github.com/YanBerdin"
                            target="_blank"
                            className="flex items-center justify-center w-full h-full"
                        >
                            <GitHubLogoIcon className=" mr-2 w-7 h-5" />
                            Repo Github
                        </a>
                    </Button>

                </div>
            </div>
        </section>
    );
};
