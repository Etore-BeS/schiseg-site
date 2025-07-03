import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductsSection = () => {
  const productCategories = [
    {
      title: "Seguro de Veículos",
      description: "Proteção completa para seu veículo com cobertura abrangente",
      icon: "🚗",
      features: ["Empresarial", "Premium", "Táxi", "Jovem", "Mulher", "Sênior", "Caminhão"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Seguro de Vida e Família",
      description: "Segurança e tranquilidade para quem você mais ama",
      icon: "👨‍👩‍👧‍👦",
      features: ["Vida Individual", "Vida em Grupo", "Vida Empresarial", "Vida Mais Mulher"],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Seguros Empresariais",
      description: "Soluções completas para proteger seu negócio",
      icon: "🏢",
      features: ["Máquinas", "Garantia", "Perfumarias", "Concessionárias", "Academias"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Seguro Residencial",
      description: "Proteja seu lar e patrimônio com tranquilidade",
      icon: "🏠",
      features: ["Apartamentos", "Condomínio", "Residencial Premium", "Veraneio"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Saúde e Odontológico",
      description: "Cuidado completo com sua saúde e bem-estar",
      icon: "🏥",
      features: ["Saúde Ocupacional", "Odontológico", "Planos Familiares"],
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Equipamentos Portáteis",
      description: "Proteção para seus dispositivos móveis e eletrônicos",
      icon: "📱",
      features: ["Câmera", "Filmadora", "Notebook", "Celular", "Tablet"],
      color: "bg-indigo-50 border-indigo-200"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {productCategories.map((product, index) => (
            <Card 
              key={index} 
              className={`${product.color} shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 animate-fade-in group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {product.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {product.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  {product.features.length > 4 && (
                    <div className="text-sm text-primary font-medium">
                      +{product.features.length - 4} outras opções
                    </div>
                  )}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  Solicitar Cotação
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-card rounded-2xl p-8 text-center shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">Outros Serviços</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-2">💰</div>
              <span className="text-sm text-muted-foreground">Consórcio</span>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🌱</div>
              <span className="text-sm text-muted-foreground">Capitalização</span>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏦</div>
              <span className="text-sm text-muted-foreground">Previdência</span>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💳</div>
              <span className="text-sm text-muted-foreground">Soluções Financeiras</span>
            </div>
          </div>
          <Button variant="cta" size="lg">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;