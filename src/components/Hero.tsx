import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-20 overflow-hidden blueprint-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block border border-primary text-primary px-4 py-1 text-[10px] uppercase tracking-[0.4em] mb-8 font-bold"
        >
          Model 001-Woburn / Industrial Smokehouse
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8"
        >
          Forged <br />
          <span className="text-secondary italic">in the</span> <br />
          <span className="text-primary">Smoke</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-12 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-l-2 border-primary pl-6"
          >
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-bold">Project Specification</p>
            <p className="text-lg leading-relaxed">
              We reject the 'rustic barn' aesthetic. Iron Hide honors Woburn's industrial tanning heritage with a chemical-technical approach to the art of the smoke.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img 
              src="https://images.pexels.com/photos/4172287/pexels-photo-4172287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
              alt="Industrial Smoker Blueprint"
              className="w-full h-auto opacity-60 mix-blend-screen invert hue-rotate-180"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <div className="w-[1px] h-20 bg-primary/50" />
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to Slice</span>
      </div>
    </section>
  );
};

export default Hero;
