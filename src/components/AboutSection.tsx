import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: "🛡️",
      title: "Transparência",
      description: "Clareza total em todos os processos, desde a cotação até o atendimento de sinistros"
    },
    {
      icon: "🤝",
      title: "Ética",
      description: "Conduta íntegra e responsável em todas as nossas relações comerciais"
    },
    {
      icon: "🎯",
      title: "Foco no Cliente",
      description: "Atendimento personalizado e soluções adequadas às suas necessidades específicas"
    },
    {
      icon: "📈",
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
                  <div className="text-3xl mb-4">{value.icon}</div>
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