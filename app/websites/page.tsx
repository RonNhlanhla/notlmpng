import Header from "@/components/ui/header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {not} from "@/components/data/not";

export default function WebsitePage() {
  return (
    <div className="w-full flex flex-col p-4">
    <Header/>
      <div className="w-full flex flex-col items-center p-4 my-2 border-2 border-black">
          <h2 className="italic">Let us show you how custom software can stop being a burden and start being a breakthrough.</h2>

      </div>
      <h1>Custom Software Isn’t Dead — It’s Evolving with You</h1>
          <p>In an age where no-code and low-code tools are booming, it’s easy to assume that fully custom software is no longer necessary. But the truth is: the more businesses rely on off-the-shelf tools, the more opportunities emerge for those who go custom. While drag-and-drop platforms are great for validation and speed, they often come with growing costs, rigid limitations, and long-term inefficiencies—especially as your business scales or diversifies.</p>

          <h1>The Web Isn’t Going Anywhere</h1>
          <p>Despite the rise of AI agents and automation, websites and digital platforms remain essential for building trust, communicating clearly, and creating intentional user journeys. A website is still your digital handshake—one of the first places clients go to understand your value, your offering, and your professionalism. It's not just a page—it's a presence.</p>

          <h1>Beyond Software — We Think in Systems</h1>
          <p>Unlike companies that only deliver code, we think about how that code fits into your business. We sit at the intersection of software, branding, operations, and growth strategy. That means we don’t just build digital tools—we align them with your actual processes, client touchpoints, and revenue goals.</p>

          <h1>Why Work With Us?</h1>
          <p>We don’t just code—we consult. Every line of code is shaped by business logic.</p>

          <p>We’ve seen both sides. Having worked across design, business development, marketing, and operations, we bring full-context thinking to our builds.</p>

          <p>We build for growth. Whether you’re scaling, pivoting, or refining—our platforms grow with you.</p>

      <div className="w-full flex flex-col items-center">
      <Accordion type="single" collapsible className="w-full max-w-3xl">
        {not.map((item) => (
          <AccordionItem value={item.trigger}>
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