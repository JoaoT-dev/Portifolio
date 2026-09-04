document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeSelector = document.getElementById('theme-selector');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const baseThemes = ['theme-tech', 'theme-forest', 'theme-lava', 'theme-cyber', 'theme-deepsea'];
    const validThemes = ['default', ...baseThemes];
    const translations = {
        pt: {
            'nav-about': 'Sobre', 'nav-projects': 'Projetos', 'nav-experience': 'Experiências', 'nav-contact': 'Contato',
            'theme-default': 'Tema padrão', 'theme-tech': 'Tech Blue', 'theme-forest': 'Forest Green', 'theme-lava': 'Lava Red', 'theme-cyber': 'Cyber Purple', 'theme-deepsea': 'Deep Sea',
            'hero-eyebrow': 'Tecnologia da Informação', 'hero-title': 'Construindo soluções com curiosidade e prática.', 'hero-lede': 'Sou João Tombi, estudante de TI com formação técnica em Redes de Computadores e interesse em desenvolvimento, cloud e infraestrutura.', 'link-view-projects': 'Ver projetos',
            'about-title': 'Sobre mim', 'about-p1': 'Olá! Sou estudante de Tecnologia da Informação, com formação técnica em Redes de Computadores e interesse em desenvolvimento de software, computação e infraestrutura.', 'about-p2': 'Gosto de aprender por meio da prática e transformar conhecimentos em projetos, explorando diferentes áreas da tecnologia e buscando constantemente evoluir minhas habilidades técnicas.', 'about-p3': 'Tenho conhecimentos e experiência acadêmica e prática em desenvolvimento e programação, redes de computadores, Linux e administração de sistemas, cloud computing, monitoramento de infraestrutura, automação e desenvolvimento web.', 'about-p4': 'Minha formação em Redes de Computadores me proporcionou uma base sólida em infraestrutura, enquanto meus estudos e projetos pessoais permitem explorar cada vez mais o desenvolvimento de software e outras áreas da computação.', 'about-p5': 'Atualmente, busco oportunidades de estágio em Tecnologia da Informação, nas quais possa aplicar meus conhecimentos, aprender com profissionais da área e contribuir para projetos reais.',
            'projects-title': 'Projetos em destaque', 'project-portfolio-title': 'Portfólio', 'project-portfolio-description': 'Meu portfólio pessoal, reunindo projetos, conhecimentos e experiências na área de tecnologia.', 'project-sentinel-title': 'SentinelWatch', 'project-sentinel-description': 'Projeto de monitoramento de infraestrutura utilizando Zabbix e Grafana para acompanhar a disponibilidade e o desempenho de ambientes monitorados.', 'project-commercloud-title': 'CommerCloud', 'project-commercloud-description': 'Projeto acadêmico voltado à infraestrutura em Cloud, explorando soluções e serviços das plataformas AWS e Microsoft Azure.', 'project-smarthome-title': 'SmartHome Sensations', 'project-smarthome-description': 'Projeto multidisciplinar de IoT e acessibilidade, desenvolvido para explorar soluções de casa inteligente voltadas a pessoas com deficiência.', 'project-thevenin-title': 'Thevenin & Norton', 'project-thevenin-description': 'Aplicação web voltada ao estudo e cálculo de circuitos elétricos utilizando os Teoremas de Thévenin e Norton.', 'project-praticando-title': 'Praticando JavaScript', 'project-praticando-description': 'Repositório dedicado ao estudo e prática de JavaScript, com exercícios, experimentos e projetos desenvolvidos durante meu processo de aprendizagem.',
            'tag-html': 'HTML', 'tag-css': 'CSS', 'tag-javascript': 'JavaScript', 'tag-monitoring': 'Monitoramento', 'tag-networking': 'Redes', 'tag-automation': 'Automação',
            'experience-title': 'Experiências & atividades', 'experience-1': 'Conclusão do curso Técnico em Redes de Computadores pelo SENAI', 'experience-2': 'Participação na Tempest Academy Conference 2024', 'experience-3': 'Visita técnica à Cisco São Paulo em 2025', 'experience-4': 'Desenvolvimento de projetos pessoais e acadêmicos', 'experience-5': 'Estudos contínuos em tecnologia e computação', 'certs-title': 'Certificações', 'cert-ccna-intro': 'CCNA: Introduction to Networks', 'cert-ccna-switch': 'CCNA: Switching, Routing, and Wireless Essentials', 'cert-aws-found': 'AWS Academy: Cloud Foundations', 'cert-aws-dev': 'AWS Academy: Cloud Developing', 'connect-title': 'Conecte-se comigo', 'contact-copy': 'Estou aberto a oportunidades de estágio, projetos e conversas sobre tecnologia.', 'footer-text': '© 2026 João Tombi. Todos os direitos reservados.', 'aria-lang-label': 'Alternar idioma para Inglês', 'aria-light': 'Ativar modo claro', 'aria-dark': 'Ativar modo escuro'
        },
        en: {
            'nav-about': 'About', 'nav-projects': 'Projects', 'nav-experience': 'Experience', 'nav-contact': 'Contact',
            'theme-default': 'Default theme', 'theme-tech': 'Tech Blue', 'theme-forest': 'Forest Green', 'theme-lava': 'Lava Red', 'theme-cyber': 'Cyber Purple', 'theme-deepsea': 'Deep Sea',
            'hero-eyebrow': 'Information Technology', 'hero-title': 'Building solutions through curiosity and practice.', 'hero-lede': 'I am João Tombi, an IT student with technical training in Computer Networks and an interest in software development, cloud, and infrastructure.', 'link-view-projects': 'View projects',
            'about-title': 'About me', 'about-p1': 'Hello! I am an Information Technology student with technical training in Computer Networks and an interest in software development, computing, and infrastructure.', 'about-p2': 'I enjoy learning through practice and turning knowledge into projects, exploring different areas of technology while constantly developing my technical skills.', 'about-p3': 'My academic and practical knowledge covers development and programming, computer networks, Linux and systems administration, cloud computing, infrastructure monitoring, automation, and web development.', 'about-p4': 'My Computer Networks training gave me a solid infrastructure foundation, while my studies and personal projects allow me to explore software development and other areas of computing.', 'about-p5': 'I am currently looking for internship opportunities in Information Technology where I can apply my knowledge, learn from professionals, and contribute to real projects.',
            'projects-title': 'Featured projects', 'project-portfolio-title': 'Portfolio', 'project-portfolio-description': 'My personal portfolio, bringing together projects, knowledge, and experience in technology.', 'project-sentinel-title': 'SentinelWatch', 'project-sentinel-description': 'An infrastructure monitoring project using Zabbix and Grafana to track the availability and performance of monitored environments.', 'project-commercloud-title': 'CommerCloud', 'project-commercloud-description': 'An academic cloud infrastructure project exploring solutions and services from AWS and Microsoft Azure.', 'project-smarthome-title': 'SmartHome Sensations', 'project-smarthome-description': 'A multidisciplinary IoT and accessibility project exploring smart-home solutions for people with disabilities.', 'project-thevenin-title': 'Thevenin & Norton', 'project-thevenin-description': 'A web application for studying and calculating electrical circuits using Thevenin and Norton theorems.', 'project-praticando-title': 'Practicing JavaScript', 'project-praticando-description': 'A repository for studying and practicing JavaScript through exercises, experiments, and projects developed during my learning process.',
            'tag-html': 'HTML', 'tag-css': 'CSS', 'tag-javascript': 'JavaScript', 'tag-monitoring': 'Monitoring', 'tag-networking': 'Networking', 'tag-automation': 'Automation',
            'experience-title': 'Experience & activities', 'experience-1': 'Completed the SENAI technical course in Computer Networks', 'experience-2': 'Participated in the Tempest Academy Conference 2024', 'experience-3': 'Technical visit to Cisco São Paulo in 2025', 'experience-4': 'Developed personal and academic projects', 'experience-5': 'Continuous studies in technology and computing', 'certs-title': 'Certifications', 'cert-ccna-intro': 'CCNA: Introduction to Networks', 'cert-ccna-switch': 'CCNA: Switching, Routing, and Wireless Essentials', 'cert-aws-found': 'AWS Academy: Cloud Foundations', 'cert-aws-dev': 'AWS Academy: Cloud Developing', 'connect-title': 'Connect with me', 'contact-copy': 'I am open to internship opportunities, projects, and conversations about technology.', 'footer-text': '© 2026 João Tombi. All rights reserved.', 'aria-lang-label': 'Switch language to Portuguese', 'aria-light': 'Activate light mode', 'aria-dark': 'Activate dark mode'
        }
    };

    const validLanguage = value => Object.hasOwn(translations, value) ? value : 'pt';
    const validTheme = value => validThemes.includes(value) ? value : 'default';
    const applyTheme = (baseTheme, mode) => {
        const safeTheme = validTheme(baseTheme);
        const safeMode = mode === 'light' ? 'light' : 'dark';
        body.classList.remove(...baseThemes, ...baseThemes.map(theme => `${theme}-light`), 'default-light');
        if (safeTheme !== 'default') body.classList.add(safeTheme);
        if (safeMode === 'light') body.classList.add(safeTheme === 'default' ? 'default-light' : `${safeTheme}-light`);
        localStorage.setItem('baseTheme', safeTheme);
        localStorage.setItem('themeMode', safeMode);
        darkModeToggle.textContent = safeMode === 'dark' ? '☀' : '☾';
        darkModeToggle.setAttribute('aria-pressed', String(safeMode === 'light'));
        darkModeToggle.setAttribute('aria-label', translations[validLanguage(localStorage.getItem('language'))][safeMode === 'dark' ? 'aria-light' : 'aria-dark']);
    };

    let currentLang = validLanguage(localStorage.getItem('language'));
    const applyTranslation = lang => {
        currentLang = validLanguage(lang);
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const value = translations[currentLang][element.dataset.i18n];
            if (value) element.textContent = value;
        });
        document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
        languageToggle.textContent = currentLang === 'pt' ? 'PT / EN' : 'EN / PT';
        languageToggle.setAttribute('aria-label', translations[currentLang]['aria-lang-label']);
        localStorage.setItem('language', currentLang);
        applyTheme(localStorage.getItem('baseTheme'), localStorage.getItem('themeMode'));
    };

    themeSelector.value = validTheme(localStorage.getItem('baseTheme'));
    applyTranslation(currentLang);
    themeSelector.addEventListener('change', event => applyTheme(event.target.value, localStorage.getItem('themeMode')));
    darkModeToggle.addEventListener('click', () => applyTheme(localStorage.getItem('baseTheme'), localStorage.getItem('themeMode') === 'dark' ? 'light' : 'dark'));
    languageToggle.addEventListener('click', () => applyTranslation(currentLang === 'pt' ? 'en' : 'pt'));
});
