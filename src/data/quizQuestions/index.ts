import type { QuizQuestion } from "@/data/quizTypes";
import { expandedCollectionById } from "@/data/expandedCollections";
import { javascriptQuestions } from "./javascript";
import { typescriptQuestions } from "./typescript";
import { pythonQuestions } from "./python";
import { gitQuestions } from "./git";
import { dockerQuestions } from "./docker";
import { reactQuestions } from "./react";
import { cQuestions } from "./c";
import { cppQuestions } from "./cpp";
import { cSharpQuestions } from "./cSharp";
import { goQuestions } from "./go";
import { rustQuestions } from "./rust";
import { javaQuestions } from "./java";
import { kotlinQuestions } from "./kotlin";
import { linuxQuestions } from "./linux";
import { backendQuestions } from "./backend";
import { apisQuestions } from "./apis";
import { nodejsQuestions } from "./nodejs";
import { databasesQuestions } from "./databases";
import { nosqlQuestions } from "./nosql";
import { algorithmsQuestions } from "./algorithms";
import { programmingFundamentalsQuestions } from "./programmingFundamentals";
import { mathematicsQuestions } from "./mathematics";
import { methodologiesQuestions } from "./methodologies";
import { htmlCssQuestions } from "./htmlCss";
import { reactNativeQuestions } from "./reactNative";
import { flutterQuestions } from "./flutter";
import { dartQuestions } from "./dart";
import { awsQuestions } from "./aws";
import { ciCdQuestions } from "./ciCd";
import { deploymentQuestions } from "./deployment";
import { nginxQuestions } from "./nginx";

// Registro extensible de bancos de preguntas explícitas
const explicitQuestionBanks: Record<string, QuizQuestion[]> = {};

/**
 * Registra preguntas específicas para una colección.
 */
export function registerCollectionQuestions(collectionId: string, questions: QuizQuestion[]): void {
  explicitQuestionBanks[collectionId] = questions;
}

// Registro inicial de bancos especializados
registerCollectionQuestions("javascript", javascriptQuestions);
registerCollectionQuestions("typescript", typescriptQuestions);
registerCollectionQuestions("python", pythonQuestions);
registerCollectionQuestions("git", gitQuestions);
registerCollectionQuestions("docker", dockerQuestions);
registerCollectionQuestions("react", reactQuestions);
registerCollectionQuestions("c", cQuestions);
registerCollectionQuestions("cpp", cppQuestions);
registerCollectionQuestions("c-sharp", cSharpQuestions);
registerCollectionQuestions("go", goQuestions);
registerCollectionQuestions("rust", rustQuestions);
registerCollectionQuestions("java", javaQuestions);
registerCollectionQuestions("kotlin", kotlinQuestions);
registerCollectionQuestions("linux", linuxQuestions);
registerCollectionQuestions("backend", backendQuestions);
registerCollectionQuestions("apis", apisQuestions);
registerCollectionQuestions("nodejs", nodejsQuestions);
registerCollectionQuestions("databases", databasesQuestions);
registerCollectionQuestions("nosql", nosqlQuestions);
registerCollectionQuestions("algorithms", algorithmsQuestions);
registerCollectionQuestions("programming-fundamentals", programmingFundamentalsQuestions);
registerCollectionQuestions("mathematics", mathematicsQuestions);
registerCollectionQuestions("methodologies", methodologiesQuestions);
registerCollectionQuestions("html-css", htmlCssQuestions);
registerCollectionQuestions("react-native", reactNativeQuestions);
registerCollectionQuestions("flutter", flutterQuestions);
registerCollectionQuestions("dart", dartQuestions);
registerCollectionQuestions("aws", awsQuestions);
registerCollectionQuestions("ci-cd", ciCdQuestions);
registerCollectionQuestions("deployment", deploymentQuestions);
registerCollectionQuestions("nginx", nginxQuestions);

/**
 * Obtiene el banco de preguntas completo para una colección.
 * Si la colección aún no tiene preguntas artesanales, sintetiza preguntas técnicas
 * deterministas a partir de sus conceptos pedagógicos, garantizando que todas
 * las colecciones cuenten con un banco de más de 20 preguntas desde el día 1.
 */
export function getQuestionsForCollection(collectionId: string): QuizQuestion[] {
  if (explicitQuestionBanks[collectionId] && explicitQuestionBanks[collectionId]!.length >= 15) {
    return explicitQuestionBanks[collectionId]!;
  }

  const collection = expandedCollectionById.get(collectionId);
  if (!collection) return [];

  const generatedQuestions: QuizQuestion[] = [];
  const concepts = collection.concepts;

  concepts.forEach((concept, idx) => {
    // Generador de pregunta sobre definición y objetivo
    const wrongConcepts = concepts.filter((c) => c.title !== concept.title);
    const distractor1 = wrongConcepts[idx % wrongConcepts.length]?.description ?? "Un mecanismo alternativo de configuración estática.";
    const distractor2 = wrongConcepts[(idx + 1) % wrongConcepts.length]?.description ?? "Un protocolo secundario de comunicación.";
    const distractor3 = wrongConcepts[(idx + 2) % wrongConcepts.length]?.description ?? "Una directiva de compilación para optimización en memoria.";

    const options: [string, string, string, string] = [
      concept.description,
      distractor1,
      distractor2,
      distractor3,
    ];

    // Mezcla determinista de opciones según el índice para evitar que la respuesta siempre sea la 0
    const correctPos = (idx % 4) as 0 | 1 | 2 | 3;
    const temp = options[0]!;
    options[0] = options[correctPos]!;
    options[correctPos] = temp;

    generatedQuestions.push({
      id: `${collectionId}-q-def-${idx}`,
      collectionId,
      question: `¿Cuál es la función y mecanismo principal de "${concept.title}" en ${collection.title}?`,
      options,
      correctAnswerIndex: correctPos,
      explanation: `${concept.title}: ${concept.description} Pertenece a la sección "${concept.section}" y la familia técnica "${concept.family}".`,
      topic: concept.section,
      difficulty: idx % 3 === 0 ? "básico" : idx % 3 === 1 ? "intermedio" : "avanzado",
    });

    // Si tiene escena técnica con outcome o código, generar pregunta sobre el resultado
    if (concept.scene?.outcome) {
      const outcomeCorrect = concept.scene.outcome;
      const otherOutcomes = concepts.filter((c) => c.scene?.outcome && c.scene.outcome !== outcomeCorrect);
      const outDistractor1 = otherOutcomes[0]?.scene?.outcome ?? "El estado permanece inmutable sin cambios detectados.";
      const outDistractor2 = otherOutcomes[1]?.scene?.outcome ?? "Se produce un error de sintaxis en tiempo de ejecución.";
      const outDistractor3 = otherOutcomes[2]?.scene?.outcome ?? "Se delega la ejecución al hilo secundario del runtime.";

      const outcomeOptions: [string, string, string, string] = [
        outcomeCorrect,
        outDistractor1,
        outDistractor2,
        outDistractor3,
      ];

      const outCorrectPos = ((idx + 2) % 4) as 0 | 1 | 2 | 3;
      const oTemp = outcomeOptions[0]!;
      outcomeOptions[0] = outcomeOptions[outCorrectPos]!;
      outcomeOptions[outCorrectPos] = oTemp;

      generatedQuestions.push({
        id: `${collectionId}-q-out-${idx}`,
        collectionId,
        question: `En el flujo de ejecución de "${concept.title}", ¿cuál es el resultado o estado final esperado?`,
        options: outcomeOptions,
        correctAnswerIndex: outCorrectPos,
        explanation: `Resultado esperado: "${outcomeCorrect}". ${concept.scene.caption ? `Mnemotecnia visual: ${concept.scene.caption}` : ""}`,
        topic: `${concept.section} · Flujo`,
        difficulty: "intermedio",
      });
    }
  });

  // Agregar preguntas de los pasos prácticos (caseStudy.steps)
  if (collection.caseStudy?.steps) {
    collection.caseStudy.steps.forEach((step, sIdx) => {
      const wrongSteps = collection.caseStudy.steps.filter((s) => s.title !== step.title);
      const sDistractor1 = wrongSteps[sIdx % wrongSteps.length]?.note ?? "Establecer la infraestructura base del entorno.";
      const sDistractor2 = wrongSteps[(sIdx + 1) % wrongSteps.length]?.note ?? "Refactorizar dependencias cruzadas entre módulos.";
      const sDistractor3 = wrongSteps[(sIdx + 2) % wrongSteps.length]?.note ?? "Limpiar artefactos temporales tras el despliegue.";

      const stepOptions: [string, string, string, string] = [
        step.note,
        sDistractor1,
        sDistractor2,
        sDistractor3,
      ];

      const stepCorrectPos = ((sIdx + 1) % 4) as 0 | 1 | 2 | 3;
      const stTemp = stepOptions[0]!;
      stepOptions[0] = stepOptions[stepCorrectPos]!;
      stepOptions[stepCorrectPos] = stTemp;

      generatedQuestions.push({
        id: `${collectionId}-q-step-${sIdx}`,
        collectionId,
        question: `En el caso práctico "${collection.caseStudy.title}", ¿cuál es el principio clave de la etapa "${step.title}" (${step.subtitle})?`,
        options: stepOptions,
        correctAnswerIndex: stepCorrectPos,
        explanation: `En la etapa "${step.title}": ${step.note} Resultado esperado: "${step.result}".`,
        topic: "Caso Práctico",
        difficulty: "avanzado",
      });
    });
  }

  // Combinar con cualquier pregunta explícita ya registrada
  const explicit = explicitQuestionBanks[collectionId] ?? [];
  return [...explicit, ...generatedQuestions];
}
