document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeSelector = document.getElementById('theme-selector');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');

    // Lista dos 5 temas base para remoção/aplicação
    const baseThemes = [
        'theme-tech', 'theme-forest', 'theme-lava', 'theme-cyber', 'theme-deepsea'
    ];
    
    const lightModeSuffix = '-light';

    function clearThemes() {
        // Remove todas as classes de tema customizado e seus modificadores light
        baseThemes.forEach(cls => {
            body.classList.remove(cls);
            body.classList.remove(cls + lightModeSuffix);
        });
        // Remove a classe light do tema padrão
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
            // Se o tema for PADRÃO:
            localStorage.setItem('baseTheme', 'default');
            
            if (mode === 'light') {
                body.classList.add('default-light'); // Adiciona a classe light do padrão
                localStorage.setItem('themeMode', 'light');
                darkModeToggle.textContent = '🌙'; // Se está light, mostra o ícone dark
            } else {
                // Modo Dark (do :root)
                localStorage.setItem('themeMode', 'dark');
                darkModeToggle.textContent = '☀️'; // Se está dark, mostra o ícone light
            }
            return;
        }

        // --- Aplica Temas Customizados ---
        body.classList.add(baseTheme); // Aplica a classe base (Dark)
        localStorage.setItem('baseTheme', baseTheme);
        
        if (mode === 'light') {
            body.classList.add(baseTheme + lightModeSuffix); // Aplica o modificador light
            localStorage.setItem('themeMode', 'light');
            darkModeToggle.textContent = '🌙'; 
        } else {
            localStorage.setItem('themeMode', 'dark');
            darkModeToggle.textContent = '☀️'; 
        }
    }

    // --- 1. Carregamento Inicial ---
    const savedBaseTheme = localStorage.getItem('baseTheme') || 'default';
    const savedThemeMode = localStorage.getItem('themeMode') || 'dark';

    themeSelector.value = savedBaseTheme;
    applyTheme(savedBaseTheme, savedThemeMode);


    // --- 2. Event Listener para o Seletor de Temas ---
    themeSelector.addEventListener('change', (event) => {
        const newBaseTheme = event.target.value;
        
        // Ao mudar o tema, mantém o modo (dark/light) que estava ativo
        const initialMode = localStorage.getItem('themeMode') || 'dark'; 
        
        applyTheme(newBaseTheme, initialMode);
    });

    // --- 3. Event Listener para o Toggle (☀️ / 🌙) ---
    darkModeToggle.addEventListener('click', () => {
        const currentBaseTheme = localStorage.getItem('baseTheme') || 'default';
        
        // Lógica de alternância funciona para todos os temas
        const currentMode = localStorage.getItem('themeMode') || 'dark';
        const newMode = (currentMode === 'dark') ? 'light' : 'dark';
        
        applyTheme(currentBaseTheme, newMode);
    });
});
