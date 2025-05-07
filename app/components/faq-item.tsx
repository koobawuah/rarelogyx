import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQItem({
  question,
  answer,
  open = false,
}: {
  question: string;
  answer: string;
  open?: boolean | string;
}) {
  return (
    <Accordion transition={{ duration: 0.2, ease: "easeInOut" }}>
      <AccordionItem
        value={question}
        className="size-auto px-6 py-5 flex flex-col items-stretch bg-aswhite/3 hover:bg-aswhite/10 rounded-lg border border-aswhite/10 cursor-pointer pointer-events-auto transition-all duration-250 text-clip shrink"
      >
        <AccordionTrigger className="">
          <summary className="flex flex-row justify-start items-start gap-4 shrink cursor-pointer pointer-events-auto">
            <h2 className="text-left text-base block leading-5 font-medium text-aswhite uppercase grow">
              {question}
            </h2>
            <span className="size-5 flex flex-row justify-center items-center relative shrink">
              <PlusIcon className="size-4 absolute opacity-100 group-data-[expanded]:rotate-45 group-data-[expanded]:opacity-0 group-data-[collapsed]:opacity-100 text-aswhite duration-300 ease-in-out" />

              <MinusIcon className="size-4 absolute opacity-100 group-data-[collapsed]:opacity-0 group-data-[expanded]:opacity-100 text-aswhite" />
            </span>
          </summary>
        </AccordionTrigger>

        <AccordionContent className="size-auto pr-6 overflow-hidden text-clip">
          <p className="size-auto max-w-140 box-border block mt-4 mb-0 text-sm text-left text-aswhite/70 font-normal leading-[120%]">
            {answer}
          </p>
        </AccordionContent>
      </AccordionItem>
      {/* </details> */}
    </Accordion>
  );
}
