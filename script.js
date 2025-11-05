// -------------------------------------------
// 1. PALETAS DE CORES
// -------------------------------------------

const colorPalettes = [
    // Paleta 1: Complementar Suave (Vermelho/Coral & Azul-Petróleo/Tech)
    {
        primary: '#E63946',
        secondary: '#457B9D',
        bgDark: '#1D3557',
        bgContainer: '#28476B',
        textLight: '#F1FAEE',
        textSubtle: '#A8DADC'
    },
    // Paleta 2: Análoga Moderna (Ciano Elétrico & Azul Profundo)
    {
        primary: '#00D0FF', // Ciano Elétrico (Destaque)
        secondary: '#006D77', // Azul-Petróleo Escuro (Borda/Secundário)
        bgDark: '#011627', // Azul Quase Preto (Fundo Principal)
        bgContainer: '#042A46', // Azul Escuro (Fundo Container)
        textLight: '#EAF2F8',
        textSubtle: '#B8C3C8'
    },
    // Paleta 3: Quente e Dramática (Laranja Queimado & Roxo Escuro)
    {
        primary: '#FF6F61', // Laranja Queimado (Destaque)
        secondary: '#9336A4', // Roxo Profundo (Borda/Secundário)
        bgDark: '#1A112D', // Vinho Escuro/Roxo (Fundo Principal)
        bgContainer: '#2C1B4A', // Roxo mais claro (Fundo Container)
        textLight: '#F5E8D8',
        textSubtle: '#D8BFD8'
    }
];

// -------------------------------------------
// 2. LÓGICA DE APLICAÇÃO DE CORES
// -------------------------------------------

function applyRandomPalette() {
    const randomIndex = Math.floor(Math.random() * colorPalettes.length);
    const selectedPalette = colorPalettes[randomIndex];
    const root = document.documentElement; // Seleciona o elemento <html> para acessar as variáveis CSS

    root.style.setProperty('--primary-color', selectedPalette.primary);
    root.style.setProperty('--secondary-color', selectedPalette.secondary);
    root.style.setProperty('--background-dark', selectedPalette.bgDark);
    root.style.setProperty('--background-container', selectedPalette.bgContainer);
    root.style.setProperty('--text-color-light', selectedPalette.textLight);
    root.style.setProperty('--text-color-subtle', selectedPalette.textSubtle);
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
    // 1. Aplica a paleta aleatória
    applyRandomPalette(); 
    
    // 2. Observa os elementos para animação
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
