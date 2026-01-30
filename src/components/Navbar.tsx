import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-secondary/30 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-primary flex items-center justify-center font-bold text-black rotate-3">
            IH
          </div>
          <span className="font-bold tracking-tighter text-xl uppercase italic">Iron Hide BBQ</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#menu" className="hover:text-primary transition-colors">Components/Menu</a>
          <a href="#process" className="hover:text-primary transition-colors">Engineering/Process</a>
          <a href="#location" className="hover:text-primary transition-colors">Base/Woburn</a>
        </div>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black rounded-none uppercase text-[10px] tracking-widest px-6 h-9">
          Initiate Order
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
