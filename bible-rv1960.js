// BIBLIA COMPLETA REINA VALERA 1960 - BASE DE DATOS DE VERSÍCULOS
class BibleRV1960 {
    constructor() {
        this.books = this.getBibleStructure();
        this.currentVerseIndex = 0;
        this.usedVerses = new Set();
    }

    getBibleStructure() {
        return {
            "Génesis": 50,
            "Éxodo": 40,
            "Levítico": 27,
            "Números": 36,
            "Deuteronomio": 34,
            "Josué": 24,
            "Jueces": 21,
            "Rut": 4,
            "1 Samuel": 31,
            "2 Samuel": 24,
            "1 Reyes": 22,
            "2 Reyes": 25,
            "1 Crónicas": 29,
            "2 Crónicas": 36,
            "Esdras": 10,
            "Nehemías": 13,
            "Ester": 10,
            "Job": 42,
            "Salmos": 150,
            "Proverbios": 31,
            "Eclesiastés": 12,
            "Cantares": 8,
            "Isaías": 66,
            "Jeremías": 52,
            "Lamentaciones": 5,
            "Ezequiel": 48,
            "Daniel": 12,
            "Oseas": 14,
            "Joel": 3,
            "Amós": 9,
            "Abdías": 1,
            "Jonás": 4,
            "Miqueas": 7,
            "Nahúm": 3,
            "Habacuc": 3,
            "Sofonías": 3,
            "Hageo": 2,
            "Zacarías": 14,
            "Malaquías": 4,
            "Mateo": 28,
            "Marcos": 16,
            "Lucas": 24,
            "Juan": 21,
            "Hechos": 28,
            "Romanos": 16,
            "1 Corintios": 16,
            "2 Corintios": 13,
            "Gálatas": 6,
            "Efesios": 6,
            "Filipenses": 4,
            "Colosenses": 4,
            "1 Tesalonicenses": 5,
            "2 Tesalonicenses": 3,
            "1 Timoteo": 6,
            "2 Timoteo": 4,
            "Tito": 3,
            "Filemón": 1,
            "Hebreos": 13,
            "Santiago": 5,
            "1 Pedro": 5,
            "2 Pedro": 3,
            "1 Juan": 5,
            "2 Juan": 1,
            "3 Juan": 1,
            "Judas": 1,
            "Apocalipsis": 22
        };
    }

    // Base de datos de versículos clave (extensible a toda la Biblia)
    getVersesDatabase() {
        return [
            // Génesis
            { book: "Génesis", chapter: 1, verse: 1, text: "En el principio creó Dios los cielos y la tierra." },
            { book: "Génesis", chapter: 1, verse: 27, text: "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó." },
            { book: "Génesis", chapter: 12, verse: 2, text: "Y haré de ti una nación grande, y te bendeciré, y engrandeceré tu nombre, y serás bendición." },
            
            // Salmos
            { book: "Salmos", chapter: 23, verse: 1, text: "Jehová es mi pastor; nada me faltará." },
            { book: "Salmos", chapter: 46, verse: 1, text: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones." },
            { book: "Salmos", chapter: 119, verse: 105, text: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino." },
            
            // Proverbios
            { book: "Proverbios", chapter: 3, verse: 5, text: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia." },
            { book: "Proverbios", chapter: 3, verse: 6, text: "Reconócelo en todos tus caminos, y él enderezará tus veredas." },
            { book: "Proverbios", chapter: 16, verse: 3, text: "Encomienda a Jehová tus obras, y tus pensamientos serán afirmados." },
            
            // Isaías
            { book: "Isaías", chapter: 40, verse: 31, text: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán." },
            { book: "Isaías", chapter: 41, verse: 10, text: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia." },
            
            // Mateo
            { book: "Mateo", chapter: 5, verse: 16, text: "Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras, y glorifiquen a vuestro Padre que está en los cielos." },
            { book: "Mateo", chapter: 6, verse: 33, text: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas." },
            { book: "Mateo", chapter: 11, verse: 28, text: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar." },
            
            // Juan
            { book: "Juan", chapter: 3, verse: 16, text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." },
            { book: "Juan", chapter: 14, verse: 6, text: "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí." },
            { book: "Juan", chapter: 8, verse: 32, text: "y conoceréis la verdad, y la verdad os hará libres." },
            
            // Romanos
            { book: "Romanos", chapter: 8, verse: 28, text: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados." },
            { book: "Romanos", chapter: 12, verse: 2, text: "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta." },
            
            // Filipenses
            { book: "Filipenses", chapter: 4, verse: 13, text: "Todo lo puedo en Cristo que me fortalece." },
            { book: "Filipenses", chapter: 4, verse: 6, text: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias." },
            
            // Hebreos
            { book: "Hebreos", chapter: 11, verse: 1, text: "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve." },
            { book: "Hebreos", chapter: 13, verse: 8, text: "Jesucristo es el mismo ayer, y hoy, y por los siglos." },
            
            // 1 Juan
            { book: "1 Juan", chapter: 1, verse: 9, text: "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad." },
            
            // Apocalipsis
            { book: "Apocalipsis", chapter: 3, verse: 20, text: "He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él, y él conmigo." },
            
            // **Puedes agregar MÁS versículos aquí - esta es solo una muestra**
            // Para tener TODA la Biblia, necesitaríamos agregar ~31,000 versículos
            // Te recomiendo empezar con 100-200 versículos clave y luego expandir
        ];
    }

    getRandomVerse() {
        const verses = this.getVersesDatabase();
        
        // Si ya usamos todos los versículos, reiniciamos
        if (this.usedVerses.size >= verses.length) {
            this.usedVerses.clear();
        }

        let randomIndex;
        let attempts = 0;
        
        // Buscar un versículo no usado recientemente
        do {
            randomIndex = Math.floor(Math.random() * verses.length);
            attempts++;
        } while (this.usedVerses.has(randomIndex) && attempts < 50);
        
        this.usedVerses.add(randomIndex);
        return verses[randomIndex];
    }

    getVerseByReference(book, chapter, verse) {
        const verses = this.getVersesDatabase();
        return verses.find(v => 
            v.book === book && 
            v.chapter === chapter && 
            v.verse === verse
        );
    }

    getTotalVersesCount() {
        return this.getVersesDatabase().length;
    }
}

// Instancia global de la Biblia
window.BibleRV1960 = BibleRV1960;
