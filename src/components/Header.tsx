import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/b087fb88-8490-4ef6-b6a8-e2a650b77bc2.png" 
            alt="SCHISEG Logo" 
            className="h-14 w-auto"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">Assessoria Corretora de Seguros</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#inicio" 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                Início
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <div className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-primary p-6 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          Seguros
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Proteção completa para você, sua família e seu negócio
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </div>
                  <NavigationMenuLink 
                    href="#produtos" 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Veículos</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Proteção completa para seu veículo
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink 
                    href="#produtos" 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Vida & Família</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Segurança para quem você ama
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink 
                    href="#produtos" 
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Empresarial</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Soluções para seu negócio
                    </p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#sobre" 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                Quem Somos
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#contato" 
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                Contato
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="cta" 
            className="hidden sm:inline-flex"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Proposta
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-card">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <a href="#inicio" className="block py-2 text-sm font-medium hover:text-primary">Início</a>
            <a href="#produtos" className="block py-2 text-sm font-medium hover:text-primary">Produtos</a>
            <a href="#sobre" className="block py-2 text-sm font-medium hover:text-primary">Quem Somos</a>
            <a href="#contato" className="block py-2 text-sm font-medium hover:text-primary">Contato</a>
            <Button 
              variant="cta" 
              className="w-full mt-4"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Proposta
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;