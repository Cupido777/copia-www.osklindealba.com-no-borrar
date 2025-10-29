// inspiration-system.js - Sistema completo de versículos para la sección Inspiración

class InspirationVerseSystem {
    constructor() {
        this.bible = null;
        this.currentInterval = null;
        this.userId = this.generateUserId();
        this.initializeSystem();
    }

    generateUserId() {
        // Generar ID único para cada usuario/sesión
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
            console.log('❌ Biblia no disponible');
            return;
        }

        const verse = this.bible.getRandomVerse();
        if (verse) {
            const verseElement = document.getElementById('inspiration-verse');
            if (verseElement) {
                verseElement.innerHTML = `
                    <div class="verse-content">
                        <p class="verse-text">"${verse.text}"</p>
                        <p class="verse-reference">— ${verse.book} ${verse.chapter}:${verse.verse}</p>
                    </div>
                `;
                
                // Efecto de fade in
                verseElement.style.opacity = '0';
                setTimeout(() => {
                    verseElement.style.opacity = '1';
                    verseElement.style.transition = 'opacity 0.5s ease-in-out';
                }, 100);
                
                console.log(`📖 Versículo mostrado para ${this.userId}: ${verse.book} ${verse.chapter}:${verse.verse}`);
            }
        }
    }

    stopRotation() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            console.log('⏹️ Rotación detenida para:', this.userId);
        }
    }
}

// Inicializar el sistema cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    window.verseSystem = new InspirationVerseSystem();
});

// También disponible globalmente para control manual
window.InspirationVerseSystem = InspirationVerseSystem;
