"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { MessageCircle, Linkedin, Mail, Phone, CheckCircle, Clock, DollarSign, Target, Brain } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen font-mono bg-zinc-950 text-zinc-200">
      {/* Tech Background */}
      <div className="fixed inset-0 z-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            backgroundPosition: `${scrollY * 0.02}px ${scrollY * 0.02}px`,
          }}
        ></div>

        {/* Glowing dots */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                boxShadow: `0 0 ${Math.random() * 10 + 5}px ${Math.random() * 3 + 1}px rgba(59, 130, 246, 0.5)`,
              }}
            />
          ))}
        </div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/90 to-zinc-950"></div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/13978002211"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 shadow-green-500/20"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header with Photo */}
        <header className="sticky top-0 z-40 backdrop-blur-md bg-zinc-900/70 border-b border-zinc-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg shadow-blue-500/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/perfil8-Zuo6iK6maA24ktStC7gvwTLhCWu5I5.png"
                  alt="Reny Grando"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Reny Grando
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/13978002211"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 text-zinc-300 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="tracking-wider">(13) 97800-2211</span>
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white tracking-wider font-mono">Falar Agora</Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 mb-6 tracking-tight leading-tight">
              PARE de Operar no Piloto Automático. ACELERE com Inteligência Artificial.
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 tracking-wide">
              Sua empresa está presa em 2024? Processos lentos, custos altos e oportunidades perdidas estão te impedindo
              de decolar? Chega de remar contra a maré digital!
            </p>
            <p className="text-xl md:text-2xl text-zinc-200 mb-10 tracking-wide">
              A verdade é dura: Seus concorrentes já estão usando IA para se tornarem mais rápidos, mais inteligentes e
              mais lucrativos. A pergunta não é se você deve automatizar, mas quando você vai parar de perder dinheiro e
              começar a liderar a transformação.
            </p>
            <div className="mb-8">
              <p className="text-xl text-yellow-400 font-bold mb-6 tracking-wide">
                🔥 Quer descobrir AGORA como a IA pode revolucionar SEU negócio em menos de 30 minutos? 🔥
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto tracking-wider font-mono animate-pulse"
              >
                SIM, QUERO UMA ANÁLISE RÁPIDA E GRATUITA!
              </Button>
              <p className="text-zinc-400 mt-4 tracking-wide">
                Ou me chame direto no WhatsApp:{" "}
                <a href="https://wa.me/13978002211" className="text-blue-400 hover:text-blue-300 underline">
                  13 97800-2211
                </a>{" "}
                - Reny Grando
              </p>
            </div>
          </motion.div>
        </section>

        {/* Problems Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-zinc-100 text-center mb-12 tracking-tight"
            >
              Você Sente que Está Apagando Incêndios em Vez de Construir um Império?
            </motion.h2>
            <p className="text-xl text-zinc-400 mb-10 text-center tracking-wide">
              Seu dia a dia é uma batalha constante contra:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Clock,
                  title: 'O "Ladrão de Tempo"',
                  description:
                    "Tarefas manuais e repetitivas que sugam a energia da sua equipe e poderiam ser feitas em segundos por um robô?",
                },
                {
                  icon: DollarSign,
                  title: 'O "Ralo de Dinheiro"',
                  description:
                    "Custos operacionais que parecem ter vida própria, crescendo sem parar e esmagando sua lucratividade?",
                },
                {
                  icon: Target,
                  title: 'A "Muralha da Escala"',
                  description:
                    "A dificuldade em crescer sem que a complexidade e os erros explodam, travando seu avanço?",
                },
                {
                  icon: Brain,
                  title: 'O "Fantasma da Oportunidade"',
                  description:
                    'Decisões baseadas em "achismos" enquanto dados valiosos se perdem, deixando você para trás?',
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-colors shadow-lg shadow-blue-500/5 h-full">
                      <CardContent className="p-6">
                        <Icon className="w-10 h-10 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-zinc-100 tracking-tight">{item.title}</h3>
                        <p className="text-zinc-400 tracking-wide">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            <p className="text-xl text-zinc-300 mt-10 text-center tracking-wide">
              Essa não precisa ser a sua realidade. Existe um caminho para transformar o caos em controle, a lentidão em
              velocidade e a incerteza em previsibilidade lucrativa.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-20 bg-zinc-900/50 backdrop-blur-sm border-y border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-10 items-center"
            >
              <div className="md:w-1/3">
                <div className="relative">
                  {/* Tech frame effect */}
                  <div className="absolute inset-0 border-2 border-blue-500/30 rounded-lg transform rotate-3"></div>
                  <div className="absolute inset-0 border-2 border-purple-500/30 rounded-lg transform -rotate-3"></div>

                  {/* Main image */}
                  <div className="relative z-10 p-1 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/perfil8-Zuo6iK6maA24ktStC7gvwTLhCWu5I5.png"
                      alt="Reny Grando"
                      width={400}
                      height={400}
                      className="object-cover rounded"
                    />

                    {/* Tech overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent rounded"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-900 to-transparent">
                      <div className="text-xs text-zinc-500 font-mono">// RENY.GRANDO</div>
                      <div className="text-xs text-blue-500 font-mono">{">"} IA SPECIALIST</div>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex justify-center mt-6 gap-4">
                  <a
                    href="https://linkedin.com/in/renygrando"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 p-2 rounded hover:bg-blue-900/30 transition-colors border border-zinc-700 hover:border-blue-500"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </a>
                  <a
                    href="https://wa.me/13978002211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 p-2 rounded hover:bg-green-900/30 transition-colors border border-zinc-700 hover:border-green-500"
                  >
                    <Phone className="w-5 h-5 text-green-400" />
                  </a>
                  <a
                    href="mailto:contato@renygrando.com.br"
                    className="bg-zinc-800 p-2 rounded hover:bg-purple-900/30 transition-colors border border-zinc-700 hover:border-purple-500"
                  >
                    <Mail className="w-5 h-5 text-purple-400" />
                  </a>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-6 tracking-tight">
                  Meu Nome é Reny Grando, e Eu Sou o Arquiteto da Sua Revolução Digital.
                </h2>
                <p className="text-zinc-400 mb-4 tracking-wide">
                  Como Gestor de Automação com IA, eu não vendo software, eu entrego liberdade e poder. Liberdade da
                  tirania das tarefas manuais e o poder de usar a tecnologia mais avançada do planeta para esmagar suas
                  metas.
                </p>
                <p className="text-zinc-400 tracking-wide">
                  Minha missão é simples: fazer a Inteligência Artificial trabalhar para você, transformando seus
                  maiores desafios em suas maiores vantagens competitivas. Juntos, vamos construir uma operação tão
                  eficiente que seus concorrentes vão se perguntar qual é o seu segredo.
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="bg-blue-900/20 text-blue-400 text-xs px-3 py-1 rounded border border-blue-500/30 font-mono">
                    &lt;IA_SPECIALIST/&gt;
                  </span>
                  <span className="bg-purple-900/20 text-purple-400 text-xs px-3 py-1 rounded border border-purple-500/30 font-mono">
                    &lt;AUTOMATION_EXPERT/&gt;
                  </span>
                  <span className="bg-cyan-900/20 text-cyan-400 text-xs px-3 py-1 rounded border border-cyan-500/30 font-mono">
                    &lt;DIGITAL_TRANSFORMATION/&gt;
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-zinc-100 text-center mb-12 tracking-tight"
            >
              Imagine o Seu Negócio Turbinado com IA:
            </motion.h2>

            <div className="space-y-6">
              {[
                {
                  title: "Operação 24/7 Implacável",
                  description:
                    "Seus processos mais críticos rodando sem parar, com precisão militar, enquanto você foca no que realmente importa.",
                },
                {
                  title: "Lucratividade Exponencial",
                  description:
                    "Veja seus custos despencarem e sua eficiência ir às alturas, liberando capital para investir em crescimento.",
                },
                {
                  title: "Decisões de Mestre",
                  description:
                    "Tenha o poder da IA analisando dados e prevendo cenários, transformando intuição em certeza e risco em oportunidade.",
                },
                {
                  title: "Clientes Fanáticos",
                  description:
                    "Ofereça uma experiência tão personalizada e eficiente que seus clientes não apenas comprarão, mas se tornarão seus maiores defensores.",
                },
                {
                  title: "Blindagem Contra o Futuro",
                  description: "Torne sua empresa ágil, adaptável e pronta para dominar qualquer mudança no mercado.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 items-start bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 hover:border-blue-500/30 transition-colors"
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 tracking-tight">{benefit.title}</h3>
                    <p className="text-zinc-400 tracking-wide">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="container mx-auto px-4 py-20 bg-zinc-900/50 backdrop-blur-sm border-y border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-zinc-100 text-center mb-12 tracking-tight"
            >
              Como Desbloqueamos Esse Potencial Juntos?
            </motion.h2>
            <p className="text-xl text-zinc-400 mb-10 text-center tracking-wide">
              Minha abordagem é prática, personalizada e focada 100% no seu resultado:
            </p>

            <div className="space-y-12">
              {[
                {
                  title: "Mergulho Profundo",
                  description:
                    "Analisamos juntos seus processos para encontrar exatamente onde a IA vai gerar mais valor, mais rápido.",
                },
                {
                  title: "Arquitetura da Solução",
                  description:
                    "Desenho uma estratégia de automação sob medida, usando as ferramentas de IA certas para seus desafios, sem soluções de prateleira.",
                },
                {
                  title: "Implementação Mão na Massa",
                  description:
                    "Coloco a mão na massa para construir, testar e implementar robôs (RPAs), chatbots e modelos de IA que funcionam no mundo real.",
                },
                {
                  title: "Integração Perfeita",
                  description:
                    "Garanto que a IA converse com seus sistemas atuais, criando um fluxo de trabalho poderoso e sem atritos.",
                },
                {
                  title: "Empoderamento da Equipe",
                  description:
                    "Treino seu time para não apenas usar, mas amar as novas ferramentas, garantindo adoção e sucesso a longo prazo.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-blue-400 font-mono text-xl mt-1">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 flex-1">
                      <h3 className="text-2xl font-bold text-zinc-100 tracking-tight">{step.title}</h3>
                      <p className="text-zinc-400 mt-2 tracking-wide">{step.description}</p>
                    </div>
                  </div>
                  {index < 4 && <div className="absolute left-6 top-14 w-0.5 h-10 bg-blue-500/30"></div>}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-zinc-100 text-center mb-12 tracking-tight"
            >
              Por Que Confiar em Mim para Ser Seu Guia Nessa Jornada?
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Experiência Comprovada",
                  description:
                    "Trago anos de batalha no front da IA e automação, com um histórico de transformações reais em diversos negócios.",
                },
                {
                  title: "Zero Tecniquês",
                  description:
                    "Falo a sua língua. Traduzo a complexidade da IA em resultados de negócio claros e compreensíveis.",
                },
                {
                  title: "Obsessão por ROI",
                  description:
                    "Minha bússola aponta sempre para o seu retorno sobre o investimento. Se não vai dar lucro, não fazemos.",
                },
                {
                  title: "Parceria Real",
                  description:
                    "Não sou um fornecedor; sou seu braço direito em tecnologia, comprometido com seu sucesso como se fosse o meu.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-colors shadow-lg shadow-blue-500/5 h-full">
                    <CardContent className="p-6">
                      <div className="text-xs text-blue-500 font-mono mb-2">
                        {">"} TRUST_FACTOR_{index + 1}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-zinc-100 tracking-tight">{item.title}</h3>
                      <p className="text-zinc-400 tracking-wide">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-zinc-400 tracking-wide">
                Conecte-se Comigo: Veja meu trabalho e minhas conexões no LinkedIn:
                <a
                  href="https://linkedin.com/in/renygrando"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 ml-1"
                >
                  Reny Grando
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container mx-auto px-4 py-20 bg-zinc-900/50 backdrop-blur-sm border-y border-zinc-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-zinc-100 mb-6 tracking-tight"
            >
              A Hora da Decisão é AGORA.
            </motion.h2>
            <p className="text-xl text-zinc-400 mb-8 tracking-wide">
              Você pode continuar operando como sempre fez e esperar resultados diferentes (spoiler: não vai acontecer).
              Ou pode dar o primeiro passo para se juntar à elite de empresas que estão definindo o futuro HOJE.
            </p>
            <p className="text-2xl text-zinc-100 font-bold mb-8 tracking-tight">Qual caminho você escolhe?</p>
            <p className="text-xl text-zinc-400 mb-10 tracking-wide">
              Não espere mais um dia para destravar o poder da IA. Sua concorrência não está esperando.
            </p>

            <div className="mb-10">
              <p className="text-xl text-zinc-400 mb-6 tracking-wide">
                Clique Abaixo, Envie um Email ou Me Ligue Agora!
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto tracking-wider font-mono"
              >
                QUERO CONVERSAR SOBRE O FUTURO DA MINHA EMPRESA!
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:contato@renygrando.com.br"
                className="flex items-center gap-2 text-zinc-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="tracking-wider font-mono">contato@renygrando.com.br</span>
              </a>
              <a
                href="https://wa.me/13978002211"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="tracking-wider font-mono">(13) 97800-2211</span>
              </a>
              <a
                href="https://linkedin.com/in/renygrando"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="tracking-wider font-mono">Conecte-se Comigo</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-10 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-zinc-500 tracking-wider font-mono">
              Reny Grando - Seu Parceiro Estratégico em Automação com Inteligência Artificial.
            </p>
            <p className="text-zinc-700 text-sm mt-4 font-mono">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
