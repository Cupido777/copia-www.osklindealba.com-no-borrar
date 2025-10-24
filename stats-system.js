// stats-system.js - SISTEMA DE ESTADÍSTICAS DISCRETO
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
        this.updateDisplay();
        console.log('📊 Sistema de estadísticas ODAM inicializado');
    }

    loadStats() {
        try {
            const stored = localStorage.getItem('odam-stats');
            return stored ? JSON.parse(stored) : {
                visits: 0,
                timeSpent: 0,
                scrollDepth: 0,
                clicks: 0
            };
        } catch (e) {
            return this.getDefaultStats();
        }
    }

    loadRating() {
        try {
            const stored = localStorage.getItem('odam-rating');
            return stored ? JSON.parse(stored) : {
                likes: 0,
                dislikes: 0,
                userVote: null
            };
        } catch (e) {
            return this.getDefaultRating();
        }
    }

    getDefaultStats() {
        return { visits: 0, timeSpent: 0, scrollDepth: 0, clicks: 0 };
    }

    getDefaultRating() {
        return { likes: 0, dislikes: 0, userVote: null };
    }

    saveStats() {
        localStorage.setItem('odam-stats', JSON.stringify(this.stats));
    }

    saveRating() {
        localStorage.setItem('odam-rating', JSON.stringify(this.rating));
    }

    initStatsTracking() {
        this.trackVisit();
        this.trackTime();
        this.trackScroll();
        this.trackClicks();
    }

    trackVisit() {
        this.stats.visits++;
        this.saveStats();
    }

    trackTime() {
        this.startTime = Date.now();
        window.addEventListener('beforeunload', () => {
            this.stats.timeSpent += Date.now() - this.startTime;
            this.saveStats();
        });
    }

    trackScroll() {
        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );
            if (scrollPercent > this.stats.scrollDepth) {
                this.stats.scrollDepth = scrollPercent;
                this.saveStats();
            }
        }, { passive: true });
    }

    trackClicks() {
        document.addEventListener('click', () => {
            this.stats.clicks++;
            this.saveStats();
        }, { passive: true });
    }

    rate(voteType) {
        if (this.rating.userVote === voteType) {
            // Quitar voto si es el mismo
            if (voteType === 'like') this.rating.likes--;
            else this.rating.dislikes--;
            this.rating.userVote = null;
        } else {
            // Remover voto anterior si existe
            if (this.rating.userVote === 'like') this.rating.likes--;
            else if (this.rating.userVote === 'dislike') this.rating.dislikes--;
            
            // Agregar nuevo voto
            if (voteType === 'like') this.rating.likes++;
            else this.rating.dislikes++;
            this.rating.userVote = voteType;

            // Mostrar modal si es dislike
            if (voteType === 'dislike') {
                setTimeout(() => this.openFeedbackModal(), 500);
            }
        }
        this.saveRating();
        this.updateRatingDisplay();
    }

    getRestrictedWords() {
        return [
            // Agrega aquí tu lista de palabras restringidas
            'palabrota1', 'insulto1', 'vulgar1'
        ];
    }

    createStatsContainer() {
        const mobileStatsHTML = `
            <div class="stats-system-container mobile-stats">
                <div class="stats-title">Interacción de la Comunidad</div>
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">${this.stats.visits}</span>
                        <span class="stat-label">Visitas</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${Math.round(this.stats.timeSpent / 60000)}m</span>
                        <span class="stat-label">Tiempo</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${this.stats.scrollDepth}%</span>
                        <span class="stat-label">Scroll</span>
                    </div>
                </div>
                <div class="rating-section">
                    <div class="rating-title">¿Te gusta nuestra página?</div>
                    <div class="rating-buttons">
                        <button class="rating-btn like-btn ${this.rating.userVote === 'like' ? 'liked' : ''}" 
                                onclick="window.statsSystem.rate('like')">
                            <i class="fas fa-thumbs-up"></i>
                        </button>
                        <button class="rating-btn dislike-btn ${this.rating.userVote === 'dislike' ? 'disliked' : ''}" 
                                onclick="window.statsSystem.rate('dislike')">
                            <i class="fas fa-thumbs-down"></i>
                        </button>
                    </div>
                    <div class="rating-result">${this.getRatingText()}</div>
                </div>
                <div class="feedback-section">
                    <button class="feedback-btn" onclick="window.statsSystem.openFeedbackModal()">
                        <i class="fas fa-comment"></i> Dejar Comentarios
                    </button>
                </div>
            </div>
        `;

        const desktopStatsHTML = `
            <div class="stats-system-container desktop-stats">
                <div class="stats-title">Interacción de la Comunidad</div>
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">${this.stats.visits}</span>
                        <span class="stat-label">Visitas</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${Math.round(this.stats.timeSpent / 60000)}m</span>
                        <span class="stat-label">Tiempo</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${this.stats.scrollDepth}%</span>
                        <span class="stat-label">Scroll</span>
                    </div>
                </div>
                <div class="rating-section">
                    <div class="rating-title">¿Te gusta nuestra página?</div>
                    <div class="rating-buttons">
                        <button class="rating-btn like-btn ${this.rating.userVote === 'like' ? 'liked' : ''}" 
                                onclick="window.statsSystem.rate('like')">
                            <i class="fas fa-thumbs-up"></i>
                        </button>
                        <button class="rating-btn dislike-btn ${this.rating.userVote === 'dislike' ? 'disliked' : ''}" 
                                onclick="window.statsSystem.rate('dislike')">
                            <i class="fas fa-thumbs-down"></i>
                        </button>
                    </div>
                    <div class="rating-result">${this.getRatingText()}</div>
                </div>
                <div class="feedback-section">
                    <button class="feedback-btn" onclick="window.statsSystem.openFeedbackModal()">
                        <i class="fas fa-comment"></i> Dejar Comentarios
                    </button>
                </div>
            </div>
        `;

        // Insertar en posiciones específicas
        const socialCard = document.querySelector('.contact-card:last-child');
        if (socialCard) {
            socialCard.insertAdjacentHTML('beforeend', mobileStatsHTML);
        }

        const contactSection = document.querySelector('.contact-section .contact-content');
        if (contactSection) {
            contactSection.insertAdjacentHTML('afterend', desktopStatsHTML);
        }

        this.createFeedbackModal();
    }

    createFeedbackModal() {
        const modalHTML = `
            <div id="feedback-modal" class="feedback-modal">
                <div class="feedback-modal-content">
                    <div class="feedback-modal-header">
                        <h3>¿Qué podemos mejorar?</h3>
                        <button class="feedback-modal-close">&times;</button>
                    </div>
                    <form id="feedback-form" class="feedback-form">
                        <div class="form-group">
                            <label for="feedback-comment">Tu feedback es importante:</label>
                            <textarea id="feedback-comment" placeholder="Comparte tus sugerencias de manera respetuosa..." required maxlength="500"></textarea>
                            <div class="feedback-error" id="feedback-error">El comentario contiene palabras no permitidas.</div>
                            <div class="feedback-success" id="feedback-success">¡Gracias por tus comentarios!</div>
                        </div>
                        <div class="feedback-actions">
                            <button type="submit" class="btn btn-primary">Enviar Comentario</button>
                            <button type="button" class="btn btn-secondary feedback-modal-close">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.setupFeedbackModal();
    }

    setupFeedbackModal() {
        const modal = document.getElementById('feedback-modal');
        const closeBtns = document.querySelectorAll('.feedback-modal-close');
        const form = document.getElementById('feedback-form');

        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => this.closeFeedbackModal());
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeFeedbackModal();
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitFeedback();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeFeedbackModal();
            }
        });
    }

    validateComment(comment) {
        const commentLower = comment.toLowerCase();
        const hasRestrictedWord = this.restrictedWords.some(word => 
            commentLower.includes(word.toLowerCase())
        );
        return !hasRestrictedWord && comment.trim().length >= 10;
    }

    submitFeedback() {
        const comment = document.getElementById('feedback-comment').value.trim();
        const errorElement = document.getElementById('feedback-error');
        const successElement = document.getElementById('feedback-success');

        errorElement.style.display = 'none';
        successElement.style.display = 'none';

        if (!this.validateComment(comment)) {
            errorElement.style.display = 'block';
            return;
        }

        // Guardar comentario
        this.saveFeedback(comment);
        successElement.style.display = 'block';

        setTimeout(() => {
            this.closeFeedbackModal();
            successElement.style.display = 'none';
        }, 2000);
    }

    saveFeedback(comment) {
        const feedbacks = JSON.parse(localStorage.getItem('odam-feedback') || '[]');
        feedbacks.push({
            comment: comment,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('odam-feedback', JSON.stringify(feedbacks));
    }

    openFeedbackModal() {
        const modal = document.getElementById('feedback-modal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeFeedbackModal() {
        const modal = document.getElementById('feedback-modal');
        const form = document.getElementById('feedback-form');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        form.reset();
    }

    updateDisplay() {
        // Actualizar números en tiempo real si es necesario
    }

    updateRatingDisplay() {
        const likeBtns = document.querySelectorAll('.like-btn');
        const dislikeBtns = document.querySelectorAll('.dislike-btn');
        const ratingResults = document.querySelectorAll('.rating-result');

        likeBtns.forEach(btn => {
            btn.className = `rating-btn like-btn ${this.rating.userVote === 'like' ? 'liked' : ''}`;
        });

        dislikeBtns.forEach(btn => {
            btn.className = `rating-btn dislike-btn ${this.rating.userVote === 'dislike' ? 'disliked' : ''}`;
        });

        ratingResults.forEach(result => {
            result.textContent = this.getRatingText();
        });
    }

    getRatingText() {
        const total = this.rating.likes + this.rating.dislikes;
        if (total === 0) return 'Sé el primero en valorar';
        const percentage = Math.round((this.rating.likes / total) * 100);
        return `${percentage}% de las personas les gusta esta página`;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    window.statsSystem = new StatsSystem();
});
