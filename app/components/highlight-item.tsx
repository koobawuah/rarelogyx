import { motion } from "framer-motion";

export function HighlightItem({
  value,
  heading,
  description,
}: {
  value: string;
  heading: string;
  description: string;
}) {
  return (
    <div className="size-auto pt-6 flex flex-col justify-start items-stretch gap-6 border-t border-[#f2f2f2]/10 lg:grid lg:grid-cols-[5fr_3fr] lg:gap-2">
      <div className="size-auto block overflow-hidden">
        <motion.span
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="size-auto max-w-120 block text-[80px] lg:text-[168px] text-[#f2f2f2]/20 text-left text-clip leading-[88%] font-normal -tracking-[3.2px] lg:-tracking-[6.72px]"
        >
          {value}
        </motion.span>
      </div>

      <div className="size-auto max-w-120 lg:max-w-90 py-0 lg:py-2 flex flex-col justify-start items-stretch gap-3 lg:justify-between">
        <span className="size-auto text-[#f2f2f2] text-base text-left leading-5 font-medium uppercase ">
          {heading}
        </span>
        <p className="size-auto mb-0 text-[#f2f2f2]/70 text-sm text-left leading-4 font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
