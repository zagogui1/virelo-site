
const Index = () => {
  return (
    <div className="font-poppins bg-gray-50">
      {/* Header */}
      <header id="header" className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center cursor-pointer">
            <img className="h-10 w-auto" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/139c523013-530869c832e5d872d067.png" alt="logotipo moderno minimalista para VIRELO assistente financeiro, azul escuro e verde, design limpo" />
            <span className="ml-2 text-xl font-bold text-blue-900">VIRELO</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-blue-900 hover:text-green-600 font-medium transition duration-300 cursor-pointer">Início</a>
            <a href="#features" className="text-blue-900 hover:text-green-600 font-medium transition duration-300 cursor-pointer">Recursos</a>
            <a href="#plans" className="text-blue-900 hover:text-green-600 font-medium transition duration-300 cursor-pointer">Planos</a>
            <a href="#contact" className="text-blue-900 hover:text-green-600 font-medium transition duration-300 cursor-pointer">Contato</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button id="mobile-menu-button" className="md:hidden text-blue-900 focus:outline-none">
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div id="mobile-menu" className="hidden md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <a href="#home" className="text-blue-900 hover:text-green-600 font-medium transition duration-300 cursor-pointer">Início</a>
            <a href="#features" className="text-blue-900 hover:text-green-600 font-medium transition duration-300 cursor-pointer">Recursos</a>
            <a href="#plans" className="text-blue-900 hover:text-green-600 font-medium transition duration-300 cursor-pointer">Planos</a>
            <a href="#contact" className="text-blue-900 hover:text-green-600 font-medium transition duration-300 cursor-pointer">Contato</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-900 to-blue-800 h-[700px] md:h-[600px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Gerencie as finanças da sua família diretamente pelo WhatsApp.
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Registre gastos, receba relatórios e organize suas finanças com uma simples mensagem. Sem aplicativos para baixar, sem configurações complicadas.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center cursor-pointer transform hover:scale-105 hover:shadow-lg active:scale-95">
                  Experimente Agora
                </button>
                <button className="bg-white hover:bg-gray-100 text-blue-900 font-medium py-3 px-6 rounded-lg transition duration-300 text-center cursor-pointer transform hover:scale-105 hover:shadow-lg active:scale-95">
                  Ver Planos
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img className="w-full max-w-md rounded-lg shadow-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/22feb87aa7-d109c4083f3d6bc4556e.png" alt="smartphone exibindo chat do WhatsApp com bot financeiro, mostrando rastreamento de gastos e relatórios, design moderno e limpo" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Como o VIRELO Funciona</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Gerencie suas finanças em três passos simples, tudo pelo WhatsApp.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-paper-plane text-blue-900 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Envie Seus Gastos</h3>
              <p className="text-gray-600">Simplesmente envie seus gastos via mensagem, foto ou áudio no WhatsApp.</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-robot text-blue-900 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Organização Inteligente</h3>
              <p className="text-gray-600">Nosso bot entende, categoriza e organiza todos os seus dados financeiros.</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-900/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-chart-pie text-blue-900 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Relatórios Automáticos</h3>
              <p className="text-gray-600">Receba relatórios mensais detalhados e insights sem nenhum esforço extra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Principais Recursos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Ferramentas poderosas para ajudar você a assumir o controle das suas finanças.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-users text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Controle Individual e Familiar</h3>
              <p className="text-gray-600">Rastreie gastos para você ou toda sua família em um só lugar. Defina orçamentos e monitore hábitos de gastos juntos.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-file-excel text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Geração Automática de Documentos</h3>
              <p className="text-gray-600">Receba planilhas formatadas profissionalmente e relatórios em PDF gerados automaticamente e entregues para você.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-microphone text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Reconhecimento de Áudio e Recibos</h3>
              <p className="text-gray-600">Envie notas de voz ou fotos de recibos, e nossa tecnologia OCR extrairá e registrará todos os detalhes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Preços Simples e Transparentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Escolha o plano que funciona melhor para você e sua família.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Individual Plan */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-900 p-6 text-center">
                <h3 className="text-xl font-bold text-white">Individual</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-blue-900">R$19</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-600 mr-2"></i>
                    <span className="text-gray-700">Conta de usuário único</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-600 mr-2"></i>
                    <span className="text-gray-700">Rastreamento ilimitado de gastos</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-600 mr-2"></i>
                    <span className="text-gray-700">Relatórios mensais em PDF</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-600 mr-2"></i>
                    <span className="text-gray-700">Análises básicas</span>
                  </li>
                </ul>
                <button className="block w-full bg-blue-900 hover:bg-blue-800 text-white text-center font-medium py-3 rounded-lg transition duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg active:scale-95">
                  Começar
                </button>
              </div>
            </div>
            
            {/* Family Plan */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="bg-blue-900 p-6 text-center">
                <h3 className="text-xl font-bold text-white">Família</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-blue-900">R$29,90</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-600 mr-2"></i>
                    <span className="text-gray-700">Até 5 membros da família</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-600 mr-2"></i>
                    <span className="text-gray-700">Gastos compartilhados e individuais</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-600 mr-2"></i>
                    <span className="text-gray-700">Relatórios avançados em PDF e Excel</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-600 mr-2"></i>
                    <span className="text-gray-700">Análises avançadas e orçamento</span>
                  </li>
                </ul>
                <button className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-medium py-3 rounded-lg transition duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg active:scale-95">
                  Começar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">O Que Nossos Usuários Dizem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Junte-se a milhares de usuários satisfeitos que transformaram seu gerenciamento financeiro.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="Usuário" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-blue-900">Carlos Silva</h4>
                  <p className="text-sm text-gray-500">São Paulo, SP</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"O VIRELO mudou como eu gerencio minhas finanças. Poder simplesmente enviar uma mensagem no WhatsApp e ter tudo organizado automaticamente é incrível!"</p>
              <div className="mt-4 flex text-green-600">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="Usuário" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-blue-900">Mariana Costa</h4>
                  <p className="text-sm text-gray-500">Rio de Janeiro, RJ</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Como mãe de três filhos, acompanhar os gastos da família sempre foi um desafio. Com o VIRELO, posso envolver toda a família e manter tudo organizado em um só lugar."</p>
              <div className="mt-4 flex text-green-600">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg" alt="Usuário" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-blue-900">Roberto Mendes</h4>
                  <p className="text-sm text-gray-500">Belo Horizonte, MG</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Os relatórios mensais são fantásticos. Finalmente tenho uma visão clara de onde meu dinheiro está indo, e isso me ajudou a economizar significativamente nos últimos meses."</p>
              <div className="mt-4 flex text-green-600">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 md:py-24 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pronto para transformar seu gerenciamento financeiro?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">Junte-se a milhares de usuários que já estão simplificando suas finanças com o VIRELO.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg active:scale-95">
              Teste Grátis
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-900 font-medium py-3 px-8 rounded-lg transition duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg active:scale-95">
              Ver Planos
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Entre em Contato</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tem dúvidas ou precisa de ajuda? Estamos aqui para você.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-900/10 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-brands fa-whatsapp text-blue-900"></i>
                  </div>
                  <span className="text-gray-700 hover:text-green-600 transition duration-300 cursor-pointer">+55 (11) 99999-9999</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-900/10 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-solid fa-envelope text-blue-900"></i>
                  </div>
                  <span className="text-gray-700 hover:text-green-600 transition duration-300 cursor-pointer">contato@virelo.com.br</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-900/10 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-brands fa-instagram text-blue-900"></i>
                  </div>
                  <span className="text-gray-700 hover:text-green-600 transition duration-300 cursor-pointer">@virelo.financas</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Envie-nos uma mensagem</h3>
              
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">E-mail</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img className="h-8 w-auto" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/139c523013-96497b9b95b5293eead4.png" alt="logotipo moderno minimalista para VIRELO assistente financeiro, branco e verde, design limpo" />
                <span className="ml-2 text-xl font-bold">VIRELO</span>
              </div>
              <p className="text-white/80 mb-4">Simplificando as finanças familiares através do WhatsApp.</p>
              <div className="flex space-x-4">
                <button className="text-white hover:text-green-600 transition duration-300">
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                </button>
                <button className="text-white hover:text-green-600 transition duration-300">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </button>
                <button className="text-white hover:text-green-600 transition duration-300">
                  <i className="fa-solid fa-envelope text-xl"></i>
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white/80 hover:text-green-600 transition duration-300">Início</a></li>
                <li><a href="#features" className="text-white/80 hover:text-green-600 transition duration-300">Recursos</a></li>
                <li><a href="#plans" className="text-white/80 hover:text-green-600 transition duration-300">Planos</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-green-600 transition duration-300">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><button className="text-white/80 hover:text-green-600 transition duration-300">Termos de Serviço</button></li>
                <li><button className="text-white/80 hover:text-green-600 transition duration-300">Política de Privacidade</button></li>
                <li><button className="text-white/80 hover:text-green-600 transition duration-300">Segurança de Dados</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Mantenha-se Atualizado</h4>
              <p className="text-white/80 mb-4">Inscreva-se em nossa newsletter para dicas e atualizações.</p>
              <form className="flex">
                <input type="email" placeholder="Seu e-mail" className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800" />
                <button type="submit" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg transition duration-300">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2023 VIRELO. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-green-600 hover:bg-green-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition duration-300">
          <i className="fa-brands fa-whatsapp text-2xl"></i>
        </button>
      </div>

      {/* Font Awesome and Scripts */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" crossOrigin="anonymous"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          // Mobile menu toggle
          document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuButton && mobileMenu) {
              mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
              });
            }
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                  window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              });
            });
          });
        `
      }} />
    </div>
  );
};

export default Index;
