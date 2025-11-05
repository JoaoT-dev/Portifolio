// -------------------------------------------
// 1. PALETAS DE CORES
// -------------------------------------------

const colorPalettes = [
    // Paleta 1: Cyberpunk (Vermelho Neon + Preto Absoluto)
    {
        primary: '#FF3366', 
        secondary: '#00CED1',
        bgDark: '#0A0A0A', 
        bgContainer: '#1C1C1C',
        textLight: '#F0F0F0',
        textSubtle: '#B8B8B8'
    },
    // Paleta 2: Sangue e Aço (Vermelho Profundo + Cinza Metálico)
    {
        primary: '#B00020',
        secondary: '#808080',
        bgDark: '#121212',
        bgContainer: '#2C2C2C',
        textLight: '#EBEBEB',
        textSubtle: '#AAAAAA'
    },
    // Paleta 3: Complementar Suave (Azul/Vermelho)
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
// 2. LÓGICA DE APLICAÇÃO DE CORES E DEGRADÊ
// -------------------------------------------

function applyRandomPalette() {
    const randomIndex = Math.floor(Math.random() * colorPalettes.length);
    const selectedPalette = colorPalettes[randomIndex];
    const root = document.documentElement; 

    // 1. Aplica as cores às variáveis CSS no :root
    root.style.setProperty('--primary-color', selectedPalette.primary);
    root.style.setProperty('--secondary-color', selectedPalette.secondary);
    root.style.setProperty('--background-dark', selectedPalette.bgDark);
    root.style.setProperty('--background-container', selectedPalette.bgContainer);
    root.style.setProperty('--text-color-light', selectedPalette.textLight);
    root.style.setProperty('--text-color-subtle', selectedPalette.textSubtle);
    
    // 2. INJETA O DEGRADÊ DIRETAMENTE NO BODY
    document.body.style.backgroundImage = `
        linear-gradient(to bottom, ${selectedPalette.bgDark}, #000000)
    `;
    // O background-attachment: fixed já está no CSS, mas repetir aqui não machuca.
    document.body.style.backgroundAttachment = 'fixed'; 
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
    // 1. Aplica a paleta aleatória e o degradê (DEVE RODAR PRIMEIRO)
    applyRandomPalette(); 
    
    // 2. Observa os elementos para animação
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
