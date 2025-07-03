import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SeguroVeiculos = () => {
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
                Seguro de Veículos
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Proteja seu veículo com tranquilidade total. Nosso seguro auto oferece cobertura abrangente contra roubo, furto, colisão, incêndio e muito mais. Tenha a segurança que você e sua família merecem nas ruas.
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
                src="/lovable-uploads/0d42f8c7-b7e2-4493-919b-cbe6245599ca.png" 
                alt="Seguro de Veículos" 
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
                  Coberturas Completas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Roubo e furto total</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Colisão e capotagem</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Incêndio e explosão</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Fenômenos da natureza</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Danos a terceiros</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Vidros e retrovisores</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Carro reserva</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-accent-blue text-xl">✓</span>
                      <span className="text-foreground">Socorro 24 horas</span>
                    </div>
                  </div>
                </div>
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
                    <div className="text-3xl mb-3">🏆</div>
                    <h3 className="font-semibold text-foreground mb-2">Premium</h3>
                    <p className="text-sm text-muted-foreground">Cobertura máxima com todos os benefícios</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">🚗</div>
                    <h3 className="font-semibold text-foreground mb-2">Empresarial</h3>
                    <p className="text-sm text-muted-foreground">Ideal para frotas e empresas</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-3xl mb-3">👨‍💼</div>
                    <h3 className="font-semibold text-foreground mb-2">Jovem/Mulher/Sênior</h3>
                    <p className="text-sm text-muted-foreground">Condições especiais por perfil</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefícios Exclusivos */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Benefícios Exclusivos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Proteção 0KM</h3>
                  <p className="text-muted-foreground">
                    Para veículos novos, garantimos a reposição pelo valor de 0km por até 12 meses em caso de perda total.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Desconto para Bom Condutor</h3>
                  <p className="text-muted-foreground">
                    Condutores sem sinistros nos últimos anos recebem descontos especiais na renovação.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Assistência Completa</h3>
                  <p className="text-muted-foreground">
                    Guincho, chaveiro, pane seca, troca de pneus e muito mais, 24 horas por dia em todo o território nacional.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Final */}
            <Card className="shadow-card bg-gradient-to-r from-accent-blue to-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Proteja Seu Veículo Agora</h3>
                <p className="mb-6 text-white/90">
                  Não deixe para depois. Proteja seu patrimônio e tenha tranquilidade total no trânsito. 
                  Solicite sua cotação personalizada e descubra as melhores condições do mercado.
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

export default SeguroVeiculos;