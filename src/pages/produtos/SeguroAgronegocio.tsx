import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SeguroAgronegocio = () => {
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
                Seguro Agronegócio
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Proteja sua produção agrícola e pecuária com seguros especializados para o campo. Oferecemos cobertura completa contra riscos climáticos, pragas, doenças e muito mais, garantindo a segurança do seu investimento rural.
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
                src="/lovable-uploads/72cc73c7-93e1-4349-983d-22a052628bd1.png" 
                alt="Seguro Agronegócio" 
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
            {/* Seguro Agrícola */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Seguro Agrícola - Proteção para Suas Culturas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Granizo e vendaval</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Geada e baixas temperaturas</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Excesso de chuva</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Seca e estiagem</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Pragas e doenças</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Incêndio</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Raio</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Tromba d'água</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Culturas Cobertas */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Culturas e Atividades Cobertas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">🌾</div>
                    <h3 className="font-semibold text-foreground mb-2">Grãos</h3>
                    <p className="text-sm text-muted-foreground">Soja, milho, trigo, arroz, feijão e outros</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">🥬</div>
                    <h3 className="font-semibold text-foreground mb-2">Hortaliças</h3>
                    <p className="text-sm text-muted-foreground">Verduras, legumes e horticultura em geral</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">🍎</div>
                    <h3 className="font-semibold text-foreground mb-2">Fruticultura</h3>
                    <p className="text-sm text-muted-foreground">Pomares, citros, frutas tropicais</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seguro Pecuário */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Seguro Pecuário
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Proteção do Rebanho</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Morte por acidente</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Doenças cobertas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Ataque de animais silvestres</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Fenômenos da natureza</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Intoxicação por plantas tóxicas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Asfixia por imersão</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Animais Cobertos</h3>
                  <p className="text-muted-foreground">
                    Bovinos, suínos, ovinos, caprinos, equinos, aves e aquicultura, adequados às necessidades específicas de cada criação.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefícios do Seguro Rural */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Benefícios do Seguro Rural
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Subvenção Federal</h3>
                  <p className="text-muted-foreground">
                    Beneficie-se do programa de subvenção do governo federal que pode cobrir até 40% do valor do prêmio do seguro, tornando a proteção mais acessível.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Assistência Técnica</h3>
                  <p className="text-muted-foreground">
                    Acompanhamento técnico especializado desde o plantio até a colheita, com orientações para maximizar a produtividade e minimizar riscos.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Rapidez na Liquidação</h3>
                  <p className="text-muted-foreground">
                    Processo ágil de vistoria e pagamento de indenizações, garantindo que você tenha recursos rapidamente para replantio ou reposição do rebanho.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Proteção Financeira</h3>
                  <p className="text-muted-foreground">
                    Mantenha a estabilidade financeira da sua propriedade rural mesmo diante de adversidades climáticas ou eventos inesperados.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Por que contratar */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Por que Contratar Seguro Rural?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Gestão de Riscos</p>
                    <p className="text-sm text-muted-foreground">Protege contra perdas causadas por fatores climáticos e biológicos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Continuidade do Negócio</p>
                    <p className="text-sm text-muted-foreground">Garante recursos para replantio e manutenção da atividade</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Acesso a Crédito</p>
                    <p className="text-sm text-muted-foreground">Facilita aprovação de financiamentos rurais</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Planejamento Seguro</p>
                    <p className="text-sm text-muted-foreground">Permite investimentos com mais segurança e previsibilidade</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Final */}
            <Card className="shadow-card bg-gradient-to-r from-accent-blue to-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Proteja Sua Produção Rural</h3>
                <p className="mb-6 text-white/90">
                  O campo tem seus desafios, mas você não precisa enfrentá-los sozinho. Nossos especialistas em seguro rural 
                  estão prontos para desenvolver uma proteção sob medida para sua propriedade. Solicite uma cotação personalizada.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white text-accent-blue hover:bg-white/90 border-white font-semibold"
                  onClick={() => window.open('https://wa.me/5511971535470', '_blank')}
                >
                  Falar com Especialista Rural
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeguroAgronegocio;