import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SaudeOdonto = () => {
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
                Saúde e Odontológico
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Cuide da sua saúde e da sua família com planos completos de assistência médica e odontológica. Oferecemos cobertura ampla, rede credenciada de qualidade e atendimento humanizado para garantir seu bem-estar.
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
                src="/lovable-uploads/4b7e66bc-9061-4d50-a787-212d4649d703.png" 
                alt="Saúde e Odontológico" 
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
            {/* Planos de Saúde */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Planos de Saúde
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Consultas médicas sem limite</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Exames laboratoriais e de imagem</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Internações hospitalares</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Cirurgias de todos os portes</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Pronto-socorro 24 horas</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">UTI e CTI</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Medicamentos hospitalares</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Cobertura nacional</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Planos Odontológicos */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Planos Odontológicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Consultas odontológicas</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Limpeza e profilaxia</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Restaurações (amálgama e resina)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Extrações dentárias</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Tratamentos de canal</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Periodontia (tratamento de gengiva)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Próteses e implantes*</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Urgência e emergência</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  *Disponível conforme plano contratado e período de carência
                </p>
              </CardContent>
            </Card>

            {/* Modalidades */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Modalidades Disponíveis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">👤</div>
                    <h3 className="font-semibold text-foreground mb-2">Individual/Familiar</h3>
                    <p className="text-sm text-muted-foreground">Para você e sua família</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">🏢</div>
                    <h3 className="font-semibold text-foreground mb-2">Empresarial</h3>
                    <p className="text-sm text-muted-foreground">Para empresas e funcionários</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">👥</div>
                    <h3 className="font-semibold text-foreground mb-2">Por Adesão</h3>
                    <p className="text-sm text-muted-foreground">Para associações e sindicatos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Saúde Ocupacional */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Saúde Ocupacional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Exames Ocupacionais</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Admissionais</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Periódicos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Demissionais</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Mudança de função</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Retorno ao trabalho</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">•</span>
                      <span className="text-foreground">Atestados de saúde ocupacional</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Programas de Medicina do Trabalho</h3>
                  <p className="text-muted-foreground">
                    Desenvolvimento e implementação de PCMSO (Programa de Controle Médico de Saúde Ocupacional) 
                    conforme NR-7, garantindo compliance e saúde dos colaboradores.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Vantagens */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Vantagens dos Nossos Planos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Rede Credenciada Ampla</p>
                    <p className="text-sm text-muted-foreground">Hospitais, clínicas e profissionais de primeira linha</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Sem Carência para Emergências</p>
                    <p className="text-sm text-muted-foreground">Atendimento imediato em casos de urgência e emergência</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Portabilidade de Carências</p>
                    <p className="text-sm text-muted-foreground">Aproveite carências cumpridas em plano anterior</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-blue text-xl">★</span>
                  <div>
                    <p className="font-medium text-foreground">Cobertura Nacional</p>
                    <p className="text-sm text-muted-foreground">Atendimento em todo o território brasileiro</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Final */}
            <Card className="shadow-card bg-gradient-to-r from-accent-blue to-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Cuide da Sua Saúde Hoje</h3>
                <p className="mb-6 text-white/90">
                  Não espere precisar para ter um plano de saúde. Proteja-se e à sua família com cobertura completa 
                  e rede credenciada de qualidade. Solicite uma cotação personalizada sem compromisso.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white text-accent-blue hover:bg-white/90 border-white font-semibold"
                  onClick={() => window.open('https://wa.me/5511971535470', '_blank')}
                >
                  Solicitar Cotação de Planos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaudeOdonto;