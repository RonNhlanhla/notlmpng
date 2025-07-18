import Header from "@/components/ui/header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { graphics } from "@/components/data/graphics";

export default function GraphicsPage() {
  return (
    <div className="w-full flex flex-col p-4">
      <Header />
      <div className="w-full flex flex-col items-center p-4 my-2 border-2 border-black">
        <h2 className="italic">Let us show you how professional graphics can elevate your brand and communicate your vision.</h2>
      </div>
      
      <h1>Graphics That Speak Volumes</h1>
      <p>In today's visually-driven world, powerful graphics are no longer optional—they're essential. While templates and stock assets can provide a quick fix, they often fall short of capturing your unique brand identity and message. Custom graphics ensure consistency across all your platforms while making a lasting impression on your audience.</p>

      <h1>Visual Storytelling That Converts</h1>
      <p>Great design does more than look good—it communicates, engages, and converts. Whether it's through stunning visuals, intuitive infographics, or compelling brand assets, we create graphics that tell your story and drive results. Your visual identity should be as unique as your business, and we're here to bring that vision to life.</p>

      <h1>Beyond Aesthetics — Strategic Design</h1>
      <p>We don't just create pretty pictures; we develop strategic visual solutions. Every color, shape, and font choice is intentional, working together to support your business goals and resonate with your target audience. Our approach combines creativity with strategy to deliver graphics that not only look great but also perform.</p>

      <h1>Why Choose Our Design Services?</h1>
      <p>We blend creativity with purpose, ensuring every design element serves a strategic function.</p>
      <p>From brand identity to marketing materials, we maintain consistency across all your visual assets.</p>
      <p>Whether you need a single logo or a complete brand package, we scale our services to fit your needs.</p>

      <div className="w-full flex flex-col items-center">
        <Accordion type="single" collapsible className="w-full max-w-3xl">
          {graphics.map((item) => (
            <AccordionItem key={item.trigger} value={item.trigger}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
