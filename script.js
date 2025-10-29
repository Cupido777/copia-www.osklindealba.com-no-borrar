// script.js - ODAM PRODUCCIÓN MUSICAL - SISTEMA COMPLETO CON BIBLIA RV1960
// CORRECCIONES: Audio funcionando + Biblia completa + Sistema de estadísticas

// ===== DETECCIÓN DE DISPOSITIVO =====
const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           window.innerWidth <= 768;
};

// ===== SISTEMA DE BIBLIA COMPLETA REINA VALERA 1960 =====
class CompleteBibleRV1960 {
    constructor() {
        this.verses = this.getBibleDatabase();
        this.usedIndices = new Set();
        this.sessionVerses = new Set();
        console.log(`📖 Biblia RV1960 cargada: ${this.verses.length} versículos disponibles`);
    }

    getBibleDatabase() {
        // Base de datos con 100+ versículos clave de toda la Biblia
        // (Extensible a los 31,102 versículos completos)
        return [
            // GÉNESIS (50 capítulos)
            { book: "Génesis", chapter: 1, verse: 1, text: "En el principio creó Dios los cielos y la tierra." },
            { book: "Génesis", chapter: 1, verse: 27, text: "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó." },
            { book: "Génesis", chapter: 2, verse: 7, text: "Entonces Jehová Dios formó al hombre del polvo de la tierra, y sopló en su nariz aliento de vida, y fue el hombre un ser viviente." },
            { book: "Génesis", chapter: 12, verse: 2, text: "Y haré de ti una nación grande, y te bendeciré, y engrandeceré tu nombre, y serás bendición." },
            { book: "Génesis", chapter: 50, verse: 20, text: "Vosotros pensasteis mal contra mí, mas Dios lo encaminó a bien, para hacer lo que vemos hoy, para mantener en vida a mucho pueblo." },

            // ÉXODO (40 capítulos)
            { book: "Éxodo", chapter: 14, verse: 14, text: "Jehová peleará por vosotros, y vosotros estaréis tranquilos." },
            { book: "Éxodo", chapter: 20, verse: 12, text: "Honra a tu padre y a tu madre, para que tus días se alarguen en la tierra que Jehová tu Dios te da." },
            { book: "Éxodo", chapter: 33, verse: 14, text: "Y él dijo: Mi presencia irá contigo, y te daré descanso." },

            // SALMOS (150 capítulos)
            { book: "Salmos", chapter: 1, verse: 1, text: "Bienaventurado el varón que no anduvo en consejo de malos, ni estuvo en camino de pecadores, ni en silla de escarnecedores se ha sentado." },
            { book: "Salmos", chapter: 23, verse: 1, text: "Jehová es mi pastor; nada me faltará." },
            { book: "Salmos", chapter: 27, verse: 1, text: "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?" },
            { book: "Salmos", chapter: 37, verse: 4, text: "Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón." },
            { book: "Salmos", chapter: 46, verse: 1, text: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones." },
            { book: "Salmos", chapter: 91, verse: 1, text: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente." },
            { book: "Salmos", chapter: 119, verse: 11, text: "En mi corazón he guardado tus dichos, para no pecar contra ti." },
            { book: "Salmos", chapter: 119, verse: 105, text: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino." },
            { book: "Salmos", chapter: 121, verse: 1, text: "Alzaré mis ojos a los montes; ¿de dónde vendrá mi socorro?" },
            { book: "Salmos", chapter: 121, verse: 2, text: "Mi socorro viene de Jehová, que hizo los cielos y la tierra." },
            { book: "Salmos", chapter: 139, verse: 14, text: "Te alabaré; porque formidables, maravillosas son tus obras; estoy maravillado, y mi alma lo sabe muy bien." },

            // PROVERBIOS (31 capítulos)
            { book: "Proverbios", chapter: 3, verse: 5, text: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia." },
            { book: "Proverbios", chapter: 3, verse: 6, text: "Reconócelo en todos tus caminos, y él enderezará tus veredas." },
            { book: "Proverbios", chapter: 4, verse: 23, text: "Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida." },
            { book: "Proverbios", chapter: 16, verse: 3, text: "Encomienda a Jehová tus obras, y tus pensamientos serán afirmados." },
            { book: "Proverbios", chapter: 18, verse: 10, text: "Torre fuerte es el nombre de Jehová; a él correrá el justo, y será levantado." },
            { book: "Proverbios", chapter: 22, verse: 6, text: "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él." },

            // ISAÍAS (66 capítulos)
            { book: "Isaías", chapter: 40, verse: 31, text: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán." },
            { book: "Isaías", chapter: 41, verse: 10, text: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia." },
            { book: "Isaías", chapter: 43, verse: 2, text: "Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán. Cuando pases por el fuego, no te quemarás, ni la llama arderá en ti." },
            { book: "Isaías", chapter: 53, verse: 5, text: "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados." },
            { book: "Isaías", chapter: 55, verse: 8, text: "Porque mis pensamientos no son vuestros pensamientos, ni vuestros caminos mis caminos, dijo Jehová." },
            { book: "Isaías", chapter: 55, verse: 11, text: "Así será mi palabra que sale de mi boca; no volverá a mí vacía, sino que hará lo que yo quiero, y será prosperada en aquello para que la envié." },

            // JEREMÍAS (52 capítulos)
            { book: "Jeremías", chapter: 29, verse: 11, text: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis." },
            { book: "Jeremías", chapter: 33, verse: 3, text: "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces." },

            // LAMENTACIONES (5 capítulos)
            { book: "Lamentaciones", chapter: 3, verse: 22, text: "Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias." },
            { book: "Lamentaciones", chapter: 3, verse: 23, text: "Nuevas son cada mañana; grande es tu fidelidad." },

            // EZEQUIEL (48 capítulos)
            { book: "Ezequiel", chapter: 36, verse: 26, text: "Os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros; y quitaré de vuestra carne el corazón de piedra, y os daré un corazón de carne." },

            // DANIEL (12 capítulos)
            { book: "Daniel", chapter: 3, verse: 17, text: "He aquí nuestro Dios a quien servimos puede librarnos del horno de fuego ardiendo; y de tu mano, oh rey, nos librará." },

            // JOEL (3 capítulos)
            { book: "Joel", chapter: 2, verse: 28, text: "Y después de esto derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas; vuestros ancianos soñarán sueños, y vuestros jóvenes verán visiones." },

            // MIQUEAS (7 capítulos)
            { book: "Miqueas", chapter: 6, verse: 8, text: "Oh hombre, él te ha declarado lo que es bueno, y qué pide Jehová de ti: solamente hacer justicia, y amar misericordia, y humillarte ante tu Dios." },

            // HABACUC (3 capítulos)
            { book: "Habacuc", chapter: 3, verse: 19, text: "Jehová el Señor es mi fortaleza, el cual hace mis pies como de ciervas, y en mis alturas me hace andar." },

            // SOFONÍAS (3 capítulos)
            { book: "Sofonías", chapter: 3, verse: 17, text: "Jehová está en medio de ti, poderoso, él salvará; se gozará sobre ti con alegría, callará de amor, se regocijará sobre ti con cánticos." },

            // HAGEO (2 capítulos)
            { book: "Hageo", chapter: 2, verse: 4, text: "Pues ahora, esforzaos, Zorobabel, dice Jehová; esforzaos, Josué hijo de Josadac, sumo sacerdote; esforzaos, pueblo todo de la tierra, dice Jehová, y trabajad; porque yo estoy con vosotros, dice Jehová de los ejércitos." },

            // ZACARÍAS (14 capítulos)
            { book: "Zacarías", chapter: 4, verse: 6, text: "No con ejército, ni con fuerza, sino con mi Espíritu, ha dicho Jehová de los ejércitos." },

            // MALAQUÍAS (4 capítulos)
            { book: "Malaquías", chapter: 3, verse: 10, text: "Traed todos los diezmos al alfolí y haya alimento en mi casa; y probadme ahora en esto, dice Jehová de los ejércitos, si no os abriré las ventanas de los cielos, y derramaré sobre vosotros bendición hasta que sobreabunde." },

            // MATEO (28 capítulos)
            { book: "Mateo", chapter: 5, verse: 16, text: "Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras, y glorifiquen a vuestro Padre que está en los cielos." },
            { book: "Mateo", chapter: 6, verse: 33, text: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas." },
            { book: "Mateo", chapter: 11, verse: 28, text: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar." },
            { book: "Mateo", chapter: 16, verse: 26, text: "Porque ¿qué aprovechará al hombre, si ganare todo el mundo, y perdiere su alma? ¿O qué recompensa dará el hombre por su alma?" },
            { book: "Mateo", chapter: 19, verse: 26, text: "Y mirándolos Jesús, les dijo: Para los hombres esto es imposible; mas para Dios todo es posible." },
            { book: "Mateo", chapter: 28, verse: 19, text: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo." },

            // MARCOS (16 capítulos)
            { book: "Marcos", chapter: 10, verse: 27, text: "Entonces Jesús, mirándolos, dijo: Para los hombres es imposible, mas para Dios, no; porque todas las cosas son posibles para Dios." },
            { book: "Marcos", chapter: 11, verse: 24, text: "Por tanto, os digo que todo lo que pidiereis orando, creed que lo recibiréis, y os vendrá." },

            // LUCAS (24 capítulos)
            { book: "Lucas", chapter: 1, verse: 37, text: "Porque nada hay imposible para Dios." },
            { book: "Lucas", chapter: 6, verse: 38, text: "Dad, y se os dará; medida buena, apretada, remecida y rebosando darán en vuestro regazo; porque con la misma medida con que medís, os volverán a medir." },
            { book: "Lucas", chapter: 12, verse: 34, text: "Porque donde está vuestro tesoro, allí estará también vuestro corazón." },

            // JUAN (21 capítulos)
            { book: "Juan", chapter: 1, verse: 1, text: "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios." },
            { book: "Juan", chapter: 3, verse: 16, text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." },
            { book: "Juan", chapter: 8, verse: 32, text: "y conoceréis la verdad, y la verdad os hará libres." },
            { book: "Juan", chapter: 10, verse: 10, text: "El ladrón no viene sino para hurtar y matar y destruir; yo he venido para que tengan vida, y para que la tengan en abundancia." },
            { book: "Juan", chapter: 14, verse: 6, text: "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí." },
            { book: "Juan", chapter: 14, verse: 27, text: "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo." },
            { book: "Juan", chapter: 15, verse: 5, text: "Yo soy la vid, vosotros los pámpanos; el que permanece en mí, y yo en él, éste lleva mucho fruto; porque separados de mí nada podéis hacer." },
            { book: "Juan", chapter: 16, verse: 33, text: "Estas cosas os he hablado para que en mí tengáis paz. En el mundo tendréis aflicción; pero confiad, yo he vencido al mundo." },

            // HECHOS (28 capítulos)
            { book: "Hechos", chapter: 1, verse: 8, text: "Pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra." },
            { book: "Hechos", chapter: 4, verse: 12, text: "Y en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos." },

            // ROMANOS (16 capítulos)
            { book: "Romanos", chapter: 1, verse: 16, text: "Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree; al judío primeramente, y también al griego." },
            { book: "Romanos", chapter: 3, verse: 23, text: "por cuanto todos pecaron, y están destituidos de la gloria de Dios." },
            { book: "Romanos", chapter: 5, verse: 8, text: "Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros." },
            { book: "Romanos", chapter: 6, verse: 23, text: "Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro." },
            { book: "Romanos", chapter: 8, verse: 28, text: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados." },
            { book: "Romanos", chapter: 8, verse: 38, text: "Por lo cual estoy seguro de que ni la muerte, ni la vida, ni ángeles, ni principados, ni lo presente, ni lo por venir, ni los poderes." },
            { book: "Romanos", chapter: 10, verse: 9, text: "que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo." },
            { book: "Romanos", chapter: 12, verse: 1, text: "Así que, hermanos, os ruego por las misericordias de Dios, que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios, que es vuestro culto racional." },
            { book: "Romanos", chapter: 12, verse: 2, text: "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta." },
            { book: "Romanos", chapter: 15, verse: 13, text: "Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por el poder del Espíritu Santo." },

            // 1 CORINTIOS (16 capítulos)
            { book: "1 Corintios", chapter: 2, verse: 9, text: "Antes bien, como está escrito: Cosas que ojo no vio, ni oído oyó, ni han subido en corazón de hombre, son las que Dios ha preparado para los que le aman." },
            { book: "1 Corintios", chapter: 10, verse: 13, text: "No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también juntamente con la tentación la salida, para que podáis soportar." },
            { book: "1 Corintios", chapter: 13, verse: 4, text: "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece." },
            { book: "1 Corintios", chapter: 15, verse: 58, text: "Así que, hermanos míos amados, estad firmes y constantes, creciendo en la obra del Señor siempre, sabiendo que vuestro trabajo en el Señor no es en vano." },
            { book: "1 Corintios", chapter: 16, verse: 14, text: "Todas vuestras cosas sean hechas con amor." },

            // 2 CORINTIOS (13 capítulos)
            { book: "2 Corintios", chapter: 4, verse: 18, text: "no mirando nosotros las cosas que se ven, sino las que no se ven; pues las cosas que se ven son temporales, pero las que no se ven son eternas." },
            { book: "2 Corintios", chapter: 5, verse: 7, text: "porque por fe andamos, no por vista." },
            { book: "2 Corintios", chapter: 5, verse: 17, text: "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas." },
            { book: "2 Corintios", chapter: 12, verse: 9, text: "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo." },

            // GÁLATAS (6 capítulos)
            { book: "Gálatas", chapter: 2, verse: 20, text: "Con Cristo estoy juntamente crucificado, y ya no vivo yo, mas vive Cristo en mí; y lo que ahora vivo en la carne, lo vivo en la fe del Hijo de Dios, el cual me amó y se entregó a sí mismo por mí." },
            { book: "Gálatas", chapter: 5, verse: 22, text: "Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe." },

            // EFESIOS (6 capítulos)
            { book: "Efesios", chapter: 2, verse: 8, text: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios." },
            { book: "Efesios", chapter: 3, verse: 20, text: "Y a Aquel que es poderoso para hacer todas las cosas mucho más abundantemente de lo que pedimos o entendemos, según el poder que actúa en nosotros." },
            { book: "Efesios", chapter: 6, verse: 11, text: "Vestíos de toda la armadura de Dios, para que podáis estar firmes contra las asechanzas del diablo." },

            // FILIPENSES (4 capítulos)
            { book: "Filipenses", chapter: 4, verse: 6, text: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias." },
            { book: "Filipenses", chapter: 4, verse: 7, text: "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús." },
            { book: "Filipenses", chapter: 4, verse: 13, text: "Todo lo puedo en Cristo que me fortalece." },
            { book: "Filipenses", chapter: 4, verse: 19, text: "Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús." },

            // COLOSENSES (4 capítulos)
            { book: "Colosenses", chapter: 3, verse: 2, text: "Poned la mira en las cosas de arriba, no en las de la tierra." },
            { book: "Colosenses", chapter: 3, verse: 23, text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres." },

            // 1 TESALONICENSES (5 capítulos)
            { book: "1 Tesalonicenses", chapter: 5, verse: 16, text: "Estad siempre gozosos." },
            { book: "1 Tesalonicenses", chapter: 5, verse: 17, text: "Orad sin cesar." },
            { book: "1 Tesalonicenses", chapter: 5, verse: 18, text: "Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús." },

            // 2 TESALONICENSES (3 capítulos)
            { book: "2 Tesalonicenses", chapter: 3, verse: 3, text: "Pero fiel es el Señor, que os afirmará y guardará del mal." },

            // 1 TIMOTEO (6 capítulos)
            { book: "1 Timoteo", chapter: 4, verse: 12, text: "Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes en palabra, conducta, amor, espíritu, fe y pureza." },

            // 2 TIMOTEO (4 capítulos)
            { book: "2 Timoteo", chapter: 1, verse: 7, text: "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio." },
            { book: "2 Timoteo", chapter: 3, verse: 16, text: "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia." },

            // TITO (3 capítulos)
            { book: "Tito", chapter: 2, verse: 7, text: "presentándote tú en todo como ejemplo de buenas obras; en la enseñanza mostrando integridad, seriedad." },

            // HEBREOS (13 capítulos)
            { book: "Hebreos", chapter: 4, verse: 12, text: "Porque la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos; y penetra hasta partir el alma y el espíritu, las coyunturas y los tuétanos, y discierne los pensamientos y las intenciones del corazón." },
            { book: "Hebreos", chapter: 11, verse: 1, text: "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve." },
            { book: "Hebreos", chapter: 12, verse: 1, text: "Por tanto, nosotros también, teniendo en derredor nuestro tan grande nube de testigos, despojémonos de todo peso y del pecado que nos asedia, y corramos con paciencia la carrera que tenemos por delante." },
            { book: "Hebreos", chapter: 13, verse: 8, text: "Jesucristo es el mismo ayer, y hoy, y por los siglos." },

            // SANTIAGO (5 capítulos)
            { book: "Santiago", chapter: 1, verse: 5, text: "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada." },
            { book: "Santiago", chapter: 1, verse: 17, text: "Toda buena dádiva y todo don perfecto desciende de lo alto, del Padre de las luces, en el cual no hay mudanza, ni sombra de variación." },
            { book: "Santiago", chapter: 4, verse: 7, text: "Someteos, pues, a Dios; resistid al diablo, y huirá de vosotros." },

            // 1 PEDRO (5 capítulos)
            { book: "1 Pedro", chapter: 2, verse: 9, text: "Mas vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios, para que anunciéis las virtudes de aquel que os llamó de las tinieblas a su luz admirable." },
            { book: "1 Pedro", chapter: 5, verse: 7, text: "echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros." },

            // 2 PEDRO (3 capítulos)
            { book: "2 Pedro", chapter: 1, verse: 4, text: "por medio de las cuales nos ha dado preciosas y grandísimas promesas, para que por ellas llegaseis a ser participantes de la naturaleza divina, habiendo huido de la corrupción que hay en el mundo a causa de la concupiscencia." },

            // 1 JUAN (5 capítulos)
            { book: "1 Juan", chapter: 1, verse: 9, text: "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad." },
            { book: "1 Juan", chapter: 4, verse: 4, text: "Hijitos, vosotros sois de Dios, y los habéis vencido; porque mayor es el que está en vosotros, que el que está en el mundo." },
            { book: "1 Juan", chapter: 4, verse: 8, text: "El que no ama, no ha conocido a Dios; porque Dios es amor." },
            { book: "1 Juan", chapter: 4, verse: 18, text: "En el amor no hay temor, sino que el perfecto amor echa fuera el temor; porque el temor lleva en sí castigo. De donde el que teme, no ha sido perfeccionado en el amor." },
            { book: "1 Juan", chapter: 5, verse: 4, text: "Porque todo lo que es nacido de Dios vence al mundo; y esta es la victoria que ha vencido al mundo, nuestra fe." },

            // 3 JUAN (1 capítulo)
            { book: "3 Juan", chapter: 1, verse: 2, text: "Amado, yo deseo que tú seas prosperado en todas las cosas, y que tengas salud, así como prospera tu alma." },

            // JUDAS (1 capítulo)
            { book: "Judas", chapter: 1, verse: 24, text: "Y a aquel que es poderoso para guardaros sin caída, y presentaros sin mancha delante de su gloria con gran alegría." },

            // APOCALIPSIS (22 capítulos)
            { book: "Apocalipsis", chapter: 3, verse: 20, text: "He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él, y él conmigo." },
            { book: "Apocalipsis", chapter: 21, verse: 4, text: "Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron." },
            { book: "Apocalipsis", chapter: 22, verse: 13, text: "Yo soy el Alfa y la Omega, el principio y el fin, el primero y el último." },

            // **Total: 100+ versículos - Expandible a 31,102**
        ];
    }

    getRandomVerse() {
        if (this.verses.length === 0) return null;

        // Si hemos usado muchos versículos, limpiar algunos del historial de sesión
        if (this.sessionVerses.size > 50) {
            const array = Array.from(this.sessionVerses);
            this.sessionVerses = new Set(array.slice(-30));
        }

        let randomIndex;
        let attempts = 0;
        const maxAttempts = 50;

        // Buscar un versículo no usado recientemente
        do {
            randomIndex = Math.floor(Math.random() * this.verses.length);
            attempts++;
        } while (this.sessionVerses.has(randomIndex) && attempts < maxAttempts);

        this.sessionVerses.add(randomIndex);
        return this.verses[randomIndex];
    }

    getTotalVersesCount() {
        return this.verses.length;
    }

    getVersesReadInSession() {
        return this.sessionVerses.size;
    }
}

// ===== SISTEMA DE TOKENS CSRF MEJORADO =====
class CSRFTokenManager {
    constructor() {
        this.token = null;
        this.tokenExpiry = null;
        this.init();
    }

    async init() {
        await this.generateCSRFToken();
        this.setupTokenRefresh();
    }

    async generateCSRFToken() {
        try {
            const randomBytes = new Uint8Array(32);
            crypto.getRandomValues(randomBytes);
            this.token = Array.from(randomBytes, byte => 
                byte.toString(16).padStart(2, '0')
            ).join('');
            
            this.tokenExpiry = Date.now() + (60 * 60 * 1000);
            
            sessionStorage.setItem('odam-csrf-token', this.token);
            sessionStorage.setItem('odam-csrf-expiry', this.tokenExpiry.toString());
            
            console.log('✅ Token CSRF generado correctamente');
            return this.token;
            
        } catch (error) {
            console.error('❌ Error generando token CSRF:', error);
            this.token = Math.random().toString(36).substring(2) + Date.now().toString(36);
            return this.token;
        }
    }

    validateToken(token) {
        if (!this.token || !this.tokenExpiry) {
            console.warn('⚠️ Token CSRF no inicializado');
            return false;
        }

        if (Date.now() > this.tokenExpiry) {
            console.warn('⚠️ Token CSRF expirado');
            this.generateCSRFToken();
            return false;
        }

        const isValid = token === this.token;
        if (!isValid) {
            console.warn('⚠️ Token CSRF inválido');
        }
        
        return isValid;
    }

    setupTokenRefresh() {
        setInterval(() => {
            this.generateCSRFToken();
        }, 45 * 60 * 1000);
    }

    getToken() {
        if (!this.token || Date.now() > this.tokenExpiry) {
            this.generateCSRFToken();
        }
        return this.token;
    }

    static getStoredToken() {
        try {
            const token = sessionStorage.getItem('odam-csrf-token');
            const expiry = sessionStorage.getItem('odam-csrf-expiry');
            
            if (token && expiry && Date.now() < parseInt(expiry)) {
                return token;
            }
        } catch (error) {
            console.error('Error obteniendo token almacenado:', error);
        }
        return null;
    }
}

// Instancia global del administrador de tokens CSRF
window.csrfTokenManager = new CSRFTokenManager();

class AudioPlayerSystem {
    constructor() {
        this.audioPlayers = new Map();
        this.currentlyPlaying = null;
        this.waveSystems = new Map();
        this.audioContexts = new Map();
        this.userInteracted = false;
        this.init();
    }

    init() {
        console.log('🎵 Sistema de audio inicializado - VERSIÓN REPARADA');
        this.initializeAllAudioPlayers();
        this.setupGlobalEventListeners();
        this.setupUserInteraction();
    }

    setupUserInteraction() {
        const enableAudio = () => {
            this.userInteracted = true;
            console.log('✅ Interacción de usuario detectada - Audio habilitado');
            
            this.audioContexts.forEach((audioContext, audioId) => {
                if (audioContext.state === 'suspended') {
                    audioContext.resume().then(() => {
                        console.log(`✅ AudioContext reanudado para: ${audioId}`);
                    }).catch(console.error);
                }
            });

            document.removeEventListener('click', enableAudio);
            document.removeEventListener('touchstart', enableAudio);
            document.removeEventListener('keydown', enableAudio);
        };

        document.addEventListener('click', enableAudio, { once: true });
        document.addEventListener('touchstart', enableAudio, { once: true });
        document.addEventListener('keydown', enableAudio, { once: true });
    }

    initializeAllAudioPlayers() {
        const audioConfigs = [
            { card: 'project-tu-me-sostendras', audio: 'audio-tu-me-sostendras' },
            { card: 'project-renovados-en-tu-voluntad', audio: 'audio-renovados-en-tu-voluntad' },
            { card: 'project-en-ti-confio-senor', audio: 'audio-en-ti-confio-senor' },
            { card: 'project-el-diezmo-es-del-senor-version-bachata', audio: 'audio-el-diezmo-es-del-senor-version-bachata' },
            { card: 'project-jonas-y-el-gran-pez', audio: 'audio-jonas-y-el-gran-pez' },
            { card: 'project-el-hijo-de-manoa', audio: 'audio-el-hijo-de-manoa' }
        ];

        audioConfigs.forEach(config => {
            this.setupAudioPlayer(config.card, config.audio);
        });

        console.log(`✅ ${audioConfigs.length} reproductores de audio inicializados`);
    }

    setupAudioPlayer(cardId, audioId) {
        const card = document.getElementById(cardId);
        const audio = document.getElementById(audioId);
        
        if (!card || !audio) {
            console.warn(`❌ No se pudo encontrar: ${cardId} o ${audioId}`);
            return;
        }

        const player = {
            card,
            audio,
            playBtn: card.querySelector('.audio-play-btn'),
            progressBar: card.querySelector('.audio-progress'),
            audioTime: card.querySelector('.audio-time'),
            waveform: card.querySelector('.audio-waveform'),
            waveBars: card.querySelectorAll('.wave-bar'),
            audioPlayer: card.querySelector('.audio-player-mini'),
            isPlaying: false,
            audioContext: null
        };

        if (!player.playBtn || !player.progressBar || !player.audioTime || !player.waveform || !player.waveBars || !player.audioPlayer) {
            console.warn(`❌ Elementos del reproductor no encontrados en: ${cardId}`);
            return;
        }

        const waveSystem = new InteractiveWaveSystem();
        this.waveSystems.set(audioId, waveSystem);

        this.audioPlayers.set(audioId, player);
        this.bindPlayerEvents(player, audioId);
    }

    bindPlayerEvents(player, audioId) {
        const { audio, playBtn, progressBar, audioTime, waveBars, audioPlayer } = player;
        const waveSystem = this.waveSystems.get(audioId);

        const formatTime = (seconds) => {
            if (isNaN(seconds)) return '0:00';
            const min = Math.floor(seconds / 60);
            const sec = Math.floor(seconds % 60);
            return `${min}:${sec < 10 ? '0' : ''}${sec}`;
        };

        const updateProgress = () => {
            if (audio.duration && progressBar) {
                const percent = (audio.currentTime / audio.duration) * 100;
                progressBar.style.width = `${percent}%`;
            }
            if (audioTime) {
                audioTime.textContent = formatTime(audio.currentTime);
            }
        };

        const initAudioAnalyser = () => {
            if (!waveSystem.initialized) {
                try {
                    const AudioContext = window.AudioContext || window.webkitAudioContext;
                    if (!AudioContext) {
                        console.warn('AudioContext no soportado');
                        return;
                    }
                    
                    const audioContext = new AudioContext();
                    this.audioContexts.set(audioId, audioContext);
                    
                    if (this.userInteracted && audioContext.state === 'suspended') {
                        audioContext.resume();
                    }
                    
                    waveSystem.initAnalyser(audio, audioContext);
                } catch (error) {
                    console.error('❌ Error inicializando analizador:', error);
                }
            }
        };

        const togglePlay = async (e) => {
            if (e) e.stopPropagation();

            if (player.isPlaying) {
                audio.pause();
                player.isPlaying = false;
                audioPlayer.classList.remove('playing');
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
                waveSystem.stopWaveform();
                this.currentlyPlaying = null;
                return;
            }

            if (this.currentlyPlaying && this.currentlyPlaying !== audioId) {
                const previousPlayer = this.audioPlayers.get(this.currentlyPlaying);
                const previousWaveSystem = this.waveSystems.get(this.currentlyPlaying);
                
                if (previousPlayer && previousWaveSystem) {
                    previousPlayer.audio.pause();
                    previousPlayer.isPlaying = false;
                    previousPlayer.audioPlayer.classList.remove('playing');
                    previousPlayer.playBtn.innerHTML = '<i class="fas fa-play"></i>';
                    previousWaveSystem.stopWaveform();
                }
            }

            try {
                const audioContext = this.audioContexts.get(audioId);
                if (audioContext && audioContext.state === 'suspended') {
                    await audioContext.resume();
                }

                await audio.play();
                
                player.isPlaying = true;
                this.currentlyPlaying = audioId;
                audioPlayer.classList.add('playing');
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                
                setTimeout(() => {
                    initAudioAnalyser();
                    if (waveSystem.initialized) {
                        waveSystem.updateWaveform(waveBars);
                    }
                }, 100);
                
                document.dispatchEvent(new CustomEvent('audioPlay'));
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'audio_play', {
                        event_category: 'media',
                        event_label: audioId,
                        value: 1
                    });
                }
                
            } catch (error) {
                console.error('❌ Error reproduciendo audio:', error);
                
                if (error.name === 'NotAllowedError') {
                    playBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
                    playBtn.style.color = '#ffa500';
                    playBtn.title = 'Haz clic aquí primero para activar el audio';
                    
                    console.log('🔊 Política de autoplay bloqueada - Esperando interacción del usuario');
                    
                    const retryPlay = () => {
                        playBtn.innerHTML = '<i class="fas fa-play"></i>';
                        playBtn.style.color = '';
                        playBtn.title = 'Reproducir';
                        document.removeEventListener('click', retryPlay);
                        togglePlay();
                    };
                    
                    document.addEventListener('click', retryPlay, { once: true });
                } else {
                    playBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
                    playBtn.style.color = '#ff6b6b';
                    playBtn.title = 'Error al reproducir';
                    audioPlayer.classList.add('error');
                }
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'audio_error', {
                        event_category: 'media',
                        event_label: error.message
                    });
                }
            }
        };

        playBtn.addEventListener('click', togglePlay);

        audio.addEventListener('timeupdate', updateProgress);
        
        audio.addEventListener('ended', () => {
            audio.currentTime = 0;
            player.isPlaying = false;
            audioPlayer.classList.remove('playing');
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            if (progressBar) progressBar.style.width = '0%';
            if (audioTime) audioTime.textContent = '0:00';
            waveSystem.stopWaveform();
            this.currentlyPlaying = null;
        });

        audio.addEventListener('loadedmetadata', () => {
            if (audioTime) audioTime.textContent = '0:00';
        });

        audio.addEventListener('canplay', initAudioAnalyser);

        audio.addEventListener('error', (e) => {
            console.error(`Error en audio ${audioId}:`, e);
            playBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
            playBtn.style.color = '#ff6b6b';
            audioPlayer.classList.add('error');
        });
    }

    setupGlobalEventListeners() {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.audio-player-mini') && !e.target.closest('.audio-play-btn')) {
                this.pauseAll();
            }
        });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAll();
            }
        });
    }

    pauseAll() {
        this.audioPlayers.forEach((player, audioId) => {
            if (player.isPlaying) {
                player.audio.pause();
                player.isPlaying = false;
                player.audioPlayer.classList.remove('playing');
                player.playBtn.innerHTML = '<i class="fas fa-play"></i>';
                
                const waveSystem = this.waveSystems.get(audioId);
                if (waveSystem) {
                    waveSystem.stopWaveform();
                }
            }
        });
        this.currentlyPlaying = null;
    }

    destroy() {
        this.pauseAll();
        this.waveSystems.forEach(waveSystem => {
            waveSystem.destroy();
        });
        this.waveSystems.clear();
        this.audioPlayers.clear();
        
        this.audioContexts.forEach(audioContext => {
            audioContext.close().catch(console.error);
        });
        this.audioContexts.clear();
    }
}

// ===== SISTEMA DE ONDAS INTERACTIVAS MEJORADO Y REPARADO =====
class InteractiveWaveSystem {
    constructor() {
        this.audioContext = null;
        this.analyser = null;
        this.dataArray = null;
        this.animationFrame = null;
        this.initialized = false;
        this.isPlaying = false;
    }

    initAnalyser(audioElement, audioContext = null) {
        if (this.initialized) return;
        
        try {
            if (!audioContext) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (!AudioContext) {
                    console.warn('AudioContext no soportado en este navegador');
                    return;
                }
                this.audioContext = new AudioContext();
            } else {
                this.audioContext = audioContext;
            }
            
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume().then(() => {
                    console.log('✅ AudioContext reanudado para waveform');
                }).catch(console.error);
            }
            
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = 256;
            this.analyser.smoothingTimeConstant = 0.8;
            
            const source = this.audioContext.createMediaElementSource(audioElement);
            source.connect(this.analyser);
            this.analyser.connect(this.audioContext.destination);
            
            const bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(bufferLength);
            
            this.initialized = true;
            console.log('✅ Analizador de audio inicializado correctamente');
            
        } catch (error) {
            console.error('❌ Error inicializando el analizador de audio:', error);
            this.initialized = false;
        }
    }

    updateWaveform(waveBars) {
        if (!this.analyser || !this.initialized || !waveBars) return;

        try {
            this.analyser.getByteFrequencyData(this.dataArray);
            
            const bandSize = Math.floor(this.dataArray.length / waveBars.length);
            
            waveBars.forEach((bar, index) => {
                const start = index * bandSize;
                let sum = 0;
                
                for (let i = 0; i < bandSize; i++) {
                    sum += this.dataArray[start + i];
                }
                
                const average = sum / bandSize;
                const height = Math.max(10, (average / 256) * 100);
                
                bar.style.height = `${height}%`;
                bar.style.opacity = Math.max(0.4, Math.min(1, average / 150));
                
                const intensity = average / 256;
                if (intensity > 0.8) {
                    bar.style.background = 'linear-gradient(180deg, #ffd700, #ff6b00)';
                } else if (intensity > 0.6) {
                    bar.style.background = 'linear-gradient(180deg, var(--vibrant-gold), #ffa500)';
                } else {
                    bar.style.background = 'linear-gradient(180deg, var(--rich-gold), var(--vibrant-gold))';
                }
            });

            this.animationFrame = requestAnimationFrame(() => this.updateWaveform(waveBars));
        } catch (error) {
            console.error('Error actualizando waveform:', error);
            this.stopWaveform();
        }
    }

    stopWaveform() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
    }

    destroy() {
        this.stopWaveform();
        if (this.audioContext) {
            this.audioContext.close().catch(console.error);
        }
        this.initialized = false;
    }
}

// ===== SISTEMA PWA (SOLO PARA MÓVILES) - CORREGIDO =====
class PWAManager {
    constructor() {
        this.deferredPrompt = null;
        this.isMobile = isMobileDevice();
        this.init();
    }

    init() {
        if (!this.isMobile) {
            console.log('📱 PWA: Deshabilitado en desktop');
            this.hidePWAElements();
            return;
        }

        this.setupInstallPrompt();
        this.setupBeforeInstallPrompt();
        this.checkStandaloneMode();
        this.setupAppBadge();
    }

    hidePWAElements() {
        const pwaButton = document.getElementById('pwa-install-button');
        const pwaBadges = document.querySelectorAll('.pwa-badge');
        
        if (pwaButton) pwaButton.style.display = 'none';
        pwaBadges.forEach(badge => badge.style.display = 'none');
    }

    setupBeforeInstallPrompt() {
        if (!this.isMobile) return;

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.showInstallPromotion();
            console.log('✅ PWA - BeforeInstallPrompt event captured');
        });
    }

    setupInstallPrompt() {
        if (!this.isMobile) return;

        let installButton = document.getElementById('pwa-install-button');
        if (!installButton) {
            installButton = document.createElement('button');
            installButton.id = 'pwa-install-button';
            installButton.innerHTML = '📱 Instalar App';
            installButton.className = 'mobile-only';
            installButton.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: linear-gradient(135deg, #c8a25f, #d4af37);
                color: black;
                border: none;
                padding: 12px 20px;
                border-radius: 25px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(200, 162, 95, 0.4);
                z-index: 1000;
                display: none;
                animation: bounce 2s infinite;
            `;

            installButton.addEventListener('click', () => {
                this.promptInstallation();
            });

            document.body.appendChild(installButton);
        }
    }

    setupAppBadge() {
        if (!this.isMobile) return;

        const appBadge = document.querySelector('.pwa-badge');
        if (appBadge) {
            appBadge.style.cursor = 'pointer';
            appBadge.className = 'pwa-badge mobile-only';
            appBadge.setAttribute('title', 'Haz clic para instalar la app');
            appBadge.addEventListener('click', () => {
                this.promptInstallation();
            });
            
            appBadge.addEventListener('mouseenter', () => {
                appBadge.style.transform = 'scale(1.05)';
                appBadge.style.transition = 'transform 0.2s ease';
            });
            
            appBadge.addEventListener('mouseleave', () => {
                appBadge.style.transform = 'scale(1)';
            });
        }
    }

    showInstallPromotion() {
        if (!this.isMobile) return;

        const installButton = document.getElementById('pwa-install-button');
        if (installButton && this.deferredPrompt) {
            installButton.style.display = 'block';
            
            setTimeout(() => {
                installButton.style.display = 'none';
            }, 10000);
        }

        const appBadge = document.querySelector('.pwa-badge');
        if (appBadge && this.deferredPrompt) {
            appBadge.style.display = 'inline-block';
        }
    }

    async promptInstallation() {
        if (!this.isMobile || !this.deferredPrompt) {
            this.showNotification('⚠️ La instalación solo está disponible en dispositivos móviles.', 'warning');
            return;
        }

        try {
            this.deferredPrompt.prompt();
            const { outcome } = await this.deferredPrompt.userChoice;
            
            console.log(`✅ PWA - User response to install prompt: ${outcome}`);
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'pwa_install_prompt', {
                    event_category: 'pwa',
                    event_label: outcome
                });
            }

            if (outcome === 'accepted') {
                this.showNotification('✅ App instalada correctamente', 'success');
            }

            this.deferredPrompt = null;
            
            const installButton = document.getElementById('pwa-install-button');
            if (installButton) {
                installButton.style.display = 'none';
            }

        } catch (error) {
            console.error('Error durante la instalación PWA:', error);
            this.showNotification('❌ Error durante la instalación', 'error');
        }
    }

    checkStandaloneMode() {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            console.log('✅ PWA - Running in standalone mode');
            document.body.classList.add('pwa-standalone');
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'pwa_launch', {
                    event_category: 'pwa',
                    event_label: 'standalone'
                });
            }
        }
    }

    showNotification(message, type = 'info') {
        console.log(`${type.toUpperCase()}: ${message}`);
    }
}

// ===== SISTEMA DE FORMULARIO CON BACKEND Y CSRF =====
class FormHandler {
    constructor() {
        this.init();
    }

    async init() {
        this.setupFormHandlers();
        this.setupCSRFProtection();
    }

    setupCSRFProtection() {
        document.addEventListener('DOMContentLoaded', () => {
            this.injectCSRFTokens();
        });
    }

    injectCSRFTokens() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const existingToken = form.querySelector('input[name="csrf_token"]');
            if (!existingToken) {
                const tokenInput = document.createElement('input');
                tokenInput.type = 'hidden';
                tokenInput.name = "csrf_token";
                tokenInput.value = window.csrfTokenManager.getToken();
                form.appendChild(tokenInput);
            }
        });
    }

    setupFormHandlers() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(contactForm);
            });
        }

        const feedbackForm = document.getElementById('feedback-form');
        if (feedbackForm) {
            feedbackForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFeedbackForm(feedbackForm);
            });
        }

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('.open-contact-modal') || 
                e.target.closest('.open-contact-modal')) {
                e.preventDefault();
                this.openContactModal();
            }
        });

        this.setupCharacterCounters();
    }

    setupCharacterCounters() {
        const textareas = document.querySelectorAll('textarea[maxlength]');
        textareas.forEach(textarea => {
            const maxLength = parseInt(textarea.getAttribute('maxlength'));
            const counter = document.createElement('div');
            counter.className = 'char-counter';
            counter.style.cssText = `
                text-align: right;
                font-size: 0.8rem;
                color: #b0b0b0;
                margin-top: 5px;
            `;
            counter.textContent = `0/${maxLength}`;
            
            textarea.parentNode.appendChild(counter);
            
            textarea.addEventListener('input', (e) => {
                const length = e.target.value.length;
                counter.textContent = `${length}/${maxLength}`;
                
                if (length > maxLength * 0.9) {
                    counter.style.color = '#ff6b6b';
                } else if (length > maxLength * 0.75) {
                    counter.style.color = '#ffa500';
                } else {
                    counter.style.color = '#b0b0b0';
                }
            });
        });
    }

    async handleContactForm(form) {
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        const csrfToken = formData.get('csrf_token');
        if (!window.csrfTokenManager.validateToken(csrfToken)) {
            this.showNotification('❌ Error de seguridad. Por favor, recarga la página.', 'error');
            return;
        }

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;

        try {
            const response = await fetch('/form-handler.php', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-Token': csrfToken
                }
            });

            const data = await response.json();

            if (data.success) {
                this.showNotification('✅ Solicitud enviada correctamente. Te contactaremos pronto.', 'success');
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submission', {
                        event_category: 'contact',
                        event_label: formData.get('service-type'),
                        value: 1
                    });
                }

                document.dispatchEvent(new CustomEvent('formSubmission', {
                    detail: {
                        serviceType: formData.get('service-type')
                    }
                }));

                this.closeModal();
                form.reset();

                window.csrfTokenManager.generateCSRFToken();

            } else {
                this.showNotification('❌ Error: ' + data.message, 'error');
                console.error('Error del servidor:', data);
            }

        } catch (error) {
            console.error('Error enviando formulario:', error);
            this.showNotification('❌ Error de conexión. Usando método alternativo...', 'warning');
            this.fallbackToMailto(form);
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    async handleFeedbackForm(form) {
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        const csrfToken = formData.get('csrf_token');
        if (!window.csrfTokenManager.validateToken(csrfToken)) {
            this.showNotification('❌ Error de seguridad. Por favor, recarga la página.', 'error');
            return;
        }

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;

        try {
            const response = await fetch('/form-handler.php', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-Token': csrfToken
                }
            });

            const data = await response.json();

            if (data.success) {
                this.showNotification('✅ ¡Gracias por tus comentarios!', 'success');
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'feedback_submission', {
                        event_category: 'feedback',
                        event_label: 'user_feedback'
                    });
                }

                form.reset();
                this.closeFeedbackModal();

                window.csrfTokenManager.generateCSRFToken();

            } else {
                this.showNotification('❌ Error: ' + data.message, 'error');
            }

        } catch (error) {
            console.error('Error enviando feedback:', error);
            this.showNotification('❌ Error enviando comentarios', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    fallbackToMailto(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        const subject = `Nueva solicitud de servicio: ${data['service-type']}`;
        const body = `
Solicitud de Cotización - ODAM Producción Musical

INFORMACIÓN DEL CLIENTE:
Nombre: ${data.name}
Email: ${data.email}
Teléfono/WhatsApp: ${data.phone}

DETALLES DEL SERVICIO:
Servicio solicitado: ${data['service-type']}
Tipo de proyecto: ${data['project-type'] || 'No especificado'}
Presupuesto estimado: ${data.budget || 'No especificado'}
Fecha límite: ${data.deadline || 'No especificada'}

DESCRIPCIÓN DEL PROYECTO:
${data.message}

---
Este mensaje fue enviado desde el formulario de contacto de ODAM Producción Musical.
        `.trim();

        const mailtoLink = `mailto:odeam@osklindealba.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    }

    openContactModal() {
        const modal = document.getElementById('contact-modal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            this.injectCSRFTokens();
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'modal_open', {
                    event_category: 'ui',
                    event_label: 'contact_modal'
                });
            }
        }
    }

    closeModal() {
        const modal = document.getElementById('contact-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    closeFeedbackModal() {
        const modal = document.getElementById('feedback-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    showNotification(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `notification-toast notification-${type}`;
        toast.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#F44336' : type === 'warning' ? '#FF9800' : '#2196F3'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }
        }, 5000);

        toast.querySelector('.notification-close').addEventListener('click', () => {
            toast.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        });
    }
}

// ===== SISTEMA DE ANIMACIONES =====
class AnimationSystem {
    constructor() {
        this.observer = null;
        this.animatedElements = new Set();
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
                    entry.target.classList.add('show');
                    this.animatedElements.add(entry.target);
                    
                    if (typeof gtag !== 'undefined' && entry.target.id) {
                        gtag('event', 'element_visible', {
                            event_category: 'engagement',
                            event_label: entry.target.id
                        });
                    }
                    
                    setTimeout(() => {
                        this.observer.unobserve(entry.target);
                    }, 1000);
                }
            });
        }, options);

        document.querySelectorAll('.fade-in').forEach(el => {
            this.observer.observe(el);
        });
    }

    setupScrollAnimations() {
        let ticking = false;
        
        const updateElements = () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            
            parallaxElements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-parallax')) || 0.5;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
            
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateElements);
                ticking = true;
            }
        });
    }
}

// ===== SISTEMA DE VERSÍCULOS BÍBLICOS DINÁMICOS =====
function initBibleVerses() {
    const bibleVerseElement = document.getElementById('bible-verse');
    if (!bibleVerseElement) return;

    const bible = new CompleteBibleRV1960();
    let rotationInterval = null;
    let lastUserActivity = Date.now();

    function displayRandomVerse() {
        const verse = bible.getRandomVerse();
        
        if (bibleVerseElement && verse) {
            bibleVerseElement.style.opacity = '0';
            
            setTimeout(() => {
                bibleVerseElement.innerHTML = `
                    <div class="verse-text">"${verse.text}"</div>
                    <div class="verse-reference">${verse.book} ${verse.chapter}:${verse.verse}</div>
                    <div class="verse-counter" style="font-size: 0.7rem; color: #b0b0b0; margin-top: 8px;">
                        📖 ${bible.getVersesReadInSession()}/${bible.getTotalVersesCount()} versículos vistos
                    </div>
                `;
                bibleVerseElement.style.opacity = '1';
            }, 300);

            if (typeof gtag !== 'undefined') {
                gtag('event', 'bible_verse_view', {
                    event_category: 'content',
                    event_label: `${verse.book} ${verse.chapter}:${verse.verse}`
                });
            }
        }
    }

    function startVerseRotation() {
        if (rotationInterval) clearInterval(rotationInterval);
        
        rotationInterval = setInterval(() => {
            const inactiveTime = Date.now() - lastUserActivity;
            
            if (inactiveTime > 30000) {
                displayRandomVerse();
                console.log('🔄 Versículo rotado automáticamente (usuario inactivo)');
            }
        }, 2 * 60 * 1000);
    }

    function trackUserActivity() {
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
        events.forEach(event => {
            document.addEventListener(event, () => {
                lastUserActivity = Date.now();
            }, { passive: true });
        });
    }

    // Inicialización
    setTimeout(() => {
        displayRandomVerse();
        startVerseRotation();
        trackUserActivity();
        
        bibleVerseElement.addEventListener('click', () => {
            displayRandomVerse();
            lastUserActivity = Date.now();
        });
        
        bibleVerseElement.addEventListener('touchstart', () => {
            displayRandomVerse();
            lastUserActivity = Date.now();
        });
    }, 1000);

    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            displayRandomVerse();
        }
    });

    window.addEventListener('load', () => {
        setTimeout(displayRandomVerse, 1000);
    });
}

// ===== OPTIMIZACIÓN DE EVENT LISTENERS =====
function optimizeEventListeners() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.service-accordion-header')) {
            const header = e.target.closest('.service-accordion-header');
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            document.querySelectorAll('.service-accordion-item').forEach(accItem => {
                accItem.classList.remove('active');
            });
            
            if (!isActive) {
                item.classList.add('active');
                
                if (typeof gtag !== 'undefined') {
                    const serviceName = item.querySelector('h3').textContent;
                    gtag('event', 'service_expand', {
                        event_category: 'engagement',
                        event_label: serviceName
                    });
                }
            }
        }
        
        if (e.target.classList.contains('modal-close') || 
            e.target.closest('.modal-close') ||
            e.target.id === 'contact-modal') {
            const modal = document.getElementById('contact-modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('contact-modal');
            if (modal && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            
            const feedbackModal = document.getElementById('feedback-modal');
            if (feedbackModal && feedbackModal.classList.contains('active')) {
                feedbackModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
}

// ===== MENÚ MÓVIL =====
function initMobileMenu() {
    const toggle = document.getElementById('site-nav-toggle');
    const nav = document.getElementById('site-nav');
    
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        nav.classList.toggle('open');
        document.body.style.overflow = expanded ? 'auto' : 'hidden';
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'mobile_menu_toggle', {
                event_category: 'ui',
                event_label: expanded ? 'close' : 'open'
            });
        }
    });

    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = 'auto';
        });
    });

    document.addEventListener('click', (e) => {
        if (nav.classList.contains('open') && 
            !nav.contains(e.target) && 
            !toggle.contains(e.target)) {
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = 'auto';
        }
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offset = 80;
                
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: 'smooth'
                });

                if (typeof gtag !== 'undefined') {
                    gtag('event', 'smooth_scroll', {
                        event_category: 'navigation',
                        event_label: href
                    });
                }

                history.pushState(null, null, href);
            }
        });
    });
}

// ===== HEADER SCROLL EFFECT =====
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    let lastScroll = 0;
    let ticking = false;

    function updateHeader() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        if (currentScroll > lastScroll && currentScroll > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
        ticking = false;
    }
    
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true });
}

// ===== LOADING SYSTEM =====
class LoadingSystem {
    constructor() {
        this.progress = 0;
        this.progressBar = document.getElementById('loading-progress');
        this.progressFill = document.querySelector('.progress-fill');
    }

    init() {
        if (!this.progressBar || !this.progressFill) {
            console.warn('Elementos de loading no encontrados');
            return;
        }
        this.startLoading();
        this.trackResources();
    }

    startLoading() {
        if (this.progressBar) {
            this.progressBar.classList.add('loading');
            this.updateProgress(10);
        }
    }

    trackResources() {
        const images = document.querySelectorAll('img');
        let loadedCount = 0;
        const totalCount = images.length;

        images.forEach(img => {
            if (img.complete) {
                loadedCount++;
            } else {
                img.addEventListener('load', () => {
                    loadedCount++;
                    this.updateProgress(10 + (loadedCount / totalCount) * 80);
                });
                img.addEventListener('error', () => {
                    loadedCount++;
                    this.updateProgress(10 + (loadedCount / totalCount) * 80);
                });
            }
        });

        setTimeout(() => {
            if (this.progress < 90) {
                this.updateProgress(90);
            }
        }, 1000);
    }

    updateProgress(percent) {
        this.progress = percent;
        if (this.progressFill) {
            this.progressFill.style.width = `${percent}%`;
        }

        if (percent >= 90) {
            setTimeout(() => this.completeLoading(), 300);
        }
    }

    completeLoading() {
        this.updateProgress(100);
        setTimeout(() => {
            if (this.progressBar) {
                this.progressBar.classList.remove('loading');
            }
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'page_loaded', {
                    event_category: 'performance',
                    event_label: 'full_load',
                    value: Math.round(performance.now())
                });
            }
        }, 500);
    }
}

// ===== ELIMINAR BOTÓN BLANCO =====
function fixWhiteButton() {
    const whiteButton = document.querySelector('.nav-toggle');
    if (whiteButton && window.innerWidth > 768) {
        whiteButton.style.display = 'none';
    }
}

// ===== INICIALIZACIÓN PRINCIPAL MEJORADA =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎵 ODAM - Inicializando sitio con BIBLIA RV1960...');

    try {
        if (window.odamInitialized) {
            console.log('⚠️ ODAM ya está inicializado');
            return;
        }
        window.odamInitialized = true;

        // Sistema de carga
        const loadingSystem = new LoadingSystem();
        loadingSystem.init();

        // Sistema de animaciones
        const animationSystem = new AnimationSystem();

        // Sistema de audio - CRÍTICO REPARADO
        window.audioSystem = new AudioPlayerSystem();

        // PWA Manager - SOLO MÓVILES
        window.pwaManager = new PWAManager();

        // Form Handler
        window.formHandler = new FormHandler();

        // Optimizar event listeners
        optimizeEventListeners();

        // Inicializar componentes
        initMobileMenu();
        initSmoothScroll();
        initHeaderScroll();
        initBibleVerses(); // ✅ SISTEMA DE BIBLIA COMPLETO
        fixWhiteButton();

        // CORRECCIÓN: CSS para elementos móviles
        const style = document.createElement('style');
        style.textContent = `
            .mobile-only { display: none; }
            @media (max-width: 768px) {
                .mobile-only { display: block; }
            }
        `;
        document.head.appendChild(style);

        // Prefers reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelectorAll('.fade-in').forEach(el => {
                el.style.transition = 'none';
                el.classList.add('show');
            });
        }

        console.log('🎵 ODAM - Sitio completamente inicializado con BIBLIA RV1960');
    } catch (error) {
        console.error('Error durante la inicialización:', error);
    }
});

// ===== PARTÍCULAS INTERACTIVAS =====
class InteractiveParticles {
    constructor() {
        this.particlesInstance = null;
        this.isMobile = window.innerWidth < 768;
    }

    init() {
        if (this.isMobile || typeof particlesJS === 'undefined') return;

        const particlesContainer = document.getElementById('particles-js');
        if (!particlesContainer) return;

        this.particlesInstance = particlesJS('particles-js', {
            particles: {
                number: { 
                    value: 40,
                    density: { 
                        enable: true, 
                        value_area: 800 
                    } 
                },
                color: { value: "#c8a25f" },
                shape: { type: "circle" },
                opacity: { 
                    value: 0.3,
                    random: true 
                },
                size: { 
                    value: 3,
                    random: true 
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#c8a25f",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { 
                        enable: true, 
                        mode: "grab" 
                    },
                    onclick: { 
                        enable: true, 
                        mode: "push" 
                    }
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.3
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ===== MANEJO DE ERRORES GLOBAL =====
window.addEventListener('error', function(e) {
    console.error('Error global:', e.error);
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'javascript_error', {
            event_category: 'error',
            event_label: e.message,
            non_interaction: true
        });
    }
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Promise rechazada:', e.reason);
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'promise_rejection', {
            event_category: 'error',
            event_label: e.reason?.message || 'Unknown',
            non_interaction: true
        });
    }
});

// ===== OFFLINE DETECTION =====
window.addEventListener('online', () => {
    console.log('✅ Conexión restaurada');
    document.body.classList.remove('offline');
});

window.addEventListener('offline', () => {
    console.log('❌ Sin conexión');
    document.body.classList.add('offline');
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'offline_mode', {
            event_category: 'connection',
            event_label: 'offline'
        });
    }
});

// Inicializar partículas después de la carga
window.addEventListener('load', () => {
    const particlesSystem = new InteractiveParticles();
    particlesSystem.init();
});

// ===== EXPORTACIÓN PARA USO EXTERNO =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AudioPlayerSystem,
        PWAManager,
        FormHandler,
        AnimationSystem,
        LoadingSystem,
        CompleteBibleRV1960
    };
}
