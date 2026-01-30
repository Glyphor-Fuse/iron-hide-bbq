export const IndustrialProcess = () => {
  return (
    <section id="process" className="py-32 bg-secondary/5 blueprint-grid border-y border-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-primary font-bold text-[10px] tracking-[0.5em] uppercase mb-6">
              Processing Protocol / Phase II
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
              Hardened <br />By Carbon <br />& Steel
            </h2>
            <div className="space-y-8">
              <ProcessStep 
                num="01" 
                title="Chemical Cure" 
                desc="Rub protocols derived from 19th-century tanning mixtures. Salt, heavy carbon, and iron-rich minerals."
              />
              <ProcessStep 
                num="02" 
                title="Pressure Chamber" 
                desc="Our smokers aren't barrels. They are heavy-gauge steel pressurized environments designed for maximum lipid breakdown."
              />
              <ProcessStep 
                num="03" 
                title="Thermal Index" 
                desc="Computer-monitored heat curves ensuring every fiber reaches the precise structural failure point for tenderness."
              />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-primary/20 pointer-events-none" />
            <img 
              src="https://images.pexels.com/photos/5505141/pexels-photo-5505141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
              alt="Technical smoking process" 
              className="w-full aspect-square object-cover grayscale mix-blend-lighten"
            />
            <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
              Live Monitoring / Active
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ num, title, desc }: { num: string; title: string; desc: string }) => (
  <div className="flex gap-6 group">
    <span className="text-primary font-mono text-xl font-black">({num})</span>
    <div>
      <h4 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-primary transition-colors cursor-default">
        {title}
      </h4>
      <p className="text-muted-foreground leading-relaxed text-sm max-w-md">
        {desc}
      </p>
    </div>
  </div>
);

export default IndustrialProcess;
