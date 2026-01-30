export const Footer = () => {
  return (
    <footer className="pt-32 pb-12 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-6">
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
              IRON <br /> HIDE
            </h2>
            <p className="text-sm font-mono uppercase tracking-[0.2em] text-primary mb-4">
              Authorized Site: Woburn Industrial Zone
            </p>
            <div className="text-muted-foreground text-xs leading-loose font-mono">
              EST. 2024 / HEAVILY MODIFIED / NON-CONFORMIST BBQ <br />
              WOBURN, MASSACHUSETTS / 01801 <br />
              PRIMARY PROTOCOL: QUALITY THROUGH BRUTALITY
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-primary mb-6">Contact Channels</h4>
            <ul className="space-y-4 font-mono text-sm">
              <li><a href="#" className="hover:line-through">COMMS@IRONHIDE.HQ</a></li>
              <li><a href="#" className="hover:line-through">SECURE.TLP/WOBURN</a></li>
              <li><a href="#" className="hover:line-through">+1 (781) SMOKE-IH</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-primary mb-6">Hours / Operational</h4>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              <li className="flex justify-between"><span>MON-THU</span> <span>OFFLINE</span></li>
              <li className="flex justify-between text-white"><span>FRI-SAT</span> <span>11:00 - 22:00</span></li>
              <li className="flex justify-between text-white"><span>SUN</span> <span>11:00 - SOLD OUT</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase font-bold tracking-[0.4em] opacity-40">
            © IRON HIDE BBQ / PATENT PENDING / NO BARNS ALLOWED
          </div>
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Safety Manual</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Encryption</a>
          </div>
        </div>
      </div>
      
      {/* Punk Zine Style Graphic Element */}
      <div className="absolute -bottom-10 -right-10 opacity-10 rotate-12 pointer-events-none select-none">
        <span className="text-[15rem] font-black uppercase leading-none">BBQ</span>
      </div>
    </footer>
  );
};

export default Footer;
