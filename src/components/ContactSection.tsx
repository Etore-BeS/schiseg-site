import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solicite sua proposta ou tire suas dúvidas. Nossa equipe está pronta para atendê-lo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              {/* Contact Details */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center">
                    <span className="text-2xl mr-2">📍</span>
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">🏢</span>
                    <div>
                      <p className="font-medium text-foreground">Endereço</p>
                      <p className="text-muted-foreground">Rua Monte Serrat , 588 - São Paulo/SP</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="font-medium text-foreground">Telefone</p>
                      <p className="text-muted-foreground">(11) 2941-2295</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">✉️</span>
                    <div>
                      <p className="font-medium text-foreground">E-mail</p>
                      <p className="text-muted-foreground">schiseg@schiseg.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">🕐</span>
                    <div>
                      <p className="font-medium text-foreground">Horário Comercial</p>
                      <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp CTA - Destacado */}
            <div className="space-y-6 animate-fade-in">
              <Card className="shadow-card bg-gradient-to-r from-accent-blue to-primary text-white">
                <CardContent className="p-8 text-center">
                  <span className="text-5xl mb-6 block">💬</span>
                  <h3 className="text-2xl font-bold mb-4">Solicite sua Proposta</h3>
                  <p className="mb-6 text-white/90 text-lg">
                    Fale conosco agora mesmo pelo WhatsApp para solicitar sua proposta personalizada
                  </p>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-white text-accent-blue hover:bg-white/90 border-white font-semibold"
                    onClick={() => window.open('https://wa.me/5511971535470', '_blank')}
                  >
                    Solicitar Proposta no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-4">Nossos Diferenciais</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-accent-blue">✓</span>
                      <span className="text-sm text-muted-foreground">Registrada na SUSEP</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-accent-blue">✓</span>
                      <span className="text-sm text-muted-foreground">Atendimento 24/7</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-accent-blue">✓</span>
                      <span className="text-sm text-muted-foreground">Propostas gratuitas</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-accent-blue">✓</span>
                      <span className="text-sm text-muted-foreground">Total transparência</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;