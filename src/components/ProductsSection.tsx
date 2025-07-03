import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductsSection = () => {
  const productCategories = [
    {
      title: "Agronegócios",
      description: "Proteção para produtores rurais e atividades agropecuárias",
      icon: "🌾",
      products: ["Seguro Grãos", "Horta", "Pomar"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Seguro de Viagem",
      description: "Proteção completa para suas viagens nacionais e internacionais",
      icon: "✈️",
      products: ["Nacional", "Internacional", "Europa", "América do Norte", "Ásia", "Múltiplas Viagens", "Estudante"],
      color: "bg-sky-50 border-sky-200"
    },
    {
      title: "Seguro de Veículos",
      description: "Proteção completa para todos os tipos de veículos",
      icon: "🚗",
      products: ["Auto Empresarial", "Premium", "Táxi", "Jovem", "Mulher", "Sênior", "Caminhão"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Seguro de Vida e Família",
      description: "Segurança e tranquilidade para quem você mais ama",
      icon: "👨‍👩‍👧‍👦",
      products: ["Vida", "Vida em Grupo", "Vida Individual", "Vida Mais Mulher", "Vida Empresarial"],
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      title: "Seguro para Imóveis",
      description: "Proteja seu lar e patrimônio com tranquilidade",
      icon: "🏠",
      products: ["Apartamentos", "Condomínio", "Residencial Habitual", "Premium", "Veraneio", "Fácil"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Seguros Empresariais",
      description: "Soluções completas para proteger seu negócio",
      icon: "🏢",
      products: ["Máquinas e Equipamentos", "Garantia", "Perfumarias", "Concessionárias", "Academias"],
      color: "bg-slate-50 border-slate-200"
    },
    {
      title: "Saúde e Odontológico",
      description: "Cuidado completo com sua saúde e bem-estar",
      icon: "🏥",
      products: ["Saúde Ocupacional", "Odontológico", "Saúde"],
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Equipamentos Portáteis",
      description: "Proteção para seus dispositivos móveis e eletrônicos",
      icon: "📱",
      products: ["Câmera", "Filmadora", "Notebook", "Celular", "Tablet"],
      color: "bg-cyan-50 border-cyan-200"
    },
    {
      title: "Previdência",
      description: "Planejamento para o seu futuro financeiro",
      icon: "💰",
      products: ["Previdência", "Previdência para Crianças"],
      color: "bg-amber-50 border-amber-200"
    },
    {
      title: "Seguro Aluguel",
      description: "Facilite a locação com segurança garantida",
      icon: "🔑",
      products: ["Fiança Locatícia", "Imobiliária"],
      color: "bg-emerald-50 border-emerald-200"
    },
    {
      title: "Soluções Financeiras",
      description: "Crédito e financiamentos para suas necessidades",
      icon: "💳",
      products: ["Empréstimo com Garantia", "Capital de Giro", "Cartão de Crédito", "Crédito Consignado"],
      color: "bg-teal-50 border-teal-200"
    },
    {
      title: "Transportes",
      description: "Proteção para cargas e transportes",
      icon: "🚛",
      products: ["Transporte Internacional", "Embarcador", "Mais Simples"],
      color: "bg-zinc-50 border-zinc-200"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Produtos e Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de seguros e soluções financeiras para pessoas físicas e jurídicas
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {productCategories.map((product, index) => (
            <Card 
              key={index} 
              className={`${product.color} shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 animate-fade-in group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <CardTitle className="text-lg font-bold text-foreground mb-2">
                  {product.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {product.products.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                  {product.products.length > 3 && (
                    <div className="text-sm text-primary font-medium">
                      +{product.products.length - 3} outros
                    </div>
                  )}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Simule e Contrate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-card rounded-2xl p-8 text-center shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-6">Outros Serviços</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🚗</div>
              <span className="text-sm font-medium text-foreground">Carros Seminovos</span>
              <p className="text-xs text-muted-foreground">Centro Automotivo Porto</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏠</div>
              <span className="text-sm font-medium text-foreground">Consórcio</span>
              <p className="text-xs text-muted-foreground">Veículo e Imóvel</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💸</div>
              <span className="text-sm font-medium text-foreground">Capitalização</span>
              <p className="text-xs text-muted-foreground">Título para Aluguel</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎉</div>
              <span className="text-sm font-medium text-foreground">Eventos</span>
              <p className="text-xs text-muted-foreground">Seguro de Eventos</p>
            </div>
          </div>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Proposta Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;