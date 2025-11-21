import { Search, Bell } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-background to-transparent">
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">MOVIEFLIX</h1>
          <div className="hidden md:flex gap-6">
            <a href="#" className="text-foreground hover:text-foreground/80 transition-colors">Home</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">TV Shows</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Movies</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">New & Popular</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">My List</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-foreground cursor-pointer hover:text-foreground/80 transition-colors" />
          <Bell className="w-5 h-5 text-foreground cursor-pointer hover:text-foreground/80 transition-colors" />
          <div className="w-8 h-8 bg-primary rounded cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};
