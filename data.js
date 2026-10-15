/* Classical Pilates Mat lessons — exercise data (EN/ES).
   Order and printed titles follow "Return to Life Through Contrology" (1945).
   Instructions, cues, counts and modifications are contemporary teaching guidance.
   Poses: [headX,headY, shoulderX,shoulderY, hipX,hipY, kneeX,kneeY, footX,footY,
           backKneeX,backKneeY, backFootX,backFootY, elbowX,elbowY, handX,handY] */
(() => {
  // ../mat/src/data.ts
  function x(n, book, secs, count, pose, en, es) {
    const b = (k) => ({ en: en[k], es: es[k] });
    const l = (k) => ({ en: en[k], es: es[k] });
    return {
      n,
      book,
      secs,
      count,
      pose,
      title: b("title"),
      reps: b("reps"),
      start: b("start"),
      steps: l("steps"),
      breath: b("breath"),
      cues: l("cues"),
      mistakes: l("mistakes"),
      safety: b("safety"),
      mod: b("mod")
    };
  }
  var INVERSION_SAFETY_EN = "Avoid with neck injury, osteoporosis, glaucoma or uncontrolled blood pressure.";
  var INVERSION_SAFETY_ES = "Ev\xEDtalo con lesiones cervicales, osteoporosis, glaucoma o tensi\xF3n arterial no controlada.";
  var EXERCISES = [
    x(1, "The Hundred", 100, 100, [54, 82, 64, 88, 100, 98, 120, 80, 140, 62, 121, 82, 141, 64, 80, 80, 98, 82], {
      title: "The Hundred",
      reps: "100 arm pumps (10 breaths)",
      start: "Lie on your back, legs together, arms long by your sides.",
      steps: ["Draw the abdominals in and lift the head and shoulders, gaze toward the navel.", "Raise straight legs to a height where the low back stays steady.", "Lift the arms just above the hips and pump them up and down in a small, brisk rhythm.", "Count to 100 pumps, then lower the head and legs with control."],
      breath: "Inhale for 5 pumps, exhale for 5 pumps. Ten full cycles.",
      cues: ["Pump from the shoulders, not the wrists.", "Lengthen the legs away from you.", "Keep the chin softly toward the chest."],
      mistakes: ["Low back arching off the mat as the legs lower.", "Neck straining and chin jutting forward."],
      safety: "Keep the legs higher or the knees bent if the low back lifts or the neck strains.",
      mod: "Bend the knees to tabletop, or keep the head down on the mat."
    }, {
      title: "El Cien",
      reps: "100 bombeos de brazos (10 respiraciones)",
      start: "T\xFAmbate boca arriba, piernas juntas, brazos largos junto al cuerpo.",
      steps: ["Lleva el abdomen hacia dentro y eleva cabeza y hombros, mirada hacia el ombligo.", "Eleva las piernas estiradas a una altura en la que la zona lumbar se mantenga estable.", "Levanta los brazos justo por encima de las caderas y bomb\xE9alos arriba y abajo con un ritmo corto y en\xE9rgico.", "Cuenta hasta 100 bombeos y baja cabeza y piernas con control."],
      breath: "Inhala durante 5 bombeos y exhala durante 5. Diez ciclos completos.",
      cues: ["Bombea desde los hombros, no desde las mu\xF1ecas.", "Alarga las piernas lejos de ti.", "Mant\xE9n la barbilla suave hacia el pecho."],
      mistakes: ["Arquear la zona lumbar al bajar las piernas.", "Tensar el cuello y adelantar la barbilla."],
      safety: "Sube m\xE1s las piernas o flexiona las rodillas si la zona lumbar se despega o el cuello se tensa.",
      mod: "Rodillas en mesa, o cabeza apoyada en la esterilla."
    }),
    x(2, "The Roll Up", 60, 5, [118, 62, 108, 68, 90, 100, 118, 100, 146, 100, 119, 101, 147, 101, 126, 74, 144, 80], {
      title: "The Roll Up",
      reps: "3\u20135 times",
      start: "Lie on your back, legs long and together, arms reaching overhead.",
      steps: ["Bring the arms to the ceiling and lift the head and shoulders.", "Roll up one vertebra at a time and reach forward over the legs.", "Draw the abdominals back and roll down slowly through the spine.", "Return the arms overhead as the head reaches the mat."],
      breath: "Inhale to lift the arms and head, exhale to roll up and reach. Inhale to begin rolling down, exhale to finish.",
      cues: ["Peel the spine off the mat, bone by bone.", "Keep the heels reaching away."],
      mistakes: ["Jerking up with momentum.", "Legs lifting off the mat."],
      safety: "Avoid deep spinal flexion with osteoporosis or acute disc problems.",
      mod: "Bend the knees, or hold the backs of the thighs to assist."
    }, {
      title: "Enrollar hacia arriba (Roll Up)",
      reps: "3\u20135 veces",
      start: "T\xFAmbate boca arriba, piernas largas y juntas, brazos estirados por encima de la cabeza.",
      steps: ["Lleva los brazos al techo y eleva cabeza y hombros.", "Enr\xF3llate v\xE9rtebra a v\xE9rtebra y alcanza hacia delante por encima de las piernas.", "Lleva el abdomen hacia atr\xE1s y desenr\xF3llate despacio a trav\xE9s de la columna.", "Devuelve los brazos por encima de la cabeza cuando esta llegue a la esterilla."],
      breath: "Inhala al elevar brazos y cabeza, exhala al subir y alcanzar. Inhala para empezar a bajar, exhala para terminar.",
      cues: ["Despega la columna de la esterilla hueso a hueso.", "Mant\xE9n los talones alarg\xE1ndose lejos."],
      mistakes: ["Subir de golpe con impulso.", "Levantar las piernas de la esterilla."],
      safety: "Evita la flexi\xF3n profunda de columna con osteoporosis o problemas discales agudos.",
      mod: "Flexiona las rodillas o sujeta la parte posterior de los muslos para ayudarte."
    }),
    x(3, "The Roll-Over (with Legs Spread Both Ways)", 75, 3, [62, 98, 74, 100, 78, 62, 56, 70, 34, 84, 58, 66, 38, 78, 92, 102, 112, 102], {
      title: "The Roll Over",
      reps: "3 each direction",
      start: "Lie on your back, arms pressing into the mat, legs together and lifted to the ceiling.",
      steps: ["Lift the hips and bring the legs over the head until the toes approach the mat.", "Open the legs shoulder-width apart.", "Roll down slowly with the legs apart, one vertebra at a time.", "Close the legs as they lower, then repeat; after three, reverse the pattern."],
      breath: "Inhale to bring the legs over, exhale to roll down.",
      cues: ["Press the arms into the mat for control.", "Keep the weight on the shoulder blades, never the neck."],
      mistakes: ["Rolling onto the neck.", "Dropping the legs with momentum."],
      safety: INVERSION_SAFETY_EN,
      mod: "Limit the range so only the hips lift, or skip it."
    }, {
      title: "Rodar por encima (Roll Over)",
      reps: "3 en cada direcci\xF3n",
      start: "T\xFAmbate boca arriba, brazos presionando la esterilla, piernas juntas elevadas hacia el techo.",
      steps: ["Eleva las caderas y lleva las piernas por encima de la cabeza hasta que los pies se acerquen a la esterilla.", "Abre las piernas al ancho de los hombros.", "Desenr\xF3llate despacio con las piernas abiertas, v\xE9rtebra a v\xE9rtebra.", "Cierra las piernas al bajarlas y repite; tras tres, invierte el patr\xF3n."],
      breath: "Inhala al llevar las piernas por encima, exhala al desenrollar.",
      cues: ["Presiona los brazos contra la esterilla para controlar.", "El peso sobre las esc\xE1pulas, nunca sobre el cuello."],
      mistakes: ["Rodar hasta apoyar el cuello.", "Dejar caer las piernas con impulso."],
      safety: INVERSION_SAFETY_ES,
      mod: "Limita el rango para que solo se eleven las caderas, u om\xEDtelo."
    }),
    x(4, "The One Leg Circle", 60, 5, [40, 98, 52, 100, 92, 100, 94, 72, 96, 44, 120, 100, 148, 100, 72, 102, 90, 102], {
      title: "One Leg Circle",
      reps: "5 each direction, each leg",
      start: "Lie on your back, one leg extended to the ceiling, the other long on the mat, arms pressing down.",
      steps: ["Cross the raised leg over the body.", "Circle it down and around, then back up to the start.", "Finish the circles and reverse direction.", "Change legs."],
      breath: "Inhale as the leg crosses and circles down, exhale to return to the top.",
      cues: ["The leg moves; the pelvis stays still.", "Anchor the opposite leg long into the mat."],
      mistakes: ["Rocking the pelvis.", "Circles larger than you can control."],
      safety: "Reduce the circle size if the hip is uncomfortable.",
      mod: "Bend the bottom knee with the foot on the mat; soften the working knee."
    }, {
      title: "C\xEDrculo con una pierna",
      reps: "5 en cada direcci\xF3n, cada pierna",
      start: "Boca arriba, una pierna extendida hacia el techo y la otra larga en la esterilla, brazos presionando.",
      steps: ["Cruza la pierna elevada por encima del cuerpo.", "Dibuja un c\xEDrculo hacia abajo y alrededor, y vuelve arriba.", "Completa los c\xEDrculos e invierte la direcci\xF3n.", "Cambia de pierna."],
      breath: "Inhala mientras la pierna cruza y baja, exhala para volver arriba.",
      cues: ["La pierna se mueve; la pelvis se queda quieta.", "Ancla la otra pierna larga en la esterilla."],
      mistakes: ["Balancear la pelvis.", "C\xEDrculos m\xE1s grandes de lo que puedes controlar."],
      safety: "Reduce el tama\xF1o del c\xEDrculo si la cadera molesta.",
      mod: "Flexiona la rodilla de abajo con el pie apoyado; suaviza la rodilla que trabaja."
    }),
    x(5, "Rolling Back", 45, 6, [96, 58, 88, 68, 100, 100, 116, 70, 124, 90, 118, 72, 126, 92, 104, 76, 118, 82], {
      title: "Rolling Back (Rolling Like a Ball)",
      reps: "6 times",
      start: "Balance just behind the sit bones, knees drawn in, hands holding the shins, feet off the mat.",
      steps: ["Round the spine and keep the shape compact.", "Roll back to the shoulder blades.", "Roll forward and balance again without the feet touching down."],
      breath: "Inhale to roll back, exhale to roll up.",
      cues: ["Keep the heels the same distance from the seat.", "Let the spine massage the mat."],
      mistakes: ["Rolling onto the neck.", "Throwing the head to gain momentum."],
      safety: "Avoid with spinal injuries or osteoporosis.",
      mod: "Hold behind the thighs, or rock only a small amount."
    }, {
      title: "Rodar hacia atr\xE1s (como una pelota)",
      reps: "6 veces",
      start: "Equil\xEDbrate justo detr\xE1s de los isquiones, rodillas recogidas, manos en las espinillas, pies en el aire.",
      steps: ["Redondea la columna y mant\xE9n la forma compacta.", "Rueda hacia atr\xE1s hasta las esc\xE1pulas.", "Rueda hacia delante y vuelve al equilibrio sin apoyar los pies."],
      breath: "Inhala al rodar atr\xE1s, exhala al subir.",
      cues: ["Mant\xE9n la misma distancia entre talones y gl\xFAteos.", "Deja que la columna masajee la esterilla."],
      mistakes: ["Rodar hasta el cuello.", "Lanzar la cabeza para coger impulso."],
      safety: "Ev\xEDtalo con lesiones de columna u osteoporosis.",
      mod: "Sujeta detr\xE1s de los muslos o balanc\xE9ate poco."
    }),
    x(6, "The One Leg Stretch", 60, 8, [52, 84, 62, 90, 100, 100, 90, 72, 112, 74, 128, 92, 156, 84, 76, 80, 90, 72], {
      title: "One Leg Stretch",
      reps: "5\u201310 each leg",
      start: "Lie on your back with head and shoulders lifted, one knee drawn in, the other leg extended.",
      steps: ["Outside hand on the ankle, inside hand on the knee of the bent leg.", "Switch legs, extending one as the other draws in.", "Keep switching in a steady rhythm, changing the hands each time."],
      breath: "Inhale for two switches, exhale for two.",
      cues: ["The torso stays still while the legs change.", "Keep the long leg low enough that the back stays steady."],
      mistakes: ["Rocking the torso side to side.", "Letting the head drop back."],
      safety: "Raise the extended leg if the low back arches.",
      mod: "Keep the head down on the mat."
    }, {
      title: "Estiramiento de una pierna",
      reps: "5\u201310 con cada pierna",
      start: "Boca arriba con cabeza y hombros elevados, una rodilla recogida y la otra pierna extendida.",
      steps: ["Mano exterior en el tobillo e interior en la rodilla de la pierna flexionada.", "Cambia de pierna, extendiendo una mientras recoges la otra.", "Sigue cambiando con ritmo constante, alternando tambi\xE9n las manos."],
      breath: "Inhala durante dos cambios, exhala durante dos.",
      cues: ["El tronco queda quieto mientras cambian las piernas.", "La pierna larga a una altura que mantenga la espalda estable."],
      mistakes: ["Balancear el tronco de lado a lado.", "Dejar caer la cabeza hacia atr\xE1s."],
      safety: "Sube la pierna extendida si la zona lumbar se arquea.",
      mod: "Mant\xE9n la cabeza apoyada en la esterilla."
    }),
    x(7, "The Double Leg Stretch", 60, 8, [52, 84, 62, 90, 100, 100, 126, 86, 152, 72, 127, 88, 153, 74, 46, 78, 30, 70], {
      title: "Double Leg Stretch",
      reps: "5\u201310 times",
      start: "Lie on your back, head lifted, both knees to the chest, hands on the shins.",
      steps: ["Reach the arms overhead and the legs long forward at the same time.", "Circle the arms out to the sides.", "Draw the knees back in and hug the shins."],
      breath: "Inhale to extend, exhale to circle the arms and draw in.",
      cues: ["The body stays curled as the limbs reach away.", "Stretch long in two directions."],
      mistakes: ["Head dropping back when the arms go overhead.", "Low back arching."],
      safety: "Keep the legs higher if the low back is sensitive.",
      mod: "Reach the arms only to the ceiling, or keep the head down."
    }, {
      title: "Estiramiento de dos piernas",
      reps: "5\u201310 veces",
      start: "Boca arriba, cabeza elevada, ambas rodillas al pecho, manos en las espinillas.",
      steps: ["Estira a la vez los brazos por encima de la cabeza y las piernas hacia delante.", "Haz un c\xEDrculo con los brazos hacia los lados.", "Recoge las rodillas y abraza las espinillas."],
      breath: "Inhala al extender, exhala al rodear con los brazos y recoger.",
      cues: ["El cuerpo sigue curvado mientras brazos y piernas se alejan.", "Al\xE1rgate en dos direcciones."],
      mistakes: ["Dejar caer la cabeza al llevar los brazos atr\xE1s.", "Arquear la zona lumbar."],
      safety: "Mant\xE9n las piernas m\xE1s altas si la zona lumbar est\xE1 sensible.",
      mod: "Lleva los brazos solo hacia el techo o mant\xE9n la cabeza apoyada."
    }),
    x(8, "The Spine Stretch", 45, 3, [116, 72, 104, 72, 80, 100, 108, 100, 136, 100, 109, 101, 137, 101, 120, 82, 138, 88], {
      title: "Spine Stretch Forward",
      reps: "3 times",
      start: "Sit tall, legs straight and slightly wider than the hips, feet flexed, arms forward at shoulder height.",
      steps: ["Lift tall out of the hips.", "Nod the head and round forward, reaching the arms.", "Roll back up to a tall seat, stacking the spine."],
      breath: "Exhale as you round forward, inhale as you restack.",
      cues: ["Imagine curling up and over a large ball.", "The hips stay anchored."],
      mistakes: ["Collapsing at the hips.", "Reaching with the shoulders instead of rounding the spine."],
      safety: "Bend the knees if the hamstrings are tight.",
      mod: "Sit on a folded towel to lift the hips."
    }, {
      title: "Estiramiento de columna",
      reps: "3 veces",
      start: "Si\xE9ntate erguido, piernas estiradas algo m\xE1s abiertas que las caderas, pies en flexi\xF3n, brazos al frente a la altura de los hombros.",
      steps: ["Crece desde las caderas.", "Inclina la cabeza y redondea hacia delante alcanzando con los brazos.", "Vuelve a sentarte erguido apilando la columna."],
      breath: "Exhala al redondear hacia delante, inhala al apilar.",
      cues: ["Imagina que te curvas por encima de una pelota grande.", "Las caderas permanecen ancladas."],
      mistakes: ["Hundirse en las caderas.", "Alcanzar con los hombros en lugar de redondear la columna."],
      safety: "Flexiona las rodillas si los isquiotibiales est\xE1n tensos.",
      mod: "Si\xE9ntate sobre una toalla doblada para elevar las caderas."
    }),
    x(9, "Rocker with Open Legs", 45, 6, [76, 56, 82, 66, 100, 100, 120, 78, 140, 56, 122, 80, 143, 59, 110, 64, 138, 58], {
      title: "Rocker with Open Legs",
      reps: "6 times",
      start: "Balance behind the sit bones, legs extended in a V, hands holding the ankles.",
      steps: ["Find the balance with a long spine.", "Round and roll back to the shoulder blades.", "Roll forward and return to the balance."],
      breath: "Inhale to roll back, exhale to roll up.",
      cues: ["Keep the legs fixed at the same width.", "Start the roll from the abdominals."],
      mistakes: ["Rolling onto the neck.", "Legs dropping as you roll back."],
      safety: "Avoid with neck injury or osteoporosis.",
      mod: "Hold behind the calves with bent knees, or practise the balance only."
    }, {
      title: "Balanc\xEDn con piernas abiertas",
      reps: "6 veces",
      start: "Equil\xEDbrate detr\xE1s de los isquiones, piernas extendidas en V, manos en los tobillos.",
      steps: ["Encuentra el equilibrio con la columna larga.", "Redondea y rueda hacia atr\xE1s hasta las esc\xE1pulas.", "Rueda hacia delante y vuelve al equilibrio."],
      breath: "Inhala al rodar atr\xE1s, exhala al subir.",
      cues: ["Mant\xE9n las piernas fijas a la misma apertura.", "Inicia el movimiento desde el abdomen."],
      mistakes: ["Rodar hasta el cuello.", "Dejar caer las piernas al rodar atr\xE1s."],
      safety: "Ev\xEDtalo con lesiones cervicales u osteoporosis.",
      mod: "Sujeta detr\xE1s de las pantorrillas con rodillas flexionadas o practica solo el equilibrio."
    }),
    x(10, "The Cork-Screw", 60, 3, [40, 98, 52, 100, 90, 100, 94, 72, 100, 46, 96, 72, 104, 46, 70, 102, 88, 102], {
      title: "The Corkscrew",
      reps: "3 each direction",
      start: "Lie on your back, legs together extended to the ceiling, arms pressing down by your sides.",
      steps: ["Shift the legs to one side.", "Circle them down and around to the other side.", "Bring them back to center, then reverse."],
      breath: "Inhale to circle down, exhale to bring the legs up.",
      cues: ["The legs move as one unit.", "Shoulders stay heavy on the mat."],
      mistakes: ["Shoulders lifting.", "Back arching at the bottom of the circle."],
      safety: "Keep the circle small if the low back is sensitive.",
      mod: "Keep the hips down and move only the legs."
    }, {
      title: "Sacacorchos",
      reps: "3 en cada direcci\xF3n",
      start: "Boca arriba, piernas juntas extendidas hacia el techo, brazos presionando junto al cuerpo.",
      steps: ["Desplaza las piernas hacia un lado.", "Dibuja un c\xEDrculo hacia abajo y alrededor hasta el otro lado.", "Vuelve al centro e invierte la direcci\xF3n."],
      breath: "Inhala al bajar en c\xEDrculo, exhala al subir las piernas.",
      cues: ["Las piernas se mueven como una sola unidad.", "Los hombros pesados sobre la esterilla."],
      mistakes: ["Levantar los hombros.", "Arquear la espalda en la parte baja del c\xEDrculo."],
      safety: "Haz el c\xEDrculo peque\xF1o si la zona lumbar est\xE1 sensible.",
      mod: "Mant\xE9n las caderas apoyadas y mueve solo las piernas."
    }),
    x(11, "The Saw", 50, 3, [110, 72, 102, 74, 80, 100, 108, 100, 136, 100, 109, 101, 137, 101, 118, 88, 134, 96], {
      title: "The Saw",
      reps: "3 each side",
      start: "Sit tall, legs wider than the hips, feet flexed, arms out to the sides.",
      steps: ["Twist the torso toward one leg.", "Reach the opposite little finger past the little toe, rounding forward; the back arm reaches behind.", "Roll up, untwist to center and repeat to the other side."],
      breath: "Inhale to twist, exhale to saw forward, inhale to return.",
      cues: ["Hips stay square and heavy.", "Reach as if sawing off the little toe."],
      mistakes: ["Lifting the opposite hip.", "Twisting from the shoulders only."],
      safety: "Bend the knees if the hamstrings are tight.",
      mod: "Sit on a folded towel."
    }, {
      title: "La sierra",
      reps: "3 a cada lado",
      start: "Si\xE9ntate erguido, piernas m\xE1s abiertas que las caderas, pies en flexi\xF3n, brazos en cruz.",
      steps: ["Gira el tronco hacia una pierna.", "Lleva el me\xF1ique contrario m\xE1s all\xE1 del dedo peque\xF1o del pie, redondeando; el brazo de atr\xE1s se alarga detr\xE1s.", "Sube, vuelve al centro y repite hacia el otro lado."],
      breath: "Inhala al girar, exhala al serrar hacia delante, inhala al volver.",
      cues: ["Caderas cuadradas y pesadas.", "Alcanza como si serraras el dedo peque\xF1o del pie."],
      mistakes: ["Levantar la cadera contraria.", "Girar solo desde los hombros."],
      safety: "Flexiona las rodillas si los isquiotibiales est\xE1n tensos.",
      mod: "Si\xE9ntate sobre una toalla doblada."
    }),
    x(12, "The Swan-Dive", 45, 6, [56, 68, 66, 78, 100, 94, 126, 88, 152, 80, 127, 91, 153, 84, 52, 74, 38, 66], {
      title: "Swan Dive",
      reps: "6 rocks",
      start: "Lie face down, legs together, hands under the shoulders.",
      steps: ["Press into the hands and lift into a long back extension.", "Release the hands and reach the arms forward.", "Rock forward onto the chest as the legs lift, then back toward the thighs."],
      breath: "Inhale to rise; then breathe with the rock, exhaling as you go forward.",
      cues: ["Hold the body in one firm curve.", "Lengthen through the front of the hips."],
      mistakes: ["Crunching into the low back.", "Bending the knees."],
      safety: "Avoid with spondylolisthesis or acute back pain.",
      mod: "Practise the lift (swan preparation) without rocking."
    }, {
      title: "Zambullida del cisne",
      reps: "6 balanceos",
      start: "T\xFAmbate boca abajo, piernas juntas, manos bajo los hombros.",
      steps: ["Presiona las manos y el\xE9vate en una extensi\xF3n larga de espalda.", "Suelta las manos y alarga los brazos hacia delante.", "Balanc\xE9ate hacia delante sobre el pecho mientras suben las piernas, y vuelve hacia los muslos."],
      breath: "Inhala al subir; despu\xE9s respira con el balanceo, exhalando al ir hacia delante.",
      cues: ["Mant\xE9n el cuerpo en una curva firme.", "Alarga la parte delantera de las caderas."],
      mistakes: ["Comprimir la zona lumbar.", "Flexionar las rodillas."],
      safety: "Ev\xEDtalo con espondilolistesis o dolor lumbar agudo.",
      mod: "Practica la elevaci\xF3n (preparaci\xF3n del cisne) sin balanceo."
    }),
    x(13, "The One Leg Kick", 45, 5, [52, 76, 64, 84, 100, 98, 126, 100, 118, 78, 128, 101, 156, 101, 64, 102, 46, 102], {
      title: "One Leg Kick",
      reps: "5 each leg",
      start: "Lie face down, propped on the forearms, fists together, legs long.",
      steps: ["Lift the chest and draw the abdominals in.", "Kick one heel toward the seat twice.", "Lengthen that leg down as the other kicks."],
      breath: "Inhale on one leg's double kick, exhale on the other.",
      cues: ["Press the pubic bone gently into the mat.", "Broad collarbones, chest lifted."],
      mistakes: ["Sinking into the shoulders.", "Hips lifting off the mat."],
      safety: "Lower the chest lift if the low back complains.",
      mod: "Rest the forehead on stacked hands."
    }, {
      title: "Patada con una pierna",
      reps: "5 con cada pierna",
      start: "Boca abajo, apoyado en los antebrazos, pu\xF1os juntos, piernas largas.",
      steps: ["Eleva el pecho y lleva el abdomen hacia dentro.", "Patea dos veces con un tal\xF3n hacia el gl\xFAteo.", "Alarga esa pierna hacia abajo mientras patea la otra."],
      breath: "Inhala en la doble patada de una pierna, exhala en la de la otra.",
      cues: ["Presiona suavemente el pubis contra la esterilla.", "Clav\xEDculas anchas, pecho elevado."],
      mistakes: ["Hundirse en los hombros.", "Levantar las caderas."],
      safety: "Baja la elevaci\xF3n del pecho si la zona lumbar protesta.",
      mod: "Apoya la frente sobre las manos."
    }),
    x(14, "The Double Kick", 50, 2, [50, 96, 62, 98, 100, 100, 126, 100, 116, 80, 127, 101, 117, 81, 76, 90, 96, 92], {
      title: "Double Kick",
      reps: "2\u20133 each side",
      start: "Lie face down, head turned to one side, hands clasped high on the back.",
      steps: ["Kick both heels toward the seat three times.", "Stretch the legs long, lift the chest and reach the hands toward the feet.", "Lower down and turn the head the other way."],
      breath: "Exhale through the kicks, inhale as you extend.",
      cues: ["Knees stay together.", "Open the shoulders as the hands reach back."],
      mistakes: ["Knees splaying apart.", "Lifting the head with neck tension."],
      safety: "Avoid deep extension with back injury.",
      mod: "Keep the chest lift small."
    }, {
      title: "Patada doble",
      reps: "2\u20133 a cada lado",
      start: "Boca abajo, cabeza girada a un lado, manos entrelazadas en la parte alta de la espalda.",
      steps: ["Patea tres veces con ambos talones hacia los gl\xFAteos.", "Alarga las piernas, eleva el pecho y lleva las manos hacia los pies.", "Baja y gira la cabeza hacia el otro lado."],
      breath: "Exhala durante las patadas, inhala al extender.",
      cues: ["Las rodillas se mantienen juntas.", "Abre los hombros mientras las manos van hacia atr\xE1s."],
      mistakes: ["Separar las rodillas.", "Elevar la cabeza con tensi\xF3n en el cuello."],
      safety: "Evita la extensi\xF3n profunda con lesiones de espalda.",
      mod: "Mant\xE9n la elevaci\xF3n del pecho peque\xF1a."
    }),
    x(15, "The Neck Pull", 60, 4, [104, 62, 96, 70, 80, 100, 108, 100, 136, 100, 109, 101, 137, 101, 108, 64, 100, 58], {
      title: "Neck Pull",
      reps: "3\u20135 times",
      start: "Lie on your back, legs hip-width and long, hands behind the head, elbows wide.",
      steps: ["Nod the chin and roll up through the spine.", "Round forward over the legs.", "Restack to a tall seat.", "Lean back with a long spine, then roll down slowly."],
      breath: "Inhale to begin, exhale to roll up and over, inhale to sit tall, exhale to roll down.",
      cues: ["Elbows stay open.", "The hands rest; they never pull the head."],
      mistakes: ["Pulling on the neck.", "Legs lifting off the mat."],
      safety: "Avoid with osteoporosis or acute neck problems.",
      mod: "Bend the knees, or cross the arms over the chest."
    }, {
      title: "Tir\xF3n de cuello (Neck Pull)",
      reps: "3\u20135 veces",
      start: "Boca arriba, piernas largas al ancho de caderas, manos detr\xE1s de la cabeza, codos abiertos.",
      steps: ["Inclina la barbilla y enr\xF3llate a trav\xE9s de la columna.", "Redondea hacia delante por encima de las piernas.", "Apila la columna hasta sentarte erguido.", "Incl\xEDnate atr\xE1s con la columna larga y desenr\xF3llate despacio."],
      breath: "Inhala para empezar, exhala al subir y redondear, inhala al sentarte erguido, exhala al bajar.",
      cues: ["Los codos permanecen abiertos.", "Las manos descansan; nunca tiran de la cabeza."],
      mistakes: ["Tirar del cuello.", "Levantar las piernas."],
      safety: "Ev\xEDtalo con osteoporosis o problemas cervicales agudos.",
      mod: "Flexiona las rodillas o cruza los brazos sobre el pecho."
    }),
    x(16, "The Scissors", 45, 4, [58, 100, 70, 100, 76, 66, 62, 45, 48, 24, 92, 46, 108, 28, 88, 90, 80, 70], {
      title: "Scissors",
      reps: "3\u20135 each side",
      start: "Lie on your back, roll the legs up and support the hips with your hands, weight on the shoulder blades.",
      steps: ["Split the legs, one toward the head and one away.", "Switch the legs smoothly.", "Keep scissoring, then lower with control."],
      breath: "Inhale for one switch, exhale for the next.",
      cues: ["Elbows stay under the hips.", "Lengthen the legs as they pass."],
      mistakes: ["Weight rolling onto the neck.", "Hips sinking into the hands."],
      safety: INVERSION_SAFETY_EN,
      mod: "Do the scissors lying flat with the hips on the mat."
    }, {
      title: "Tijeras",
      reps: "3\u20135 a cada lado",
      start: "Boca arriba, eleva las piernas y sujeta las caderas con las manos, peso sobre las esc\xE1pulas.",
      steps: ["Abre las piernas, una hacia la cabeza y otra alej\xE1ndose.", "Cambia las piernas con fluidez.", "Sigue haciendo tijera y baja con control."],
      breath: "Inhala en un cambio, exhala en el siguiente.",
      cues: ["Los codos bajo las caderas.", "Alarga las piernas al cruzarse."],
      mistakes: ["Rodar el peso hacia el cuello.", "Hundir las caderas en las manos."],
      safety: INVERSION_SAFETY_ES,
      mod: "Haz las tijeras tumbado con las caderas en la esterilla."
    }),
    x(17, "The Bicycle", 45, 4, [58, 100, 70, 100, 76, 66, 64, 44, 52, 22, 96, 56, 104, 80, 88, 90, 80, 70], {
      title: "Bicycle",
      reps: "3\u20135 each direction",
      start: "Same lifted position as Scissors: hips supported, weight on the shoulder blades.",
      steps: ["Bend one knee as the other leg reaches long, as if pedalling.", "Keep the pedalling smooth and wide.", "Reverse the direction."],
      breath: "Breathe evenly with the rhythm of the pedalling.",
      cues: ["Reach the straight leg long toward the floor.", "Keep the pelvis lifted and steady."],
      mistakes: ["Short, rushed pedalling.", "Collapsing the hips."],
      safety: INVERSION_SAFETY_EN,
      mod: "Pedal lying flat with the hips on the mat."
    }, {
      title: "Bicicleta",
      reps: "3\u20135 en cada direcci\xF3n",
      start: "La misma posici\xF3n elevada que en Tijeras: caderas sujetas, peso sobre las esc\xE1pulas.",
      steps: ["Flexiona una rodilla mientras la otra pierna se alarga, como si pedalearas.", "Mant\xE9n el pedaleo fluido y amplio.", "Invierte la direcci\xF3n."],
      breath: "Respira de forma regular al ritmo del pedaleo.",
      cues: ["Alarga la pierna estirada hacia el suelo.", "Pelvis elevada y estable."],
      mistakes: ["Pedaleo corto y apresurado.", "Hundir las caderas."],
      safety: INVERSION_SAFETY_ES,
      mod: "Pedalea tumbado con las caderas en la esterilla."
    }),
    x(18, "The Shoulder Bridge", 60, 3, [40, 100, 52, 100, 92, 74, 110, 52, 126, 30, 118, 72, 120, 100, 70, 94, 88, 80], {
      title: "Shoulder Bridge",
      reps: "3 each leg",
      start: "Lie on your back, knees bent, lift the hips and support them with your hands.",
      steps: ["Extend one leg long and forward.", "Kick it up to the ceiling with a pointed foot.", "Flex the foot and lower the leg to hip height.", "Repeat, then change legs."],
      breath: "Inhale to kick up, exhale to lower.",
      cues: ["Hips stay lifted and level.", "Grow long through the supporting thigh."],
      mistakes: ["Hips dropping as the leg lowers.", "Wrists collapsing under the weight."],
      safety: "Skip the hand support if the wrists hurt.",
      mod: "Arms long on the mat; lift the hips without the leg kick."
    }, {
      title: "Puente de hombros",
      reps: "3 con cada pierna",
      start: "Boca arriba, rodillas flexionadas, eleva las caderas y suj\xE9talas con las manos.",
      steps: ["Extiende una pierna larga hacia delante.", "Patea hacia el techo con el pie en punta.", "Flexiona el pie y baja la pierna a la altura de la cadera.", "Repite y cambia de pierna."],
      breath: "Inhala al patear arriba, exhala al bajar.",
      cues: ["Caderas elevadas y niveladas.", "Al\xE1rgate a trav\xE9s del muslo de apoyo."],
      mistakes: ["Dejar caer las caderas al bajar la pierna.", "Hundir las mu\xF1ecas bajo el peso."],
      safety: "Prescinde del apoyo de manos si duelen las mu\xF1ecas.",
      mod: "Brazos largos en la esterilla; eleva las caderas sin patada."
    }),
    x(19, "The Spine Twist", 45, 3, [84, 50, 82, 62, 80, 100, 108, 100, 136, 100, 109, 101, 137, 101, 102, 62, 122, 62], {
      title: "Spine Twist",
      reps: "3 each side",
      start: "Sit tall, legs together and extended, feet flexed, arms out to the sides.",
      steps: ["Grow tall through the crown of the head.", "Twist to one side with a double pulse.", "Return to center and twist to the other side."],
      breath: "Exhale as you twist, inhale to return.",
      cues: ["Twist from the waist, not the arms.", "Heels stay together and even."],
      mistakes: ["Leaning back or slumping.", "Hips shifting."],
      safety: "Never force the rotation with back pain.",
      mod: "Sit cross-legged or on a lift."
    }, {
      title: "Torsi\xF3n de columna",
      reps: "3 a cada lado",
      start: "Si\xE9ntate erguido, piernas juntas y extendidas, pies en flexi\xF3n, brazos en cruz.",
      steps: ["Crece a trav\xE9s de la coronilla.", "Gira hacia un lado con un doble impulso.", "Vuelve al centro y gira hacia el otro lado."],
      breath: "Exhala al girar, inhala al volver.",
      cues: ["Gira desde la cintura, no desde los brazos.", "Talones juntos y parejos."],
      mistakes: ["Inclinarse atr\xE1s o encorvarse.", "Desplazar las caderas."],
      safety: "No fuerces la rotaci\xF3n si hay dolor de espalda.",
      mod: "Si\xE9ntate con las piernas cruzadas o sobre un alza."
    }),
    x(20, "The Jack Knife", 45, 3, [58, 100, 70, 100, 76, 60, 78, 32, 80, 8, 79, 33, 81, 9, 90, 102, 110, 102], {
      title: "Jackknife",
      reps: "3 times",
      start: "Lie on your back, arms pressing by your sides, legs extended to the ceiling.",
      steps: ["Roll the legs over the head, parallel to the mat.", "Lift the legs up to the ceiling, hips high.", "Roll down slowly through the spine, legs staying vertical."],
      breath: "Inhale to roll over and lift, exhale to roll down.",
      cues: ["Reach the feet up to the ceiling.", "Press the arms into the mat."],
      mistakes: ["Weight on the neck.", "Legs swinging toward the face on the way down."],
      safety: INVERSION_SAFETY_EN,
      mod: "Practise only the roll-over portion."
    }, {
      title: "Navaja (Jackknife)",
      reps: "3 veces",
      start: "Boca arriba, brazos presionando junto al cuerpo, piernas extendidas hacia el techo.",
      steps: ["Lleva las piernas por encima de la cabeza, paralelas a la esterilla.", "Eleva las piernas hacia el techo con las caderas altas.", "Desenr\xF3llate despacio con las piernas verticales."],
      breath: "Inhala al rodar y elevar, exhala al bajar.",
      cues: ["Alcanza el techo con los pies.", "Presiona los brazos contra la esterilla."],
      mistakes: ["Cargar peso en el cuello.", "Balancear las piernas hacia la cara al bajar."],
      safety: INVERSION_SAFETY_ES,
      mod: "Practica solo la parte de rodar por encima."
    }),
    x(21, "The Side Kick", 60, 8, [40, 84, 54, 96, 94, 98, 118, 86, 142, 74, 120, 100, 146, 100, 44, 102, 40, 86], {
      title: "Side Kick",
      reps: "5\u201310 each side",
      start: "Lie on your side, propped on one elbow with the head in the hand, legs slightly forward of the hips.",
      steps: ["Lift the top leg to hip height.", "Kick it forward twice.", "Sweep it back long.", "Repeat, then change sides."],
      breath: "Inhale on the forward kicks, exhale on the sweep back.",
      cues: ["The torso stays still as the leg swings.", "Keep the waist lifted off the mat."],
      mistakes: ["Rolling the hips back.", "Sinking into the supporting shoulder."],
      safety: "Rest the head on the arm if the neck or shoulder is uncomfortable.",
      mod: "Use a smaller range of motion."
    }, {
      title: "Patada lateral",
      reps: "5\u201310 a cada lado",
      start: "T\xFAmbate de lado, apoyado en un codo con la cabeza en la mano, piernas algo adelantadas respecto a las caderas.",
      steps: ["Eleva la pierna de arriba a la altura de la cadera.", "Patea dos veces hacia delante.", "Ll\xE9vala larga hacia atr\xE1s.", "Repite y cambia de lado."],
      breath: "Inhala en las patadas hacia delante, exhala al llevarla atr\xE1s.",
      cues: ["El tronco quieto mientras la pierna oscila.", "La cintura elevada de la esterilla."],
      mistakes: ["Rodar las caderas hacia atr\xE1s.", "Hundirse en el hombro de apoyo."],
      safety: "Apoya la cabeza en el brazo si el cuello o el hombro molestan.",
      mod: "Reduce el rango de movimiento."
    }),
    x(22, "The Teaser", 45, 3, [74, 58, 80, 68, 100, 100, 122, 80, 142, 60, 124, 82, 144, 62, 98, 60, 116, 50], {
      title: "Teaser",
      reps: "3 times",
      start: "Lie on your back, legs extended at about 45 degrees, arms reaching overhead.",
      steps: ["Bring the arms forward and roll up into a V-shape.", "Reach the arms parallel to the legs.", "Roll down with control while the legs stay still."],
      breath: "Inhale to prepare, exhale to roll up, inhale at the top, exhale to roll down.",
      cues: ["Roll up; don't jump up.", "Lift the chest without collapsing the low back."],
      mistakes: ["Using momentum.", "Shoulders hunching toward the ears."],
      safety: "Avoid during acute back pain.",
      mod: "Keep the knees bent, or one foot on the mat."
    }, {
      title: "Teaser (la V)",
      reps: "3 veces",
      start: "Boca arriba, piernas extendidas a unos 45 grados, brazos estirados por encima de la cabeza.",
      steps: ["Lleva los brazos al frente y enr\xF3llate hasta formar una V.", "Alarga los brazos paralelos a las piernas.", "Desenr\xF3llate con control mientras las piernas quedan quietas."],
      breath: "Inhala para preparar, exhala al subir, inhala arriba, exhala al bajar.",
      cues: ["Enr\xF3llate; no saltes hacia arriba.", "Eleva el pecho sin hundir la zona lumbar."],
      mistakes: ["Usar impulso.", "Encoger los hombros hacia las orejas."],
      safety: "Ev\xEDtalo con dolor lumbar agudo.",
      mod: "Mant\xE9n las rodillas flexionadas o un pie en la esterilla."
    }),
    x(23, "The Hip Twist with Stretched Arms", 50, 3, [62, 66, 70, 76, 90, 100, 112, 80, 132, 58, 114, 82, 134, 60, 60, 90, 52, 102], {
      title: "Hip Twist with Stretched Arms",
      reps: "3 each direction",
      start: "Sit leaning back on straight arms, hands behind you, legs extended and lifted in a V.",
      steps: ["Circle the legs to one side, down and around.", "Bring them back up to the top.", "Reverse the direction."],
      breath: "Inhale to circle down, exhale to bring the legs up.",
      cues: ["Chest lifted, shoulders away from the ears.", "Keep the legs together."],
      mistakes: ["Collapsing into the wrists.", "Circles larger than you can control."],
      safety: "Lean on the forearms if the wrists hurt.",
      mod: "Bend the knees, or lean back on the forearms."
    }, {
      title: "Torsi\xF3n de cadera con brazos extendidos",
      reps: "3 en cada direcci\xF3n",
      start: "Si\xE9ntate inclinado hacia atr\xE1s sobre los brazos estirados, manos detr\xE1s, piernas extendidas y elevadas en V.",
      steps: ["Dibuja un c\xEDrculo con las piernas hacia un lado, abajo y alrededor.", "Vuelve arriba.", "Invierte la direcci\xF3n."],
      breath: "Inhala al bajar en c\xEDrculo, exhala al subir las piernas.",
      cues: ["Pecho elevado, hombros lejos de las orejas.", "Piernas juntas."],
      mistakes: ["Hundirse en las mu\xF1ecas.", "C\xEDrculos m\xE1s grandes de lo que puedes controlar."],
      safety: "Ap\xF3yate en los antebrazos si duelen las mu\xF1ecas.",
      mod: "Flexiona las rodillas o ap\xF3yate en los antebrazos."
    }),
    x(24, "Swimming", 40, 20, [52, 84, 64, 90, 100, 96, 126, 92, 152, 86, 126, 98, 152, 100, 44, 82, 26, 74], {
      title: "Swimming",
      reps: "2 rounds of 10 counts",
      start: "Lie face down, arms reaching overhead, legs long.",
      steps: ["Lift the arms, legs and chest off the mat.", "Flutter opposite arm and leg up and down quickly.", "Keep swimming for the count, then rest."],
      breath: "Inhale for 5 counts, exhale for 5 counts.",
      cues: ["Reach long first, then lift.", "Keep the movements small and quick."],
      mistakes: ["Kicking from the knees.", "Shortening the back of the neck."],
      safety: "Lower the height if the back complains.",
      mod: "Lift opposite arm and leg slowly, one pair at a time."
    }, {
      title: "Nataci\xF3n",
      reps: "2 rondas de 10 tiempos",
      start: "Boca abajo, brazos estirados por delante de la cabeza, piernas largas.",
      steps: ["Eleva brazos, piernas y pecho de la esterilla.", "Agita brazo y pierna contrarios arriba y abajo con rapidez.", "Sigue nadando durante la cuenta y descansa."],
      breath: "Inhala durante 5 tiempos, exhala durante 5.",
      cues: ["Primero alarga, despu\xE9s eleva.", "Movimientos peque\xF1os y r\xE1pidos."],
      mistakes: ["Patear desde las rodillas.", "Acortar la nuca."],
      safety: "Reduce la altura si la espalda protesta.",
      mod: "Eleva brazo y pierna contrarios despacio, un par cada vez."
    }),
    x(25, "The Leg-Pull \u2014 Front Support", 45, 3, [48, 58, 60, 64, 100, 78, 128, 74, 156, 70, 128, 88, 156, 98, 60, 84, 60, 102], {
      title: "Leg Pull Front",
      reps: "3 each leg",
      start: "Plank on the hands, body in one long line.",
      steps: ["Lift one leg, foot pointed.", "Rock back through the supporting heel.", "Rock forward, lower the leg and change sides."],
      breath: "Inhale to lift the leg and rock back, exhale to return.",
      cues: ["Head in line with the spine.", "Hips stay level."],
      mistakes: ["Hips sagging.", "Shoulders collapsing between the hands."],
      safety: "Use the forearms if the wrists are sensitive.",
      mod: "Plank on the knees, or hold the plank without lifting a leg."
    }, {
      title: "Tracci\xF3n de pierna, apoyo frontal",
      reps: "3 con cada pierna",
      start: "Plancha sobre las manos, cuerpo en una l\xEDnea larga.",
      steps: ["Eleva una pierna con el pie en punta.", "Balanc\xE9ate hacia atr\xE1s a trav\xE9s del tal\xF3n de apoyo.", "Vuelve hacia delante, baja la pierna y cambia de lado."],
      breath: "Inhala al elevar la pierna e ir atr\xE1s, exhala al volver.",
      cues: ["Cabeza alineada con la columna.", "Caderas niveladas."],
      mistakes: ["Dejar caer las caderas.", "Hundir los hombros entre las manos."],
      safety: "Ap\xF3yate en los antebrazos si las mu\xF1ecas est\xE1n sensibles.",
      mod: "Plancha sobre las rodillas o mant\xE9n la plancha sin elevar la pierna."
    }),
    x(26, "The Leg-Pull", 45, 3, [48, 62, 60, 66, 100, 78, 124, 62, 142, 42, 128, 88, 156, 98, 60, 84, 60, 102], {
      title: "Leg Pull (Back)",
      reps: "3 each leg",
      start: "Sit with legs extended, hands behind the hips, then lift into a reverse plank.",
      steps: ["Hold the body in a straight line from shoulders to heels.", "Kick one leg up toward the ceiling.", "Lower it with a flexed foot and change legs."],
      breath: "Inhale to kick, exhale to lower.",
      cues: ["Keep the hips high.", "Open the chest."],
      mistakes: ["Hips sagging.", "Locking the elbows."],
      safety: "Avoid with wrist or shoulder injury.",
      mod: "Bend the knees into a tabletop bridge."
    }, {
      title: "Tracci\xF3n de pierna, apoyo dorsal",
      reps: "3 con cada pierna",
      start: "Sentado con las piernas extendidas, manos detr\xE1s de las caderas; el\xE9vate a una plancha invertida.",
      steps: ["Mant\xE9n una l\xEDnea recta de hombros a talones.", "Patea una pierna hacia el techo.", "B\xE1jala con el pie en flexi\xF3n y cambia de pierna."],
      breath: "Inhala al patear, exhala al bajar.",
      cues: ["Caderas altas.", "Abre el pecho."],
      mistakes: ["Dejar caer las caderas.", "Bloquear los codos."],
      safety: "Ev\xEDtalo con lesiones de mu\xF1eca u hombro.",
      mod: "Flexiona las rodillas en posici\xF3n de mesa invertida."
    }),
    x(27, "The Side Kick Kneeling", 45, 4, [70, 42, 76, 54, 96, 74, 122, 70, 148, 66, 100, 100, 124, 102, 66, 78, 58, 102], {
      title: "Side Kick Kneeling",
      reps: "4 each side",
      start: "Kneel, place one hand on the mat under the shoulder, the other behind the head, and extend the top leg at hip height.",
      steps: ["Kick the leg forward.", "Swing it back long.", "Repeat, then change sides."],
      breath: "Inhale forward, exhale back.",
      cues: ["Lift through the waist.", "Supporting arm long and strong."],
      mistakes: ["Sinking into the supporting shoulder.", "Torso swinging with the leg."],
      safety: "Pad the supporting knee.",
      mod: "Do the Side Kick lying down instead."
    }, {
      title: "Patada lateral de rodillas",
      reps: "4 a cada lado",
      start: "De rodillas, una mano en la esterilla bajo el hombro y la otra detr\xE1s de la cabeza; extiende la pierna de arriba a la altura de la cadera.",
      steps: ["Patea la pierna hacia delante.", "Ll\xE9vala larga hacia atr\xE1s.", "Repite y cambia de lado."],
      breath: "Inhala hacia delante, exhala hacia atr\xE1s.",
      cues: ["Eleva la cintura.", "Brazo de apoyo largo y firme."],
      mistakes: ["Hundirse en el hombro de apoyo.", "Balancear el tronco con la pierna."],
      safety: "Acolcha la rodilla de apoyo.",
      mod: "Haz la Patada lateral tumbado."
    }),
    x(28, "The Side Bend", 45, 3, [52, 56, 60, 66, 100, 80, 128, 92, 156, 102, 129, 93, 157, 103, 60, 84, 60, 102], {
      title: "Side Bend",
      reps: "3 each side",
      start: "Sit on one hip, legs extended with the feet stacked or the top foot in front, supporting hand on the mat.",
      steps: ["Press up into a side plank as the top arm arcs overhead.", "Lower the hip toward the mat without touching.", "Lift again."],
      breath: "Inhale to lift, exhale to lower.",
      cues: ["Draw an arch through the side body.", "Hand directly under the shoulder."],
      mistakes: ["Hips sagging backward.", "Shoulder hunching."],
      safety: "Avoid with shoulder or wrist injury.",
      mod: "Bend the bottom knee for support."
    }, {
      title: "Flexi\xF3n lateral",
      reps: "3 a cada lado",
      start: "Sentado sobre una cadera, piernas extendidas con los pies apilados o el de arriba delante, mano de apoyo en la esterilla.",
      steps: ["El\xE9vate a una plancha lateral mientras el brazo de arriba dibuja un arco.", "Baja la cadera hacia la esterilla sin tocarla.", "Vuelve a subir."],
      breath: "Inhala al subir, exhala al bajar.",
      cues: ["Dibuja un arco con el lateral del cuerpo.", "La mano justo debajo del hombro."],
      mistakes: ["Dejar caer las caderas hacia atr\xE1s.", "Encoger el hombro."],
      safety: "Ev\xEDtalo con lesiones de hombro o mu\xF1eca.",
      mod: "Flexiona la rodilla de abajo como apoyo."
    }),
    x(29, "The Boomerang", 60, 4, [74, 58, 80, 68, 100, 100, 122, 80, 142, 60, 124, 82, 144, 62, 66, 84, 56, 98], {
      title: "Boomerang",
      reps: "4\u20136 times",
      start: "Sit tall, legs extended and crossed at the ankles, hands by the hips.",
      steps: ["Roll back and bring the legs over the head.", "Switch the cross of the legs.", "Roll up into a teaser balance, clasp the hands behind the back and reach them away.", "Lower the legs, circle the arms around and stretch forward."],
      breath: "Exhale to roll back, inhale to roll up into the balance, exhale as you fold forward.",
      cues: ["Control every transition.", "Legs stay together and straight."],
      mistakes: ["Using momentum.", "Collapsing the chest at the balance."],
      safety: INVERSION_SAFETY_EN,
      mod: "Practise the rolling and the teaser parts separately."
    }, {
      title: "Bumer\xE1n",
      reps: "4\u20136 veces",
      start: "Si\xE9ntate erguido, piernas extendidas y cruzadas por los tobillos, manos junto a las caderas.",
      steps: ["Rueda atr\xE1s y lleva las piernas por encima de la cabeza.", "Cambia el cruce de las piernas.", "Sube a un equilibrio de teaser, entrelaza las manos detr\xE1s de la espalda y al\xE1rgalas.", "Baja las piernas, rodea con los brazos y est\xEDrate hacia delante."],
      breath: "Exhala al rodar atr\xE1s, inhala al subir al equilibrio, exhala al plegarte hacia delante.",
      cues: ["Controla cada transici\xF3n.", "Piernas juntas y estiradas."],
      mistakes: ["Usar impulso.", "Hundir el pecho en el equilibrio."],
      safety: INVERSION_SAFETY_ES,
      mod: "Practica por separado la parte de rodar y la del teaser."
    }),
    x(30, "The Seal", 40, 6, [92, 58, 86, 68, 100, 100, 122, 72, 132, 90, 124, 74, 134, 92, 106, 84, 128, 92], {
      title: "Seal",
      reps: "6 times",
      start: "Balance with the knees open, arms threaded inside the legs holding the outside of the ankles, feet off the mat.",
      steps: ["Clap the feet together three times.", "Roll back to the shoulder blades and clap three times.", "Roll up to the balance."],
      breath: "Inhale to roll back, exhale to roll up.",
      cues: ["Keep the spine round.", "Keep the rolling light and playful."],
      mistakes: ["Rolling onto the neck.", "Opening out of the shape."],
      safety: "Avoid with spinal injuries.",
      mod: "Clap only in the balance, without rolling."
    }, {
      title: "La foca",
      reps: "6 veces",
      start: "En equilibrio con las rodillas abiertas, brazos por dentro de las piernas sujetando el exterior de los tobillos, pies en el aire.",
      steps: ["Aplaude tres veces con los pies.", "Rueda atr\xE1s hasta las esc\xE1pulas y aplaude tres veces.", "Sube al equilibrio."],
      breath: "Inhala al rodar atr\xE1s, exhala al subir.",
      cues: ["Columna redonda.", "Rodar ligero y juguet\xF3n."],
      mistakes: ["Rodar hasta el cuello.", "Perder la forma."],
      safety: "Ev\xEDtalo con lesiones de columna.",
      mod: "Aplaude solo en el equilibrio, sin rodar."
    }),
    x(31, "The Crab", 40, 6, [100, 64, 88, 70, 100, 96, 118, 70, 106, 86, 120, 72, 108, 88, 102, 84, 108, 86], {
      title: "Crab",
      reps: "6 times",
      start: "Sit with the legs crossed and drawn in, hands holding the feet.",
      steps: ["Roll back and switch the cross of the legs.", "Roll forward over the knees, touching the head lightly to the mat.", "Roll back again."],
      breath: "Inhale to roll back, exhale to roll forward.",
      cues: ["Stay round and compact.", "Only the lightest head contact."],
      mistakes: ["Putting weight into the head.", "Losing the shape."],
      safety: "Skip the head touch with any neck problem.",
      mod: "Roll back and up without the forward roll onto the head."
    }, {
      title: "El cangrejo",
      reps: "6 veces",
      start: "Sentado con las piernas cruzadas y recogidas, manos sujetando los pies.",
      steps: ["Rueda atr\xE1s y cambia el cruce de las piernas.", "Rueda hacia delante sobre las rodillas, tocando suavemente la esterilla con la cabeza.", "Vuelve a rodar atr\xE1s."],
      breath: "Inhala al rodar atr\xE1s, exhala al rodar adelante.",
      cues: ["Redondo y compacto.", "Contacto m\xEDnimo con la cabeza."],
      mistakes: ["Cargar peso sobre la cabeza.", "Perder la forma."],
      safety: "Omite el apoyo de cabeza con cualquier problema cervical.",
      mod: "Rueda atr\xE1s y arriba sin rodar hacia la cabeza."
    }),
    x(32, "The Rocking", 40, 5, [56, 72, 66, 82, 100, 96, 126, 96, 112, 66, 127, 97, 113, 67, 88, 70, 110, 64], {
      title: "Rocking",
      reps: "5 times",
      start: "Lie face down, bend the knees and hold the ankles.",
      steps: ["Lift the chest and thighs, pressing the feet into the hands.", "Rock forward and back in a bow shape."],
      breath: "Inhale as the chest rises, exhale as you rock forward.",
      cues: ["Hold the shape; let the breath and the rock move you.", "Shoulders open."],
      mistakes: ["Collapsing the bow.", "Crunching the back of the neck."],
      safety: "Avoid with back or knee injuries and during pregnancy.",
      mod: "Hold the bow without rocking."
    }, {
      title: "Balanceo (Rocking)",
      reps: "5 veces",
      start: "Boca abajo, flexiona las rodillas y sujeta los tobillos.",
      steps: ["Eleva pecho y muslos presionando los pies contra las manos.", "Balanc\xE9ate adelante y atr\xE1s en forma de arco."],
      breath: "Inhala al subir el pecho, exhala al balancearte hacia delante.",
      cues: ["Mant\xE9n la forma; deja que la respiraci\xF3n y el balanceo te muevan.", "Hombros abiertos."],
      mistakes: ["Deshacer el arco.", "Comprimir la nuca."],
      safety: "Ev\xEDtalo con lesiones de espalda o rodilla y durante el embarazo.",
      mod: "Mant\xE9n el arco sin balancearte."
    }),
    x(33, "The Control Balance", 50, 3, [62, 98, 74, 100, 78, 62, 80, 34, 82, 8, 56, 70, 34, 84, 54, 90, 38, 84], {
      title: "Control Balance",
      reps: "3 each leg",
      start: "Lie on your back and roll the legs over the head, toes toward the mat.",
      steps: ["Hold one ankle and lift the other leg to the ceiling.", "Switch legs in a controlled scissor.", "Roll down through the spine."],
      breath: "Inhale for one switch, exhale for the next.",
      cues: ["Weight on the shoulders, never the neck.", "Reach the top leg to the ceiling."],
      mistakes: ["Rolling onto the neck.", "Legs falling out of line."],
      safety: INVERSION_SAFETY_EN,
      mod: "Practise Roll Over and Scissors separately first."
    }, {
      title: "Equilibrio controlado",
      reps: "3 con cada pierna",
      start: "Boca arriba, lleva las piernas por encima de la cabeza con los pies hacia la esterilla.",
      steps: ["Sujeta un tobillo y eleva la otra pierna hacia el techo.", "Cambia de pierna en una tijera controlada.", "Desenr\xF3llate a trav\xE9s de la columna."],
      breath: "Inhala en un cambio, exhala en el siguiente.",
      cues: ["Peso en los hombros, nunca en el cuello.", "Alarga la pierna de arriba hacia el techo."],
      mistakes: ["Rodar hasta el cuello.", "Desalinear las piernas."],
      safety: INVERSION_SAFETY_ES,
      mod: "Practica primero Roll Over y Tijeras por separado."
    }),
    x(34, "The Push Up", 50, 3, [46, 68, 60, 74, 100, 84, 128, 92, 156, 100, 129, 93, 157, 101, 72, 88, 60, 102], {
      title: "Push Up",
      reps: "3 times",
      start: "Stand tall, feet together, arms reaching up.",
      steps: ["Roll down until the hands touch the mat.", "Walk the hands out to a plank.", "Do three push-ups with the elbows close to the body.", "Walk the hands back and roll up to standing."],
      breath: "Exhale to roll down, inhale to walk out, exhale on each push.",
      cues: ["The body moves as one long line.", "Elbows skim the ribs."],
      mistakes: ["Hips sagging.", "Elbows flaring out."],
      safety: "Protect the wrists; avoid with shoulder injury.",
      mod: "Push up from the knees."
    }, {
      title: "Flexi\xF3n de brazos (Push Up)",
      reps: "3 veces",
      start: "De pie, erguido, pies juntos, brazos hacia arriba.",
      steps: ["Desenr\xF3llate hasta tocar la esterilla con las manos.", "Camina con las manos hasta la plancha.", "Haz tres flexiones con los codos pegados al cuerpo.", "Vuelve caminando con las manos y enr\xF3llate hasta estar de pie."],
      breath: "Exhala al bajar, inhala al caminar hacia delante, exhala en cada flexi\xF3n.",
      cues: ["El cuerpo se mueve como una l\xEDnea larga.", "Los codos rozan las costillas."],
      mistakes: ["Dejar caer las caderas.", "Abrir los codos hacia fuera."],
      safety: "Protege las mu\xF1ecas; ev\xEDtalo con lesiones de hombro.",
      mod: "Haz las flexiones apoyando las rodillas."
    })
  ];
  var BY_N = Object.fromEntries(EXERCISES.map((e) => [e.n, e]));

  // ../mat/src/lesson.ts
  var SUP = [40, 98, 52, 100, 92, 100, 120, 100, 148, 100, 121, 101, 149, 101, 72, 102, 92, 102];
  var SUP_ARMS = [40, 98, 52, 100, 92, 100, 120, 100, 148, 100, 121, 101, 149, 101, 34, 100, 16, 100];
  var SUP_LEGS = [40, 98, 52, 100, 92, 100, 94, 72, 96, 44, 95, 73, 97, 45, 72, 102, 92, 102];
  var TABLE = [52, 84, 62, 90, 100, 100, 96, 74, 116, 72, 97, 75, 117, 73, 80, 80, 96, 74];
  var SEAT = [84, 50, 82, 62, 80, 100, 108, 100, 136, 100, 109, 101, 137, 101, 100, 62, 118, 62];
  var ROLLED = [50, 96, 62, 98, 86, 82, 72, 68, 90, 60, 74, 70, 92, 62, 72, 74, 86, 66];
  var PRONE = [40, 100, 52, 102, 92, 102, 120, 102, 148, 102, 121, 103, 149, 103, 36, 103, 20, 103];
  var PRONE_H = [40, 100, 52, 102, 92, 102, 120, 102, 148, 102, 121, 103, 149, 103, 56, 94, 54, 104];
  var PRONE_F = [52, 76, 64, 84, 100, 98, 126, 100, 154, 100, 128, 101, 156, 101, 64, 102, 46, 102];
  var SIDE = [40, 84, 54, 96, 94, 98, 120, 100, 146, 100, 121, 101, 147, 101, 44, 102, 40, 86];
  var SHOULDER = [58, 100, 70, 100, 76, 66, 72, 40, 68, 14, 73, 41, 69, 15, 88, 90, 80, 70];
  var PLANK = [48, 58, 60, 64, 100, 78, 128, 88, 156, 98, 129, 89, 157, 99, 60, 84, 60, 102];
  var L = (en, es) => ({ en, es });
  var LESSONS = {
    1: {
      a: SUP,
      b: null,
      hold: "pump",
      cycles: 10,
      inOnGo: true,
      go: L("Pump the arms", "Bombea los brazos"),
      back: L("Keep pumping", "Sigue bombeando"),
      focus: L("Builds abdominal endurance and links the breath to effort.", "Desarrolla resistencia abdominal y une la respiraci\xF3n al esfuerzo."),
      feel: L("Warmth in the deep abdominals, arms working lightly, neck relaxed.", "Calor en el abdomen profundo, brazos trabajando suave, cuello relajado.")
    },
    2: {
      a: SUP_ARMS,
      b: null,
      inOnGo: false,
      go: L("Roll up and reach", "Enr\xF3llate y alcanza"),
      back: L("Roll down slowly", "Desenr\xF3llate despacio"),
      focus: L("Spinal articulation and abdominal strength through the full range.", "Articulaci\xF3n de la columna y fuerza abdominal en todo el recorrido."),
      feel: L("Each vertebra lifting and lowering in turn, a stretch behind the legs.", "Cada v\xE9rtebra subiendo y bajando por turnos, estiramiento detr\xE1s de las piernas.")
    },
    3: {
      a: SUP_LEGS,
      b: null,
      inOnGo: true,
      go: L("Legs over", "Piernas por encima"),
      back: L("Roll down", "Desenr\xF3llate"),
      focus: L("Spinal flexibility and control of the lower abdominals.", "Flexibilidad de la columna y control del abdomen bajo."),
      feel: L("Weight on the shoulder blades, a stretch through the back.", "Peso en las esc\xE1pulas, estiramiento a lo largo de la espalda.")
    },
    4: {
      a: [40, 98, 52, 100, 92, 100, 94, 72, 96, 44, 120, 100, 148, 100, 72, 102, 90, 102],
      b: [40, 98, 52, 100, 92, 100, 112, 80, 130, 62, 120, 100, 148, 100, 72, 102, 90, 102],
      inOnGo: true,
      go: L("Cross and circle down", "Cruza y baja en c\xEDrculo"),
      back: L("Circle up", "Sube en c\xEDrculo"),
      focus: L("Hip mobility with a stable pelvis.", "Movilidad de cadera con la pelvis estable."),
      feel: L("The leg moving freely while the pelvis stays heavy.", "La pierna movi\xE9ndose libre mientras la pelvis pesa.")
    },
    5: {
      a: [],
      b: ROLLED,
      aIsKey: true,
      inOnGo: true,
      go: L("Roll back", "Rueda atr\xE1s"),
      back: L("Roll up and balance", "Sube y equil\xEDbrate"),
      focus: L("Abdominal control, balance and a massage for the spine.", "Control abdominal, equilibrio y un masaje para la columna."),
      feel: L("A smooth, round rocking along the spine.", "Un balanceo suave y redondo a lo largo de la columna.")
    },
    6: {
      a: [],
      b: [52, 84, 62, 90, 100, 100, 128, 92, 156, 84, 90, 72, 112, 74, 76, 80, 90, 72],
      aIsKey: true,
      inOnGo: true,
      go: L("Switch", "Cambia"),
      back: L("Switch", "Cambia"),
      focus: L("Abdominal stability while the legs move; coordination.", "Estabilidad abdominal mientras se mueven las piernas; coordinaci\xF3n."),
      feel: L("A quiet, lifted torso and legs pulling long.", "Tronco quieto y elevado, piernas alarg\xE1ndose.")
    },
    7: {
      a: TABLE,
      b: null,
      inOnGo: true,
      go: L("Reach long", "Alarga"),
      back: L("Circle and hug", "Rodea y abraza"),
      focus: L("Core strength while the arms and legs move away from the center.", "Fuerza del centro mientras brazos y piernas se alejan."),
      feel: L("The abdominals holding the curl as you stretch two ways.", "El abdomen sosteniendo la curva mientras te estiras en dos direcciones.")
    },
    8: {
      a: SEAT,
      b: null,
      inOnGo: false,
      go: L("Round forward", "Redondea hacia delante"),
      back: L("Stack up tall", "Apila y crece"),
      focus: L("Spinal flexion and articulation; lengthens the back.", "Flexi\xF3n y articulaci\xF3n de la columna; alarga la espalda."),
      feel: L("Lifting up and over, a stretch along the whole spine.", "Subir y curvarte por encima, estiramiento de toda la columna.")
    },
    9: {
      a: [],
      b: [50, 96, 62, 98, 86, 82, 74, 60, 64, 38, 76, 61, 66, 39, 72, 72, 64, 42],
      aIsKey: true,
      inOnGo: true,
      go: L("Roll back", "Rueda atr\xE1s"),
      back: L("Roll up and balance", "Sube y equil\xEDbrate"),
      focus: L("Balance and abdominal control in a wide shape.", "Equilibrio y control abdominal con las piernas abiertas."),
      feel: L("Long legs anchored in your hands, a round rolling spine.", "Piernas largas sujetas por las manos, columna redonda rodando.")
    },
    10: {
      a: SUP_LEGS,
      b: [40, 98, 52, 100, 90, 100, 112, 80, 132, 62, 113, 81, 133, 63, 70, 102, 88, 102],
      inOnGo: true,
      go: L("Circle down", "Baja en c\xEDrculo"),
      back: L("Circle up", "Sube en c\xEDrculo"),
      focus: L("Oblique control and pelvic stability.", "Control de oblicuos y estabilidad p\xE9lvica."),
      feel: L("The waist working while the shoulders stay heavy.", "La cintura trabajando y los hombros pesados.")
    },
    11: {
      a: [84, 50, 82, 62, 80, 100, 108, 100, 136, 100, 109, 101, 137, 101, 98, 60, 114, 58],
      b: null,
      inOnGo: false,
      go: L("Twist and saw", "Gira y sierra"),
      back: L("Return to center", "Vuelve al centro"),
      focus: L("Spinal rotation and flexion with a hamstring stretch.", "Rotaci\xF3n y flexi\xF3n de columna con estiramiento de isquiotibiales."),
      feel: L("A wringing through the waist and a stretch down the leg.", "Un escurrido en la cintura y estiramiento a lo largo de la pierna.")
    },
    12: {
      a: PRONE_H,
      b: null,
      inOnGo: true,
      go: L("Rise and rock", "Sube y balanc\xE9ate"),
      back: L("Rock back", "Vuelve atr\xE1s"),
      focus: L("Back extensors and holding a long, strong curve.", "Extensores de la espalda y sostener una curva larga y firme."),
      feel: L("The back of the body working, the front of the hips opening.", "La parte posterior trabajando, la parte delantera de la cadera abri\xE9ndose.")
    },
    13: {
      a: PRONE_F,
      b: null,
      inOnGo: true,
      go: L("Kick, kick", "Patada, patada"),
      back: L("Lengthen", "Alarga"),
      focus: L("Hamstrings with a stable, lifted chest.", "Isquiotibiales con el pecho estable y elevado."),
      feel: L("The back of the thigh working, the chest open.", "La parte posterior del muslo trabajando, el pecho abierto.")
    },
    14: {
      a: [50, 96, 62, 98, 100, 100, 128, 102, 156, 102, 129, 103, 157, 103, 76, 90, 96, 92],
      b: null,
      inOnGo: false,
      go: L("Kick three times", "Tres patadas"),
      back: L("Extend and lift", "Extiende y eleva"),
      focus: L("Back extension and shoulder opening.", "Extensi\xF3n de espalda y apertura de hombros."),
      feel: L("The chest opening as the hands reach back.", "El pecho abri\xE9ndose mientras las manos van atr\xE1s.")
    },
    15: {
      a: [40, 98, 52, 100, 92, 100, 120, 100, 148, 100, 121, 101, 149, 101, 44, 90, 36, 96],
      b: null,
      inOnGo: false,
      go: L("Roll up", "Enr\xF3llate"),
      back: L("Roll down", "Desenr\xF3llate"),
      focus: L("Abdominal strength and articulation without help from the arms.", "Fuerza abdominal y articulaci\xF3n sin ayuda de los brazos."),
      feel: L("The belly scooping, the neck long and resting in the hands.", "El abdomen hacia dentro, el cuello largo descansando en las manos.")
    },
    16: {
      a: SHOULDER,
      b: null,
      inOnGo: true,
      go: L("Split", "Abre"),
      back: L("Switch", "Cambia"),
      focus: L("Hip flexibility and control while inverted.", "Flexibilidad de cadera y control invertido."),
      feel: L("Hips supported, legs reaching long.", "Caderas sujetas, piernas alarg\xE1ndose.")
    },
    17: {
      a: SHOULDER,
      b: null,
      inOnGo: true,
      go: L("Pedal", "Pedalea"),
      back: L("Pedal through", "Sigue pedaleando"),
      focus: L("Hip mobility and coordination while inverted.", "Movilidad de cadera y coordinaci\xF3n invertido."),
      feel: L("A long reach of the leg, steady hips.", "Una pierna larga que alcanza, caderas estables.")
    },
    18: {
      a: [40, 100, 52, 100, 92, 74, 118, 72, 120, 100, 119, 73, 121, 101, 70, 94, 88, 80],
      b: null,
      inOnGo: true,
      go: L("Kick up", "Patea arriba"),
      back: L("Lower", "Baja"),
      focus: L("Glutes and hamstrings; pelvic stability on one leg.", "Gl\xFAteos e isquiotibiales; estabilidad p\xE9lvica sobre una pierna."),
      feel: L("The supporting leg and seat working, hips level.", "La pierna de apoyo y los gl\xFAteos trabajando, caderas niveladas.")
    },
    19: {
      a: SEAT,
      b: [84, 50, 82, 62, 80, 100, 108, 100, 136, 100, 109, 101, 137, 101, 68, 64, 54, 66],
      inOnGo: false,
      go: L("Twist", "Gira"),
      back: L("Return", "Vuelve"),
      focus: L("Spinal rotation while sitting tall.", "Rotaci\xF3n de columna sentado erguido."),
      feel: L("Growing taller as you turn.", "Crecer mientras giras.")
    },
    20: {
      a: SUP_LEGS,
      b: null,
      inOnGo: true,
      go: L("Over and up", "Por encima y arriba"),
      back: L("Roll down", "Desenr\xF3llate"),
      focus: L("Abdominal control and shoulder strength.", "Control abdominal y fuerza de hombros."),
      feel: L("The body reaching up like a spear, arms pressing.", "El cuerpo hacia arriba como una lanza, brazos presionando.")
    },
    21: {
      a: SIDE,
      b: null,
      inOnGo: true,
      go: L("Kick forward", "Patada al frente"),
      back: L("Sweep back", "Lleva atr\xE1s"),
      focus: L("Hip mobility with a still torso.", "Movilidad de cadera con el tronco quieto."),
      feel: L("Waist lifted, the leg swinging freely.", "Cintura elevada, la pierna oscilando libre.")
    },
    22: {
      a: [40, 98, 52, 100, 92, 100, 116, 82, 136, 64, 117, 83, 137, 65, 34, 100, 16, 100],
      b: null,
      inOnGo: false,
      go: L("Roll up to the V", "Sube a la V"),
      back: L("Roll down", "Desenr\xF3llate"),
      focus: L("Balance, abdominal strength and control.", "Equilibrio, fuerza abdominal y control."),
      feel: L("A lifted chest and floating legs.", "Pecho elevado y piernas que flotan.")
    },
    23: {
      a: [],
      b: [62, 66, 70, 76, 90, 100, 114, 94, 140, 96, 115, 95, 141, 97, 60, 90, 52, 102],
      aIsKey: true,
      inOnGo: true,
      go: L("Circle down", "Baja en c\xEDrculo"),
      back: L("Circle up", "Sube en c\xEDrculo"),
      focus: L("Obliques and control of the legs.", "Oblicuos y control de las piernas."),
      feel: L("The chest lifted while the legs circle.", "El pecho elevado mientras las piernas dibujan el c\xEDrculo.")
    },
    24: {
      a: PRONE,
      b: null,
      hold: "flutter",
      cycles: 4,
      inOnGo: true,
      go: L("Swim", "Nada"),
      back: L("Keep swimming", "Sigue nadando"),
      focus: L("Back extensors and cross-body coordination.", "Extensores de la espalda y coordinaci\xF3n cruzada."),
      feel: L("A long reach of arms and legs, a light quick flutter.", "Brazos y piernas largos, un aleteo ligero y r\xE1pido.")
    },
    25: {
      a: PLANK,
      b: null,
      inOnGo: true,
      go: L("Lift the leg", "Eleva la pierna"),
      back: L("Lower", "Baja"),
      focus: L("Shoulder and core stability in plank.", "Estabilidad de hombros y centro en plancha."),
      feel: L("The body in one line, the back of the leg working.", "El cuerpo en una l\xEDnea, la parte posterior de la pierna trabajando.")
    },
    26: {
      a: [48, 62, 60, 66, 100, 78, 128, 88, 156, 98, 129, 89, 157, 99, 60, 84, 60, 102],
      b: null,
      inOnGo: true,
      go: L("Kick up", "Patea arriba"),
      back: L("Lower", "Baja"),
      focus: L("Strength along the back of the body and the shoulders.", "Fuerza de la parte posterior del cuerpo y los hombros."),
      feel: L("Hips high, chest open.", "Caderas altas, pecho abierto.")
    },
    27: {
      a: [70, 42, 76, 54, 96, 74, 118, 82, 140, 94, 100, 100, 124, 102, 66, 78, 58, 102],
      b: null,
      inOnGo: true,
      go: L("Kick forward", "Patada al frente"),
      back: L("Swing back", "Lleva atr\xE1s"),
      focus: L("Side-body strength and balance.", "Fuerza lateral y equilibrio."),
      feel: L("Waist lifted, supporting arm strong.", "Cintura elevada, brazo de apoyo firme.")
    },
    28: {
      a: [62, 62, 62, 74, 96, 100, 124, 102, 152, 104, 125, 103, 153, 105, 62, 88, 62, 104],
      b: null,
      inOnGo: true,
      go: L("Lift up", "Sube"),
      back: L("Lower", "Baja"),
      focus: L("Lateral strength of the trunk and shoulders.", "Fuerza lateral del tronco y los hombros."),
      feel: L("An arch along the side of the body.", "Un arco a lo largo del lateral del cuerpo.")
    },
    29: {
      a: [84, 50, 82, 62, 80, 100, 108, 100, 136, 100, 109, 101, 137, 101, 80, 82, 78, 100],
      b: null,
      inOnGo: false,
      go: L("Roll back, roll up", "Rueda atr\xE1s y sube"),
      back: L("Lower and fold", "Baja y pli\xE9gate"),
      focus: L("Flow, control and coordination.", "Fluidez, control y coordinaci\xF3n."),
      feel: L("One smooth, continuous movement.", "Un movimiento suave y continuo.")
    },
    30: {
      a: [],
      b: ROLLED,
      aIsKey: true,
      inOnGo: true,
      go: L("Roll back", "Rueda atr\xE1s"),
      back: L("Roll up", "Sube"),
      focus: L("Abdominal control and playful balance.", "Control abdominal y equilibrio juguet\xF3n."),
      feel: L("A round shape and light clapping feet.", "Forma redonda y pies que aplauden ligeros.")
    },
    31: {
      a: [],
      b: [84, 100, 92, 92, 106, 74, 120, 92, 132, 96, 121, 93, 133, 97, 100, 92, 110, 100],
      aIsKey: true,
      inOnGo: false,
      go: L("Roll forward", "Rueda adelante"),
      back: L("Roll back", "Rueda atr\xE1s"),
      focus: L("Spinal flexion and control.", "Flexi\xF3n de columna y control."),
      feel: L("A compact ball shape.", "Una forma de bola compacta.")
    },
    32: {
      a: [40, 100, 52, 102, 92, 102, 118, 102, 106, 78, 119, 103, 107, 79, 74, 96, 102, 82],
      b: null,
      inOnGo: true,
      go: L("Lift into the bow", "Sube al arco"),
      back: L("Rock forward", "Balanc\xE9ate adelante"),
      focus: L("Back extension and opening the front of the body.", "Extensi\xF3n de espalda y apertura de la parte delantera."),
      feel: L("Chest and thighs lifting, the breath rocking you.", "Pecho y muslos subiendo, la respiraci\xF3n balance\xE1ndote.")
    },
    33: {
      a: [62, 98, 74, 100, 78, 62, 56, 70, 34, 84, 57, 71, 35, 85, 54, 90, 38, 84],
      b: null,
      inOnGo: true,
      go: L("Lift one leg", "Eleva una pierna"),
      back: L("Switch", "Cambia"),
      focus: L("Balance and control while inverted.", "Equilibrio y control invertido."),
      feel: L("Weight on the shoulders, a long top leg.", "Peso en los hombros, pierna de arriba larga.")
    },
    34: {
      a: PLANK,
      b: [46, 80, 60, 86, 100, 92, 128, 96, 156, 100, 129, 97, 157, 101, 76, 96, 60, 104],
      inOnGo: true,
      go: L("Bend the elbows", "Flexiona los codos"),
      back: L("Push up", "Empuja arriba"),
      focus: L("Upper-body strength with a stable trunk.", "Fuerza del tren superior con el tronco estable."),
      feel: L("The body moving as one plank.", "El cuerpo movi\xE9ndose como una sola plancha.")
    }
  };

  // entry.ts
  window.PILATES = { EXERCISES, LESSONS };
})();
