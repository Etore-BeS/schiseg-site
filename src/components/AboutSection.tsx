import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import transparencyImage from "@/assets/transparency.jpg";
import ethicsImage from "@/assets/ethics.jpg";
import customerFocusImage from "@/assets/customer-focus.jpg";
import excellenceImage from "@/assets/excellence.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: transparencyImage,
      title: "Transparência",
      description: "Clareza total em todos os processos, desde a cotação até o atendimento de sinistros"
    },
    {
      icon: ethicsImage,
      title: "Ética",
      description: "Conduta íntegra e responsável em todas as nossas relações comerciais"
    },
    {
      icon: customerFocusImage,
      title: "Foco no Cliente",
      description: "Atendimento personalizado e soluções adequadas às suas necessidades específicas"
    },
    {
      icon: excellenceImage,
      title: "Excelência",
      description: "Mais de 15 anos de experiência oferecendo as melhores soluções em seguros"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm mb-6">
              <span className="text-primary font-medium">Sobre a SCHISEG</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Mais de 15 anos protegendo o que importa para você
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A SCHISEG Assessoria Corretora de Seguros Ltda, registrada e habilitada pela 
              SUSEP sob nº 10551236, atua há mais de 15 anos no mercado de seguros, 
              oferecendo assessoria e consultoria personalizada para pessoas e empresas.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa filosofia é desenvolver produtos e serviços com o melhor custo-benefício, 
              priorizando o respeito, a lealdade e a tranquilidade dos nossos segurados. 
              "A nossa transparência e a sua segurança".
            </p>

            <div className="flex justify-center">
              <Button 
                variant="trust" 
                size="lg"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Fale com um Especialista
              </Button>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={value.icon} 
                      alt={value.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Photo Carousel */}
        <div className="mt-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-foreground">Nossa Galeria</h3>
          <Carousel 
            className="w-full max-w-4xl mx-auto"
            plugins={[
              Autoplay({
                delay: 4000,
              })
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <img 
                        src="/lovable-uploads/0d42f8c7-b7e2-4493-919b-cbe6245599ca.png" 
                        alt="Equipe SCHISEG - Evento Corporativo"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <img 
                        src="/lovable-uploads/8eb9a095-bc6e-45c8-ae28-730aabc74aa8.png" 
                        alt="Equipe SCHISEG - Networking"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <img 
                        src="/lovable-uploads/058677ee-696f-4c78-bf64-4dfc751a5d92.png" 
                        alt="Premiação - Câmara dos Corretores"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <img 
                        src="/lovable-uploads/dcb8956f-8aa1-4c86-84d5-732cd52c3751.png" 
                        alt="Evento Mapfre - Câmara dos Corretores"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <img 
                        src="/lovable-uploads/1bd68f93-9294-42e4-90cb-98309d81b60c.png" 
                        alt="Equipe SCHISEG - Confraternização"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <img 
                        src="/lovable-uploads/fb6b8004-87fd-4732-b39d-cb18011fd12f.png" 
                        alt="Evento Corporativo - Equipe Completa"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <img 
                        src="/lovable-uploads/be7e2a2d-4908-464e-8298-a9da4ef324f8.png" 
                        alt="Lideranças SCHISEG"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <img 
                        src="/lovable-uploads/6fe2e198-8e4a-4e0d-b877-d15026f6efae.png" 
                        alt="Diretoria SCHISEG"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <img 
                        src="/lovable-uploads/3d879e67-7a71-48e2-9188-df5ff1dac320.png" 
                        alt="Reunião de Negócios SCHISEG"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Associations Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-foreground">Corretora Associada</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-subtle rounded-lg hover:shadow-card-hover transition-all duration-300">
              <div className="text-primary font-bold text-lg mb-2">SINCOR</div>
              <div className="text-sm text-muted-foreground">São Paulo</div>
            </div>
            <div className="text-center p-4 bg-gradient-subtle rounded-lg hover:shadow-card-hover transition-all duration-300">
              <div className="text-primary font-bold text-lg mb-2">CÂMARA DOS</div>
              <div className="text-primary font-bold text-lg mb-2">CORRETORES</div>
              <div className="text-sm text-muted-foreground">São Paulo</div>
            </div>
            <div className="text-center p-4 bg-gradient-subtle rounded-lg hover:shadow-card-hover transition-all duration-300">
              <div className="text-primary font-bold text-lg mb-2">CLUBE DOS</div>
              <div className="text-primary font-bold text-lg mb-2">CORRETORES</div>
              <div className="text-sm text-muted-foreground">São Paulo</div>
            </div>
            <div className="text-center p-4 bg-gradient-subtle rounded-lg hover:shadow-card-hover transition-all duration-300">
              <div className="text-primary font-bold text-lg mb-2">LIONS CLUB INTERNATIONAL</div>
              <div className="text-primary font-bold text-lg mb-2">CENTRO</div>
              <div className="text-sm text-muted-foreground">São Paulo</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center shadow-2xl border border-white/10">
          <h3 className="text-3xl lg:text-4xl font-bold mb-12 text-white drop-shadow-md">Nossa Credibilidade em Números</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-fade-in bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/20" style={{ animationDelay: '0.1s' }}>
              <div className="text-6xl lg:text-7xl font-bold mb-4 text-sky-300 drop-shadow-2xl animate-pulse">20+</div>
              <div className="text-sky-100 text-xl font-semibold tracking-wide">Anos de Experiência</div>
            </div>
            <div className="animate-fade-in bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/20" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl lg:text-6xl font-bold mb-4 text-emerald-300 drop-shadow-2xl">SUSEP</div>
              <div className="text-emerald-100 text-xl font-semibold tracking-wide">Registrada e Regulamentada</div>
            </div>
            <div className="animate-fade-in bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/20" style={{ animationDelay: '0.3s' }}>
              <div className="text-6xl lg:text-7xl font-bold mb-4 text-amber-300 drop-shadow-2xl animate-pulse">24/7</div>
              <div className="text-amber-100 text-xl font-semibold tracking-wide">Atendimento Personalizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;