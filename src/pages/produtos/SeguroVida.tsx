import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SeguroVida = () => {
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
                Seguro de Vida
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Proteja quem você mais ama com a segurança financeira que sua família merece. O seguro de vida é um ato de amor e responsabilidade, garantindo tranquilidade e proteção para o futuro das pessoas que dependem de você.
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
                src="/lovable-uploads/b2808d96-73c8-4b63-9fd7-78df4958ccf6.png" 
                alt="Seguro de Vida" 
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
                  Coberturas e Proteções
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Morte por qualquer causa</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Invalidez permanente total ou parcial</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Doenças graves</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Auxílio funeral</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Assistência médica 24h</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Renda por incapacidade</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Antecipação por doença terminal</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Seguro educação dos filhos</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modalidades */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Modalidades de Seguro de Vida
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">👤</div>
                    <h3 className="font-semibold text-foreground mb-2">Individual</h3>
                    <p className="text-sm text-muted-foreground">Proteção personalizada para você e sua família</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">👥</div>
                    <h3 className="font-semibold text-foreground mb-2">Em Grupo</h3>
                    <p className="text-sm text-muted-foreground">Ideal para empresas e funcionários</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">👩</div>
                    <h3 className="font-semibold text-foreground mb-2">Vida Mais Mulher</h3>
                    <p className="text-sm text-muted-foreground">Coberturas especiais para o público feminino</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Por que contratar */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Por que Contratar um Seguro de Vida?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Proteção Financeira da Família</h3>
                  <p className="text-muted-foreground">
                    Garante que sua família mantenha o padrão de vida mesmo na sua ausência, cobrindo despesas como educação, moradia e sustento.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Cobertura para Doenças Graves</h3>
                  <p className="text-muted-foreground">
                    Receba uma indenização em vida para custear tratamentos de câncer, infarto, AVC e outras doenças cobertas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Auxílio em Momentos Difíceis</h3>
                  <p className="text-muted-foreground">
                    Além da proteção financeira, oferecemos suporte completo com assistências médicas, psicológicas e administrativas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Facilidade de Contratação</h3>
                  <p className="text-muted-foreground">
                    Processo simples e rápido, com questionário de saúde simplificado e aprovação ágil na maioria dos casos.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Final */}
            <Card className="shadow-card bg-gradient-to-r from-accent-blue to-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Proteja Sua Família Hoje</h3>
                <p className="mb-6 text-white/90">
                  Um seguro de vida é um investimento no futuro das pessoas que você ama. Não deixe para amanhã a proteção que sua família precisa hoje. 
                  Fale conosco e descubra como é simples e acessível proteger quem mais importa.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white text-accent-blue hover:bg-white/90 border-white font-semibold"
                  onClick={() => window.open('https://wa.me/5511971535470', '_blank')}
                >
                  Fazer Simulação via WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeguroVida;