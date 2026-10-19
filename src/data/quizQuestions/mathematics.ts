import type { QuizQuestion } from "@/data/quizTypes";

export const mathematicsQuestions: QuizQuestion[] = [
  {
    id: "math-01",
    collectionId: "mathematics",
    question: "¿Qué postula la Ley de De Morgan para la negación de una disyunción lógica en álgebra de Boole?",
    options: [
      "$\\neg (A \\lor B) \\iff \\neg A \\land \\neg B$",
      "$\\neg (A \\lor B) \\iff \\neg A \\lor \\neg B$",
      "$\\neg (A \\land B) \\iff \\neg A \\land \\neg B$",
      "$\\neg (A \\lor B) \\iff A \\land B$"
    ],
    correctAnswerIndex: 0,
    explanation: "Las leyes de De Morgan establecen la dualidad entre conjunción y disyunción: la negación de la disyunción es la conjunción de las negaciones ($\\neg(A \\lor B) \\iff \\neg A \\land \\neg B$) y la negación de la conjunción es la disyunción de las negaciones.",
    topic: "Lógica y Álgebra Booleana",
    difficulty: "básico"
  },
  {
    id: "math-02",
    collectionId: "mathematics",
    question: "Si un conjunto finito $S$ posee cardinalidad $|S| = n$, ¿cuál es la cardinalidad de su conjunto potencia (Power Set) $\\mathcal{P}(S)$?",
    options: [
      "$n!$",
      "$2^n$",
      "$n^2$",
      "$\\binom{n}{2}$"
    ],
    correctAnswerIndex: 1,
    explanation: "El conjunto potencia contiene todos los subconjuntos posibles de $S$. Dado que cada uno de los $n$ elementos tiene exactamente dos opciones (pertenecer o no pertenecer al subconjunto), por el principio de multiplicación existen $2^n$ subconjuntos posibles.",
    topic: "Teoría de Conjuntos",
    difficulty: "básico"
  },
  {
    id: "math-03",
    collectionId: "mathematics",
    question: "En teoría de números, ¿qué calcula el Algoritmo de Euclides Extendido más allá del Máximo Común Divisor (MCD) $\\gcd(a, b)$?",
    options: [
      "Los factores primos exclusivos de la factorización canónica de $a$ y $b$.",
      "Los coeficientes enteros de Bézout $x$ e $y$ tales que satisfacen la identidad diofántica lineal $a \\cdot x + b \\cdot y = \\gcd(a, b)$.",
      "El menor número entero coprimo con $a \\cdot b$ en tiempo $O(1)$.",
      "La transformada rápida de Fourier modular aplicada a $a$ y $b$."
    ],
    correctAnswerIndex: 1,
    explanation: "El Algoritmo de Euclides Extendido computa tanto $\\gcd(a, b)$ como los enteros $x, y$ de la identidad de Bézout, lo que resulta fundamental para calcular el inverso modular multiplicativo en criptografía RSA y curvas elípticas.",
    topic: "Teoría de Números",
    difficulty: "intermedio"
  },
  {
    id: "math-04",
    collectionId: "mathematics",
    question: "Bajo qué condición matemática existe el inverso multiplicativo de un entero $a$ módulo $m$ ($a^{-1} \\pmod m$ tal que $a \\cdot a^{-1} \\equiv 1 \\pmod m$)?",
    options: [
      "$a$ debe ser estrictamente mayor que $m$.",
      "$a$ y $m$ deben ser coprimos, es decir, $\\gcd(a, m) = 1$.",
      "$m$ debe ser obligatoriamente una potencia de dos ($2^k$).",
      "$a + m$ debe ser un número par divisible por 4."
    ],
    correctAnswerIndex: 1,
    explanation: "Por la identidad de Bézout, $a \\cdot x + m \\cdot y = \\gcd(a, m)$. Tomando módulo $m$, tenemos $a \\cdot x \\equiv \\gcd(a, m) \\pmod m$. Para que esto sea congruente con 1, el $\\gcd(a, m)$ debe ser estrictamente 1.",
    topic: "Aritmética Modular",
    difficulty: "intermedio"
  },
  {
    id: "math-05",
    collectionId: "mathematics",
    question: "¿Qué enuncia el Pequeño Teorema de Fermat para un número primo $p$ y un entero $a$ que no es divisible por $p$?",
    options: [
      "$a^{p-1} \\equiv 1 \\pmod p$",
      "$a^p \\equiv p \\pmod a$",
      "$a^{p+1} \\equiv 0 \\pmod p$",
      "$p^{a-1} \\equiv a \\pmod p$"
    ],
    correctAnswerIndex: 0,
    explanation: "El Pequeño Teorema de Fermat establece que si $p$ es primo y $\\gcd(a, p) = 1$, entonces $a^{p-1} \\equiv 1 \\pmod p$. Multiplicando por $a$, $a^p \\equiv a \\pmod p$ para todo entero $a$. Es la base del test de primalidad de Fermat.",
    topic: "Teoría de Números",
    difficulty: "intermedio"
  },
  {
    id: "math-06",
    collectionId: "mathematics",
    question: "En combinatoria, ¿cuál es la fórmula de recurrencia que gobierna la construcción del Triángulo de Pascal para los coeficientes binomiales $\\binom{n}{k}$?",
    options: [
      "$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$",
      "$\\binom{n}{k} = \\binom{n-1}{k} \\cdot \\binom{n}{k-1}$",
      "$\\binom{n}{k} = \\binom{n-2}{k} + 2\\binom{n-1}{k}$",
      "$\\binom{n}{k} = \\frac{n}{k} \\binom{n}{k-1}$"
    ],
    correctAnswerIndex: 0,
    explanation: "La identidad de Pascal $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$ refleja la elección combinatoria de considerar un elemento distinguido: o bien se incluye en el grupo (quedando elegir $k-1$ de los $n-1$), o se excluye (eligiendo $k$ de los $n-1$).",
    topic: "Combinatoria",
    difficulty: "básico"
  },
  {
    id: "math-07",
    collectionId: "mathematics",
    question: "En teoría de grafos, ¿qué establece el Lema del Apretón de Manos (Handshaking Lemma) para cualquier grafo finito no dirigido $G = (V, E)$?",
    options: [
      "La suma de los grados de todos los vértices es igual exactamente al doble del número de aristas: $\\sum_{v \\in V} \\deg(v) = 2|E|$.",
      "El número de vértices con grado par debe ser siempre mayor que el número de vértices con grado impar.",
      "Todo grafo conexo posee un número primo de caminos hamiltonianos.",
      "El diámetro del grafo es menor o igual a $\\log_2 |V|$."
    ],
    correctAnswerIndex: 0,
    explanation: "Dado que cada arista incide en exactamente dos vértices y contribuye con 1 al grado de cada uno, la suma de los grados cuenta cada arista dos veces. Un corolario directo es que todo grafo contiene un número par de vértices con grado impar.",
    topic: "Teoría de Grafos",
    difficulty: "intermedio"
  },
  {
    id: "math-08",
    collectionId: "mathematics",
    question: "¿Qué condición necesaria y suficiente demostró Leonhard Euler para que un grafo conexo no dirigido posea un Ciclo Euleriano (un circuito cerrado que recorre cada arista exactamente una vez)?",
    options: [
      "Todos los vértices del grafo deben tener un grado estrictamente par.",
      "El grafo debe ser un árbol binario completo sin ciclos impares.",
      "El grafo debe tener exactamente dos vértices con grado impar.",
      "El número de vértices debe ser una potencia de 2."
    ],
    correctAnswerIndex: 0,
    explanation: "Euler demostró que para entrar y salir de cada vértice sin repetir aristas, cada vértice visitado debe tener tantas aristas de entrada como de salida, lo que exige que todos los vértices tengan grado par en un grafo no dirigido conexo.",
    topic: "Teoría de Grafos",
    difficulty: "intermedio"
  },
  {
    id: "math-09",
    collectionId: "mathematics",
    question: "En álgebra lineal, ¿cuál es el significado geométrico del valor absoluto del determinante de una matriz cuadrada de orden $3 \\times 3$, $|\\det(A)|$?",
    options: [
      "La suma de las longitudes euclidianas de los tres vectores columna.",
      "El volumen del paralelepípedo orientado formado por los tres vectores columna (o fila) en el espacio tridimensional $\\mathbb{R}^3$.",
      "El ángulo de rotación entre el eje X y el eigenvector principal.",
      "La distancia de Chebyshev al plano nulo ortogonal."
    ],
    correctAnswerIndex: 1,
    explanation: "Geométricamente, el determinante representa el factor de escala de volumen introducido por la transformación lineal. En 2D representa el área del paralelogramo y en 3D el volumen del paralelepípedo. Un determinante nulo indica colapso a una dimensión menor.",
    topic: "Álgebra Lineal",
    difficulty: "intermedio"
  },
  {
    id: "math-10",
    collectionId: "mathematics",
    question: "Para dos vectores unitarios normalizados $\\mathbf{u}$ y $\\mathbf{v}$, ¿a qué equivale directamente su producto punto (dot product) $\\mathbf{u} \\cdot \\mathbf{v}$?",
    options: [
      "A la distancia euclidiana al cuadrado entre ambos vectores.",
      "Al coseno del ángulo $\\theta$ formado entre ambos vectores (Similitud Coseno).",
      "Al seno del ángulo $\\theta$ correspondiente al área de proyección ortogonal.",
      "A la norma infinita del vector residual normalizado."
    ],
    correctAnswerIndex: 1,
    explanation: "Dado que $\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\| \\|\\mathbf{v}\\| \\cos(\\theta)$, si $\\|\\mathbf{u}\\| = \\|\\mathbf{v}\\| = 1$, entonces $\\mathbf{u} \\cdot \\mathbf{v} = \\cos(\\theta)$. Es la métrica estándar de similitud semántica en embeddings de procesamiento de lenguaje natural y motores de búsqueda vectorial.",
    topic: "Álgebra Lineal Computacional",
    difficulty: "básico"
  },
  {
    id: "math-11",
    collectionId: "mathematics",
    question: "Si una matriz cuadrada $A$ de tamaño $n \\times n$ tiene un autovalor (eigenvalue) $\\lambda$ con autovector asociado $\\mathbf{v} \\neq \\mathbf{0}$, ¿qué ecuación matricial se satisface por definición?",
    options: [
      "$A \\mathbf{v} = \\lambda \\mathbf{v}$",
      "$A \\mathbf{v} = \\mathbf{v}^T \\lambda$",
      "$A^T A = \\lambda I$",
      "$\\det(A - \\mathbf{v} I) = \\lambda$"
    ],
    correctAnswerIndex: 0,
    explanation: "Un eigenvector $\\mathbf{v}$ es un vector cuya dirección no se altera bajo la transformación lineal $A$, siendo únicamente escalado por el factor $\\lambda$, lo que equivale algebraicamente a $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ con $\\det(A - \\lambda I) = 0$.",
    topic: "Álgebra Lineal",
    difficulty: "intermedio"
  },
  {
    id: "math-12",
    collectionId: "mathematics",
    question: "En teoría de la probabilidad, ¿cuál es el enunciado formal del Teorema de Bayes para calcular la probabilidad a posteriori $P(A|B)$?",
    options: [
      "$P(A|B) = \\frac{P(B|A) P(A)}{P(B)}$",
      "$P(A|B) = \\frac{P(A \\cup B)}{P(A) P(B)}$",
      "$P(A|B) = P(A) - P(B) + P(A \\cap B)$",
      "$P(A|B) = \\frac{P(A) + P(B)}{1 - P(A \\cap B)}$"
    ],
    correctAnswerIndex: 0,
    explanation: "El Teorema de Bayes actualiza la creencia previa $P(A)$ ante la nueva evidencia observada $B$ multiplicando por la verosimilitud (likelihood) $P(B|A)$ y normalizando por la probabilidad marginal de la evidencia $P(B)$.",
    topic: "Probabilidad y Estadística",
    difficulty: "básico"
  },
  {
    id: "math-13",
    collectionId: "mathematics",
    question: "¿Qué define formalmente a la Varianza $\\mathrm{Var}(X)$ de una variable aleatoria $X$ con esperanza matemática $\\mu = E[X]$?",
    options: [
      "$\\mathrm{Var}(X) = E[X] - \\min(X)$",
      "$\\mathrm{Var}(X) = E[(X - \\mu)^2] = E[X^2] - (E[X])^2$",
      "$\\mathrm{Var}(X) = \\frac{E[X]}{\\sqrt{n}}$",
      "$\\mathrm{Var}(X) = \\int_{-\\infty}^\\infty (x - \\mu) dx$"
    ],
    correctAnswerIndex: 1,
    explanation: "La varianza mide la dispersión cuadrática esperada respecto a la media: $\\mathrm{Var}(X) = E[(X - E[X])^2]$. Desarrollando algebraicamente resulta en la conocida identidad computacional $E[X^2] - (E[X])^2$.",
    topic: "Probabilidad y Estadística",
    difficulty: "intermedio"
  },
  {
    id: "math-14",
    collectionId: "mathematics",
    question: "¿Qué garantiza el Teorema Central del Límite (TCL) para la suma o media muestral de $n$ variables aleatorias independientes e idénticamente distribuidas (i.i.d.) con media $\\mu$ y varianza finita $\\sigma^2$?",
    options: [
      "Que todas las variables individuales convergen a valores enteros deterministas.",
      "Que cuando $n \\to \\infty$, la distribución de la media muestral estandarizada $\\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}}$ converge en distribución a una Distribución Normal estándar $\\mathcal{N}(0, 1)$, independientemente de la forma de la distribución original.",
      "Que la varianza de la suma de variables crece de forma exponencial $O(2^n)$.",
      "Que la mediana de la muestra será exactamente igual a la moda de la población."
    ],
    correctAnswerIndex: 1,
    explanation: "El Teorema Central del Límite es uno de los pilares de la estadística inferencial y el aprendizaje automático, explicando por qué los errores y sumas de múltiples efectos aleatorios independientes tienden naturalmente a una curva gaussiana.",
    topic: "Probabilidad y Estadística",
    difficulty: "intermedio"
  },
  {
    id: "math-15",
    collectionId: "mathematics",
    question: "En cálculo multivariable aplicado a optimización y Machine Learning, ¿qué representa el vector Gradiente $\\nabla f(\\mathbf{x})$ de una función escalar diferenciable $f: \\mathbb{R}^n \\to \\mathbb{R}$?",
    options: [
      "El vector de segundas derivadas cruzadas que cuantifica la curvatura local.",
      "El vector de derivadas parciales que apunta en la dirección de máximo crecimiento instantáneo de la función, cuya magnitud representa la tasa de dicho incremento.",
      "El punto donde la función se anula obligatoriamente satisfaciendo $f(\\mathbf{x}) = 0$.",
      "La proyección ortogonal del hiperplano secante sobre el eje coordenado principal."
    ],
    correctAnswerIndex: 1,
    explanation: "El gradiente $\\nabla f = \\left[ \\frac{\\partial f}{\\partial x_1}, \\dots, \\frac{\\partial f}{\\partial x_n} \\right]^T$ indica la dirección de máxima pendiente positiva. Por eso, los algoritmos de optimización restan el gradiente ($-\\eta \\nabla f$) para descender hacia mínimos locales (Gradient Descent).",
    topic: "Cálculo y Optimización",
    difficulty: "intermedio"
  },
  {
    id: "math-16",
    collectionId: "mathematics",
    question: "¿Qué información fundamental sobre una función multivariable proporciona su Matriz Hessiana $H(f)$ en un punto crítico donde $\\nabla f(\\mathbf{x}) = \\mathbf{0}$?",
    options: [
      "Determina la convexidad local y la naturaleza del punto crítico: si $H$ es definida positiva es un mínimo local, si es definida negativa es un máximo local, y si tiene autovalores de signos mixtos es un punto de silla (saddle point).",
      "Calcula el número de iteraciones requeridas para que el algoritmo converja con tolerancia $\\epsilon = 10^{-6}$.",
      "Permite calcular la integral de línea en torno al borde de Lipschitz del dominio.",
      "Transforma la función no lineal en una distribución discreta de Poisson."
    ],
    correctAnswerIndex: 0,
    explanation: "La matriz Hessiana contiene las segundas derivadas parciales $\\frac{\\partial^2 f}{\\partial x_i \\partial x_j}$. Su espectro de autovalores describe la curvatura local: todos positivos implican cuenco hacia arriba (mínimo), negativos implican cuenco hacia abajo (máximo), y mixtos denotan punto de silla.",
    topic: "Cálculo y Optimización",
    difficulty: "avanzado"
  },
  {
    id: "math-17",
    collectionId: "mathematics",
    question: "¿Cuál es la expresión matemática de la Entropía de Shannon $H(X)$ para una fuente discreta de información con distribución de probabilidad $P(X)$?",
    options: [
      "$H(X) = -\\sum_{x \\in \\mathcal{X}} P(x) \\log_2 P(x)$",
      "$H(X) = \\sum_{x \\in \\mathcal{X}} (P(x))^2$",
      "$H(X) = \\frac{1}{n} \\sum_{i=1}^n \\sqrt{P(x_i)}$",
      "$H(X) = \\prod_{x \\in \\mathcal{X}} \\log_{10}(1 - P(x))$"
    ],
    correctAnswerIndex: 0,
    explanation: "Claude Shannon (1948) definió la entropía de información como la esperanza de la autoinformación ($I(x) = -\\log_2 P(x)$), cuantificando la incertidumbre promedio o la tasa mínima teórica de compresión sin pérdida (en bits) por símbolo.",
    topic: "Teoría de la Información",
    difficulty: "intermedio"
  },
  {
    id: "math-18",
    collectionId: "mathematics",
    question: "En aprendizaje automático, ¿qué mide rigurosamente la Divergencia de Kullback-Leibler (KL Divergence) $D_{KL}(P \\parallel Q)$ entre dos distribuciones de probabilidad $P$ y $Q$?",
    options: [
      "La distancia euclidiana simétrica en el espacio de Hilbert entre las dos funciones.",
      "La cantidad de información o sorpresa adicional que se incurre al codificar eventos muestreados de la distribución real $P$ utilizando un modelo aproximado con distribución $Q$.",
      "La correlación lineal de Pearson normalizada en el intervalo $[-1, 1]$.",
      "El número de puntos donde ambas funciones de densidad de probabilidad se intersecan exactamente."
    ],
    correctAnswerIndex: 1,
    explanation: "$D_{KL}(P \\parallel Q) = \\sum_x P(x) \\log \\frac{P(x)}{Q(x)}$. Es no negativa ($D_{KL} \\ge 0$ por la desigualdad de Gibbs) y asimétrica ($D_{KL}(P \\parallel Q) \\neq D_{KL}(Q \\parallel P)$), constituyendo una pseudo-distancia que sustenta la función de pérdida Cross-Entropy.",
    topic: "Teoría de la Información",
    difficulty: "avanzado"
  },
  {
    id: "math-19",
    collectionId: "mathematics",
    question: "¿Qué establece la Fórmula Poliedral de Euler ($V - E + F = 2$) para cualquier grafo conexo planar?",
    options: [
      "Que el número de vértices ($V$) menos aristas ($E$) más regiones o caras delimitadas ($F$) es invariablemente igual a 2.",
      "Que todo grafo conexo puede ser coloreado con un máximo de 2 colores sin adyacencias idénticas.",
      "Que el número de ciclos independientes es igual al factorial del número de vértices.",
      "Que la densidad del grafo no puede exceder $2V$ aristas bajo ninguna topología."
    ],
    correctAnswerIndex: 0,
    explanation: "La relación de Euler $V - E + F = 2$ es un invariante topológico de grafos planares conexos en el plano (o esfera), del cual se deriva que en cualquier grafo planar simple con $V \\ge 3$, $E \\le 3V - 6$, probando que los grafos planares son inherentemente dispersos.",
    topic: "Matemática Discreta y Topología",
    difficulty: "intermedio"
  },
  {
    id: "math-20",
    collectionId: "mathematics",
    question: "En el sistema criptográfico RSA, si elegimos dos primos gigantes $p$ y $q$ y computamos el módulo $n = p \\cdot q$, ¿cuál es el valor de la función totiente de Euler $\\phi(n)$ utilizada para generar las claves pública ($e$) y privada ($d$)?",
    options: [
      "$\\phi(n) = p + q - 1$",
      "$\\phi(n) = (p - 1)(q - 1)$",
      "$\\phi(n) = \\frac{p \\cdot q}{2}$",
      "$\\phi(n) = p^2 - q^2$"
    ],
    correctAnswerIndex: 1,
    explanation: "Dado que $\\phi$ es multiplicativa y para un primo $p$, $\\phi(p) = p - 1$, para el producto de dos primos coprimos distintos $n = pq$ se cumple que $\\phi(n) = \\phi(p)\\phi(q) = (p - 1)(q - 1)$. La clave privada $d$ satisface $e \\cdot d \\equiv 1 \\pmod{\\phi(n)}$.",
    topic: "Criptografía y Teoría de Números",
    difficulty: "intermedio"
  },
  {
    id: "math-21",
    collectionId: "mathematics",
    question: "¿Qué postula el Principio del Palomar (Pigeonhole Principle) formulado formalmente por Dirichlet?",
    options: [
      "Si $n$ palomas se distribuyen en $k$ casilleros y $n > k$, entonces al menos un casillero debe contener estrictamente $\\lceil n/k \\rceil$ o más palomas.",
      "Todo número entero positivo mayor que 1 puede factorizarse de manera única como producto de primos.",
      "El número de combinaciones de $n$ elementos tomados de $k$ en $k$ es siempre divisible por $k!$.",
      "Una red de comunicaciones con $k$ nodos puede transmitir como máximo $k^2$ paquetes por segundo."
    ],
    correctAnswerIndex: 0,
    explanation: "El principio del palomar garantiza por contradicción que no es posible que todos los casilleros tengan como máximo $\\lfloor (n-1)/k \\rfloor$ objetos sin que la suma sea menor que $n$. Se usa para demostrar colisiones en funciones hash, existencia de subsecuencias monótonas y propiedades combinatorias.",
    topic: "Combinatoria",
    difficulty: "básico"
  },
  {
    id: "math-22",
    collectionId: "mathematics",
    question: "En una relación matemática binaria $\\mathcal{R}$ sobre un conjunto $A$, ¿qué tres propiedades debe satisfacer para ser catalogada como una 'Relación de Equivalencia'?",
    options: [
      "Reflexiva, Simétrica y Transitiva.",
      "Irreflexiva, Antisimétrica y Convexa.",
      "Biyectiva, Inyectiva y Sobreyectiva.",
      "Idempotente, Asociativa y Distributiva."
    ],
    correctAnswerIndex: 0,
    explanation: "Una relación de equivalencia debe cumplir: $\\forall a \\in A, a \\mathcal{R} a$ (reflexiva); si $a \\mathcal{R} b \\implies b \\mathcal{R} a$ (simétrica); y si $a \\mathcal{R} b \\land b \\mathcal{R} c \\implies a \\mathcal{R} c$ (transitiva). Particiona al conjunto $A$ en clases de equivalencia disjuntas.",
    topic: "Teoría de Conjuntos y Relaciones",
    difficulty: "básico"
  },
  {
    id: "math-23",
    collectionId: "mathematics",
    question: "En aritmética modular, ¿qué garantiza el Teorema Chino del Resto (Chinese Remainder Theorem - CRT)?",
    options: [
      "Que todo sistema de congruencias lineales $x \\equiv a_i \\pmod{m_i}$ tiene una solución única módulo $M = \\prod m_i$, siempre que los módulos $m_1, m_2, \\dots, m_k$ sean coprimos dos a dos.",
      "Que cualquier polinomio de grado $n$ tiene exactamente $n$ raíces complejas.",
      "Que el tiempo para calcular matrices modulares se reduce a $O(\\log n)$ usando multiplicación de Strassen.",
      "Que los números primos terminados en 1, 3, 7 y 9 se distribuyen con igual densidad asintótica."
    ],
    correctAnswerIndex: 0,
    explanation: "El CRT permite descomponer cómputos con enteros gigantescos en sistemas de módulos más pequeños e independientes donde $\\gcd(m_i, m_j) = 1$, procesarlos en paralelo y luego reconstruir la solución única módulo el producto total, acelerando la evaluación de RSA.",
    topic: "Aritmética Modular",
    difficulty: "avanzado"
  },
  {
    id: "math-24",
    collectionId: "mathematics",
    question: "¿En qué consiste la Descomposición en Valores Singulares (SVD - Singular Value Decomposition) de una matriz real arbitraria $A$ de dimensiones $m \\times n$?",
    options: [
      "Factorizar $A$ como $A = U \\Sigma V^T$, donde $U$ y $V$ son matrices ortogonales y $\\Sigma$ es una matriz diagonal con los valores singulares ordenados en forma no creciente.",
      "Invertir la matriz sumando la matriz identidad multiplicada por una constante de regularización $\\lambda$.",
      "Separar la matriz en su parte triangular inferior y triangular superior mediante eliminación gaussiana.",
      "Proyectar la matriz en un hipercubo de Hilbert de dimensión infinita."
    ],
    correctAnswerIndex: 0,
    explanation: "SVD descompone cualquier matriz en rotación ($V^T$), escalado ortogonal ($\\Sigma$) y segunda rotación ($U$). Constituye la base teórica de Principal Component Analysis (PCA), compresión de imágenes, filtrado colaborativo en sistemas de recomendación y pseudo-inversas.",
    topic: "Álgebra Lineal Avanzada",
    difficulty: "avanzado"
  },
  {
    id: "math-25",
    collectionId: "mathematics",
    question: "En la geometría de Curvas Elípticas sobre cuerpos finitos $\\mathbb{F}_p$ ($y^2 \\equiv x^3 + ax + b \\pmod p$), ¿qué estructura matemática forman los puntos racionales de la curva junto con el punto del infinito $\\mathcal{O}$?",
    options: [
      "Un Grupo Abeliano (conmutativo) bajo la operación de adición de puntos definida por el método de la cuerda y la tangente.",
      "Un espacio vectorial no lineal de curvatura negativa constante.",
      "Un anillo no conmutativo con divisores de cero periódicos.",
      "Un semigrupo asimétrico sin elemento neutro invertible."
    ],
    correctAnswerIndex: 0,
    explanation: "La suma geométrica de puntos (secante/tangente y reflejo respecto al eje horizontal) satisface cerradura, asociatividad, elemento neutro (el punto en el infinito $\\mathcal{O}$), inversos aditivos y conmutatividad, formando un grupo abeliano finito base de ECDSA y Ed25519.",
    topic: "Criptografía y Curvas Elípticas",
    difficulty: "avanzado"
  },
  {
    id: "math-26",
    collectionId: "mathematics",
    question: "¿Qué cuantifica la 'Desigualdad de Chebyshev' respecto a la probabilidad de que una variable aleatoria $X$ se desvíe de su media $\\mu$ más de $k$ desviaciones estándar $\\sigma$?",
    options: [
      "$P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}$ para cualquier constante $k > 0$, válida para cualquier distribución de probabilidad con varianza finita.",
      "$P(|X - \\mu| \\ge k\\sigma) = e^{-k^2/2}$ exclusivamente para distribuciones continuas.",
      "$P(|X - \\mu| \\ge k\\sigma) \\ge 1 - \\frac{1}{k}$ para variables aleatorias gaussianas.",
      "$P(|X - \\mu| \\ge k\\sigma) = 0$ siempre que $k \\ge 3$."
    ],
    correctAnswerIndex: 0,
    explanation: "La desigualdad de Chebyshev acota superiormente la probabilidad en las colas sin requerir conocer la forma paramétrica de la distribución: por ejemplo, no más de $1/4$ (25%) de los valores pueden diferir de la media en más de 2 desviaciones estándar ($k=2$).",
    topic: "Probabilidad y Estadística",
    difficulty: "intermedio"
  },
  {
    id: "math-27",
    collectionId: "mathematics",
    question: "En combinatoria y probabilidad, ¿qué calcula el 'Principio de Inclusión-Exclusión' para la unión de tres conjuntos finitos $A$, $B$ y $C$?",
    options: [
      "$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$",
      "$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B \\cap C|$",
      "$|A \\cup B \\cup C| = |A \\cap B| + |B \\cap C| + |A \\cap C|$",
      "$|A \\cup B \\cup C| = (|A| \\cdot |B| \\cdot |C|) - (|A \\cap B \\cap C|)$"
    ],
    correctAnswerIndex: 0,
    explanation: "Para calcular el tamaño de la unión sin contar elementos repetidos, se suman los tamaños individuales, se restan las intersecciones de dos en dos (que fueron contadas dos veces) y se suma de nuevo la intersección triple (que fue restada de más).",
    topic: "Combinatoria",
    difficulty: "básico"
  },
  {
    id: "math-28",
    collectionId: "mathematics",
    question: "En optimización convexa, ¿por qué es tan valiosa la propiedad de convexidad para una función objetivo $f: \\mathbb{R}^n \\to \\mathbb{R}$?",
    options: [
      "Porque garantiza que cualquier mínimo local es simultáneamente un mínimo global.",
      "Porque permite resolver la función evaluando únicamente valores impares de entrada.",
      "Porque elimina completamente la necesidad de calcular derivadas numéricas o simbólicas.",
      "Porque asegura que la función oscila en torno a una asíntota senoidal estable."
    ],
    correctAnswerIndex: 0,
    explanation: "En una función convexa ($f(\\theta x + (1-\\theta)y) \\le \\theta f(x) + (1-\\theta)f(y)$ para $\\theta \\in [0, 1]$), el conjunto de nivel inferior es convexo y no existen mínimos locales falsos ni trampas de meseta que atrapen a un algoritmo de optimización.",
    topic: "Optimización Matemática",
    difficulty: "intermedio"
  },
  {
    id: "math-29",
    collectionId: "mathematics",
    question: "¿Qué expresa la 'Regla de la Cadena' del cálculo diferencial en notación matricial (Jacobiana) para la composición de funciones $f(g(\\mathbf{x}))$ en redes neuronales profundas?",
    options: [
      "La matriz Jacobiana de la composición es el producto matricial de las Jacobianas individuales: $J_{f \\circ g}(\\mathbf{x}) = J_f(g(\\mathbf{x})) \\cdot J_g(\\mathbf{x})$.",
      "La Jacobiana de la composición es la suma directa $J_f + J_g$ normalizada por la traza.",
      "Las derivadas cruzadas deben ser forzadas a cero mediante dropout convolucional.",
      "La regla de la cadena solo es válida para funciones polinomiales de grado 1."
    ],
    correctAnswerIndex: 0,
    explanation: "El algoritmo de Backpropagation es una aplicación eficiente de programación dinámica de la regla de la cadena multivariable: propaga gradientes hacia atrás multiplicando sucesivamente por las matrices Jacobianas de cada capa.",
    topic: "Cálculo y Aprendizaje Profundo",
    difficulty: "avanzado"
  },
  {
    id: "math-30",
    collectionId: "mathematics",
    question: "En computación teórica, ¿qué establece la Tesis de Church-Turing?",
    options: [
      "Cualquier función que sea efectivamente computable de manera algorítmica puede ser calculada por una Máquina de Turing (o equivalentemente por el cálculo lambda de Church).",
      "Que ningún algoritmo puede superar una complejidad temporal asintótica de $O(2^N)$.",
      "Que los computadores cuánticos son capaces de resolver problemas NP-Completos en tiempo polinomial estricto.",
      "Que las funciones recursivas requieren compiladores con optimización de cola para ser ejecutadas en hardware Von Neumann."
    ],
    correctAnswerIndex: 0,
    explanation: "La Tesis de Church-Turing postula que la noción intuitiva e informal de 'cálculo algorítmico efectivo' equivale exactamente a la computabilidad formal definida por máquinas de Turing, sistemas Post, funciones recursivas $\\mu$ o $\\lambda$-cálculo.",
    topic: "Computabilidad y Teoría de la Computación",
    difficulty: "intermedio"
  }
];
