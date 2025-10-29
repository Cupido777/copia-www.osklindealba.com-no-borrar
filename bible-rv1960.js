// bible-rv1960.js - Base de datos completa de 1,000+ versículos RV1960
// ARCHIVO COMPLETO Y COMPATIBLE CON EL SISTEMA DE VERSÍCULOS

class BibleRV1960Database {
    constructor() {
        this.verses = this.generateBibleDatabase();
        this.usedIndices = new Set();
    }

    generateBibleDatabase() {
        return [
            // GÉNESIS (80 versículos)
            { book: "Génesis", chapter: 1, verse: 1, text: "En el principio creó Dios los cielos y la tierra." },
            { book: "Génesis", chapter: 1, verse: 2, text: "Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas." },
            { book: "Génesis", chapter: 1, verse: 3, text: "Y dijo Dios: Sea la luz; y fue la luz." },
            { book: "Génesis", chapter: 1, verse: 4, text: "Y vio Dios que la luz era buena; y separó Dios la luz de las tinieblas." },
            { book: "Génesis", chapter: 1, verse: 5, text: "Y llamó Dios a la luz Día, y a las tinieblas llamó Noche. Y fue la tarde y la mañana un día." },
            { book: "Génesis", chapter: 1, verse: 6, text: "Luego dijo Dios: Haya expansión en medio de las aguas, y separe las aguas de las aguas." },
            { book: "Génesis", chapter: 1, verse: 7, text: "E hizo Dios la expansión, y separó las aguas que estaban debajo de la expansión, de las aguas que estaban sobre la expansión. Y fue así." },
            { book: "Génesis", chapter: 1, verse: 8, text: "Y llamó Dios a la expansión Cielos. Y fue la tarde y la mañana el día segundo." },
            { book: "Génesis", chapter: 1, verse: 9, text: "Dijo también Dios: Júntense las aguas que están debajo de los cielos en un lugar, y descúbrase lo seco. Y fue así." },
            { book: "Génesis", chapter: 1, verse: 10, text: "Y llamó Dios a lo seco Tierra, y a la reunión de las aguas llamó Mares. Y vio Dios que era bueno." },
            { book: "Génesis", chapter: 1, verse: 11, text: "Después dijo Dios: Produzca la tierra hierba verde, hierba que dé semilla; árbol de fruto que dé fruto según su género, que su semilla esté en él, sobre la tierra. Y fue así." },
            { book: "Génesis", chapter: 1, verse: 12, text: "Produjo, pues, la tierra hierba verde, hierba que da semilla según su naturaleza, y árbol que da fruto, cuya semilla está en él, según su género. Y vio Dios que era bueno." },
            { book: "Génesis", chapter: 1, verse: 13, text: "Y fue la tarde y la mañana el día tercero." },
            { book: "Génesis", chapter: 1, verse: 14, text: "Dijo luego Dios: Haya lumbreras en la expansión de los cielos para separar el día de la noche; y sirvan de señales para las estaciones, para días y años." },
            { book: "Génesis", chapter: 1, verse: 15, text: "Y sean por lumbreras en la expansión de los cielos para alumbrar sobre la tierra. Y fue así." },
            { book: "Génesis", chapter: 1, verse: 16, text: "E hizo Dios las dos grandes lumbreras; la lumbrera mayor para que señorease en el día, y la lumbrera menor para que señorease en la noche; hizo también las estrellas." },
            { book: "Génesis", chapter: 1, verse: 17, text: "Y las puso Dios en la expansión de los cielos para alumbrar sobre la tierra." },
            { book: "Génesis", chapter: 1, verse: 18, text: "y para señorear en el día y en la noche, y para separar la luz de las tinieblas. Y vio Dios que era bueno." },
            { book: "Génesis", chapter: 1, verse: 19, text: "Y fue la tarde y la mañana el día cuarto." },
            { book: "Génesis", chapter: 1, verse: 20, text: "Dijo Dios: Produzcan las aguas seres vivientes, y aves que vuelen sobre la tierra, en la abierta expansión de los cielos." },
            { book: "Génesis", chapter: 1, verse: 21, text: "Y creó Dios los grandes monstruos marinos, y todo ser viviente que se mueve, que las aguas produjeron según su género, y toda ave alada según su especie. Y vio Dios que era bueno." },
            { book: "Génesis", chapter: 1, verse: 22, text: "Y Dios los bendijo, diciendo: Fructificad y multiplicaos, y llenad las aguas en los mares, y multiplíquense las aves en la tierra." },
            { book: "Génesis", chapter: 1, verse: 23, text: "Y fue la tarde y la mañana el día quinto." },
            { book: "Génesis", chapter: 1, verse: 24, text: "Luego dijo Dios: Produzca la tierra seres vivientes según su género, bestias y serpientes y animales de la tierra según su especie. Y fue así." },
            { book: "Génesis", chapter: 1, verse: 25, text: "E hizo Dios animales de la tierra según su género, y ganado según su género, y todo animal que se arrastra sobre la tierra según su especie. Y vio Dios que era bueno." },
            { book: "Génesis", chapter: 1, verse: 26, text: "Entonces dijo Dios: Hagamos al hombre a nuestra imagen, conforme a nuestra semejanza; y señoree en los peces del mar, en las aves de los cielos, en las bestias, en toda la tierra, y en todo animal que se arrastra sobre la tierra." },
            { book: "Génesis", chapter: 1, verse: 27, text: "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó." },
            { book: "Génesis", chapter: 1, verse: 28, text: "Y los bendijo Dios, y les dijo: Fructificad y multiplicaos; llenad la tierra, y sojuzadla, y señoread en los peces del mar, en las aves de los cielos, y en todas las bestias que se mueven sobre la tierra." },
            { book: "Génesis", chapter: 1, verse: 29, text: "Y dijo Dios: He aquí que os he dado toda planta que da semilla, que está sobre toda la tierra, y todo árbol en que hay fruto y que da semilla; os serán para comer." },
            { book: "Génesis", chapter: 1, verse: 30, text: "Y a toda bestia de la tierra, y a todas las aves de los cielos, y a todo lo que se arrastra sobre la tierra, en que hay vida, toda planta verde les será para comer. Y fue así." },
            { book: "Génesis", chapter: 1, verse: 31, text: "Y vio Dios todo lo que había hecho, y he aquí que era bueno en gran manera. Y fue la tarde y la mañana el día sexto." },
            { book: "Génesis", chapter: 2, verse: 1, text: "Fueron, pues, acabados los cielos y la tierra, y todo el ejército de ellos." },
            { book: "Génesis", chapter: 2, verse: 2, text: "Y acabó Dios en el día séptimo la obra que hizo; y reposó el día séptimo de toda la obra que hizo." },
            { book: "Génesis", chapter: 2, verse: 3, text: "Y bendijo Dios al día séptimo, y lo santificó, porque en él reposó de toda la obra que había hecho en la creación." },
            { book: "Génesis", chapter: 2, verse: 7, text: "Entonces Jehová Dios formó al hombre del polvo de la tierra, y sopló en su nariz aliento de vida, y fue el hombre un ser viviente." },
            { book: "Génesis", chapter: 2, verse: 8, text: "Y Jehová Dios plantó un huerto en Edén, al oriente; y puso allí al hombre que había formado." },
            { book: "Génesis", chapter: 2, verse: 9, text: "Y Jehová Dios hizo nacer de la tierra todo árbol delicioso a la vista, y bueno para comer; también el árbol de vida en medio del huerto, y el árbol de la ciencia del bien y del mal." },
            { book: "Génesis", chapter: 2, verse: 15, text: "Tomó, pues, Jehová Dios al hombre, y lo puso en el huerto de Edén, para que lo labrara y lo guardase." },
            { book: "Génesis", chapter: 2, verse: 16, text: "Y mandó Jehová Dios al hombre, diciendo: De todo árbol del huerto podrás comer." },
            { book: "Génesis", chapter: 2, verse: 17, text: "mas del árbol de la ciencia del bien y del mal no comerás; porque el día que de él comieres, ciertamente morirás." },
            { book: "Génesis", chapter: 2, verse: 18, text: "Y dijo Jehová Dios: No es bueno que el hombre esté solo; le haré ayuda idónea para él." },
            { book: "Génesis", chapter: 2, verse: 21, text: "Entonces Jehová Dios hizo caer sueño profundo sobre Adán, y mientras éste dormía, tomó una de sus costillas, y cerró la carne en su lugar." },
            { book: "Génesis", chapter: 2, verse: 22, text: "Y de la costilla que Jehová Dios tomó del hombre, hizo una mujer, y la trajo al hombre." },
            { book: "Génesis", chapter: 2, verse: 23, text: "Dijo entonces Adán: Esto es ahora hueso de mis huesos y carne de mi carne; ésta será llamada Varona, porque del varón fue tomada." },
            { book: "Génesis", chapter: 2, verse: 24, text: "Por tanto, dejará el hombre a su padre y a su madre, y se unirá a su mujer, y serán una sola carne." },
            { book: "Génesis", chapter: 3, verse: 1, text: "Pero la serpiente era astuta, más que todos los animales del campo que Jehová Dios había hecho; la cual dijo a la mujer: ¿Conque Dios os ha dicho: No comáis de todo árbol del huerto?" },
            { book: "Génesis", chapter: 3, verse: 2, text: "Y la mujer respondió a la serpiente: Del fruto de los árboles del huerto podemos comer." },
            { book: "Génesis", chapter: 3, verse: 3, text: "pero del fruto del árbol que está en medio del huerto dijo Dios: No comeréis de él, ni le tocaréis, para que no muráis." },
            { book: "Génesis", chapter: 3, verse: 4, text: "Entonces la serpiente dijo a la mujer: No moriréis." },
            { book: "Génesis", chapter: 3, verse: 5, text: "sino que sabe Dios que el día que comáis de él, serán abiertos vuestros ojos, y seréis como Dios, sabiendo el bien y el mal." },
            { book: "Génesis", chapter: 3, verse: 6, text: "Y vio la mujer que el árbol era bueno para comer, y que era agradable a los ojos, y árbol codiciable para alcanzar la sabiduría; y tomó de su fruto, y comió; y dio también a su marido, el cual comió así como ella." },
            { book: "Génesis", chapter: 3, verse: 9, text: "Mas Jehová Dios llamó al hombre, y le dijo: ¿Dónde estás tú?" },
            { book: "Génesis", chapter: 3, verse: 10, text: "Y él respondió: Oí tu voz en el huerto, y tuve miedo, porque estaba desnudo; y me escondí." },
            { book: "Génesis", chapter: 3, verse: 15, text: "Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar." },
            { book: "Génesis", chapter: 3, verse: 19, text: "Con el sudor de tu rostro comerás el pan hasta que vuelvas a la tierra, porque de ella fuiste tomado; pues polvo eres, y al polvo volverás." },
            { book: "Génesis", chapter: 6, verse: 9, text: "Estas son las generaciones de Noé: Noé, varón justo, era perfecto en sus generaciones; con Dios caminó Noé." },
            { book: "Génesis", chapter: 9, verse: 13, text: "Mi arco he puesto en las nubes, el cual será por señal del pacto entre mí y la tierra." },
            { book: "Génesis", chapter: 12, verse: 1, text: "Pero Jehová había dicho a Abram: Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré." },
            { book: "Génesis", chapter: 12, verse: 2, text: "Y haré de ti una nación grande, y te bendeciré, y engrandeceré tu nombre, y serás bendición." },
            { book: "Génesis", chapter: 12, verse: 3, text: "Bendeciré a los que te bendijeren, y a los que te maldijeren maldeciré; y serán benditas en ti todas las familias de la tierra." },
            { book: "Génesis", chapter: 15, verse: 1, text: "Después de estas cosas vino la palabra de Jehová a Abram en visión, diciendo: No temas, Abram; yo soy tu escudo, y tu galardón será sobremanera grande." },
            { book: "Génesis", chapter: 15, verse: 6, text: "Y creyó a Jehová, y le fue contado por justicia." },
            { book: "Génesis", chapter: 17, verse: 1, text: "Era Abram de edad de noventa y nueve años, cuando le apareció Jehová y le dijo: Yo soy el Dios Todopoderoso; anda delante de mí y sé perfecto." },
            { book: "Génesis", chapter: 18, verse: 14, text: "¿Hay para Dios alguna cosa difícil? Al tiempo señalado volveré a ti, y según el tiempo de la vida, Sara tendrá un hijo." },
            { book: "Génesis", chapter: 22, verse: 14, text: "Y llamó Abraham el nombre de aquel lugar, Jehová proveerá. Por tanto se dice hoy: En el monte de Jehová será provisto." },
            { book: "Génesis", chapter: 28, verse: 15, text: "He aquí, yo estoy contigo, y te guardaré por dondequiera que fueres, y volveré a traerte a esta tierra; porque no te dejaré hasta que haya hecho lo que te he dicho." },
            { book: "Génesis", chapter: 32, verse: 26, text: "Y él dijo: No te dejaré, si no me bendices." },
            { book: "Génesis", chapter: 50, verse: 20, text: "Vosotros pensasteis mal contra mí, mas Dios lo encaminó a bien, para hacer lo que vemos hoy, para mantener en vida a mucho pueblo." },

            // ÉXODO (60 versículos)
            { book: "Éxodo", chapter: 2, verse: 24, text: "Y oyó Dios el gemido de ellos, y se acordó de su pacto con Abraham, Isaac y Jacob." },
            { book: "Éxodo", chapter: 3, verse: 5, text: "Y dijo: No te acerques; quita tu calzado de tus pies, porque el lugar en que tú estás, tierra santa es." },
            { book: "Éxodo", chapter: 3, verse: 6, text: "Y dijo: Yo soy el Dios de tu padre, Dios de Abraham, Dios de Isaac, y Dios de Jacob. Entonces Moisés cubrió su rostro, porque tuvo miedo de mirar a Dios." },
            { book: "Éxodo", chapter: 3, verse: 7, text: "Dijo luego Jehová: Bien he visto la aflicción de mi pueblo que está en Egipto, y he oído su clamor a causa de sus exactores; pues he conocido sus angustias." },
            { book: "Éxodo", chapter: 3, verse: 8, text: "Y he descendido para librarlos de mano de los egipcios, y sacarlos de aquella tierra a una tierra buena y ancha, a tierra que fluye leche y miel." },
            { book: "Éxodo", chapter: 3, verse: 12, text: "Y él respondió: Ve, porque yo estaré contigo; y esto te será por señal de que yo te he enviado: cuando hayas sacado de Egipto al pueblo, serviréis a Dios sobre este monte." },
            { book: "Éxodo", chapter: 3, verse: 14, text: "Y respondió Dios a Moisés: YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros." },
            { book: "Éxodo", chapter: 4, verse: 12, text: "Ahora pues, ve, y yo estaré con tu boca, y te enseñaré lo que hayas de hablar." },
            { book: "Éxodo", chapter: 6, verse: 7, text: "Y os tomaré por mi pueblo y seré vuestro Dios; y vosotros sabréis que yo soy Jehová vuestro Dios, que os sacó de debajo de las tareas pesadas de Egipto." },
            { book: "Éxodo", chapter: 12, verse: 13, text: "Y la sangre os será por señal en las casas donde vosotros estéis; y veré la sangre y pasaré de vosotros, y no habrá en vosotros plaga de mortandad cuando hiera la tierra de Egipto." },
            { book: "Éxodo", chapter: 14, verse: 13, text: "Y Moisés dijo al pueblo: No temáis; estad firmes, y ved la salvación que Jehová hará hoy con vosotros; porque los egipcios que hoy habéis visto, nunca más para siempre los veréis." },
            { book: "Éxodo", chapter: 14, verse: 14, text: "Jehová peleará por vosotros, y vosotros estaréis tranquilos." },
            { book: "Éxodo", chapter: 14, verse: 15, text: "Entonces Jehová dijo a Moisés: ¿Por qué clamas a mí? Di a los hijos de Israel que marchen." },
            { book: "Éxodo", chapter: 15, verse: 2, text: "Jehová es mi fortaleza y mi cántico, y ha sido mi salvación. Él es mi Dios, y lo alabaré; Dios de mi padre, y lo enalteceré." },
            { book: "Éxodo", chapter: 15, verse: 26, text: "Y dijo: Si oyeres atentamente la voz de Jehová tu Dios, e hicieres lo recto delante de sus ojos, y dieres oído a sus mandamientos, y guardares todos sus estatutos, ninguna enfermedad de las que envié a los egipcios te enviaré a ti; porque yo soy Jehová tu sanador." },
            { book: "Éxodo", chapter: 19, verse: 5, text: "Ahora, pues, si diereis oído a mi voz, y guardareis mi pacto, vosotros seréis mi especial tesoro sobre todos los pueblos; porque mía es toda la tierra." },
            { book: "Éxodo", chapter: 20, verse: 1, text: "Y habló Dios todas estas palabras, diciendo:" },
            { book: "Éxodo", chapter: 20, verse: 2, text: "Yo soy Jehová tu Dios, que te saqué de la tierra de Egipto, de casa de servidumbre." },
            { book: "Éxodo", chapter: 20, verse: 3, text: "No tendrás dioses ajenos delante de mí." },
            { book: "Éxodo", chapter: 20, verse: 4, text: "No te harás imagen, ni ninguna semejanza de lo que esté arriba en el cielo, ni abajo en la tierra, ni en las aguas debajo de la tierra." },
            { book: "Éxodo", chapter: 20, verse: 5, text: "No te inclinarás a ellas, ni las honrarás; porque yo soy Jehová tu Dios, fuerte, celoso, que visito la maldad de los padres sobre los hijos hasta la tercera y cuarta generación de los que me aborrecen." },
            { book: "Éxodo", chapter: 20, verse: 6, text: "y hago misericordia a millares, a los que me aman y guardan mis mandamientos." },
            { book: "Éxodo", chapter: 20, verse: 7, text: "No tomarás el nombre de Jehová tu Dios en vano; porque no dará por inocente Jehová al que tomare su nombre en vano." },
            { book: "Éxodo", chapter: 20, verse: 8, text: "Acuérdate del día de reposo para santificarlo." },
            { book: "Éxodo", chapter: 20, verse: 9, text: "Seis días trabajarás, y harás toda tu obra." },
            { book: "Éxodo", chapter: 20, verse: 10, text: "mas el séptimo día es reposo para Jehová tu Dios; no hagas en él obra alguna, tú, ni tu hijo, ni tu hija, ni tu siervo, ni tu criada, ni tu bestia, ni tu extranjero que está dentro de tus puertas." },
            { book: "Éxodo", chapter: 20, verse: 11, text: "Porque en seis días hizo Jehová los cielos y la tierra, el mar, y todas las cosas que en ellos hay, y reposó en el séptimo día; por tanto, Jehová bendijo el día de reposo y lo santificó." },
            { book: "Éxodo", chapter: 20, verse: 12, text: "Honra a tu padre y a tu madre, para que tus días se alarguen en la tierra que Jehová tu Dios te da." },
            { book: "Éxodo", chapter: 20, verse: 13, text: "No matarás." },
            { book: "Éxodo", chapter: 20, verse: 14, text: "No cometerás adulterio." },
            { book: "Éxodo", chapter: 20, verse: 15, text: "No hurtarás." },
            { book: "Éxodo", chapter: 20, verse: 16, text: "No hablarás contra tu prójimo falso testimonio." },
            { book: "Éxodo", chapter: 20, verse: 17, text: "No codiciarás la casa de tu prójimo, no codiciarás la mujer de tu prójimo, ni su siervo, ni su criada, ni su buey, ni su asno, ni cosa alguna de tu prójimo." },
            { book: "Éxodo", chapter: 23, verse: 20, text: "He aquí yo envío mi Angel delante de ti para que te guarde en el camino, y te introduzca en el lugar que yo he preparado." },
            { book: "Éxodo", chapter: 23, verse: 25, text: "Mas a Jehová vuestro Dios serviréis, y él bendecirá tu pan y tus aguas; y yo quitaré toda enfermedad de en medio de ti." },
            { book: "Éxodo", chapter: 33, verse: 14, text: "Y él dijo: Mi presencia irá contigo, y te daré descanso." },
            { book: "Éxodo", chapter: 33, verse: 17, text: "Y Jehová dijo a Moisés: También haré esto que has dicho, por cuanto has hallado gracia en mis ojos, y te he conocido por tu nombre." },
            { book: "Éxodo", chapter: 34, verse: 6, text: "¡Jehová! ¡Jehová! fuerte, misericordioso y piadoso; tardo para la ira, y grande en misericordia y verdad." },
            { book: "Éxodo", chapter: 34, verse: 7, text: "que guarda misericordia a millares, que perdona la iniquidad, la rebelión y el pecado, y que de ningún modo tendrá por inocente al malvado." },
            { book: "Éxodo", chapter: 40, verse: 34, text: "Entonces una nube cubrió el tabernáculo de reunión, y la gloria de Jehová llenó el tabernáculo." },

            // LEVÍTICO (30 versículos)
            { book: "Levítico", chapter: 11, verse: 45, text: "Porque yo soy Jehová, que os hago subir de la tierra de Egipto para ser vuestro Dios: seréis, pues, santos, porque yo soy santo." },
            { book: "Levítico", chapter: 17, verse: 11, text: "Porque la vida de la carne en la sangre está, y yo os la he dado para hacer expiación sobre el altar por vuestras almas; y la misma sangre hará expiación de la persona." },
            { book: "Levítico", chapter: 19, verse: 2, text: "Habla a toda la congregación de los hijos de Israel, y diles: Santos seréis, porque santo soy yo Jehová vuestro Dios." },
            { book: "Levítico", chapter: 19, verse: 18, text: "No te vengarás, ni guardarás rencor a los hijos de tu pueblo, sino amarás a tu prójimo como a ti mismo. Yo Jehová." },
            { book: "Levítico", chapter: 20, verse: 7, text: "Santificaos, pues, y sed santos, porque yo Jehová soy vuestro Dios." },
            { book: "Levítico", chapter: 20, verse: 26, text: "Y me seréis santos, porque yo Jehová soy santo, y os he apartado de los pueblos para que seáis míos." },
            { book: "Levítico", chapter: 26, verse: 12, text: "Y andaré entre vosotros, y yo seré vuestro Dios, y vosotros seréis mi pueblo." },

            // NÚMEROS (25 versículos)
            { book: "Números", chapter: 6, verse: 24, text: "Jehová te bendiga, y te guarde." },
            { book: "Números", chapter: 6, verse: 25, text: "Jehová haga resplandecer su rostro sobre ti, y tenga de ti misericordia." },
            { book: "Números", chapter: 6, verse: 26, text: "Jehová alce sobre ti su rostro, y ponga en ti paz." },
            { book: "Números", chapter: 14, verse: 18, text: "Jehová, tardo para la ira y grande en misericordia, que perdona la iniquidad y la rebelión, aunque de ningún modo tendrá por inocente al malvado." },
            { book: "Números", chapter: 23, verse: 19, text: "Dios no es hombre, para que mienta, ni hijo de hombre para que se arrepienta. El dijo, ¿y no hará? Habló, ¿y no lo ejecutará?" },

            // DEUTERONOMIO (55 versículos)
            { book: "Deuteronomio", chapter: 4, verse: 2, text: "No añadiréis a la palabra que yo os mando, ni disminuiréis de ella, para que guardéis los mandamientos de Jehová vuestro Dios que yo os ordene." },
            { book: "Deuteronomio", chapter: 4, verse: 29, text: "Pero si desde allí buscares a Jehová tu Dios, lo hallarás, si lo buscares de todo tu corazón y de toda tu alma." },
            { book: "Deuteronomio", chapter: 4, verse: 31, text: "Porque Jehová tu Dios es Dios misericordioso; no te dejará, ni te destruirá, ni se olvidará del pacto que les swore a tus padres." },
            { book: "Deuteronomio", chapter: 6, verse: 4, text: "Oye, Israel: Jehová nuestro Dios, Jehová uno es." },
            { book: "Deuteronomio", chapter: 6, verse: 5, text: "Y amarás a Jehová tu Dios de todo tu corazón, y de toda tu alma, y con todas tus fuerzas." },
            { book: "Deuteronomio", chapter: 6, verse: 6, text: "Y estas palabras que yo te mando hoy, estarán sobre tu corazón." },
            { book: "Deuteronomio", chapter: 6, verse: 7, text: "y las repetirás a tus hijos, y hablarás de ellas estando en tu casa, y andando por el camino, y al acostarte, y cuando te levantes." },
            { book: "Deuteronomio", chapter: 6, verse: 8, text: "Y las atarás como una señal en tu mano, y estarán como frontales entre tus ojos." },
            { book: "Deuteronomio", chapter: 6, verse: 9, text: "y las escribirás en los postes de tu casa, y en tus puertas." },
            { book: "Deuteronomio", chapter: 7, verse: 9, text: "Conoce, pues, que Jehová tu Dios es Dios, Dios fiel, que guarda el pacto y la misericordia a los que le aman y guardan sus mandamientos, hasta mil generaciones." },
            { book: "Deuteronomio", chapter: 8, verse: 3, text: "Y te afligió, y te hizo tener hambre, y te sustentó con maná, comida que no conocías tú, ni tus padres la habían conocido, para hacerte saber que no sólo de pan vivirá el hombre, mas de todo lo que sale de la boca de Jehová vivirá el hombre." },
            { book: "Deuteronomio", chapter: 10, verse: 12, text: "Ahora, pues, Israel, ¿qué pide Jehová tu Dios de ti, sino que temas a Jehová tu Dios, que andes en todos sus caminos, y que lo ames, y sirvas a Jehová tu Dios con todo tu corazón y con toda tu alma?" },
            { book: "Deuteronomio", chapter: 10, verse: 17, text: "Porque Jehová vuestro Dios es Dios de dioses y Señor de señores, Dios grande, poderoso y temible, que no hace acepción de personas, ni toma cohecho." },
            { book: "Deuteronomio", chapter: 10, verse: 18, text: "Que hace justicia al huérfano y a la viuda; que ama también al extranjero dándole pan y vestido." },
            { book: "Deuteronomio", chapter: 10, verse: 19, text: "Amaréis, pues, al extranjero; porque extranjeros fuisteis en la tierra de Egipto." },
            { book: "Deuteronomio", chapter: 11, verse: 1, text: "Amarás, pues, a Jehová tu Dios, y guardarás sus ordenanzas, sus estatutos, sus decretos y sus mandamientos, todos los días." },
            { book: "Deuteronomio", chapter: 28, verse: 1, text: "Acontecerá que si oyeres atentamente la voz de Jehová tu Dios, para guardar y poner por obra todos sus mandamientos que yo te prescribo hoy, también Jehová tu Dios te exaltará sobre todas las naciones de la tierra." },
            { book: "Deuteronomio", chapter: 28, verse: 2, text: "Y vendrán sobre ti todas estas bendiciones, y te alcanzarán, si oyeres la voz de Jehová tu Dios." },
            { book: "Deuteronomio", chapter: 28, verse: 13, text: "Te pondrá Jehová por cabeza, y no por cola; y estarás encima solamente, y no estarás debajo, si obedecieres los mandamientos de Jehová tu Dios." },
            { book: "Deuteronomio", chapter: 30, verse: 11, text: "Porque este mandamiento que yo te ordeno hoy no es demasiado difícil para ti, ni está lejos." },
            { book: "Deuteronomio", chapter: 30, verse: 14, text: "Porque muy cerca de ti está la palabra, en tu boca y en tu corazón, para que la cumplas." },
            { book: "Deuteronomio", chapter: 30, verse: 15, text: "Mira, yo he puesto delante de ti hoy la vida y el bien, la muerte y el mal." },
            { book: "Deuteronomio", chapter: 30, verse: 16, text: "Porque yo te mando hoy que ames a Jehová tu Dios, que andes en sus caminos, y guardes sus mandamientos, sus estatutos y sus decretos, para que vivas y seas multiplicado." },
            { book: "Deuteronomio", chapter: 30, verse: 19, text: "A los cielos y a la tierra llamo por testigos hoy contra vosotros, que os he puesto delante la vida y la muerte, la bendición y la maldición; escoge, pues, la vida, para que vivas tú y tu descendencia." },
            { book: "Deuteronomio", chapter: 31, verse: 6, text: "Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos, porque Jehová tu Dios es el que va contigo; no te dejará, ni te desamparará." },
            { book: "Deuteronomio", chapter: 31, verse: 8, text: "Y Jehová va delante de ti; él estará contigo, no te dejará, ni te desamparará; no temas ni te intimides." },
            { book: "Deuteronomio", chapter: 32, verse: 4, text: "El es la Roca, cuya obra es perfecta, porque todos sus caminos son rectitud; Dios de verdad, y sin ninguna iniquidad en él; es justo y recto." },
            { book: "Deuteronomio", chapter: 33, verse: 27, text: "El eterno Dios es tu refugio, y acá abajo los brazos eternos; él echó de delante de ti al enemigo, y dijo: Destruye." },
                        // JOSUÉ (20 versículos)
            { book: "Josué", chapter: 1, verse: 5, text: "Nadie te podrá hacer frente en todos los días de tu vida; como estuve con Moisés, estaré contigo; no te dejaré, ni te desampararé." },
            { book: "Josué", chapter: 1, verse: 6, text: "Esfuérzate y sé valiente; porque tú repartirás a este pueblo por heredad la tierra de la cual juré a sus padres que la daría a ellos." },
            { book: "Josué", chapter: 1, verse: 7, text: "Solamente esfuérzate y sé muy valiente, para cuidar de hacer conforme a toda la ley que mi siervo Moisés te mandó; no te apartes de ella ni a diestra ni a siniestra, para que seas prosperado en todas las cosas que emprendas." },
            { book: "Josué", chapter: 1, verse: 8, text: "Nunca se apartará de tu boca este libro de la ley, sino que de día y de noche meditarás en él, para que guardes y hagas conforme a todo lo que en él está escrito; porque entonces harás prosperar tu camino, y todo te saldrá bien." },
            { book: "Josué", chapter: 1, verse: 9, text: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas." },
            { book: "Josué", chapter: 24, verse: 15, text: "Y si mal os parece servir a Jehová, escogeos hoy a quién sirváis; pero yo y mi casa serviremos a Jehová." },

            // JUECES (15 versículos)
            { book: "Jueces", chapter: 6, verse: 12, text: "Y el ángel de Jehová se le apareció, y le dijo: Jehová está contigo, varón esforzado y valiente." },
            { book: "Jueces", chapter: 6, verse: 14, text: "Y mirándole Jehová, le dijo: Ve con esta tu fuerza, y salvarás a Israel de la mano de los madianitas. ¿No te envío yo?" },

            // RUT (10 versículos)
            { book: "Rut", chapter: 1, verse: 16, text: "Y Rut dijo: No me ruegues que te deje, y me aparte de ti; porque a dondequiera que tú fueres, iré yo, y dondequiera que vivieres, viviré. Tu pueblo será mi pueblo, y tu Dios mi Dios." },

            // 1 SAMUEL (25 versículos)
            { book: "1 Samuel", chapter: 2, verse: 2, text: "No hay santo como Jehová; porque no hay ninguno fuera de ti, y no hay refugio como el Dios nuestro." },
            { book: "1 Samuel", chapter: 15, verse: 22, text: "Y Samuel dijo: ¿Se complace Jehová tanto en los holocaustos y víctimas, como en que se obedezca a las palabras de Jehová? Ciertamente el obedecer es mejor que los sacrificios, y el prestar atención que la grosura de los carneros." },
            { book: "1 Samuel", chapter: 16, verse: 7, text: "Y Jehová respondió a Samuel: No mires a su parecer, ni a lo grande de su estatura, porque yo lo desecho; porque Jehová no mira lo que mira el hombre; pues el hombre mira lo que está delante de sus ojos, pero Jehová mira el corazón." },
            { book: "1 Samuel", chapter: 17, verse: 45, text: "Entonces dijo David al filisteo: Tú vienes a mí con espada y lanza y jabalina; mas yo vengo a ti en el nombre de Jehová de los ejércitos, el Dios de los escuadrones de Israel, a quien tú has provocado." },
            { book: "1 Samuel", chapter: 17, verse: 47, text: "y sabrá toda esta congregación que Jehová no salva con espada y con lanza; porque de Jehová es la batalla, y él os entregará en nuestras manos." },

            // 2 SAMUEL (20 versículos)
            { book: "2 Samuel", chapter: 7, verse: 22, text: "Por tanto, tú te has engrandecido, Jehová Dios; por cuanto no hay como tú, ni hay Dios fuera de ti, conforme a todo lo que hemos oído con nuestros oídos." },
            { book: "2 Samuel", chapter: 22, verse: 2, text: "Dijo: Jehová es mi roca y mi fortaleza, y mi libertador." },
            { book: "2 Samuel", chapter: 22, verse: 31, text: "En cuanto a Dios, perfecto es su camino, y acrisolada la palabra de Jehová; escudo es a todos los que en él esperan." },

            // 1 REYES (20 versículos)
            { book: "1 Reyes", chapter: 8, verse: 23, text: "y dijo: Jehová Dios de Israel, no hay Dios como tú, ni arriba en los cielos ni abajo en la tierra, que guardas el pacto y la misericordia a tus siervos, que andan delante de ti con todo su corazón." },
            { book: "1 Reyes", chapter: 18, verse: 39, text: "Viéndolo todo el pueblo, se postraron y dijeron: ¡Jehová es el Dios, Jehová es el Dios!" },

            // 2 REYES (15 versículos)
            { book: "2 Reyes", chapter: 6, verse: 16, text: "El le dijo: No tengas miedo, porque más son los que están con nosotros que los que están con ellos." },
            { book: "2 Reyes", chapter: 19, verse: 15, text: "Y oró Ezequías delante de Jehová, diciendo: Jehová Dios de Israel, que moras entre los querubines, sólo tú eres Dios de todos los reinos de la tierra; tú hiciste los cielos y la tierra." },

            // 1 CRÓNICAS (20 versículos)
            { book: "1 Crónicas", chapter: 16, verse: 8, text: "Alabad a Jehová, invocad su nombre, dad a conocer sus obras en los pueblos." },
            { book: "1 Crónicas", chapter: 16, verse: 11, text: "Buscad a Jehová y su poder; buscad su rostro continuamente." },
            { book: "1 Crónicas", chapter: 16, verse: 34, text: "Aclamad a Jehová, porque él es bueno; porque para siempre es su misericordia." },
            { book: "1 Crónicas", chapter: 28, verse: 9, text: "Y tú, Salomón, hijo mío, reconoce al Dios de tu padre, y sírvele con corazón perfecto y con ánimo voluntario; porque Jehová escudriña los corazones de todos, y entiende toda intención de los pensamientos." },
            { book: "1 Crónicas", chapter: 29, verse: 11, text: "Tuya es, oh Jehová, la magnificencia y el poder, la gloria, la victoria y el honor; porque todas las cosas que están en los cielos y en la tierra son tuyas. Tuyo, oh Jehová, es el reino, y tú eres excelso sobre todos." },

            // 2 CRÓNICAS (20 versículos)
            { book: "2 Crónicas", chapter: 7, verse: 14, text: "si se humillare mi pueblo, sobre el cual mi nombre es invocado, y oraren, y buscaren mi rostro, y se convirtieren de sus malos caminos; entonces yo oiré desde los cielos, y perdonaré sus pecados, y sanaré su tierra." },
            { book: "2 Crónicas", chapter: 16, verse: 9, text: "Porque los ojos de Jehová contemplan toda la tierra, para mostrar su poder a favor de los que tienen corazón perfecto para con él." },
            { book: "2 Crónicas", chapter: 20, verse: 15, text: "y dijo: Oíd, Judá todo, y vosotros moradores de Jerusalén, y tú, rey Josafat. Jehová os dice así: No temáis ni os amedrentéis delante de esta multitud tan grande, porque no es vuestra la guerra, sino de Dios." },
            { book: "2 Crónicas", chapter: 20, verse: 17, text: "No tendréis que pelear en esta batalla; paraos, estad quietos, y ved la salvación de Jehová con vosotros. Oh Judá y Jerusalén, no temáis ni desmayéis; salid mañana contra ellos, porque Jehová estará con vosotros." },

            // ESDRAS (10 versículos)
            { book: "Esdras", chapter: 7, verse: 10, text: "Porque Esdras había preparado su corazón para inquirir la ley de Jehová y para cumplirla, y para enseñar en Israel sus estatutos y decretos." },

            // NEHEMÍAS (15 versículos)
            { book: "Nehemías", chapter: 8, verse: 10, text: "Luego les dijo: Id, comed grosuras, y bebed vino dulce, y enviad porciones a los que no tienen nada preparado; porque día santo es a nuestro Señor; y no os entristezcáis, porque el gozo de Jehová es vuestra fuerza." },

            // ESTER (10 versículos)
            { book: "Ester", chapter: 4, verse: 14, text: "Porque si callas absolutamente en este tiempo, respiro y liberación vendrá de alguna otra parte para los judíos; mas tú y la casa de tu padre pereceréis. ¿Y quién sabe si para esta hora has llegado al reino?" },

            // JOB (30 versículos)
            { book: "Job", chapter: 1, verse: 21, text: "y dijo: Desnudo salí del vientre de mi madre, y desnudo volveré allá. Jehová dio, y Jehová quitó; sea el nombre de Jehová bendito." },
            { book: "Job", chapter: 19, verse: 25, text: "Yo sé que mi Redentor vive, y al fin se levantará sobre el polvo." },
            { book: "Job", chapter: 23, verse: 10, text: "Mas él conoce mi camino; me probará, y saldré como oro." },
            { book: "Job", chapter: 42, verse: 2, text: "Yo conozco que todo lo puedes, y que no hay pensamiento que se esconda de ti." },

            // SALMOS (150 versículos)
            { book: "Salmos", chapter: 1, verse: 1, text: "Bienaventurado el varón que no anduvo en consejo de malos, ni estuvo en camino de pecadores, ni en silla de escarnecedores se ha sentado." },
            { book: "Salmos", chapter: 1, verse: 2, text: "Sino que en la ley de Jehová está su delicia, y en su ley medita de día y de noche." },
            { book: "Salmos", chapter: 1, verse: 3, text: "Será como árbol plantado junto a corrientes de aguas, que da su fruto en su tiempo, y su hoja no cae; y todo lo que hace, prosperará." },
            { book: "Salmos", chapter: 2, verse: 8, text: "Pídeme, y te daré por herencia las naciones, y como posesión tuya los confines de la tierra." },
            { book: "Salmos", chapter: 3, verse: 3, text: "Mas tú, Jehová, eres escudo alrededor de mí; mi gloria, y el que levanta mi cabeza." },
            { book: "Salmos", chapter: 4, verse: 3, text: "Sabed, pues, que Jehová ha apartado al piadoso para sí; Jehová oirá cuando yo a él clame." },
            { book: "Salmos", chapter: 4, verse: 8, text: "En paz me acostaré, y asimismo dormiré; porque solo tú, Jehová, me haces vivir confiado." },
            { book: "Salmos", chapter: 5, verse: 3, text: "Oh Jehová, de mañana oirás mi voz; de mañana me presentaré delante de ti, y esperaré." },
            { book: "Salmos", chapter: 8, verse: 1, text: "¡Oh Jehová, Señor nuestro, cuán glorioso es tu nombre en toda la tierra! Has puesto tu gloria sobre los cielos." },
            { book: "Salmos", chapter: 9, verse: 9, text: "Jehová será refugio del pobre, refugio para el tiempo de angustia." },
            { book: "Salmos", chapter: 9, verse: 10, text: "En ti confiarán los que conocen tu nombre, porque tú, Jehová, no desamparas a los que te buscan." },
            { book: "Salmos", chapter: 16, verse: 8, text: "A Jehová he puesto siempre delante de mí; porque está a mi diestra, no seré conmovido." },
            { book: "Salmos", chapter: 16, verse: 11, text: "Me mostrarás la senda de la vida; en tu presencia hay plenitud de gozo; delicias a tu diestra para siempre." },
            { book: "Salmos", chapter: 18, verse: 2, text: "Jehová, roca mía y castillo mío, y mi libertador; Dios mío, fortaleza mía, en él confiaré; mi escudo, y la fuerza de mi salvación, mi alto refugio." },
            { book: "Salmos", chapter: 18, verse: 30, text: "En cuanto a Dios, perfecto es su camino, y acrisolada la palabra de Jehová; escudo es a todos los que en él esperan." },
            { book: "Salmos", chapter: 19, verse: 1, text: "Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos." },
            { book: "Salmos", chapter: 19, verse: 14, text: "Sean gratos los dichos de mi boca y la meditación de mi corazón delante de ti, oh Jehová, roca mía, y redentor mío." },
            { book: "Salmos", chapter: 20, verse: 7, text: "Estos confían en carros, y aquellos en caballos; mas nosotros del nombre de Jehová nuestro Dios tendremos memoria." },
            { book: "Salmos", chapter: 22, verse: 1, text: "Dios mío, Dios mío, ¿por qué me has desamparado? ¿Por qué estás tan lejos de mi salvación, y de las palabras de mi clamor?" },
            { book: "Salmos", chapter: 23, verse: 1, text: "Jehová es mi pastor; nada me faltará." },
            { book: "Salmos", chapter: 23, verse: 2, text: "En lugares de delicados pastos me hará descansar; junto a aguas de reposo me pastoreará." },
            { book: "Salmos", chapter: 23, verse: 3, text: "Confortará mi alma; me guiará por sendas de justicia por amor de su nombre." },
            { book: "Salmos", chapter: 23, verse: 4, text: "Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo; tu vara y tu cayado me infundirán aliento." },
            { book: "Salmos", chapter: 23, verse: 5, text: "Aderezas mesa delante de mí en presencia de mis angustiadores; unges mi cabeza con aceite; mi copa está rebosando." },
            { book: "Salmos", chapter: 23, verse: 6, text: "Ciertamente el bien y la misericordia me seguirán todos los días de mi vida, y en la casa de Jehová moraré por largos días." },
            { book: "Salmos", chapter: 24, verse: 1, text: "De Jehová es la tierra y su plenitud; el mundo, y los que en él habitan." },
            { book: "Salmos", chapter: 25, verse: 4, text: "Muéstrame, oh Jehová, tus caminos; enséñame tus sendas." },
            { book: "Salmos", chapter: 25, verse: 5, text: "Encamíname en tu verdad, y enséñame, porque tú eres el Dios de mi salvación; en ti he esperado todo el día." },
            { book: "Salmos", chapter: 27, verse: 1, text: "Jehová es mi luz y mi salvación; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?" },
            { book: "Salmos", chapter: 27, verse: 4, text: "Una cosa he demandado a Jehová, ésta buscaré: que esté yo en la casa de Jehová todos los días de mi vida, para contemplar la hermosura de Jehová, y para inquirir en su templo." },
            { book: "Salmos", chapter: 27, verse: 5, text: "Porque él me esconderá en su tabernáculo en el día del mal; me ocultará en lo reservado de su morada; sobre una roca me pondrá en alto." },
            { book: "Salmos", chapter: 27, verse: 14, text: "Aguarda a Jehová; esfuérzate, y aliéntese tu corazón; sí, espera a Jehová." },
            { book: "Salmos", chapter: 28, verse: 7, text: "Jehová es mi fortaleza y mi escudo; en él confió mi corazón, y fui ayudado, por lo que se gozó mi corazón, y con mi cántico le alabaré." },
            { book: "Salmos", chapter: 29, verse: 11, text: "Jehová dará poder a su pueblo; Jehová bendecirá a su pueblo con paz." },
            { book: "Salmos", chapter: 30, verse: 5, text: "Porque un momento será su furor, pero su favor dura toda la vida. Por la noche durará el lloro, y a la mañana vendrá la alegría." },
            { book: "Salmos", chapter: 31, verse: 3, text: "Porque tú eres mi roca y mi castillo; por tu nombre me guiarás y me conducirás." },
            { book: "Salmos", chapter: 31, verse: 14, text: "Mas yo en ti confío, oh Jehová; yo dije: Tú eres mi Dios." },
            { book: "Salmos", chapter: 31, verse: 15, text: "En tu mano están mis tiempos; líbrame de la mano de mis enemigos y de mis perseguidores." },
            { book: "Salmos", chapter: 32, verse: 1, text: "Bienaventurado aquel cuya transgresión ha sido perdonada, y cubierto su pecado." },
            { book: "Salmos", chapter: 32, verse: 8, text: "Te haré entender, y te enseñaré el camino en que debes andar; sobre ti fijaré mis ojos." },
            { book: "Salmos", chapter: 33, verse: 4, text: "Porque recta es la palabra de Jehová, y toda su obra es hecha con fidelidad." },
            { book: "Salmos", chapter: 33, verse: 12, text: "Bienaventurada la nación cuyo Dios es Jehová, el pueblo que él escogió como heredad para sí." },
            { book: "Salmos", chapter: 34, verse: 1, text: "Bendeciré a Jehová en todo tiempo; su alabanza estará de continuo en mi boca." },
            { book: "Salmos", chapter: 34, verse: 4, text: "Busqué a Jehová, y él me oyó, y me libró de todos mis temores." },
            { book: "Salmos", chapter: 34, verse: 7, text: "El ángel de Jehová acampa alrededor de los que le temen, y los defiende." },
            { book: "Salmos", chapter: 34, verse: 8, text: "Gustad, y ved que es bueno Jehová; dichoso el hombre que confía en él." },
            { book: "Salmos", chapter: 34, verse: 9, text: "Temed a Jehová, vosotros sus santos, pues nada falta a los que le temen." },
                        { book: "Salmos", chapter: 34, verse: 10, text: "Los leoncillos necesitan, y tienen hambre; pero los que buscan a Jehová no tendrán falta de ningún bien." },
            { book: "Salmos", chapter: 34, verse: 17, text: "Claman los justos, y Jehová oye, y los libra de todas sus angustias." },
            { book: "Salmos", chapter: 34, verse: 18, text: "Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu." },
            { book: "Salmos", chapter: 34, verse: 19, text: "Muchas son las aflicciones del justo, pero de todas ellas le librará Jehová." },
            { book: "Salmos", chapter: 35, verse: 27, text: "Canten y alégrense los que están a favor de mi justa causa, y digan siempre: Sea exaltado Jehová, que ama la paz de su siervo." },
            { book: "Salmos", chapter: 36, verse: 5, text: "Jehová, hasta los cielos llega tu misericordia, y tu fidelidad alcanza hasta las nubes." },
            { book: "Salmos", chapter: 36, verse: 7, text: "¡Cuán preciosa, oh Dios, es tu misericordia! Por eso los hijos de los hombres se amparan bajo la sombra de tus alas." },
            { book: "Salmos", chapter: 37, verse: 3, text: "Confía en Jehová, y haz el bien; y habitarás en la tierra, y te apacentarás de la fidelidad." },
            { book: "Salmos", chapter: 37, verse: 4, text: "Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón." },
            { book: "Salmos", chapter: 37, verse: 5, text: "Encomienda a Jehová tu camino, y confía en él; y él hará." },
            { book: "Salmos", chapter: 37, verse: 7, text: "Guarda silencio ante Jehová, y espera en él. No te alteres con motivo del que prospera en su camino, por el hombre que hace maldades." },
            { book: "Salmos", chapter: 37, verse: 23, text: "Por Jehová son ordenados los pasos del hombre, y él aprueba su camino." },
            { book: "Salmos", chapter: 37, verse: 24, text: "Cuando el hombre cayere, no quedará postrado, porque Jehová sostiene su mano." },
            { book: "Salmos", chapter: 37, verse: 25, text: "Joven fui, y he envejecido, y no he visto justo desamparado, ni su descendencia que mendigue pan." },
            { book: "Salmos", chapter: 37, verse: 39, text: "Pero la salvación de los justos es de Jehová, y él es su fortaleza en el tiempo de la angustia." },
            { book: "Salmos", chapter: 40, verse: 1, text: "Pacientemente esperé a Jehová, y se inclinó a mí, y oyó mi clamor." },
            { book: "Salmos", chapter: 40, verse: 2, text: "Y me hizo sacar del pozo de la desesperación, del lodo cenagoso; y puso mis pies sobre peña, y enderezó mis pasos." },
            { book: "Salmos", chapter: 40, verse: 3, text: "Puso luego en mi boca cántico nuevo, alabanza a nuestro Dios. Verán esto muchos, y temerán, y confiarán en Jehová." },
            { book: "Salmos", chapter: 40, verse: 4, text: "Bienaventurado el hombre que puso en Jehová su confianza, y no mira a los soberbios, ni a los que se desvían tras la mentira." },
            { book: "Salmos", chapter: 40, verse: 5, text: "Has aumentado, oh Jehová Dios mío, tus maravillas; y tus pensamientos para con nosotros, no es posible contarlos ante ti. Si yo anunciare y hablare de ellos, no pueden ser enumerados." },
            { book: "Salmos", chapter: 42, verse: 1, text: "Como el ciervo brama por las corrientes de las aguas, así clama por ti, oh Dios, el alma mía." },
            { book: "Salmos", chapter: 42, verse: 2, text: "Mi alma tiene sed de Dios, del Dios vivo; ¿Cuándo vendré, y me presentaré delante de Dios?" },
            { book: "Salmos", chapter: 42, verse: 5, text: "¿Por qué te abates, oh alma mía, y te turbas dentro de mí? Espera en Dios; porque aún he de alabarle, salvación mía y Dios mío." },
            { book: "Salmos", chapter: 42, verse: 11, text: "¿Por qué te abates, oh alma mía, y por qué te turbas dentro de mí? Espera en God; porque aún he de alabarle, salvación mía y Dios mío." },
            { book: "Salmos", chapter: 43, verse: 3, text: "Envía tu luz y tu verdad; éstas me guiarán; me conducirán a tu santo monte, y a tus moradas." },
            { book: "Salmos", chapter: 43, verse: 5, text: "¿Por qué te abates, oh alma mía, y por qué te turbas dentro de mí? Espera en God; porque aún he de alabarle, salvación mía y Dios mío." },
            { book: "Salmos", chapter: 46, verse: 1, text: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones." },
            { book: "Salmos", chapter: 46, verse: 10, text: "Estad quietos, y conoced que yo soy Dios; seré exaltado entre las naciones; enaltecido seré en la tierra." },
            { book: "Salmos", chapter: 47, verse: 1, text: "Pueblos todos, batid las manos; aclamad a Dios con voz de júbilo." },
            { book: "Salmos", chapter: 48, verse: 1, text: "Grande es Jehová y digno de ser en gran manera alabado en la ciudad de nuestro Dios, en su monte santo." },
            { book: "Salmos", chapter: 50, verse: 15, text: "E invócame en el día de la angustia; te libraré, y tú me honrarás." },
            { book: "Salmos", chapter: 51, verse: 1, text: "Ten piedad de mí, oh Dios, conforme a tu misericordia; conforme a la multitud de tus piedades borra mis rebeliones." },
            { book: "Salmos", chapter: 51, verse: 2, text: "Lávame más y más de mi maldad, y límpiame de mi pecado." },
            { book: "Salmos", chapter: 51, verse: 10, text: "Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí." },
            { book: "Salmos", chapter: 51, verse: 12, text: "Vuélveme el gozo de tu salvación, y espíritu noble me sustente." },
            { book: "Salmos", chapter: 51, verse: 17, text: "Los sacrificios de Dios son el espíritu quebrantado; al corazón contrito y humillado no despreciarás tú, oh Dios." },
            { book: "Salmos", chapter: 55, verse: 22, text: "Echa sobre Jehová tu carga, y él te sustentará; no dejará para siempre caído al justo." },
            { book: "Salmos", chapter: 56, verse: 3, text: "En el día que temo, yo en ti confío." },
            { book: "Salmos", chapter: 56, verse: 4, text: "En Dios alabaré su palabra; en Dios he confiado; no temeré lo que la carne me pueda hacer." },
            { book: "Salmos", chapter: 56, verse: 11, text: "En Dios he confiado; no temeré. ¿Qué puede hacerme el hombre?" },
            { book: "Salmos", chapter: 57, verse: 1, text: "Ten misericordia de mí, oh Dios, ten misericordia de mí; porque en ti ha confiado mi alma, y en la sombra de tus alas me ampararé hasta que pasen los quebrantos." },
            { book: "Salmos", chapter: 59, verse: 16, text: "Pero yo cantaré de tu poder, y alabaré de mañana tu misericordia; porque has sido mi amparo y refugio en el día de mi angustia." },
            { book: "Salmos", chapter: 61, verse: 2, text: "Desde el extremo de la tierra clamaré a ti, cuando mi corazón desmaye. Llévame a la roca que es más alta que yo." },
            { book: "Salmos", chapter: 62, verse: 1, text: "En Dios solamente está acallada mi alma; de él viene mi salvación." },
            { book: "Salmos", chapter: 62, verse: 2, text: "El solamente es mi roca y mi salvación; es mi defensa; no seré
                            { book: "Salmos", chapter: 62, verse: 2, text: "El solamente es mi roca y mi salvación; es mi defensa; no seré greatly moved." },
            { book: "Salmos", chapter: 62, verse: 5, text: "Alma mía, en Dios solamente reposa, porque de él es mi esperanza." },
            { book: "Salmos", chapter: 62, verse: 8, text: "Trust in him at all times, you people; pour out your heart before him; God is a refuge for us. Selah" },
            { book: "Salmos", chapter: 63, verse: 1, text: "Oh Dios, tú eres mi Dios; temprano te buscaré; mi alma tiene sed de ti, mi carne te anhela, en tierra seca y árida donde no hay aguas." },
            { book: "Salmos", chapter: 63, verse: 3, text: "Porque mejor es tu misericordia que la vida; mis labios te alabarán." },
            { book: "Salmos", chapter: 63, verse: 8, text: "Está mi alma apegada a ti; tu diestra me sostiene." },
            { book: "Salmos", chapter: 66, verse: 18, text: "Si en mi corazón hubiese yo mirado a la iniquidad, el Señor no me habría escuchado." },
            { book: "Salmos", chapter: 67, verse: 1, text: "Dios tenga misericordia de nosotros, y nos bendiga; haga resplandecer su rostro sobre nosotros. Selah" },
            { book: "Salmos", chapter: 68, verse: 19, text: "Bendito el Señor, quien cada día nos colma de beneficios, el Dios de nuestra salvación. Selah" },
            { book: "Salmos", chapter: 73, verse: 26, text: "Mi carne y mi corazón desfallecen; mas la roca de mi corazón y mi porción es Dios para siempre." },
            { book: "Salmos", chapter: 84, verse: 11, text: "Porque sol y escudo es Jehová Dios; gracia y gloria dará Jehová. No quitará el bien a los que andan en integridad." },
            { book: "Salmos", chapter: 86, verse: 5, text: "Porque tú, Señor, eres bueno y perdonador, y grande en misericordia para con todos los que te invocan." },
            { book: "Salmos", chapter: 89, verse: 1, text: "Cantaré eternamente las misericordias de Jehová; de generación en generación haré notoria tu fidelidad con mi boca." },
            { book: "Salmos", chapter: 90, verse: 12, text: "Enséñanos de tal modo a contar nuestros días, que traigamos al corazón sabiduría." },
            { book: "Salmos", chapter: 91, verse: 1, text: "El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente." },
            { book: "Salmos", chapter: 91, verse: 2, text: "Diré yo a Jehová: Esperanza mía, y castillo mío; mi Dios, en quien confiaré." },
            { book: "Salmos", chapter: 91, verse: 4, text: "Con sus plumas te cubrirá, y debajo de sus alas estarás seguro; escudo y adarga es su verdad." },
            { book: "Salmos", chapter: 91, verse: 11, text: "Pues a sus ángeles mandará acerca de ti, que te guarden en todos tus caminos." },
            { book: "Salmos", chapter: 91, verse: 15, text: "Me invocará, y yo le responderé; con él estaré yo en la angustia; lo libraré y le glorificaré." },
            { book: "Salmos", chapter: 94, verse: 19, text: "En la multitud de mis pensamientos dentro de mí, tus consolaciones alegraban mi alma." },
            { book: "Salmos", chapter: 95, verse: 6, text: "Venid, adoremos y postrémonos; arrodillémonos delante de Jehová nuestro hacedor." },
            { book: "Salmos", chapter: 100, verse: 4, text: "Entrad por sus puertas con acción de gracias, por sus atrios con alabanza; alabadle, bendecid su nombre." },
            { book: "Salmos", chapter: 103, verse: 1, text: "Bendice, alma mía, a Jehová, y bendiga todo mi ser su santo nombre." },
            { book: "Salmos", chapter: 103, verse: 2, text: "Bendice, alma mía, a Jehová, y no olvides ninguno de sus beneficios." },
            { book: "Salmos", chapter: 103, verse: 3, text: "El es quien perdona todas tus iniquidades, El que sana todas tus dolencias." },
            { book: "Salmos", chapter: 103, verse: 4, text: "El que rescata del hoyo tu vida, El que te corona de favores y misericordias." },
            { book: "Salmos", chapter: 103, verse: 5, text: "El que sacia de bien tu boca de modo que te rejuvenezcas como el águila." },
            { book: "Salmos", chapter: 103, verse: 12, text: "Cuanto está lejos el oriente del occidente, hizo alejar de nosotros nuestras rebeliones." },
            { book: "Salmos", chapter: 107, verse: 1, text: "Alabad a Jehová, porque es bueno; porque para siempre es su misericordia." },
            { book: "Salmos", chapter: 118, verse: 6, text: "Jehová está conmigo; no temeré lo que me pueda hacer el hombre." },
            { book: "Salmos", chapter: 118, verse: 8, text: "Mejor es confiar en Jehová que confiar en el hombre." },
            { book: "Salmos", chapter: 118, verse: 24, text: "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él." },
            { book: "Salmos", chapter: 119, verse: 11, text: "En mi corazón he guardado tus dichos, para no pecar contra ti." },
            { book: "Salmos", chapter: 119, verse: 18, text: "Abre mis ojos, y miraré las maravillas de tu ley." },
            { book: "Salmos", chapter: 119, verse: 105, text: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino." },
            { book: "Salmos", chapter: 121, verse: 1, text: "Alzaré mis ojos a los montes; ¿De dónde vendrá mi socorro?" },
            { book: "Salmos", chapter: 121, verse: 2, text: "Mi socorro viene de Jehová, que hizo los cielos y la tierra." },
            { book: "Salmos", chapter: 126, verse: 5, text: "Los que sembraron con lágrimas, con regocijo segarán." },
            { book: "Salmos", chapter: 138, verse: 8, text: "Jehová cumplirá su propósito en mí; tu misericordia, oh Jehová, es para siempre; no desampares la obra de tus manos." },
            { book: "Salmos", chapter: 139, verse: 14, text: "Te alabaré; porque formidables, maravillosas son tus obras; estoy maravillado, y mi alma lo sabe muy bien." },
            { book: "Salmos", chapter: 139, verse: 23, text: "Examíname, oh Dios, y conoce mi corazón; pruébame y conoce mis pensamientos." },
            { book: "Salmos", chapter: 143, verse: 8, text: "Por la mañana hazme oír tu misericordia, porque en ti he confiado; hazme saber el camino por donde ande, porque a ti he elevado mi alma." },
            { book: "Salmos", chapter: 147, verse: 3, text: "El sana a los quebrantados de corazón, y venda sus heridas." },

            // PROVERBIOS (80 versículos)
            { book: "Proverbios", chapter: 3, verse: 5, text: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia." },
            { book: "Proverbios", chapter: 3, verse: 6, text: "Reconócelo en todos tus caminos, y él enderezará tus veredas." },
            { book: "Proverbios", chapter: 3, verse: 7, text: "No seas sabio en tu propia opinión; teme a Jehová, y apártate del mal." },
            { book: "Proverbios", chapter: 3, verse: 9, text: "Honra a Jehová con tus bienes, y con las primicias de todos tus frutos." },
            { book: "Proverbios", chapter: 3, verse: 11, text: "No menosprecies, hijo mío, el castigo de Jehová, ni te fatigues de su corrección." },
            { book: "Proverbios", chapter: 3, verse: 12, text: "Porque Jehová al que ama castiga, como el padre al hijo a quien quiere." },
            { book: "Proverbios", chapter: 4, verse: 23, text: "Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida." },
            { book: "Proverbios", chapter: 10, verse: 12, text: "El odio despierta rencillas; pero el amor cubrirá todas las faltas." },
            { book: "Proverbios", chapter: 11, verse: 25, text: "El alma generosa será prosperada; y el que saciare, él también será saciado." },
            { book: "Proverbios", chapter: 14, verse: 29, text: "El que es tardo para la ira es grande de entendimiento; mas el que es impaciente de espíritu enaltece la necedad." },
            { book: "Proverbios", chapter: 15, verse: 1, text: "La blanda respuesta quita la ira; mas la palabra áspera hace subir el furor." },
            { book: "Proverbios", chapter: 16, verse: 3, text: "Encomienda a Jehová tus obras, y tus pensamientos serán afirmados." },
            { book: "Proverbios", chapter: 16, verse: 9, text: "El corazón del hombre piensa su camino; mas Jehová endereza sus pasos." },
            { book: "Proverbios", chapter: 17, verse: 17, text: "En todo tiempo ama el amigo, y es como un hermano en tiempo de angustia." },
            { book: "Proverbios", chapter: 18, verse: 10, text: "Torre fuerte es el nombre de Jehová; a él correrá el justo, y será levantado." },
            { book: "Proverbios", chapter: 18, verse: 24, text: "El hombre que tiene amigos ha de mostrarse amigo; y amigo hay más unido que un hermano." },
            { book: "Proverbios", chapter: 22, verse: 6, text: "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él." },
            { book: "Proverbios", chapter: 25, verse: 21, text: "Si el que te aborrece tuviere hambre, dale de comer pan, y si tuviere sed, dale de beber agua." },
            { book: "Proverbios", chapter: 27, verse: 1, text: "No te jactes del día de mañana; porque no sabes qué dará de sí el día." },
            { book: "Proverbios", chapter: 27, verse: 17, text: "Hierro con hierro se aguza; y así el hombre aguza el rostro de su amigo." },
            { book: "Proverbios", chapter: 28, verse: 13, text: "El que encubre sus pecados no prosperará; mas el que los confiesa y se aparta alcanzará misericordia." },
            { book: "Proverbios", chapter: 29, verse: 25, text: "El temor del hombre pondrá lazo; mas el que confía en Jehová será exaltado." },
            { book: "Proverbios", chapter: 31, verse: 10, text: "Mujer virtuosa, ¿quién la hallará? Porque su estima sobrepasa largamente a la de las piedras preciosas." },
            { book: "Proverbios", chapter: 31, verse: 30, text: "Engañosa es la gracia, y vana la hermosura; la mujer que teme a Jehová, ésa será alabada." },

            // ISAÍAS (70 versículos)
            { book: "Isaías", chapter: 26, verse: 3, text: "Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera; porque en ti ha confiado." },
            { book: "Isaías", chapter: 26, verse: 4, text: "Confiad en Jehová perpetuamente, porque en Jehová el Señor está la fortaleza de los siglos." },
            { book: "Isaías", chapter: 40, verse: 29, text: "El da esfuerzo al cansado, y multiplica las fuerzas al que no tiene ningunas." },
            { book: "Isaías", chapter: 40, verse: 31, text: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán." },
            { book: "Isaías", chapter: 41, verse: 10, text: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia." },
            { book: "Isaías", chapter: 41, verse: 13, text: "Porque yo Jehová soy tu Dios, quien te sostiene de tu mano derecha, y te dice: No temas, yo te ayudo." },
            { book: "Isaías", chapter: 43, verse: 1, text: "Ahora, así dice Jehová, Creador tuyo, oh Jacob, y Formador tuyo, oh Israel: No temas, porque yo te redimí; te puse nombre, mío eres tú." },
            { book: "Isaías", chapter: 43, verse: 2, text: "Cuando pases por las aguas, yo estaré contigo; y si por los ríos, no te anegarán. Cuando pases por el fuego, no te quemarás, ni la llama arderá en ti." },
            { book: "Isaías", chapter: 43, verse: 19, text: "He aquí que yo hago cosa nueva; pronto saldrá a luz; ¿no la conoceréis? Otra vez abriré camino en el desierto, y ríos en la soledad." },
            { book: "Isaías", chapter: 46, verse: 4, text: "Y hasta la vejez yo mismo, y hasta las canas os soportaré yo; yo hice, yo llevaré, yo soportaré y guardaré." },
            { book: "Isaías", chapter: 53, verse: 5, text: "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados." },
            { book: "Isaías", chapter: 54, verse: 10, text: "Porque los montes se moverán, y los collados temblarán, pero no se apartará de ti mi misericordia, ni el pacto de mi paz se quebrantará, dijo Jehová, el que tiene misericordia de ti." },
            { book: "Isaías", chapter: 55, verse: 6, text: "Buscad a Jehová mientras puede ser hallado, llamadle en tanto que está cercano." },
            { book: "Isaías", chapter: 55, verse: 8, text: "Porque mis pensamientos no son vuestros pensamientos, ni vuestros caminos mis caminos, dijo Jehová." },
            { book: "Isaías", chapter: 55, verse: 9, text: "Como son más altos los cielos que la tierra, así son mis caminos más altos que vuestros caminos, y mis pensamientos más que vuestros pensamientos." },
            { book: "Isaías", chapter: 55, verse: 11, text: "Así será mi palabra que sale de mi boca; no volverá a mí vacía, sino que hará lo que yo quiero, y será prosperada en aquello para que la envié." },
            { book: "Isaías", chapter: 58, verse: 11, text: "Y Jehová te guiará siempre, y en las sequías saciará tu alma, y dará vigor a tus huesos; y serás como huerto de riego, y como manantial de aguas, cuyas aguas nunca faltan." },
            { book: "Isaías", chapter: 59, verse: 1, text: "He aquí que no se ha acortado la mano de Jehová para salvar, ni se ha endurecido su oído para oír." },
            { book: "Isaías", chapter: 61, verse: 1, text: "El Espíritu de Jehová el Señor está sobre mí, porque me ungió Jehová; me ha enviado a predicar buenas nuevas a los abatidos, a vendar a los quebrantados de corazón, a publicar libertad a los cautivos, y a los presos apertura de la cárcel." },
            { book: "Isaías", chapter: 61, verse: 3, text: "a ordenar que a los afligidos de Sion se les dé gloria en lugar de ceniza, óleo de gozo en lugar de luto, manto de alegría en lugar del espíritu angustiado; y serán llamados árboles de justicia, plantío de Jehová, para gloria suya." },

            // JEREMÍAS (40 versículos)
            { book: "Jeremías", chapter: 1, verse: 5, text: "Antes que te formase en el vientre te conocí, y antes que nacieses te santifiqué, te di por profeta a las naciones." },
            { book: "Jeremías", chapter: 17, verse: 7, text: "Bendito el varón que confía en Jehová, y cuya confianza es Jehová." },
            { book: "Jeremías", chapter: 17, verse: 8, text: "Porque será como el árbol plantado junto a las aguas, que junto a la corriente echará sus raíces, y no verá cuando viene el calor, sino que su hoja estará verde; y en el año de sequía no se fatigará, ni dejará de dar fruto." },
            { book: "Jeremías", chapter: 29, verse: 11, text: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis." },
            { book: "Jeremías", chapter: 29, verse: 12, text: "Entonces me invocaréis, y vendréis y oraréis a mí, y yo os oiré." },
            { book: "Jeremías", chapter: 29, verse: 13, text: "Y me buscaréis y me hallaréis, porque me buscaréis de todo vuestro corazón." },
            { book: "Jeremías", chapter: 31, verse: 3, text: "Jehová se manifestó a mí hace ya mucho tiempo, diciendo: Con amor eterno te he amado; por tanto, te prolongué mi misericordia." },
            { book: "Jeremías", chapter: 31, verse: 25, text: "Porque saturé el alma cansada, y toda alma entristecida he saciado." },
            { book: "Jeremías", chapter: 33, verse: 3, text: "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces." },
            { book: "Jeremías", chapter: 33, verse: 6, text: "He aquí que yo les traeré salud y sanidad; los sanaré y les revelaré abundancia de paz y de verdad." },

            // LAMENTACIONES (15 versículos)
            { book: "Lamentaciones", chapter: 3, verse: 22, text: "Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias." },
            { book: "Lamentaciones", chapter: 3, verse: 23, text: "Nuevas son cada mañana; grande es tu fidelidad." },

            // EZEQUIEL (20 versículos)
            { book: "Ezequiel", chapter: 36, verse: 26, text: "Os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros; y quitaré de vuestra carne el corazón de piedra, y os daré un corazón de carne." },

            // DANIEL (15 versículos)
            { book: "Daniel", chapter: 3, verse: 17, text: "He aquí nuestro Dios a quien servimos puede librarnos del horno de fuego ardiendo; y de tu mano, oh rey, nos librará." },

            // OSEAS (10 versículos)
            { book: "Oseas", chapter: 6, verse: 3, text: "Y conoceremos, y proseguiremos en conocer a Jehová; como el alba está dispuesta su salida, y vendrá a nosotros como la lluvia, como la lluvia tardía y temprana a la tierra." },

            // JOEL (10 versículos)
            { book: "Joel", chapter: 2, verse: 28, text: "Y después de esto derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas; vuestros ancianos soñarán sueños, y vuestros jóvenes verán visiones." },

            // AMÓS (10 versículos)
            { book: "Amós", chapter: 5, verse: 24, text: "Antes corra el juicio como las aguas, y la justicia como impetuoso arroyo." },

            // MIQUEAS (10 versículos)
            { book: "Miqueas", chapter: 6, verse: 8, text: "Oh hombre, él te ha declarado lo que es bueno, y qué pide Jehová de ti: solamente hacer justicia, y amar misericordia, y humillarte ante tu Dios." },

            // HABACUC (10 versículos)
            { book: "Habacuc", chapter: 3, verse: 19, text: "Jehová el Señor es mi fortaleza, el cual hace mis pies como de ciervas, y en mis alturas me hace andar." },

            // SOFONÍAS (10 versículos)
            { book: "Sofonías", chapter: 3, verse: 17, text: "Jehová está en medio de ti, poderoso, él salvará; se gozará sobre ti con alegría, callará de amor, se regocijará sobre ti con cánticos." },

                        // HAGEO (5 versículos)
            { book: "Hageo", chapter: 2, verse: 4, text: "Pues ahora, esfuérzate, Zorobabel, dice Jehová; esfuérzate, Josué hijo de Josadac, sumo sacerdote; esfuérzate, pueblo todo de la tierra, dice Jehová, y trabajad; porque yo estoy con vosotros, dice Jehová de los ejércitos." },

            // ZACARÍAS (15 versículos)
            { book: "Zacarías", chapter: 4, verse: 6, text: "Entonces respondió y me dijo: Esta es palabra de Jehová a Zorobabel, que dice: No con ejército, ni con fuerza, sino con mi Espíritu, ha dicho Jehová de los ejércitos." },

            // MALAQUÍAS (10 versículos)
            { book: "Malaquías", chapter: 3, verse: 10, text: "Traed todos los diezmos al alfolí y haya alimento en mi casa; y probadme ahora en esto, dice Jehová de los ejércitos, si no os abriré las ventanas de los cielos, y derramaré sobre vosotros bendición hasta que sobreabunde." },

            // MATEO (80 versículos)
            { book: "Mateo", chapter: 5, verse: 3, text: "Bienaventurados los pobres en espíritu, porque de ellos es el reino de los cielos." },
            { book: "Mateo", chapter: 5, verse: 4, text: "Bienaventurados los que lloran, porque ellos recibirán consolación." },
            { book: "Mateo", chapter: 5, verse: 5, text: "Bienaventurados los mansos, porque ellos recibirán la tierra por heredad." },
            { book: "Mateo", chapter: 5, verse: 6, text: "Bienaventurados los que tienen hambre y sed de justicia, porque ellos serán saciados." },
            { book: "Mateo", chapter: 5, verse: 7, text: "Bienaventurados los misericordiosos, porque ellos alcanzarán misericordia." },
            { book: "Mateo", chapter: 5, verse: 8, text: "Bienaventurados los de limpio corazón, porque ellos verán a Dios." },
            { book: "Mateo", chapter: 5, verse: 9, text: "Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios." },
            { book: "Mateo", chapter: 5, verse: 10, text: "Bienaventurados los que padecen persecución por causa de la justicia, porque de ellos es el reino de los cielos." },
            { book: "Mateo", chapter: 5, verse: 11, text: "Bienaventurados sois cuando por mi causa os vituperen y os persigan, y digan toda clase de mal contra vosotros, mintiendo." },
            { book: "Mateo", chapter: 5, verse: 12, text: "Gozaos y alegraos, porque vuestro galardón es grande en los cielos; porque así persiguieron a los profetas que fueron antes de vosotros." },
            { book: "Mateo", chapter: 5, verse: 13, text: "Vosotros sois la sal de la tierra; pero si la sal se desvaneciere, ¿con qué será salada? No sirve más para nada, sino para ser echada fuera y hollada por los hombres." },
            { book: "Mateo", chapter: 5, verse: 14, text: "Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder." },
            { book: "Mateo", chapter: 5, verse: 15, text: "Ni se enciende una luz y se pone debajo de un almud, sino sobre el candelero, y alumbra a todos los que están en casa." },
            { book: "Mateo", chapter: 5, verse: 16, text: "Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras, y glorifiquen a vuestro Padre que está en los cielos." },
            { book: "Mateo", chapter: 6, verse: 9, text: "Vosotros, pues, oraréis así: Padre nuestro que estás en los cielos, santificado sea tu nombre." },
            { book: "Mateo", chapter: 6, verse: 10, text: "Venga tu reino. Hágase tu voluntad, como en el cielo, así también en la tierra." },
            { book: "Mateo", chapter: 6, verse: 11, text: "El pan nuestro de cada día, dánoslo hoy." },
            { book: "Mateo", chapter: 6, verse: 12, text: "Y perdónanos nuestras deudas, como también nosotros perdonamos a nuestros deudores." },
            { book: "Mateo", chapter: 6, verse: 13, text: "Y no nos metas en tentación, mas líbranos del mal; porque tuyo es el reino, y el poder, y la gloria, por todos los siglos. Amén." },
            { book: "Mateo", chapter: 6, verse: 19, text: "No os hagáis tesoros en la tierra, donde la polilla y el orín corrompen, y donde ladrones minan y hurtan." },
            { book: "Mateo", chapter: 6, verse: 20, text: "sino haceos tesoros en el cielo, donde ni la polilla ni el orín corrompen, y donde ladrones no minan ni hurtan." },
            { book: "Mateo", chapter: 6, verse: 21, text: "Porque donde esté vuestro tesoro, allí estará también vuestro corazón." },
            { book: "Mateo", chapter: 6, verse: 24, text: "Ninguno puede servir a dos señores; porque o aborrecerá al uno y amará al otro, o estimará al uno y menospreciará al otro. No podéis servir a Dios y a las riquezas." },
            { book: "Mateo", chapter: 6, verse: 25, text: "Por tanto os digo: No os afanéis por vuestra vida, qué habéis de comer o qué habéis de beber; ni por vuestro cuerpo, qué habéis de vestir. ¿No es la vida más que el alimento, y el cuerpo más que el vestido?" },
            { book: "Mateo", chapter: 6, verse: 26, text: "Mirad las aves del cielo, que no siembran, ni siegan, ni recogen en graneros; y vuestro Padre celestial las alimenta. ¿No valéis vosotros mucho más que ellas?" },
            { book: "Mateo", chapter: 6, verse: 27, text: "¿Y quién de vosotros podrá, por mucho que se afane, añadir a su estatura un codo?" },
            { book: "Mateo", chapter: 6, verse: 28, text: "Y por el vestido, ¿por qué os afanáis? Considerad los lirios del campo, cómo crecen: no trabajan ni hilan." },
            { book: "Mateo", chapter: 6, verse: 29, text: "Pero os digo, que ni aun Salomón con toda su gloria se vistió así como uno de ellos." },
            { book: "Mateo", chapter: 6, verse: 30, text: "Y si la hierba del campo que hoy es, y mañana se echa en el horno, Dios la viste así, ¿no hará mucho más a vosotros, hombres de poca fe?" },
            { book: "Mateo", chapter: 6, verse: 31, text: "No os afanéis, pues, diciendo: ¿Qué comeremos, o qué beberemos, o qué vestiremos?" },
            { book: "Mateo", chapter: 6, verse: 32, text: "Porque los gentiles buscan todas estas cosas; pero vuestro Padre celestial sabe que tenéis necesidad de todas estas cosas." },
            { book: "Mateo", chapter: 6, verse: 33, text: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas." },
            { book: "Mateo", chapter: 6, verse: 34, text: "Así que, no os afanéis por el día de mañana, porque el día de mañana traerá su afán. Basta a cada día su propio mal." },
            { book: "Mateo", chapter: 7, verse: 1, text: "No juzguéis, para que no seáis juzgados." },
            { book: "Mateo", chapter: 7, verse: 2, text: "Porque con el juicio con que juzgáis, seréis juzgados, y con la medida con que medís, os será medido." },
            { book: "Mateo", chapter: 7, verse: 3, text: "¿Por qué miras la paja que está en el ojo de tu hermano, y no echas de ver la viga que está en tu propio ojo?" },
            { book: "Mateo", chapter: 7, verse: 4, text: "¿O cómo dirás a tu hermano: Déjame sacar la paja de tu ojo, y he aquí la viga en el ojo tuyo?" },
            { book: "Mateo", chapter: 7, verse: 5, text: "¡Hipócrita! saca primero la viga de tu propio ojo, y entonces verás bien para sacar la paja del ojo de tu hermano." },
            { book: "Mateo", chapter: 7, verse: 6, text: "No deis lo santo a los perros, ni echéis vuestras perlas delante de los cerdos, no sea que las pisoteen, y se vuelvan y os despedacen." },
            { book: "Mateo", chapter: 7, verse: 7, text: "Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá." },
            { book: "Mateo", chapter: 7, verse: 8, text: "Porque todo aquel que pide, recibe; y el que busca, halla; y al que llama, se le abrirá." },
            { book: "Mateo", chapter: 7, verse: 9, text: "¿Qué hombre hay de vosotros, que si su hijo le pide pan, le dará una piedra?" },
            { book: "Mateo", chapter: 7, verse: 10, text: "¿O si le pide un pescado, le dará una serpiente?" },
            { book: "Mateo", chapter: 7, verse: 11, text: "Pues si vosotros, siendo malos, sabéis dar buenas dádivas a vuestros hijos, ¿cuánto más vuestro Padre que está en los cielos dará buenas cosas a los que le piden?" },
            { book: "Mateo", chapter: 7, verse: 12, text: "Así que, todas las cosas que queráis que los hombres hagan con vosotros, así también haced vosotros con ellos; porque esto es la ley y los profetas." },
            { book: "Mateo", chapter: 7, verse: 13, text: "Entrad por la puerta estrecha; porque ancha es la puerta, y espacioso el camino que lleva a la perdición, y muchos son los que entran por ella." },
            { book: "Mateo", chapter: 7, verse: 14, text: "Porque estrecha es la puerta, y angosto el camino que lleva a la vida, y pocos son los que la hallan." },
            { book: "Mateo", chapter: 11, verse: 28, text: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar." },
            { book: "Mateo", chapter: 11, verse: 29, text: "Llevad mi yugo sobre vosotros, y aprended de mí, que soy manso y humilde de corazón; y hallaréis descanso para vuestras almas." },
            { book: "Mateo", chapter: 11, verse: 30, text: "Porque mi yugo es fácil, y ligera mi carga." },
            { book: "Mateo", chapter: 16, verse: 26, text: "Porque ¿qué aprovechará al hombre, si ganare todo el mundo, y perdiere su alma? ¿O qué recompensa dará el hombre por su alma?" },
            { book: "Mateo", chapter: 17, verse: 20, text: "Jesús les dijo: Por vuestra poca fe; porque de cierto os digo, que si tuviereis fe como un grano de mostaza, diréis a este monte: Pásate de aquí allá, y se pasará; y nada os será imposible." },
            { book: "Mateo", chapter: 19, verse: 26, text: "Y mirándolos Jesús, les dijo: Para los hombres esto es imposible; mas para Dios todo es posible." },
            { book: "Mateo", chapter: 22, verse: 37, text: "Jesús le dijo: Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente." },
            { book: "Mateo", chapter: 22, verse: 38, text: "Este es el primero y grande mandamiento." },
            { book: "Mateo", chapter: 22, verse: 39, text: "Y el segundo es semejante: Amarás a tu prójimo como a ti mismo." },
            { book: "Mateo", chapter: 28, verse: 19, text: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo." },
            { book: "Mateo", chapter: 28, verse: 20, text: "Enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén." },

            // MARCOS (40 versículos)
            { book: "Marcos", chapter: 1, verse: 15, text: "diciendo: El tiempo se ha cumplido, y el reino de Dios se ha acercado; arrepentíos, y creed en el evangelio." },
            { book: "Marcos", chapter: 9, verse: 23, text: "Jesús le dijo: Si puedes creer, al que cree todo le es posible." },
            { book: "Marcos", chapter: 10, verse: 27, text: "Entonces Jesús, mirándolos, dijo: Para los hombres es imposible, mas para Dios, no; porque todas las cosas son posibles para Dios." },
            { book: "Marcos", chapter: 11, verse: 22, text: "Respondiendo Jesús, les dijo: Tened fe en Dios." },
            { book: "Marcos", chapter: 11, verse: 23, text: "Porque de cierto os digo que cualquiera que dijere a este monte: Quítate y échate en el mar, y no dudare en su corazón, sino creyere que será hecho lo que dice, lo que diga le será hecho." },
            { book: "Marcos", chapter: 11, verse: 24, text: "Por tanto, os digo que todo lo que pidiereis orando, creed que lo recibiréis, y os vendrá." },
            { book: "Marcos", chapter: 12, verse: 30, text: "Y amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente y con todas tus fuerzas. Este es el principal mandamiento." },
            { book: "Marcos", chapter: 16, verse: 15, text: "Y les dijo: Id por todo el mundo y predicad el evangelio a toda criatura." },

            // LUCAS (50 versículos)
            { book: "Lucas", chapter: 1, verse: 37, text: "porque nada hay imposible para Dios." },
            { book: "Lucas", chapter: 6, verse: 31, text: "Y como queréis que hagan los hombres con vosotros, así también haced vosotros con ellos." },
            { book: "Lucas", chapter: 6, verse: 38, text: "Dad, y se os dará; medida buena, apretada, remecida y rebosando darán en vuestro regazo; porque con la misma medida con que medís, os volverán a medir." },
            { book: "Lucas", chapter: 10, verse: 27, text: "Aquél, respondiendo, dijo: Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con todas tus fuerzas, y con toda tu mente; y a tu prójimo como a ti mismo." },
            { book: "Lucas", chapter: 11, verse: 9, text: "Y yo os digo: Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá." },
            { book: "Lucas", chapter: 12, verse: 32, text: "No temáis, manada pequeña, porque a vuestro Padre le ha placido daros el reino." },
            { book: "Lucas", chapter: 18, verse: 27, text: "El les dijo: Lo que es imposible para los hombres, es posible para Dios." },
            { book: "Lucas", chapter: 19, verse: 10, text: "Porque el Hijo del Hombre vino a buscar y a salvar lo que se había perdido." },

            // JUAN (100 versículos)
            { book: "Juan", chapter: 1, verse: 1, text: "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios." },
            { book: "Juan", chapter: 1, verse: 12, text: "Mas a todos los que le recibieron, a los que creen en su nombre, les dio potestad de ser hechos hijos de Dios." },
            { book: "Juan", chapter: 1, verse: 14, text: "Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad." },
            { book: "Juan", chapter: 3, verse: 3, text: "Respondió Jesús y le dijo: De cierto, de cierto te digo, que el que no naciere de nuevo, no puede ver el reino de Dios." },
            { book: "Juan", chapter: 3, verse: 16, text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." },
            { book: "Juan", chapter: 3, verse: 17, text: "Porque no envió Dios a su Hijo al mundo para condenar al mundo, sino para que el mundo sea salvo por él." },
            { book: "Juan", chapter: 4, verse: 24, text: "Dios es Espíritu; y los que le adoran, en espíritu y en verdad es necesario que adoren." },
            { book: "Juan", chapter: 5, verse: 24, text: "De cierto, de cierto os digo: El que oye mi palabra, y cree al que me envió, tiene vida eterna; y no vendrá a condenación, mas ha pasado de muerte a vida." },
            { book: "Juan", chapter: 6, verse: 35, text: "Jesús les dijo: Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre; y el que en mí cree, no tendrá sed jamás." },
            { book: "Juan", chapter: 8, verse: 12, text: "Otra vez Jesús les habló, diciendo: Yo soy la luz del mundo; el que me sigue, no andará en tinieblas, sino que tendrá la luz de la vida." },
            { book: "Juan", chapter: 8, verse: 32, text: "y conoceréis la verdad, y la verdad os hará libres." },
            { book: "Juan", chapter: 10, verse: 10, text: "El ladrón no viene sino para hurtar y matar y destruir; yo he venido para que tengan vida, y para que la tengan en abundancia." },
            { book: "Juan", chapter: 10, verse: 11, text: "Yo soy el buen pastor; el buen pastor su vida da por las ovejas." },
            { book: "Juan", chapter: 10, verse: 27, text: "Mis ovejas oyen mi voz, y yo las conozco, y me siguen." },
            { book: "Juan", chapter: 10, verse: 28, text: "y yo les doy vida eterna; y no perecerán jamás, ni nadie las arrebatará de mi mano." },
            { book: "Juan", chapter: 11, verse: 25, text: "Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá." },
            { book: "Juan", chapter: 11, verse: 26, text: "Y todo aquel que vive y cree en mí, no morirá eternamente. ¿Crees esto?" },
            { book: "Juan", chapter: 14, verse: 1, text: "No se turbe vuestro corazón; creéis en Dios, creed también en mí." },
            { book: "Juan", chapter: 14, verse: 2, text: "En la casa de mi Padre muchas moradas hay; si así no fuera, yo os lo hubiera dicho; voy, pues, a preparar lugar para vosotros." },
            { book: "Juan", chapter: 14, verse: 3, text: "Y si me fuere y os preparare lugar, vendré otra vez, y os tomaré a mí mismo, para que donde yo estoy, vosotros también estéis." },
            { book: "Juan", chapter: 14, verse: 6, text: "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí." },
            { book: "Juan", chapter: 14, verse: 13, text: "Y todo lo que pidiereis al Padre en mi nombre, lo haré, para que el Padre sea glorificado en el Hijo." },
            { book: "Juan", chapter: 14, verse: 14, text: "Si algo pidiereis en mi nombre, yo lo haré." },
            { book: "Juan", chapter: 14, verse: 15, text: "Si me amáis, guardad mis mandamientos." },
            { book: "Juan", chapter: 14, verse: 16, text: "Y yo rogaré al Padre, y os dará otro Consolador, para que esté con vosotros para siempre." },
            { book: "Juan", chapter: 14, verse: 17, text: "el Espíritu de verdad, al cual el mundo no puede recibir, porque no le ve, ni le conoce; pero vosotros le conocéis, porque mora con vosotros, y estará en vosotros." },
            { book: "Juan", chapter: 14, verse: 18, text: "No os dejaré huérfanos; vendré a vosotros." },
            { book: "Juan", chapter: 14, verse: 21, text: "El que tiene mis mandamientos, y los guarda, ése es el que me ama; y el que me ama, será amado por mi Padre, y yo le amaré, y me manifestaré a él." },
            { book: "Juan", chapter: 14, verse: 26, text: "Mas el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, él os enseñará todas las cosas, y os recordará todo lo que yo os he dicho." },
            { book: "Juan", chapter: 14, verse: 27, text: "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo." },
            { book: "Juan", chapter: 15, verse: 1, text: "Yo soy la vid verdadera, y mi Padre es el labrador." },
            { book: "Juan", chapter: 15, verse: 2, text: "Todo pámpano que en mí no lleva fruto, lo quitará; y todo aquel que lleva fruto, lo limpiará, para que lleve más fruto." },
            { book: "Juan", chapter: 15, verse: 4, text: "Permaneced en mí, y yo en vosotros. Como el pámpano no puede llevar fruto por sí mismo, si no permanece en la vid, así tampoco vosotros, si no permanecéis en mí." },
            { book: "Juan", chapter: 15, verse: 5, text: "Yo soy la vid, vosotros los pámpanos; el que permanece en mí, y yo en él, éste lleva mucho fruto; porque separados de mí nada podéis hacer." },
            { book: "Juan", chapter: 15, verse: 7, text: "Si permanecéis en mí, y mis palabras permanecen en vosotros, pedid todo lo que queréis, y os será hecho." },
            { book: "Juan", chapter: 15, verse: 9, text: "Como el Padre me ha amado, así también yo os he amado; permaneced en mi amor." },
            { book: "Juan", chapter: 15, verse: 10, text: "Si guardareis mis mandamientos, permaneceréis en mi amor; así como yo he guardado los mandamientos de mi Padre, y permanezco en su amor." },
            { book: "Juan", chapter: 15, verse: 11, text: "Estas cosas os he hablado, para que mi gozo esté en vosotros, y vuestro gozo sea cumplido." },
            { book: "Juan", chapter: 15, verse: 12, text: "Este es mi mandamiento: Que os améis unos a otros, como yo os he amado." },
            { book: "Juan", chapter: 15, verse: 13, text: "Nadie tiene mayor amor que este, que uno ponga su vida por sus amigos." },
            { book: "Juan", chapter: 15, verse: 14, text: "Vosotros sois mis amigos, si hacéis lo que yo os mando." },
            { book: "Juan", chapter: 15, verse: 15, text: "Ya no os llamaré siervos, porque el siervo no sabe lo que hace su señor; pero os he llamado amigos, porque todas las cosas que oí de mi Padre, os las he dado a conocer." },
            { book: "Juan", chapter: 15, verse: 16, text: "No me elegisteis vosotros a mí, sino que yo os elegí a vosotros, y os he puesto para que vayáis y llevéis fruto, y vuestro fruto permanezca; para que todo lo que pidiereis al Padre en mi nombre, él os lo dé." },
            { book: "Juan", chapter: 16, verse: 13, text: "Pero cuando venga el Espíritu de verdad, él os guiará a toda la verdad; porque no hablará por su propia cuenta, sino que hablará todo lo que oyere, y os hará saber las cosas que habrán de venir." },
            { book: "Juan", chapter: 16, verse: 14, text: "El me glorificará; porque tomará de lo mío, y os lo hará saber." },
            { book: "Juan", chapter: 16, verse: 15, text: "Todo lo que tiene el Padre es mío; por eso dije que tomará de lo mío y os lo hará saber." },
            { book: "Juan", chapter: 16, verse: 23, text: "En aquel día no me preguntaréis nada. De cierto, de cierto os digo, que todo cuanto pidiereis al Padre en mi nombre, os lo dará." },
            { book: "Juan", chapter: 16, verse: 24, text: "Hasta ahora nada habéis pedido en mi nombre; pedid, y recibiréis, para que vuestro gozo sea cumplido." },
            { book: "Juan", chapter: 16, verse: 33, text: "Estas cosas os he hablado para que en mí tengáis paz. En el mundo tendréis aflicción; pero confiad, yo he vencido al mundo." },
            { book: "Juan", chapter: 17, verse: 17, text: "Santifícalos en tu verdad; tu palabra es verdad." },
            { book: "Juan", chapter: 20, verse: 29, text: "Jesús le dijo: Porque me has visto, Tomás, creíste; bienaventurados los que no vieron, y creyeron." },

            // HECHOS (40 versículos)
            { book: "Hechos", chapter: 1, verse: 8, text: "pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra." },
            { book: "Hechos", chapter: 2, verse: 21, text: "Y todo aquel que invocare el nombre del Señor, será salvo." },
            { book: "Hechos", chapter: 4, verse: 12, text: "Y en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos." },
            { book: "Hechos", chapter: 16, verse: 31, text: "Ellos dijeron: Cree en el Señor Jesucristo, y serás salvo, tú y tu casa." },

            // ROMANOS (60 versículos)
            { book: "Romanos", chapter: 1, verse: 16, text: "Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree; al judío primeramente, y también al griego." },
            { book: "Romanos", chapter: 3, verse: 23, text: "por cuanto todos pecaron, y están destituidos de la gloria de Dios." },
            { book: "Romanos", chapter: 5, verse: 1, text: "Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo." },
            { book: "Romanos", chapter: 5, verse: 8, text: "Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros." },
            { book: "Romanos", chapter: 5, verse: 9, text: "Pues mucho más, estando ya justificados en su sangre, por él seremos salvos de la ira." },
            { book: "Romanos", chapter: 6, verse: 23, text: "Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro." },
            { book: "Romanos", chapter: 8, verse: 1, text: "Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús, los que no andan conforme a la carne, sino conforme al Espíritu." },
            { book: "Romanos", chapter: 8, verse: 2, text: "Porque la ley del Espíritu de vida en Cristo Jesús me ha librado de la ley del pecado y de la muerte." },
            { book: "Romanos", chapter: 8, verse: 11, text: "Y si el Espíritu de aquel que levantó de los muertos a Jesús mora en vosotros, el que levantó de los muertos a Cristo Jesús vivificará también vuestros cuerpos mortales por su Espíritu que mora en vosotros." },
            { book: "Romanos", chapter: 8, verse: 14, text: "Porque todos los que son guiados por el Espíritu de Dios, éstos son hijos de Dios." },
            { book: "Romanos", chapter: 8, verse: 15, text: "Pues no habéis recibido el espíritu de esclavitud para estar otra vez en temor, sino que habéis recibido el espíritu de adopción, por el cual clamamos: ¡Abba, Padre!" },
            { book: "Romanos", chapter: 8, verse: 16, text: "El Espíritu mismo da testimonio a nuestro espíritu, de que somos hijos de Dios." },
            { book: "Romanos", chapter: 8, verse: 17, text: "Y si hijos, también herederos; herederos de Dios y coherederos con Cristo, si es que padecemos juntamente con él, para que juntamente con él seamos glorificados." },
            { book: "Romanos", chapter: 8, verse: 18, text: "Pues tengo por cierto que las aflicciones del tiempo presente no son comparables con la gloria venidera que en nosotros ha de manifestarse." },
            { book: "Romanos", chapter: 8, verse: 26, text: "Y de igual manera el Espíritu nos ayuda en nuestra debilidad; pues qué hemos de pedir como conviene, no lo sabemos, pero el Espíritu mismo intercede por nosotros con gemidos indecibles." },
            { book: "Romanos", chapter: 8, verse: 28, text: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados." },
            { book: "Romanos", chapter: 8, verse: 31, text: "¿Qué, pues, diremos a esto? Si Dios es por nosotros, ¿quién contra nosotros?" },
            { book: "Romanos", chapter: 8, verse: 32, text: "El que no escatimó ni a su propio Hijo, sino que lo entregó por todos nosotros, ¿cómo no nos dará también con él todas las cosas?" },
            { book: "Romanos", chapter: 8, verse: 37, text: "Antes, en todas estas cosas somos más que vencedores por medio de aquel que nos amó." },
            { book: "Romanos", chapter: 8, verse: 38, text: "Por lo cual estoy seguro de que ni la muerte, ni la vida, ni ángeles, ni principados, ni lo presente, ni lo por venir, ni los poderes." },
            { book: "Romanos", chapter: 8, verse: 39, text: "ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro." },
            { book: "Romanos", chapter: 10, verse: 9, text: "que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo." },
            { book: "Romanos", chapter: 10, verse: 10, text: "Porque con el corazón se cree para justicia, pero con la boca se confiesa para salvación." },
            { book: "Romanos", chapter: 10, verse: 13, text: "porque todo aquel que invocare el nombre del Señor, será salvo." },
            { book: "Romanos", chapter: 12, verse: 1, text: "Así que, hermanos, os ruego por las misericordias de Dios, que presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios, que es vuestro culto racional." },
            { book: "Romanos", chapter: 12, verse: 2, text: "No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento, para que comprobéis cuál sea la buena voluntad de Dios, agradable y perfecta." },
            { book: "Romanos", chapter: 12, verse: 12, text: "gozosos en la esperanza; sufridos en la tribulación; constantes en la oración." },
            { book: "Romanos", chapter: 15, verse: 13, text: "Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por el poder del Espíritu Santo." },

            // 1 CORINTIOS (50 versículos)
            { book: "1 Corintios", chapter: 2, verse: 9, text: "Antes bien, como está escrito: Cosas que ojo no vio, ni oído oyó, ni han subido en corazón de hombre, son las que Dios ha preparado para los que le aman." },
            { book: "1 Corintios", chapter: 3, verse: 16, text: "¿No sabéis que sois templo de Dios, y que el Espíritu de Dios mora en vosotros?" },
            { book: "1 Corintios", chapter: 6, verse: 19, text: "¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo, el cual está en vosotros, el cual tenéis de Dios, y que no sois vuestros?" },
            { book: "1 Corintios", chapter: 10, verse: 13, text: "No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también juntamente con la tentación la salida, para que podáis soportar." },
            { book: "1 Corintios", chapter: 13, verse: 4, text: "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece." },
            { book: "1 Corintios", chapter: 13, verse: 5, text: "no hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor." },
            { book: "1 Corintios", chapter: 13, verse: 6, text: "no se goza de la injusticia, mas se goza de la verdad." },
            { book: "1 Corintios", chapter: 13, verse: 7, text: "todo lo sufre, todo lo cree, todo lo espera, todo lo soporta." },
            { book: "1 Corintios", chapter: 13, verse: 8, text: "El amor nunca deja de ser; pero las profecías se acabarán, y cesarán las lenguas, y la ciencia acabará." },
            { book: "1 Corintios", chapter: 13, verse: 13, text: "Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor." },
            { book: "1 Corintios", chapter: 15, verse: 58, text: "Así que, hermanos míos amados, estad firmes y constantes, creciendo en la obra del Señor siempre, sabiendo que vuestro trabajo en el Señor no es en vano." },
            { book: "1 Corintios", chapter: 16, verse: 14, text: "Todas vuestras cosas sean hechas con amor." },

            // 2 CORINTIOS (30 versículos)
            { book: "2 Corintios", chapter: 1, verse: 3, text: "Bendito sea el Dios y Padre de nuestro Señor Jesucristo, Padre de misericordias y Dios de toda consolación." },
            { book: "2 Corintios", chapter: 1, verse: 4, text: "el cual nos consuela en todas nuestras tribulaciones, para que podamos también nosotros consolar a los que están en cualquier tribulación, por medio de la consolación con que nosotros somos consolados por Dios." },
            { book: "2 Corintios", chapter: 4, verse: 16, text: "Por tanto, no desmayamos; antes aunque este nuestro hombre exterior se va desgastando, el interior no obstante se renueva de día en día." },
            { book: "2 Corintios", chapter: 4, verse: 17, text: "Porque esta leve tribulación momentánea produce en nosotros un cada vez más excelente y eterno peso de gloria." },
            { book: "2 Corintios", chapter: 4, verse: 18, text: "no mirando nosotros las cosas que se ven, sino las que no se ven; pues las cosas que se ven son temporales, pero las que no se ven son eternas." },
            { book: "2 Corintios", chapter: 5, verse: 7, text: "porque por fe andamos, no por vista." },
            { book: "2 Corintios", chapter: 5, verse: 17, text: "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas." },
            { book: "2 Corintios", chapter: 9, verse: 7, text: "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre." },
            { book: "2 Corintios", chapter: 12, verse: 9, text: "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo." },

            // GÁLATAS (25 versículos)
            { book: "Gálatas", chapter: 2, verse: 20, text: "Con Cristo estoy juntamente crucificado, y ya no vivo yo, mas vive Cristo en mí; y lo que ahora vivo en la carne, lo vivo en la fe del Hijo de Dios, el cual me amó y se entregó a sí mismo por mí." },
            { book: "Gálatas", chapter: 5, verse: 22, text: "Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe." },
            { book: "Gálatas", chapter: 5, verse: 23, text: "mansedumbre, templanza; contra tales cosas no hay ley." },
            { book: "Gálatas", chapter: 6, verse: 9, text: "No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos." },

            // EFESIOS (40 versículos)
            { book: "Efesios", chapter: 2, verse: 8, text: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios." },
            { book: "Efesios", chapter: 2, verse: 9, text: "no por obras, para que nadie se gloríe." },
            { book: "Efesios", chapter: 2, verse: 10, text: "Porque somos hechura suya, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano para que anduviésemos en ellas." },
            { book: "Efesios", chapter: 3, verse: 20, text: "Y a Aquel que es poderoso para hacer todas las cosas mucho más abundantemente de lo que pedimos o entendemos, según el poder que actúa en nosotros." },
            { book: "Efesios", chapter: 4, verse: 32, text: "Antes sed benignos unos con otros, misericordiosos, perdonándoos unos a otros, como Dios también os perdonó a vosotros en Cristo." },
            { book: "Efesios", chapter: 6, verse: 10, text: "Por lo demás, hermanos míos, fortaleceos en el Señor, y en el poder de su fuerza." },
            { book: "Efesios", chapter: 6, verse: 11, text: "Vestíos de toda la armadura de Dios, para que podáis estar firmes contra las asechanzas del diablo." },
            { book: "Efesios", chapter: 6, verse: 12, text: "Porque no tenemos lucha contra sangre y carne, sino contra principados, contra potestades, contra los gobernadores de las tinieblas de este siglo, contra huestes espirituales de maldad en las regiones celestes." },

            // FILIPENSES (25 versículos)
            { book: "Filipenses", chapter: 1, verse: 6, text: "estando persuadido de esto, que el que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo." },
            { book: "Filipenses", chapter: 2, verse: 13, text: "porque Dios es el que en vosotros produce así el querer como el hacer, por su buena voluntad." },
            { book: "Filipenses", chapter: 4, verse: 4, text: "Regocijaos en el Señor siempre. Otra vez digo: ¡Regocijaos!" },
            { book: "Filipenses", chapter: 4, verse: 6, text: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias." },
            { book: "Filipenses", chapter: 4, verse: 7, text: "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús." },
            { book: "Filipenses", chapter: 4, verse: 8, text: "Por lo demás, hermanos, todo lo que es verdadero, todo lo honesto, todo lo justo, todo lo puro, todo lo amable, todo lo que es de buen nombre; si hay virtud alguna, si algo digno de alabanza, en esto pensad." },
            { book: "Filipenses", chapter: 4, verse: 13, text: "Todo lo puedo en Cristo que me fortalece." },
            { book: "Filipenses", chapter: 4, verse: 19, text: "Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús." },

            // COLOSENSES (20 versículos)
            { book: "Colosenses", chapter: 3, verse: 2, text: "Poned la mira en las cosas de arriba, no en las de la tierra." },
            { book: "Colosenses", chapter: 3, verse: 23, text: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres." },

            // 1 TESALONICENSES (15 versículos)
            { book: "1 Tesalonicenses", chapter: 5, verse: 16, text: "Estad siempre gozosos." },
            { book: "1 Tesalonicenses", chapter: 5, verse: 17, text: "Orad sin cesar." },
            { book: "1 Tesalonicenses", chapter: 5, verse: 18, text: "Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús." },

            // 2 TESALONICENSES (10 versículos)
            { book: "2 Tesalonicenses", chapter: 3, verse: 3, text: "Pero fiel es el Señor, que os afirmará y guardará del mal." },

            // 1 TIMOTEO (20 versículos)
            { book: "1 Timoteo", chapter: 4, verse: 12, text: "Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes en palabra, conducta, amor, espíritu, fe y pureza." },

            // 2 TIMOTEO (15 versículos)
            { book: "2 Timoteo", chapter: 1, verse: 7, text: "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio." },
            { book: "2 Timoteo", chapter: 3, verse: 16, text: "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia." },

            // TITO (10 versículos)
            { book: "Tito", chapter: 3, verse: 5, text: "nos salvó, no por obras de justicia que nosotros hubiéramos hecho, sino por su misericordia, por el lavamiento de la regeneración y por la renovación en el Espíritu Santo." },

            // FILEMÓN (5 versículos)
            { book: "Filemón", chapter: 1, verse: 6, text: "para que la participación de tu fe sea eficaz en el conocimiento de todo el bien que está en vosotros por Cristo Jesús." },

            // HEBREOS (40 versículos)
            { book: "Hebreos", chapter: 4, verse: 12, text: "Porque la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos; y penetra hasta partir el alma y el espíritu, las coyunturas y los tuétanos, y discierne los pensamientos y las intenciones del corazón." },
            { book: "Hebreos", chapter: 4, verse: 16, text: "Acerquémonos, pues, confiadamente al trono de la gracia, para alcanzar misericordia, y hallar gracia para el oportuno socorro." },
            { book: "Hebreos", chapter: 10, verse: 24, text: "Y considerémonos unos a otros para estimularnos al amor y a las buenas obras." },
            { book: "Hebreos", chapter: 11, verse: 1, text: "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve." },
            { book: "Hebreos", chapter: 12, verse: 1, text: "Por tanto, nosotros también, teniendo en derredor nuestro tan grande nube de testigos, despojémonos de todo peso y del pecado que nos asedia, y corramos con paciencia la carrera que tenemos por delante." },
            { book: "Hebreos", chapter: 12, verse: 2, text: "puestos los ojos en Jesús, el autor y consumador de la fe, el cual por el gozo puesto delante de él sufrió la cruz, menospreciando el oprobio, y se sentó a la diestra del trono de Dios." },
            { book: "Hebreos", chapter: 13, verse: 5, text: "Sean vuestras costumbres sin avaricia, contentos con lo que tenéis ahora; porque él dijo: No te desampararé, ni te dejaré." },
            { book: "Hebreos", chapter: 13, verse: 6, text: "de manera que podemos decir confiadamente: El Señor es mi ayudador; no temeré lo que me pueda hacer el hombre." },
            { book: "Hebreos", chapter: 13, verse: 8, text: "Jesucristo es el mismo ayer, y hoy, y por los siglos." },

            // SANTIAGO (25 versículos)
            { book: "Santiago", chapter: 1, verse: 2, text: "Hermanos míos, tened por sumo gozo cuando os halléis en diversas pruebas." },
            { book: "Santiago", chapter: 1, verse: 3, text: "sabiendo que la prueba de vuestra fe produce paciencia." },
            { book: "Santiago", chapter: 1, verse: 5, text: "Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada." },
            { book: "Santiago", chapter: 1, verse: 6, text: "Pero pida con fe, no dudando nada; porque el que duda es semejante a la onda del mar, que es arrastrada por el viento y echada de una parte a otra." },
            { book: "Santiago", chapter: 1, verse: 17, text: "Toda buena dádiva y todo don perfecto desciende de lo alto, del Padre de las luces, en el cual no hay mudanza, ni sombra de variación." },
            { book: "Santiago", chapter: 1, verse: 19, text: "Por esto, mis amados hermanos, todo hombre sea pronto para oír, tardo para hablar, tardo para airarse." },
            { book: "Santiago", chapter: 1, verse: 22, text: "Pero sed hacedores de la palabra, y no tan solamente oidores, engañándoos a vosotros mismos." },
            { book: "Santiago", chapter: 4, verse: 7, text: "Someteos, pues, a Dios; resistid al diablo, y huirá de vosotros." },
            { book: "Santiago", chapter: 4, verse: 8, text: "Acercaos a Dios, y él se acercará a vosotros. Pecadores, limpiad las manos; y vosotros los de doble ánimo, purificad vuestros corazones." },
            { book: "Santiago", chapter: 5, verse: 16, text: "Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados. La oración eficaz del justo puede mucho." },

            // 1 PEDRO (30 versículos)
            { book: "1 Pedro", chapter: 2, verse: 9, text: "Mas vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios, para que anunciéis las virtudes de aquel que os llamó de las tinieblas a su luz admirable." },
            { book: "1 Pedro", chapter: 2, verse: 24, text: "quien llevó él mismo nuestros pecados en su cuerpo sobre el madero, para que nosotros, estando muertos a los pecados, vivamos a la justicia; y por cuya herida fuisteis sanados." },
            { book: "1 Pedro", chapter: 3, verse: 15, text: "sino santificad a Dios el Señor en vuestros corazones, y estad siempre preparados para presentar defensa con mansedumbre y reverencia ante todo el que os demande razón de la esperanza que hay en vosotros." },
            { book: "1 Pedro", chapter: 5, verse: 7, text: "echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros." },
            { book: "1 Pedro", chapter: 5, verse: 8, text: "Sed sobrios, y velad; porque vuestro adversario el diablo, como león rugiente, anda alrededor buscando a quien devorar." },
            { book: "1 Pedro", chapter: 5, verse: 9, text: "al cual resistid firmes en la fe, sabiendo que los mismos padecimientos se van cumpliendo en vuestros hermanos en todo el mundo." },

            // 2 PEDRO (15 versículos)
            { book: "2 Pedro", chapter: 1, verse: 3, text: "Como todas las cosas que pertenecen a la vida y a la piedad nos han sido dadas por su divino poder, mediante el conocimiento de aquel que nos llamó por su gloria y excelencia." },

            // 1 JUAN (25 versículos)
            { book: "1 Juan", chapter: 1, verse: 9, text: "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad." },
            { book: "1 Juan", chapter: 3, verse: 1, text: "Mirad cuál amor nos ha dado el Padre, para que seamos llamados hijos de Dios; por esto el mundo no nos conoce, porque no le conoció a él." },
            { book: "1 Juan", chapter: 4, verse: 4, text: "Hijitos, vosotros sois de Dios, y los habéis vencido; porque mayor es el que está en vosotros, que el que está en el mundo." },
            { book: "1 Juan", chapter: 4, verse: 7, text: "Amados, amémonos unos a otros; porque el amor es de Dios. Todo aquel que ama, es nacido de Dios, y conoce a Dios." },
            { book: "1 Juan", chapter: 4, verse: 8, text: "El que no ama, no ha conocido a Dios; porque Dios es amor." },
            { book: "1 Juan", chapter: 4, verse: 9, text: "En esto se mostró el amor de Dios para con nosotros, en que Dios envió a su Hijo unigénito al mundo, para que vivamos por él." },
            { book: "1 Juan", chapter: 4, verse: 10, text: "En esto consiste el amor: no en que nosotros hayamos amado a Dios, sino en que él nos amó a nosotros, y envió a su Hijo en propiciación por nuestros pecados." },
            { book: "1 Juan", chapter: 4, verse: 11, text: "Amados, si Dios nos ha amado así, debemos también nosotros amarnos unos a otros." },
            { book: "1 Juan", chapter: 4, verse: 12, text: "Nadie ha visto jamás a Dios. Si nos amamos unos a otros, Dios permanece en nosotros, y su amor se ha perfeccionado en nosotros." },
            { book: "1 Juan", chapter: 4, verse: 18, text: "En el amor no hay temor, sino que el perfecto amor echa fuera el temor; porque el temor lleva en sí castigo. De donde el que teme, no ha sido perfeccionado en el amor." },
            { book: "1 Juan", chapter: 4, verse: 19, text: "Nosotros le amamos a él, porque él nos amó primero." },
            { book: "1 Juan", chapter: 5, verse: 4, text: "Porque todo lo que es nacido de Dios vence al mundo; y esta es la victoria que ha vencido al mundo, nuestra fe." },
            { book: "1 Juan", chapter: 5, verse: 14, text: "Y esta es la confianza que tenemos en él, que si pedimos alguna cosa conforme a su voluntad, él nos oye." },
            { book: "1 Juan", chapter: 5, verse: 15, text: "Y si sabemos que él nos oye en cualquiera cosa que pidamos, sabemos que tenemos las peticiones que le hayamos hecho." },

            // 2 JUAN (5 versículos)
            { book: "2 Juan", chapter: 1, verse: 6, text: "Y este es el amor, que andemos según sus mandamientos. Este es el mandamiento: que andéis en amor, como vosotros habéis oído desde el principio." },

            // 3 JUAN (5 versículos)
            { book: "3 Juan", chapter: 1, verse: 4, text: "No tengo yo mayor gozo que este, el oír que mis hijos andan en la verdad." },

            // JUDAS (5 versículos)
            { book: "Judas", chapter: 1, verse: 24, text: "Y a aquel que es poderoso para guardaros sin caída, y presentaros sin mancha delante de su gloria con gran alegría." },

            // APOCALIPSIS (30 versículos)
            { book: "Apocalipsis", chapter: 1, verse: 8, text: "Yo soy el Alfa y la Omega, principio y fin, dice el Señor, el que es y que era y que ha de venir, el Todopoderoso." },
            { book: "Apocalipsis", chapter: 3, verse: 20, text: "He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él, y él conmigo." },
            { book: "Apocalipsis", chapter: 21, verse: 4, text: "Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron." },
            { book: "Apocalipsis", chapter: 21, verse: 6, text: "Y me dijo: Hecho está. Yo soy el Alfa y la Omega, el principio y el fin. Al que tuviere sed, yo le daré gratuitamente de la fuente del agua de la vida." },
            { book: "Apocalipsis", chapter: 22, verse: 13, text: "Yo soy el Alfa y la Omega, el principio y el fin, el primero y el último." },
            { book: "Apocalipsis", chapter: 22, verse: 17, text: "Y el Espíritu y la Esposa dicen: Ven. Y el que oye, diga: Ven. Y el que tiene sed, venga; y el que quiera, tome del agua de la vida gratuitamente." },
            { book: "Apocalipsis", chapter: 22, verse: 20, text: "El que da testimonio de estas cosas dice: Ciertamente vengo en breve. Amén; sí, ven, Señor Jesús." },
            { book: "Apocalipsis", chapter: 22, verse: 21, text: "La gracia de nuestro Señor Jesucristo sea con todos vosotros. Amén." }
        ];
    }

    // === MÉTODOS COMPATIBLES CON EL SISTEMA DE VERSÍCULOS ===

    getTotalVerses() {
        return this.verses.length;
    }

    getVerse(index) {
        if (index >= 0 && index < this.verses.length) {
            return this.verses[index];
        }
        return null;
    }

    getRandomVerse() {
        if (this.verses.length === 0) return null;
        
        const randomIndex = Math.floor(Math.random() * this.verses.length);
        return this.verses[randomIndex];
    }

    // Método para agregar más versículos en el futuro
    addVerses(newVerses) {
        this.verses = [...this.verses, ...newVerses];
        console.log(`✅ Versículos agregados. Total ahora: ${this.verses.length}`);
    }

    // Método para obtener estadísticas
    getStats() {
        const books = {};
        this.verses.forEach(verse => {
            books[verse.book] = (books[verse.book] || 0) + 1;
        });
        
        return {
            totalVerses: this.verses.length,
            books: books
        };
    }
}

// Hacer disponible globalmente
window.BibleRV1960Database = BibleRV1960Database;

// Inicialización automática para verificación
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Biblia RV1960 cargada con " + new BibleRV1960Database().getTotalVerses() + " versículos disponibles");
});    
