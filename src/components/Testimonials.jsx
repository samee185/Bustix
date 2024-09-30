import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    title:
      "The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!",
    client: "Jessica Devis",
    clientInfo: "Full Stack Developer @Netflix",
    img: "/image/netflix.svg",
  },
  {
    title:
      "It have broadened my horizons and helped me advance my career. The community is incredibly supportive.",
    client: "Marcell Glock",
    clientInfo: "Graphic Designer, @Coinbase",
    img: "https://www.material-tailwind.com/image/Logo-coinbase.svg",
  },
];

const Testimonials = () => {
  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto">
        <Typography

          className="mb-4 text-2xl md:text-4xl text-[rgba(4,72,108,0.94)] font-bold text-center uppercase"
        >
          The heartfelt testimonials of our community
        </Typography>
        <Typography
          className="max-w-3xl !text-gray-500 mb-10 lg:mb- text-center"
        >
          From life-enhancing gadgets to unparalleled customer support, and
          transformative learning opportunities.
        </Typography>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {testimonials.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>

        <Card
          shadow={false}
          className="mt-8 bg-gray-100/50 text-center rounded-2xl p-6"
        >
          <CardHeader color="transparent" floated={false} shadow={false}>
            <Typography
              color="blue-gray"
              className="mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold"
            >
              &quot;Its intuitive design and powerful features make it
              indispensable. I can&apos;t imagine going back to life before
              it!&quot;
            </Typography>
          </CardHeader>
          <CardBody className="items-center mx-auto py-2">
            <img
              src="/image/spotify.svg"
              className="max-w-[8rem] mx-auto grayscale"
              alt="spotify"
            />
            <Typography variant="h6" color="blue-gray">
              Emma Roberts
            </Typography>
            <Typography
              variant="paragraph"
              className="font-normal !text-gray-500"
            >
              Chief Executive @Spotify
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;
