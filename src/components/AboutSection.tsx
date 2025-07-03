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
              SUSEP sob nº 05062610551236, atua há mais de 15 anos no mercado de seguros, 
              oferecendo assessoria e consultoria personalizada para pessoas e empresas.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa filosofia é desenvolver produtos e serviços com o melhor custo-benefício, 
              priorizando o respeito, a lealdade e a tranquilidade dos nossos segurados. 
              "A nossa transparência e a sua segurança".
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="trust" 
                size="lg"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossa História
              </Button>
              <Button 
                variant="outline" 
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
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                        <span className="text-lg font-semibold text-muted-foreground">Eventos Corporativos</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
                        <span className="text-lg font-semibold text-muted-foreground">Equipe SCHISEG</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                        <span className="text-lg font-semibold text-muted-foreground">Premiações</span>
                      </div>
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
              <div className="text-primary font-bold text-lg mb-2">CLUB DOS</div>
              <div className="text-primary font-bold text-lg mb-2">CORRETORES</div>
              <div className="text-sm text-muted-foreground">São Paulo</div>
            </div>
            <div className="text-center p-4 bg-gradient-subtle rounded-lg hover:shadow-card-hover transition-all duration-300">
              <div className="text-primary font-bold text-lg mb-2">LION CLUB</div>
              <div className="text-primary font-bold text-lg mb-2">CENTRO</div>
              <div className="text-sm text-muted-foreground">São Paulo</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 text-white text-center shadow-hero">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8">Nossa Credibilidade em Números</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-white/90">Anos no Mercado</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">SUSEP</div>
              <div className="text-white/90">Registrada</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-white/90">Transparência</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Atendimento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;