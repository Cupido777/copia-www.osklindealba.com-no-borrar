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
        
        if (typeof BibleRV1960Database !== 'undefined') {
            this.bible = new BibleRV1960Database();
            this.startVerseRotation(); // ← ESTE MÉTODO SE VA A REEMPLAZAR
        } else {
            const checkInterval = setInterval(() => {
                if (typeof BibleRV1960Database !== 'undefined') {
                    clearInterval(checkInterval);
                    this.bible = new BibleRV1960Database();
                    this.startVerseRotation();
                }
            }, 1000);
        }
    }

    // === REEMPLAZA TODO ESTE MÉTODO startVerseRotation ===
    startVerseRotation() {
        console.log('🔄 Iniciando rotación de versículos para:', this.userId);
        console.log('📱 Dispositivo:', this.isMobile() ? 'Móvil' : 'Computador');
        
        // Mostrar versículo inmediatamente
        this.displayRandomVerse();
        
        // Configurar intervalo cada 2 minutos (120,000 ms)
        this.currentInterval = setInterval(() => {
            console.log('🕒 Rotación automática ejecutada en:', new Date().toLocaleTimeString());
            this.displayRandomVerse();
        }, 120000);
    }
    // === FIN DEL REEMPLAZO ===

    // === AGREGA ESTE NUEVO MÉTODO isMobile ===
    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    // === FIN DEL NUEVO MÉTODO ===

    // EL RESTO DE TUS MÉTODOS EXISTENTES (displayRandomVerse, showError, etc.)
    displayRandomVerse() {
        // ... tu código existente aquí ...
    }

    showError(message) {
        // ... tu código existente aquí ...
    }

    stopRotation() {
        // ... tu código existente aquí ...
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
