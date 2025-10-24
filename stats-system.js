// stats-system.js - SISTEMA COMPLETO DE ESTADÍSTICAS, RATING Y COMENTARIOS

class StatsSystem {
    constructor() {
        this.stats = this.loadStats();
        this.rating = this.loadRating();
        this.restrictedWords = this.getRestrictedWords();
        this.init();
    }

    init() {
        this.createStatsContainer();
        this.initStatsTracking();
        this.initRatingSystem();
        this.initFeedbackSystem();
        this.updateDisplay();
        
        console.log('📊 Sistema de estadísticas ODAM inicializado');
    }

    // ===== SISTEMA DE ESTADÍSTICAS =====

    loadStats() {
        try {
            const stored = localStorage.getItem('odam-stats');
            return stored ? JSON.parse(stored) : {
                visits: 0,
                uniqueVisits: 0,
                totalTime: 0,
                scrollDepth: 0,
                clicks: 0,
                sessions: 0,
                lastVisit: null,
                visitDates: []
            };
        } catch (e) {
            console.error('Error loading stats:', e);
            return this.getDefaultStats();
        }
    }

    getDefaultStats() {
        return {
            visits: 0,
            uniqueVisits: 0,
            totalTime: 0,
            scrollDepth: 0,
            clicks: 0,
            sessions: 0,
            lastVisit: null,
            visitDates: []
        };
    }

    saveStats() {
        try {
            localStorage.setItem('odam-stats', JSON.stringify(this.stats));
        } catch (e) {
            console.error('Error saving stats:', e);
        }
    }

    initStatsTracking() {
        // Tracking de visitas únicas
        this.trackUniqueVisit();
        
        // Tracking de tiempo en página
        this.startTimeTracking();
        
        // Tracking de scroll
        this.trackScrollDepth();
        
        // Tracking de clicks
        this.trackClicks();
        
        // Tracking de sesiones
        this.trackSessions();
    }

    trackUniqueVisit() {
        const today = new Date().toDateString();
        const lastVisit = this.stats.lastVisit;
        
        if (!lastVisit || lastVisit !== today) {
            this.stats.visits++;
            this.stats.uniqueVisits++;
            this.stats.lastVisit = today;
            
            if (!this.stats.visitDates.includes(today)) {
                this.stats.visitDates.push(today);
            }
            
            this.saveStats();
        }
    }

    startTimeTracking() {
        this.pageStartTime = Date.now();
        
        window.addEventListener('beforeunload', () => {
            const timeSpent = Date.now() - this.pageStartTime;
            this.stats.totalTime += timeSpent;
            this.saveStats();
        });
    }

    trackScrollDepth() {
        let maxScroll = 0;
        
        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );
            
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                this.stats.scrollDepth = maxScroll;
                this.saveStats();
            }
        }, { passive: true });
    }

    trackClicks() {
        document.addEventListener('click', (e) => {
            // Ignorar clicks en elementos de estadísticas para no inflar números
            if (!e.target.closest('.stats-system-container')) {
                this.stats.clicks++;
                this.saveStats();
            }
        }, { passive: true });
    }

    trackSessions() {
        this.stats.sessions++;
        this.saveStats();
    }

    // ===== SISTEMA DE RATING =====

    loadRating() {
        try {
            const stored = localStorage.getItem('odam-rating');
            return stored ? JSON.parse(stored) : {
                likes: 0,
                dislikes: 0,
                userVote: null,
                voters: []
            };
        } catch (e) {
            console.error('Error loading rating:', e);
            return this.getDefaultRating();
        }
    }

    getDefaultRating() {
        return {
            likes: 0,
            dislikes: 0,
            userVote: null,
            voters: []
        };
    }

    saveRating() {
        try {
            localStorage.setItem('odam-rating', JSON.stringify(this.rating));
        } catch (e) {
            console.error('Error saving rating:', e);
        }
    }

    initRatingSystem() {
        // Los event listeners se agregarán después de crear el HTML
    }

    rate(voteType) {
        const voterId = this.getVoterId();
        
        // Si ya votó, quitar voto anterior
        if (this.rating.userVote) {
            if (this.rating.userVote === 'like') {
                this.rating.likes--;
            } else {
                this.rating.dislikes--;
            }
        }

        // Agregar nuevo voto
        if (voteType === this.rating.userVote) {
            // Si hace clic en el mismo voto, lo quita
            this.rating.userVote = null;
        } else {
            // Voto nuevo
            this.rating.userVote = voteType;
            if (voteType === 'like') {
                this.rating.likes++;
            } else {
                this.rating.dislikes++;
            }
            
            // Si es dislike, mostrar modal de comentarios
            if (voteType === 'dislike') {
                setTimeout(() => this.openFeedbackModal(), 500);
            }
        }

        // Registrar votante
        if (!this.rating.voters.includes(voterId)) {
            this.rating.voters.push(voterId);
        }

        this.saveRating();
        this.updateRatingDisplay();
    }

    getVoterId() {
        let voterId = localStorage.getItem('odam-voter-id');
        if (!voterId) {
            voterId = 'voter-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('odam-voter-id', voterId);
        }
        return voterId;
    }

    getRatingPercentage() {
        const total = this.rating.likes + this.rating.dislikes;
        if (total === 0) return 0;
        return Math.round((this.rating.likes / total) * 100);
    }

    // ===== SISTEMA DE COMENTARIOS =====

    getRestrictedWords() {
        return [
            // Lenguaje vulgar u obsceno
            'palabrota1', 'palabrota2', 'insulto1', 'insulto2',
            // Discriminación
            'racista1', 'sexista1', 'homofobico1',
            // Violencia
            'amenaza1', 'violencia1', 'odio1',
            // Acoso
            'acoso1', 'difamacion1', 'humillacion1',
            // Spam
            'estafa', 'phishing', 'correo no deseado'
            // NOTA: Agregar aquí tu lista completa de palabras restringidas
        ];
    }

    initFeedbackSystem() {
        this.createFeedbackModal();
    }

    createFeedbackModal() {
        const modalHTML = `
            <div id="feedback-modal" class="feedback-modal">
                <div class="feedback-modal-content">
                    <div class="feedback-modal-header">
                        <h3>¿Qué podemos mejorar?</h3>
                        <button class="feedback-modal-close" aria-label="Cerrar">&times;</button>
                    </div>
                    <form id="feedback-form" class="feedback-form">
                        <div class="form-group">
                            <label for="feedback-comment">Tu feedback es importante para nosotros:</label>
                            <textarea 
                                id="feedback-comment" 
                                placeholder="Por favor, comparte tus sugerencias de manera respetuosa y constructiva..." 
                                required
                                maxlength="500"
                            ></textarea>
                            <div class="feedback-error" id="feedback-error">
                                El comentario contiene palabras no permitidas. Por favor, expresa tus ideas de manera respetuosa.
                            </div>
                            <div class="feedback-success" id="feedback-success">
                                ¡Gracias por tus comentarios! Los tomaremos en cuenta para mejorar.
                            </div>
                            <div style="text-align: right; margin-top: 5px; font-size: 0.8rem; color: var(--text-muted);">
                                <span id="char-count">0</span>/500 caracteres
                            </div>
                        </div>
                        <div class="feedback-actions">
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-paper-plane"></i> Enviar Comentario
                            </button>
                            <button type="button" class="btn btn-secondary feedback-modal-close">
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.setupFeedbackModalEvents();
    }

    setupFeedbackModalEvents() {
        const modal = document.getElementById('feedback-modal');
        const closeBtns = document.querySelectorAll('.feedback-modal-close');
        const form = document.getElementById('feedback-form');
        const textarea = document.getElementById('feedback-comment');
        const charCount = document.getElementById('char-count');

        // Contador de caracteres
        textarea.addEventListener('input', (e) => {
            charCount.textContent = e.target.value.length;
        });

        // Cerrar modal
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => this.closeFeedbackModal());
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeFeedbackModal();
            }
        });

        // Enviar formulario
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitFeedback();
        });

        // Cerrar con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeFeedbackModal();
            }
        });
    }

    validateComment(comment) {
        const commentLower = comment.toLowerCase();
        
        // Verificar palabras restringidas
        const hasRestrictedWord = this.restrictedWords.some(word => 
            commentLower.includes(word.toLowerCase())
        );

        if (hasRestrictedWord) {
            return {
                isValid: false,
                message: 'El comentario contiene palabras no permitidas.'
            };
        }

        // Verificar longitud mínima
        if (comment.trim().length < 10) {
            return {
                isValid: false,
                message: 'Por favor, escribe al menos 10 caracteres.'
            };
        }

        // Verificar contenido solo de espacios
        if (!comment.replace(/\s/g, '').length) {
            return {
                isValid: false,
                message: 'El comentario no puede contener solo espacios.'
            };
        }

        return { isValid: true };
    }

    submitFeedback() {
        const comment = document.getElementById('feedback-comment').value.trim();
        const errorElement = document.getElementById('feedback-error');
        const successElement = document.getElementById('feedback-success');

        // Ocultar mensajes anteriores
        errorElement.style.display = 'none';
        successElement.style.display = 'none';

        // Validar comentario
        const validation = this.validateComment(comment);
        if (!validation.isValid) {
            errorElement.textContent = validation.message;
            errorElement.style.display = 'block';
            return;
        }

        // Guardar comentario
        this.saveFeedback(comment);
        
        // Mostrar éxito
        successElement.style.display = 'block';
        
        // Cerrar modal después de 2 segundos
        setTimeout(() => {
            this.closeFeedbackModal();
            successElement.style.display = 'none';
        }, 2000);
    }

    saveFeedback(comment) {
        try {
            const feedbacks = JSON.parse(localStorage.getItem('odam-feedback') || '[]');
            feedbacks.push({
                comment: comment,
                timestamp: new Date().toISOString(),
                type: 'feedback'
            });
            localStorage.setItem('odam-feedback', JSON.stringify(feedbacks));
        } catch (e) {
            console.error('Error saving feedback:', e);
        }
    }

    openFeedbackModal() {
        const modal = document.getElementById('feedback-modal');
        const textarea = document.getElementById('feedback-comment');
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Enfocar el textarea después de la animación
        setTimeout(() => textarea.focus(), 300);
    }

    closeFeedbackModal() {
        const modal = document.getElementById('feedback-modal');
        const form = document.getElementById('feedback-form');
        const errorElement = document.getElementById('feedback-error');
        const successElement = document.getElementById('feedback-success');
        
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Resetear formulario
        form.reset();
        document.getElementById('char-count').textContent = '0';
        errorElement.style.display = 'none';
        successElement.style.display = 'none';
        
        // Remover focus del textarea
        const activeElement = document.activeElement;
        if (activeElement) activeElement.blur();
    }

    // ===== DISPLAY Y RENDERIZADO =====

    createStatsContainer() {
        // Contenedor para móvil (debajo de redes sociales)
        const mobileStatsHTML = `
            <div class="stats-system-container mobile-stats">
                <div class="stats-title">Interacción de la Comunidad</div>
                <div class="stats-grid" id="stats-grid-mobile"></div>
                <div class="rating-section" id="rating-section-mobile"></div>
                <div class="feedback-section">
                    <button class="feedback-btn" onclick="statsSystem.openFeedbackModal()">
                        <i class="fas fa-comment"></i> Dejar Comentarios
                    </button>
                </div>
            </div>
        `;

        // Contenedor para desktop (debajo de contactos)
        const desktopStatsHTML = `
            <div class="stats-system-container desktop-stats">
                <div class="stats-title">Interacción de la Comunidad</div>
                <div class="stats-grid" id="stats-grid-desktop"></div>
                <div class="rating-section" id="rating-section-desktop"></div>
                <div class="feedback-section">
                    <button class="feedback-btn" onclick="statsSystem.openFeedbackModal()">
                        <i class="fas fa-comment"></i> Dejar Comentarios
                    </button>
                </div>
            </div>
        `;

        // Insertar en las posiciones correctas
        const socialCard = document.querySelector('.contact-card:last-child');
        if (socialCard) {
            socialCard.insertAdjacentHTML('beforeend', mobileStatsHTML);
        }

        const contactSection = document.querySelector('.contact-section .contact-content');
        if (contactSection) {
            contactSection.insertAdjacentHTML('afterend', desktopStatsHTML);
        }
    }

    updateDisplay() {
        this.updateStatsDisplay();
        this.updateRatingDisplay();
    }

    updateStatsDisplay() {
        const statsGrids = document.querySelectorAll('#stats-grid-mobile, #stats-grid-desktop');
        
        const statsHTML = `
            <div class="stat-item" onclick="statsSystem.handleStatClick('visits')">
                <span class="stat-number">${this.stats.visits}</span>
                <span class="stat-label">Visitas</span>
            </div>
            <div class="stat-item" onclick="statsSystem.handleStatClick('time')">
                <span class="stat-number">${this.getAverageTime()}m</span>
                <span class="stat-label">Tiempo Promedio</span>
            </div>
            <div class="stat-item" onclick="statsSystem.handleStatClick('engagement')">
                <span class="stat-number">${this.getEngagementScore()}%</span>
                <span class="stat-label">Compromiso</span>
            </div>
        `;

        statsGrids.forEach(grid => {
            if (grid) grid.innerHTML = statsHTML;
        });
    }

    updateRatingDisplay() {
        const ratingSections = document.querySelectorAll('#rating-section-mobile, #rating-section-desktop');
        
        const ratingHTML = `
            <div class="rating-title">¿Te gusta nuestra página?</div>
            <div class="rating-buttons">
                <button class="rating-btn like-btn ${this.rating.userVote === 'like' ? 'liked' : ''}" 
                        onclick="statsSystem.rate('like')"
                        aria-label="Me gusta">
                    <i class="fas fa-thumbs-up"></i>
                </button>
                <button class="rating-btn dislike-btn ${this.rating.userVote === 'dislike' ? 'disliked' : ''}" 
                        onclick="statsSystem.rate('dislike')"
                        aria-label="No me gusta">
                    <i class="fas fa-thumbs-down"></i>
                </button>
            </div>
            <div class="rating-result">${this.getRatingText()}</div>
        `;

        ratingSections.forEach(section => {
            if (section) section.innerHTML = ratingHTML;
        });
    }

    // ===== MÉTODOS UTILITARIOS =====

    getAverageTime() {
        if (this.stats.visits === 0) return 0;
        return Math.round((this.stats.totalTime / this.stats.visits) / 60000);
    }

    getEngagementScore() {
        const scrollScore = this.stats.scrollDepth;
        const clickScore = Math.min(this.stats.clicks / this.stats.visits * 10, 100);
        const timeScore = Math.min(this.getAverageTime() * 2, 100);
        
        return Math.round((scrollScore + clickScore + timeScore) / 3);
    }

    getRatingText() {
        const total = this.rating.likes + this.rating.dislikes;
        if (total === 0) return 'Sé el primero en valorar';
        
        const percentage = this.getRatingPercentage();
        return `${percentage}% de las personas les gusta esta página`;
    }

    handleStatClick(statType) {
        // Efecto visual al hacer clic en estadísticas
        console.log(`Stat clicked: ${statType}`);
        
        // Podrías expandir esto para mostrar más detalles
    }

    // ===== MÉTODOS PÚBLICOS =====

    getStats() {
        return { ...this.stats };
    }

    getRating() {
        return { ...this.rating };
    }

    resetStats() {
        this.stats = this.getDefaultStats();
        this.saveStats();
        this.updateDisplay();
    }
}

// Inicialización automática cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    window.statsSystem = new StatsSystem();
});

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StatsSystem;
}
