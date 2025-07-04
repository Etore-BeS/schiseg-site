import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SeguroEmpresarial = () => {
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
                Seguro Empresarial
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Proteja seu negócio contra todos os riscos. Oferecemos soluções completas para empresas de todos os portes, garantindo a continuidade das suas operações e a proteção do seu patrimônio empresarial.
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
                src="/lovable-uploads/11fa4d08-9006-4669-b372-f7ab62ab3845.png" 
                alt="Seguro Empresarial" 
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
                  Coberturas Empresariais Completas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Incêndio e riscos diversos</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Roubo e furto qualificado</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Equipamentos e máquinas</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Perda de faturamento</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Responsabilidade civil geral</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Danos elétricos</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Quebra de vidros</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Tumultos e greves</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Segmentos Atendidos */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Segmentos Atendidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">🏭</div>
                    <h3 className="font-semibold text-foreground mb-2">Indústrias</h3>
                    <p className="text-sm text-muted-foreground">Proteção para processos industriais e equipamentos</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">🏪</div>
                    <h3 className="font-semibold text-foreground mb-2">Comércio</h3>
                    <p className="text-sm text-muted-foreground">Soluções para lojas, mercados e estabelecimentos</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">🏢</div>
                    <h3 className="font-semibold text-foreground mb-2">Serviços</h3>
                    <p className="text-sm text-muted-foreground">Cobertura para empresas de prestação de serviços</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coberturas Específicas */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Soluções Especializadas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Seguro Garantia</h3>
                  <p className="text-muted-foreground">
                    Substitui as garantias tradicionais em licitações e contratos, liberando capital de giro para sua empresa crescer.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Responsabilidade Civil Profissional</h3>
                  <p className="text-muted-foreground">
                    Proteção contra erros e omissões no exercício de atividades profissionais, essencial para consultores e prestadores de serviços.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Seguro D&O (Diretores e Administradores)</h3>
                  <p className="text-muted-foreground">
                    Cobertura para executivos contra demandas judiciais relacionadas ao exercício de suas funções administrativas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Cyber Seguro</h3>
                  <p className="text-muted-foreground">
                    Proteção contra ataques cibernéticos, vazamento de dados e interrupção de sistemas, cada vez mais essencial no mundo digital.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefícios */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Por que Escolher Nosso Seguro Empresarial?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Análise Personalizada</p>
                    <p className="text-sm text-muted-foreground">Avaliamos os riscos específicos do seu negócio para ofertar a melhor proteção</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Atendimento Especializado</p>
                    <p className="text-sm text-muted-foreground">Equipe técnica dedicada para empresas, com conhecimento setorial</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Seguradoras Renomadas</p>
                    <p className="text-sm text-muted-foreground">Parcerias com as principais seguradoras do mercado nacional</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Gestão de Sinistros</p>
                    <p className="text-sm text-muted-foreground">Acompanhamento completo desde a comunicação até a liquidação</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Final */}
            <Card className="shadow-card bg-gradient-to-r from-accent-blue to-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Proteja Seu Negócio Hoje</h3>
                <p className="mb-6 text-white/90">
                  Não deixe que imprevistos comprometam o futuro da sua empresa. Nossos especialistas estão prontos para 
                  desenvolver uma solução sob medida para as necessidades do seu negócio. Solicite uma proposta personalizada.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white text-accent-blue hover:bg-white/90 border-white font-semibold"
                  onClick={() => window.open('https://wa.me/5511971535470', '_blank')}
                >
                  Solicitar Análise Empresarial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeguroEmpresarial;