import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MENU_ITEMS = [
  { id: "01", name: "TRIPLE-STAMPED BRISKET", spec: "16-HOUR OAK CARBONIZED", price: "$28", img: "https://raw.githubusercontent.com/Glyphor-Fuse/iron-hide-bbq/main/public/images/brisket.png" },
  { id: "02", name: "INDUSTRIAL PORK RIBS", spec: "HARD-SHELL GLAZE / BONE-IN", price: "$22", img: "https://images.pexels.com/photos/19831877/pexels-photo-19831877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  { id: "03", name: "STEEL-PRESS CHICKEN", spec: "HALF-CHASSIS / HYDRAULIC RUB", price: "$18", img: "https://images.pexels.com/photos/11414299/pexels-photo-11414299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
  { id: "04", name: "WOBURN TANNERY SAUSAGE", spec: "COARSE GRIND / CASING-STRETCHED", price: "$14", img: "/images/sausage.png" },
];

export const BandsawMenu = () => {
  return (
    <section id="menu" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-24">
          <h2 className="text-5xl font-black uppercase tracking-tighter">Manifest / Components</h2>
          <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.3em] text-right">
            Serial No. 84-BBQ <br />
            Rev. 2024
          </div>
        </div>

        <div className="space-y-0">
          {MENU_ITEMS.map((item, idx) => (
            <MenuItem key={item.id} {...item} isLast={idx === MENU_ITEMS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuItem = ({ name, spec, price, img, isLast }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sliceWidth = useTransform(scrollYProgress, [0, 0.4, 0.6], ["0%", "100%", "100%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.5], [20, 0]);

  return (
    <div ref={container} className="relative group">
      <div className="py-12 relative z-10">
        <motion.div style={{ opacity: contentOpacity, y: contentY }} className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-2">
              <span className="text-xs font-mono text-primary font-bold">[{name.split(' ')[0].substring(0,3)}]</span>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:text-primary transition-colors cursor-default">
                {name}
              </h3>
            </div>
            <p className="text-sm font-mono text-muted-foreground tracking-widest">{spec}</p>
          </div>
          
          <div className="flex items-center gap-12">
            <img src={img} alt={name} className="w-24 h-24 object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 border border-secondary/20" />
            <span className="text-3xl font-black text-primary">{price}</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        style={{ scaleX: sliceWidth }}
        className="bandsaw-line absolute bottom-0 left-0 w-full"
      />
      {!isLast && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-secondary/10" />
      )}
    </div>
  );
};

export default BandsawMenu;
