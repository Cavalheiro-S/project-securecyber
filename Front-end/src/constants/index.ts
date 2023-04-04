import { Binoculars, Fingerprint, GraduationCap, MagnifyingGlass } from "@phosphor-icons/react"
import NoticePath from "../assets/images/carrousel-image.jpg"

const header = {
    links: [
        {
            name: 'Home',
            path: '#home'
        },
        {
            name: 'Sobre',
            path: '#about'
        },
        {
            name: 'Serviços',
            path: '#service'
        },
        {
            name: 'Planos',
            path: '#plan'
        },
    ]
}

const home = {
    title: "Protegendo seus dados, protegendo seu futuro",
    subtitle: "Nossa missão é proteger as informações e dados valiosos de nossos clientes, garantindo que eles possam operar com segurança e tranquilidade."
}

const about = {
    content: {
        paragraphers: [
            "Com anos de experiência no mercado, a SecureCyber oferece uma ampla gama de serviços, incluindo testes de penetração, gerenciamento de risco, consultoria em segurança da informação, gerenciamento de identidade e acesso, monitoramento de segurança, investigação forense digital, resposta a incidentes de segurança, treinamento de conscientização em segurança, auditoria de segurança e gerenciamento de vulnerabilidades.",
            "Nossos especialistas altamente qualificados são capazes de fornecer soluções sob medida para atender às necessidades de segurança específicas de nossos clientes. Nossa equipe trabalha em estreita colaboração com os clientes para entender seus negócios, avaliar riscos e projetar soluções que protejam seus ativos e informações críticas.",
            "Nosso compromisso com a excelência em serviço é inabalável. Estamos dedicados a fornecer serviços de cibersegurança de primeira linha que atendam aos mais altos padrões de qualidade. Com a SecureCyber, nossos clientes têm a tranquilidade de saber que seus dados estão protegidos por especialistas líderes no setor.",
            "Se você está procurando um parceiro confiável em cibersegurança, não procure mais do que a SecureCyber. Entre em contato conosco hoje para saber como podemos ajudá-lo a proteger seus ativos e informações críticas."
        ]
    }
}

const services = {
    cards: [
        {
            name: 'Testes de penetração',
            description: 'Avaliação de vulnerabilidades da rede e sistemas para identificar possíveis pontos de entrada de invasores.',
            icon: Binoculars
        },
        {
            name: 'Monitoramento de segurança',
            description: 'Acompanhamento contínuo das atividades de rede e sistemas em busca de atividades suspeitas ou maliciosas.',
            icon: MagnifyingGlass
        },
        {
            name: 'Análise de vulnerabilidade',
            description: 'Identificação e correção de vulnerabilidades conhecidas em sistemas e softwares para evitar ataques cibernéticos.',
            icon: Fingerprint
        },
        {
            name: 'Treinamento de conscientização em segurança',
            description: 'Capacitação de funcionários para identificar e evitar riscos de segurança, como phishing e engenharia social.',
            icon: GraduationCap
        }
    ]

}

const plans = {
    cards: [
        {
            name: 'Plano Básico',
            value: '1.000,00',
            options: [
                {
                    name: 'Testes de penetração',
                    included: true
                },
                {
                    name: 'Monitoramento de segurança',
                    included: true
                },
                {
                    name: 'Análise de vulnerabilidade',
                    included: false
                },
                {
                    name: 'Treinamento de conscientização em segurança',
                    included: false
                }
            ]
        },
        {
            name: 'Plano Avançado',
            value: '3.000,00',
            options: [
                {
                    name: 'Testes de penetração',
                    included: true
                },
                {
                    name: 'Monitoramento de segurança',
                    included: true
                },
                {
                    name: 'Análise de vulnerabilidade',
                    included: true
                },
                {
                    name: 'Treinamento de conscientização em segurança',
                    included: true
                }

            ]
        },
        {
            name: 'Plano Intermediário',
            value: '2.000,00',
            options: [
                {
                    name: 'Testes de penetração',
                    included: true
                },
                {
                    name: 'Monitoramento de segurança',
                    included: true
                },
                {
                    name: 'Análise de vulnerabilidade',
                    included: true
                },
                {
                    name: 'Treinamento de conscientização em segurança',
                    included: false
                }
            ]

        },

    ]
}

const notices = {
    cards: [
        {
            image: NoticePath,
            title: "Novidades",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel lorem. Sed euismod, nunc vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel lorem."
        },
        {
            image: NoticePath,
            title: "Novidades",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel lorem. Sed euismod, nunc vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel lorem."
        },
        {
            image: NoticePath,
            title: "Novidades",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel lorem. Sed euismod, nunc vel ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc vel lorem."
        },
    ]
}

export { header, home, about, services, plans, notices }