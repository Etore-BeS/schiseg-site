import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SeguroResidencial = () => {
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
                Seguro Residencial
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Seu lar é seu refúgio e maior patrimônio. Proteja sua casa, apartamento ou condomínio contra incêndio, roubo, danos elétricos e fenômenos da natureza. Tenha a tranquilidade de saber que seu lar está sempre protegido.
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
                src="/lovable-uploads/6fe2e198-8e4a-4e0d-b877-d15026f6efae.png" 
                alt="Seguro Residencial" 
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
            {/* Coberturas */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Coberturas Completas para Seu Lar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Incêndio e explosão</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Roubo e furto de bens</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Danos elétricos</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Vazamento de tubulações</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Vendaval e granizo</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Responsabilidade civil familiar</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Quebra de vidros</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Equipamentos portáteis</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tipos de Imóveis */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Modalidades Disponíveis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">🏠</div>
                    <h3 className="font-semibold text-foreground mb-2">Residencial Habitual</h3>
                    <p className="text-sm text-muted-foreground">Para sua casa principal onde você mora</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">🏢</div>
                    <h3 className="font-semibold text-foreground mb-2">Apartamentos</h3>
                    <p className="text-sm text-muted-foreground">Proteção específica para apartamentos</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">🏖️</div>
                    <h3 className="font-semibold text-foreground mb-2">Casa de Veraneio</h3>
                    <p className="text-sm text-muted-foreground">Para casas de praia, campo ou temporada</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assistências Incluídas */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Assistências 24 Horas Incluídas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Assistência Residencial</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Chaveiro 24 horas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Eletricista de emergência</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Encanador 24h</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Desentupimento</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Vidraceiro</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Técnico em eletrodomésticos</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Moradia Alternativa</h3>
                  <p className="text-muted-foreground">
                    Em caso de sinistro que torne o imóvel inabitável, oferecemos hospedagem em hotel ou auxílio aluguel por período determinado.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Guarda de Salvados</h3>
                  <p className="text-muted-foreground">
                    Serviço de guarda e conservação dos bens salvados após sinistro, proporcionando mais comodidade durante o processo de indenização.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefícios Especiais */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Diferenciais do Nosso Seguro Residencial
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Cobertura Ampla</p>
                    <p className="text-sm text-muted-foreground">Proteção completa para estrutura, conteúdo e responsabilidades</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Atendimento 24/7</p>
                    <p className="text-sm text-muted-foreground">Suporte emergencial a qualquer hora do dia ou da noite</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Rede Referenciada</p>
                    <p className="text-sm text-muted-foreground">Profissionais qualificados e de confiança em todo o país</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Processo Simplificado</p>
                    <p className="text-sm text-muted-foreground">Contratação fácil e acionamento descomplicado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Final */}
            <Card className="shadow-card bg-gradient-to-r from-accent-blue to-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Proteja Seu Lar Agora</h3>
                <p className="mb-6 text-white/90">
                  Não espere que algo aconteça para proteger o que você construiu com tanto carinho. 
                  Tenha a tranquilidade de saber que seu lar está sempre protegido. Faça sua cotação sem compromisso.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white text-accent-blue hover:bg-white/90 border-white font-semibold"
                  onClick={() => window.open('https://wa.me/5511971535470', '_blank')}
                >
                  Solicitar Cotação via WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeguroResidencial;