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

        <div className="max-w-6xl mx-auto space-y-8">
          {/* WhatsApp CTA - Destacado */}
          <Card className="shadow-card bg-gradient-to-r from-accent-blue to-primary text-white">
            <CardContent className="p-12 text-center">
              <img 
                src="/lovable-uploads/5897e80b-ad2b-4088-b1aa-a21bd7f4d0a8.png" 
                alt="WhatsApp" 
                className="w-16 h-16 mx-auto mb-8 filter brightness-0 invert"
              />
              <h3 className="text-3xl font-bold mb-6">Solicite sua Proposta</h3>
              <p className="mb-8 text-white/90 text-xl max-w-3xl mx-auto">
                Fale conosco agora mesmo pelo WhatsApp para solicitar sua proposta personalizada
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white text-accent-blue hover:bg-white/90 border-white font-semibold text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/5511971535470', '_blank')}
              >
                Solicitar Proposta no WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Informações em Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center">
                    <span className="text-2xl mr-2"></span>
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

            {/* Trust Indicators */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center">
                    <span className="text-2xl mr-2"></span>
                    Nossos Diferenciais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-blue text-xl">✓</span>
                    <div>
                      <p className="font-medium text-foreground">Registrada na SUSEP</p>
                      <p className="text-muted-foreground text-sm">Corretora oficial e regulamentada</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-blue text-xl">✓</span>
                    <div>
                      <p className="font-medium text-foreground">Atendimento 24/7</p>
                      <p className="text-muted-foreground text-sm">Suporte sempre disponível</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-blue text-xl">✓</span>
                    <div>
                      <p className="font-medium text-foreground">Propostas gratuitas</p>
                      <p className="text-muted-foreground text-sm">Cotações sem compromisso</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent-blue text-xl">✓</span>
                    <div>
                      <p className="font-medium text-foreground">Total transparência</p>
                      <p className="text-muted-foreground text-sm">Condições claras e justas</p>
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