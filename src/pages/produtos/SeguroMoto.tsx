import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SeguroMoto = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary-light transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-accent-blue to-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Seguro de Moto
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Você gosta de pilotar sua moto estradeira ou que tenha mais de 90cc e de sair por aí com mais liberdade? Essa é a sensação o veículo proporciona e você pode combinar esse prazer com mais tranquilidade, contratando um seguro que garanta a proteção que você precisa na cidade ou na estrada.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white text-accent-blue hover:bg-white/90 border-white font-semibold"
                onClick={() => window.open('https://wa.me/5511971535470', '_blank')}
              >
                Solicitar Cotação
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/8eb9a095-bc6e-45c8-ae28-730aabc74aa8.png" 
                alt="Seguro de Moto" 
                className="max-w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Coberturas Básicas */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Coberturas Básicas e Opcionais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Colisão, incêndio e roubo/furto</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Carro extra em caso de sinistro</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Capacete, jaqueta, botas, luvas, calça e intercomunicador</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Danos a terceiros</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Dano parcial ou sinistro de indenização integral ao veículo devido a incêndio, roubo e furto. Não contempla colisão.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefícios Especiais */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Com o Seguro Moto Você Tem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Serviços emergenciais e de manutenção para sua casa</h3>
                  <p className="text-muted-foreground mb-4">Mão de obra gratuita com segurança e qualidade para:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Conserto de eletrodomésticos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Reparos nas redes elétrica e hidráulica</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Help desk</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Desentupimento</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Limpeza de calhas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Chaveiro comum</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Extensão de perímetro gratuita</h3>
                  <p className="text-muted-foreground">
                    Extensão de perímetro, nos países do Mercosul, com cobertura gratuita, em caso de danos ocasionados exclusivamente à moto.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Reposição do valor da moto 0km por até 6 meses</h3>
                  <p className="text-muted-foreground mb-3">
                    Nos casos de indenização integral, você tem garantia de até 6 meses para a reposição da moto pelo valor de 0km. Válido para seguros contratados na modalidade de valor de mercado, de acordo com o tipo de moto, modelo, região e condições de contratação.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Consulte as Condições Gerais. O benefício é válido de acordo com as cilindradas da moto ou cláusula contratada.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Final */}
            <Card className="shadow-card bg-gradient-to-r from-accent-blue to-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Faça sua Cotação Agora</h3>
                <p className="mb-6 text-white/90">
                  Seguros pensados para atender às suas necessidades. Faça uma cotação e descubra como pode ser fácil obter essas vantagens.
                  Fale com nossa corretora e, na oportunidade, tire suas dúvidas e faça simulações. Será um prazer atendê-lo(a).
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white text-accent-blue hover:bg-white/90 border-white font-semibold"
                  onClick={() => window.open('https://wa.me/5511971535470', '_blank')}
                >
                  Falar com Corretor via WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeguroMoto;