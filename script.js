document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeSelector = document.getElementById('theme-selector');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const languageToggle = document.getElementById('language-toggle'); // Novo elemento

    // ===========================================
    // 1. LÓGICA DE TEMAS (EXISTENTE)
    // ===========================================

    const baseThemes = [
        'theme-tech', 'theme-forest', 'theme-lava', 'theme-cyber', 'theme-deepsea'
    ];
    const lightModeSuffix = '-light';

    function clearThemes() {
        baseThemes.forEach(cls => {
            body.classList.remove(cls);
            body.classList.remove(cls + lightModeSuffix);
        });
        body.classList.remove('default-light');
    }

    /**
     * Aplica o tema base e o modo (Dark/Light) salvo.
     * @param {string} baseTheme - A classe base (ex: 'theme-cyber' ou 'default').
     * @param {string} mode - 'dark' ou 'light'.
     */
    function applyTheme(baseTheme, mode) {
        clearThemes();

        if (baseTheme === 'default') {
            localStorage.setItem('baseTheme', 'default');

            if (mode === 'light') {
                body.classList.add('default-light');
                localStorage.setItem('themeMode', 'light');
                darkModeToggle.textContent = '🌙';
            } else {
                localStorage.setItem('themeMode', 'dark');
                darkModeToggle.textContent = '☀️';
            }
            return;
        }

        body.classList.add(baseTheme);
        localStorage.setItem('baseTheme', baseTheme);

        if (mode === 'light') {
            body.classList.add(baseTheme + lightModeSuffix);
            localStorage.setItem('themeMode', 'light');
            darkModeToggle.textContent = '🌙';
        } else {
            localStorage.setItem('themeMode', 'dark');
            darkModeToggle.textContent = '☀️';
        }
    }

    // --- Inicialização e Listeners de Tema ---
    const savedBaseTheme = localStorage.getItem('baseTheme') || 'default';
    const savedThemeMode = localStorage.getItem('themeMode') || 'dark';

    themeSelector.value = savedBaseTheme;
    applyTheme(savedBaseTheme, savedThemeMode); // Inicializa o tema

    themeSelector.addEventListener('change', (event) => {
        const newBaseTheme = event.target.value;
        const initialMode = localStorage.getItem('themeMode') || 'dark';
        applyTheme(newBaseTheme, initialMode);
    });

    darkModeToggle.addEventListener('click', () => {
        const currentBaseTheme = localStorage.getItem('baseTheme') || 'default';
        const currentMode = localStorage.getItem('themeMode') || 'dark';
        const newMode = (currentMode === 'dark') ? 'light' : 'dark';
        applyTheme(currentBaseTheme, newMode);
    });

    // ===========================================
    // 2. LÓGICA DE TRADUÇÃO (NOVA)
    // ===========================================

    const translations = {
        'pt': {
            'nav-resume': 'Resumo', 'nav-projects': 'Projetos', 'nav-certs': 'Certificações', 'nav-contact': 'Contato',
            'theme-default': 'Tema Padrão', 'theme-tech': 'Tech Blue', 'theme-forest': 'Forest Green',
            'theme-lava': 'Lava Red', 'theme-cyber': 'Cyber Purple', 'theme-deepsea': 'Deep Sea',
            'resume-title': 'Resumo Profissional', 'profile-subtitle': 'AWS | Networking | Linux | Monitoring',
            'resume-p1': 'Sou um Estudante de Redes de Computadores que busca ativamente o aprofundamento técnico e a experiência prática. Sou genuinamente motivado pelo aprendizado contínuo, com um forte interesse em tecnologias emergentes e na resolução eficiente de problemas complexos de infraestrutura.',
            'resume-p2': 'Minha área de especialização abrange diversas frentes cruciais do TI moderno. Tenho dedicado tempo ao estudo e à aplicação prática de serviços de nuvem (Cloud Computing), configuração e virtualização de servidores. Em todas as iniciativas, meu foco estratégico é a tríade: Segurança, Disponibilidade e Escalabilidade dos sistemas.',
            'resume-p3': 'Possuo experiência prática comprovada, o que diferencia meu aprendizado teórico. Participei da implantação e configuração de ambientes em nuvem nas principais plataformas do mercado, AWS e Azure. Além disso, domino a configuração de ambientes virtuais e reais, sempre implementando as melhores práticas para garantir a máxima segurança desses ambientes.',
            'link-view-projects': 'Ver Projetos →',
            'projects-title': 'Projetos em Destaque', 'proj1-title': 'Monitoramento de servidores com Zabbix + Grafana:',
            'proj1-p1': 'Este projeto demonstrou minha capacidade de implementar soluções de monitoramento robustas que impactam diretamente a eficiência operacional. Utilizamos o Zabbix para a coleta de dados e o Grafana para a visualização, otimizando de forma significativa a gestão da infraestrutura de servidores.',
            'proj1-p2': 'O Zabbix foi rigorosamente configurado para coletar métricas vitais e detalhadas — como uso de CPU, memória, espaço em disco e status de serviços — sobre o desempenho dos servidores. A integração com o Grafana permitiu a criação de dashboards personalizados, tornando as métricas complexas claras, acessíveis e intuitivas para a análise da performance.',
            'proj1-p3': 'Embora tivéssemos desafios iniciais com a configuração dos agentes e a integração das ferramentas, a flexibilidade do Zabbix e do Grafana nos permitiu fazer ajustes específicos para cada necessidade. O resultado foi a implementação bem-sucedida de um sistema que gera alertas em tempo real, o que permitiu uma resposta proativa a anomalias, reduzindo o tempo de inatividade e aumentando a estabilidade do serviço.',
            'proj2-title': 'Rede multicloud AWS e Azure:', 'proj2-p1': 'Este projeto estratégico focou na criação de uma rede multi-cloud de alta performance entre AWS e Azure, com o objetivo principal de estabelecer uma comunicação segura e estável para garantir redundância e alta disponibilidade dos serviços distribuídos.',
            'proj2-p2': 'O planejamento foi detalhado e essencial, envolvendo o desenho minucioso da topologia de rede, definição de faixas de IP compatíveis e configuração de sub-redes e tabelas de roteamento em ambas as nuvens. O ponto crucial foi permitir a comunicação direta entre instâncias na AWS (VPC) e máquinas virtuais no Azure (Virtual Network), sem depender do acesso pela internet pública.',
            'proj2-p3': 'O sucesso deste projeto demonstrou minha competência em arquiteturas de rede avançadas e modernas. Ele resultou em uma solução flexível e resiliente, que permite aproveitar o melhor de cada fornecedor de nuvem, sendo uma iniciativa estratégica para a continuidade e expansão dos negócios.',
            'certs-title': 'Certificações', 'connect-title': 'Conecte-se Comigo',
            'easter-title': "It's dangerous to go alone! Take this!",
            'easter-p1': 'Você achou a parte secreta do meu site!', 'easter-p2': 'Poucas pessoas sabem sobre esse segredo.',
            'easter-p3': 'Não conta isso pra ninguém, e meus parabéns.',
            'footer-text': '© 2025 João Paulo. Todos os direitos reservados.',
            'aria-lang-label': 'Alternar idioma para Inglês'
        },
        'en': {
            'nav-resume': 'Summary', 'nav-projects': 'Projects', 'nav-certs': 'Certifications', 'nav-contact': 'Contact',
            'theme-default': 'Default Theme', 'theme-tech': 'Tech Blue', 'theme-forest': 'Forest Green',
            'theme-lava': 'Lava Red', 'theme-cyber': 'Cyber Purple', 'theme-deepsea': 'Deep Sea',
            'resume-title': 'Professional Summary', 'profile-subtitle': 'AWS | Networking | Linux | Monitoring',
            'resume-p1': 'I am a Computer Networks Student actively seeking technical depth and practical experience. I am genuinely driven by continuous learning, with a strong interest in emerging technologies and the efficient resolution of complex infrastructure problems.',
            'resume-p2': 'My area of specialization covers several crucial fronts of modern IT. I have dedicated time to studying and practically applying cloud services (Cloud Computing), configuration, and server virtualization. In all initiatives, my strategic focus is the triad: Security, Availability, and Scalability of systems.',
            'resume-p3': 'I possess proven practical experience, which distinguishes my theoretical learning. I participated in the deployment and configuration of cloud environments on the market\'s main platforms, AWS and Azure. Furthermore, I master the configuration of virtual and real environments, always implementing best practices to ensure the maximum security of these environments.',
            'link-view-projects': 'View Projects →',
            'projects-title': 'Featured Projects', 'proj1-title': 'Server monitoring with Zabbix + Grafana:',
            'proj1-p1': 'This project demonstrated my ability to implement robust monitoring solutions that directly impact operational efficiency. We used Zabbix for data collection and Grafana for visualization, significantly optimizing server infrastructure management.',
            'proj1-p2': 'Zabbix was rigorously configured to collect vital and detailed metrics — such as CPU usage, memory, disk space, and service status — on server performance. The integration with Grafana allowed for the creation of customized dashboards, making complex metrics clear, accessible, and intuitive for performance analysis.',
            'proj1-p3': 'Although we had initial challenges with agent configuration and tool integration, the flexibility of Zabbix and Grafana allowed us to make specific adjustments for every need. The result was the successful implementation of a system that generates real-time alerts, which allowed for a proactive response to anomalies, reducing downtime and increasing service stability.',
            'proj2-title': 'AWS and Azure multicloud network:', 'proj2-p1': 'This strategic project focused on creating a high-performance multi-cloud network between AWS and Azure, with the main objective of establishing secure and stable communication to ensure redundancy and high availability of distributed services.',
            'proj2-p2': 'The planning was detailed and essential, involving the meticulous design of the network topology, definition of compatible IP ranges, and configuration of subnets and routing tables in both clouds. The crucial point was to allow direct communication between instances in the AWS (VPC) and virtual machines in the Azure (Virtual Network), without relying on public internet access.',
            'proj2-p3': 'The success of this project demonstrated my competence in advanced and modern network architectures. It resulted in a flexible and resilient solution that allows leveraging the best of each cloud provider, making it a strategic initiative for business continuity and expansion.',
            'certs-title': 'Certifications', 'connect-title': 'Connect With Me',
            'easter-title': "It's dangerous to go alone! Take this!",
            'easter-p1': 'You found the secret part of my website!', 'easter-p2': 'Few people know about this secret.',
            'easter-p3': 'Don\'t tell anyone, and congratulations.',
            'footer-text': '© 2025 João Paulo. All rights reserved.' ,
            'aria-lang-label': 'Switch language to Portuguese'
        }
    };

    let currentLang = localStorage.getItem('language') || 'pt';

    function applyTranslation(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // Para <option>, use textContent
                if (element.tagName === 'OPTION') {
                    element.textContent = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key]; // Permite manter tags <strong>, <em>, etc.
                }
            }
        });

        // Atualiza o atributo lang no <html>
        document.documentElement.setAttribute('lang', lang);

        // Atualiza a exibição do botão de idioma
        const otherLang = (lang === 'pt' ? 'EN' : 'PT');
        const langCode = lang.toUpperCase();

        languageToggle.innerHTML = `<span style="color: var(--primary-color);">${langCode}</span> / ${otherLang}`;
        languageToggle.setAttribute('aria-label', translations[lang]['aria-lang-label']);

        // Salva a preferência
        localStorage.setItem('language', lang);
    }

    function toggleLanguage() {
        currentLang = (currentLang === 'pt' ? 'en' : 'pt');
        applyTranslation(currentLang);
    }

    // --- Inicialização e Listener de Idioma ---
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }

    // Aplica a tradução ao carregar a página
    applyTranslation(currentLang);
});