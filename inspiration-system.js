// inspiration-system.js - Sistema CORREGIDO de versículos
class InspirationVerseSystem {
    constructor() {
        this.bible = null;
        this.currentInterval = null;
        this.userId = this.generateUserId();
        this.initializeSystem();
    }

    generateUserId() {
        return 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    }

    initializeSystem() {
        console.log('🎯 Inicializando Sistema de Versículos para usuario:', this.userId);
        
        // Esperar a que la base de datos esté cargada
        if (typeof BibleRV1960Database !== 'undefined') {
            this.bible = new BibleRV1960Database();
            this.startVerseRotation();
        } else {
            // Intentar cada segundo hasta que esté cargada
            const checkInterval = setInterval(() => {
                if (typeof BibleRV1960Database !== 'undefined') {
                    clearInterval(checkInterval);
                    this.bible = new BibleRV1960Database();
                    this.startVerseRotation();
                }
            }, 1000);
        }
    }

    startVerseRotation() {
        console.log('🔄 Iniciando rotación de versículos para:', this.userId);
        
        // Mostrar versículo inmediatamente
        this.displayRandomVerse();
        
        // Configurar intervalo cada 2 minutos (120,000 ms)
        this.currentInterval = setInterval(() => {
            this.displayRandomVerse();
        }, 120000);
    }

    displayRandomVerse() {
        if (!this.bible) {
            this.showError('Biblia no disponible');
            return;
        }

        const verse = this.bible.getRandomVerse();
        if (verse) {
            const verseElement = document.getElementById('bible-verse');
            if (verseElement) {
                // Aplicar animación de fade out
                verseElement.style.opacity = '0';
                
                setTimeout(() => {
                    verseElement.innerHTML = `
                        <div class="verse-content verse-fade-in">
                            <p class="verse-text">"${verse.text}"</p>
                            <p class="verse-reference">— ${verse.book} ${verse.chapter}:${verse.verse}</p>
                        </div>
                    `;
                    
                    // Efecto de fade in
                    verseElement.style.opacity = '1';
                    verseElement.style.transition = 'opacity 0.5s ease-in-out';
                    
                    // Remover clases de estado
                    verseElement.classList.remove('loading', 'error');
                    
                    console.log(`📖 Versículo mostrado para ${this.userId}: ${verse.book} ${verse.chapter}:${verse.verse}`);
                }, 300);
            }
        } else {
            this.showError('No se pudo cargar el versículo');
        }
    }

    showError(message) {
        const verseElement = document.getElementById('bible-verse');
        if (verseElement) {
            verseElement.innerHTML = `
                <div class="verse-content">
                    <p class="verse-text">${message}</p>
                    <p class="verse-reference">— Intenta recargar la página</p>
                </div>
            `;
            verseElement.classList.add('error');
        }
    }

    stopRotation() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            console.log('⏹️ Rotación detenida para:', this.userId);
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Pequeño delay para asegurar que todo esté cargado
    setTimeout(() => {
        window.verseSystem = new InspirationVerseSystem();
    }, 1000);
});

// Control manual disponible globalmente
window.InspirationVerseSystem = InspirationVerseSystem;
