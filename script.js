// -------------------------------------------
// 1. NOVAS PALETAS DE CORES (Vermelho/Preto)
// -------------------------------------------

const colorPalettes = [
    // Paleta 1: Cyberpunk (Vermelho Neon + Preto Absoluto)
    {
        primary: '#FF3366', // Destaque Neon
        secondary: '#00CED1', // Ciano (Contraste Frio)
        bgDark: '#0A0A0A', // Fundo Principal (Quase Preto)
        bgContainer: '#1C1C1C', // Fundo das Caixas
        textLight: '#F0F0F0',
        textSubtle: '#B8B8B8'
    },
    // Paleta 2: Sangue e Aço (Vermelho Profundo + Cinza Metálico)
    {
        primary: '#B00020', // Destaque Bordô/Rico
        secondary: '#808080', // Cinza Metálico
        bgDark: '#121212', // Fundo Principal
        bgContainer: '#2C2C2C', // Fundo das Caixas
        textLight: '#EBEBEB',
        textSubtle: '#AAAAAA'
    },
    // Paleta 3: Complementar Suave (Mantida como opção)
    {
        primary: '#E63946',
        secondary: '#457B9D',
        bgDark: '#1D3557',
        bgContainer: '#28476B',
        textLight: '#F1FAEE',
        textSubtle: '#A8DADC'
    }
];

// -------------------------------------------
// 2. LÓGICA DE APLICAÇÃO DE CORES
// -------------------------------------------

function applyRandomPalette() {
    const randomIndex = Math.floor(Math.random() * colorPalettes.length);
    const selectedPalette = colorPalettes[randomIndex];
    const root = document.documentElement;

    root.style.setProperty('--primary-color', selectedPalette.primary);
    root.style.setProperty('--secondary-color', selectedPalette.secondary);
    root.style.setProperty('--background-dark', selectedPalette.bgDark);
    root.style.setProperty('--background-container', selectedPalette.bgContainer);
    root.style.setProperty('--text-color-light', selectedPalette.textLight);
    root.style.setProperty('--text-color-subtle', selectedPalette.textSubtle);
    
    // 📌 ATUALIZA O DEGRADÊ DO BODY COM BASE NA NOVA PALETA
    document.body.style.backgroundImage = `
        linear-gradient(to bottom, ${selectedPalette.bgDark}, #000000)
    `;
    document.body.style.backgroundAttachment = 'fixed'; // Mantém o degradê fixo
}

// -------------------------------------------
// 3. LÓGICA DE ANIMAÇÃO AO SCROLL
// -------------------------------------------

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// -------------------------------------------
// 4. INICIALIZAÇÃO
// -------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // 1. Aplica a paleta aleatória e o degradê
    applyRandomPalette(); 
    
    // 2. Observa os elementos para animação
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
