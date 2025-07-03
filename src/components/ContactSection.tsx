import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import locationIcon from "@/assets/location.jpg";
import phoneIcon from "@/assets/phone.jpg";
import emailIcon from "@/assets/email.jpg";
import clockIcon from "@/assets/clock.jpg";
import whatsappIcon from "@/assets/whatsapp-chat.jpg";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Solicite sua Proposta
              </CardTitle>
              <p className="text-muted-foreground">
                Preencha o formulário e receba uma cotação personalizada
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product">Produto de Interesse</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o produto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="veiculos">Seguro de Veículos</SelectItem>
                      <SelectItem value="vida">Seguro de Vida</SelectItem>
                      <SelectItem value="residencial">Seguro Residencial</SelectItem>
                      <SelectItem value="empresarial">Seguro Empresarial</SelectItem>
                      <SelectItem value="saude">Saúde e Odontológico</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  placeholder="Descreva suas necessidades ou tire suas dúvidas..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="cta" className="w-full">
                Enviar Solicitação
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda com nossa política de privacidade
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Contact Details */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <div className="w-6 h-6 mr-2 rounded overflow-hidden">
                    <img src={locationIcon} alt="Location" className="w-full h-full object-cover" />
                  </div>
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 mt-0.5 rounded overflow-hidden">
                    <img src={locationIcon} alt="Address" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Endereço</p>
                    <p className="text-muted-foreground">São Paulo - SP</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 mt-0.5 rounded overflow-hidden">
                    <img src={phoneIcon} alt="Phone" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefone</p>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 mt-0.5 rounded overflow-hidden">
                    <img src={emailIcon} alt="Email" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">E-mail</p>
                    <p className="text-muted-foreground">contato@schiseg.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 mt-0.5 rounded overflow-hidden">
                    <img src={clockIcon} alt="Schedule" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Horário de Atendimento</p>
                    <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="shadow-card bg-gradient-to-r from-accent-blue to-primary text-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">Atendimento WhatsApp</h3>
                <p className="mb-4 text-white/90">
                  Fale conosco agora mesmo pelo WhatsApp para um atendimento mais rápido
                </p>
                <Button 
                  variant="outline" 
                  className="bg-white text-accent-blue hover:bg-white/90 border-white"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  Chamar no WhatsApp
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
    </section>
  );
};

export default ContactSection;