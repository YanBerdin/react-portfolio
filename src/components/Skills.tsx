
// import { Badge } from "./ui/badge";
// import { Button } from "./ui/button";
import {
    Card,
    // CardContent,
    //CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
    NO = 0,
    YES = 1,
}

/**
 * Represents the pricing details for a plan.
 */
interface PricingProps {
    /**
     * The title of the plan.
     */
    title: string;
    /**
     * Indicates if the plan is popular or not.
     */
    popular: PopularPlanType;
    /**
     * The price of the plan.
     */
    price: number;
    /**
     * The description of the plan.
     */
    description: string;
    /**
     * The text for the button in the plan.
     */
    buttonText: string;
    /**
     * The list of benefits for the plan.
     */
    benefitList: string[];
}

const pricingList: PricingProps[] = [
    {
        title: "Frontend Development",
        popular: 0,
        price: 0,
        description:
            "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Get Started",
        benefitList: [
            "Mockups and wireframes creation.",
            "Developing dynamic and responsive interfaces.",
            " Proficient in object-oriented programming (OOP).",
            " Skilled in functional and declarative programming.",
            "Advanced knowledge of ES6+.",
            "Skilled in state management libraries (Redux).",
            "Creation, installation, and activation of WordPress themes.",

        ],
    },
    {
        title: "Backend Development",
        popular: 1,
        price: 5,
        description:
            "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Start Free Trial",
        benefitList: [
            "Secure and efficient server-side development.",
            "Database modeling tailored to application requirements.",
            "Building backend infrastructure for web applications.",
            "Database management and development of data access components.",
            " Skilled in Laravel and Express frameworks.",
            "Skilled in Socket.io for real-time features and WebSockets.",
            "Skilled in REST APIs.",
        ],
    },
    {
        title: "Transversal",
        popular: 0,
        price: 40,
        description:
            "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
        buttonText: "Contact US",
        benefitList: [
            "Efficient algorithm resolution.",
            " Adherence to accessibility standards (WCAG).",
            "SEO best practices.",
            "Adherence to data security standards (GDPR).",
            "Application of best practices in security (OWASP)",
            "Skilled in Shell and SSH commands.",
            "Skilled in Git/GitHub for version control and collaboration.",
            " Agile use of Scrum for project management.",
        ],
    },
];

/**
 * Renders the Pricing section.
 */
export const Skills = () => {
    return (
        <section
            id="pricing"
            className="container py-24 sm:py-32"
        >

            <h2 className="text-3xl md:text-4xl font-bold text-center">
                Full-Stack Developer <br />
                Specializing in
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    {" "}
                    Javascript & PHP
                    {" "}
                </span>
                with a core focus on{" "}
                <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                    React
                </span>
            </h2>
            <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
                Currently acquiring Next.js and TypeScript skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pricingList.map((pricing: PricingProps) => (
                    <Card
                        key={pricing.title}
                        className={
                            pricing.popular === PopularPlanType.YES
                                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                                : ""
                        }
                    >
                        <CardHeader>
                            <CardTitle className="flex item-center justify-between">
                                {pricing.title}
                                {/*
                                <Badge
                                    variant="secondary"
                                    className="text-sm text-primary"
                                >
                                    Most popular
                                </Badge>
                                */}
                            </CardTitle>
                            {/*
                            <div>
                                   <span className="text-3xl font-bold">${pricing.price}</span>
                             
                                <span className="text-muted-foreground"> /month</span>
                            
                            </div>
                            */}
                            {/*
                            <CardDescription>{pricing.description}</CardDescription>
                            */}
                        </CardHeader>

                        {/*}  <CardContent>
                            <Button className="w-full">{pricing.buttonText}</Button>
                        </CardContent>
                        */}
                        <hr className="w-4/5 m-auto mb-4" />

                        <CardFooter className="flex">
                            <div className="space-y-4">
                                {pricing.benefitList.map((benefit: string) => (
                                    <span
                                        key={benefit}
                                        className="flex"
                                    >
                                        <Check className="text-green-500" />{" "}
                                        <h3 className="ml-2">{benefit}</h3>
                                    </span>
                                ))}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};
