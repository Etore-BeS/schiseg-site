import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="SCHISEG - Assessoria em Seguros" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm mb-6 animate-fade-in">
            <span className="text-white/90">Mais de 20 anos de experiência</span>
            <div className="ml-2 h-2 w-2 rounded-full bg-success-green"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">transparência</span> e a sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-success-green to-green-300">segurança</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Há mais de duas décadas protegendo você, sua família e seu negócio com assessoria personalizada e total transparência.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="cta" size="lg" className="text-lg px-8 py-4 h-auto">
              Solicitar Proposta Gratuita
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white hover:text-primary">
              Conheça Nossa História
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-green mb-2">20+</div>
              <div className="text-white/80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-green mb-2">SUSEP</div>
              <div className="text-white/80">Registrada e Regulamentada</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-green mb-2">24/7</div>
              <div className="text-white/80">Atendimento Personalizado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-success-green/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;