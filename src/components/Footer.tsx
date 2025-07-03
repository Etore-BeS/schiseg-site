import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/53da31b1-0bb0-4a6e-8c5c-e32a98977e33.png" 
                alt="SCHISEG Logo" 
                className="h-8 w-auto"
              />
              <div>
                <span className="text-xl font-bold">SCHISEG</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Assessoria Corretora de Seguros com mais de 15 anos de experiência, 
              oferecendo transparência e segurança para você e sua família.
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">SUSEP:</span> nº 05062610551236
              </p>
              <p className="text-sm">
                <span className="font-medium">Localização:</span> São Paulo - SP
              </p>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Produtos</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="/produtos/veiculos" className="hover:text-white transition-colors">Seguro de Veículos</a></li>
              <li><a href="/produtos/vida" className="hover:text-white transition-colors">Seguro de Vida</a></li>
              <li><a href="/produtos/residencial" className="hover:text-white transition-colors">Seguro Residencial</a></li>
              <li><a href="/produtos/empresarial" className="hover:text-white transition-colors">Seguro Empresarial</a></li>
              <li><a href="/produtos/saude" className="hover:text-white transition-colors">Saúde e Odonto</a></li>
              <li><a href="/produtos" className="hover:text-white transition-colors">Ver todos</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="/proposta" className="hover:text-white transition-colors">Solicitar Proposta</a></li>
              <li><a href="/sinistro" className="hover:text-white transition-colors">Comunicar Sinistro</a></li>
              <li><a href="/boletim" className="hover:text-white transition-colors">Boletim Online</a></li>
              <li><a href="/informacoes" className="hover:text-white transition-colors">Informações Úteis</a></li>
              <li><a href="/noticias" className="hover:text-white transition-colors">Notícias</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>(11) 2941-2295</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>contato@schiseg.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🕐</span>
                <span>Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2024 SCHISEG Assessoria Corretora de Seguros Ltda. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <a href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="/termos" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="pb-8">
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <p className="text-sm font-medium mb-2">A nossa transparência e a sua segurança</p>
            <p className="text-xs text-primary-foreground/70">
              Empresa registrada na SUSEP - Superintendência de Seguros Privados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;