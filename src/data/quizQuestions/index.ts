import type { QuizQuestion } from "@/data/quizTypes";
import { collectionManifest } from "@/data/collectionManifest";
import { javascriptQuestions } from "./javascript";
import { typescriptQuestions } from "./typescript";
import { pythonQuestions } from "./python";
import { prologQuestions } from "./prolog";
import { cQuestions } from "./c";
import { cppQuestions } from "./cpp";
import { cSharpQuestions } from "./cSharp";
import { objectiveCQuestions } from "./objectiveC";
import { cStarQuestions } from "./cStar";
import { cwebQuestions } from "./cweb";
import { embeddedCQuestions } from "./embeddedC";
import { visualBasicQuestions } from "./visualBasic";
import { programmingFundamentalsQuestions } from "./programmingFundamentals";
import { algorithmsQuestions } from "./algorithms";
import { mathematicsQuestions } from "./mathematics";
import { methodologiesQuestions } from "./methodologies";
import { scratchQuestions } from "./scratch";
import { rubyQuestions } from "./ruby";
import { rustQuestions } from "./rust";
import { phpQuestions } from "./php";
import { haskellQuestions } from "./haskell";
import { goQuestions } from "./go";
import { kotlinQuestions } from "./kotlin";
import { javaQuestions } from "./java";
import { rQuestions } from "./r";
import { assemblyQuestions } from "./assembly";
import { erlangQuestions } from "./erlang";
import { lispQuestions } from "./lisp";
import { perlQuestions } from "./perl";
import { rakuQuestions } from "./raku";
import { scalaQuestions } from "./scala";
import { dartQuestions } from "./dart";
import { uxUiQuestions } from "./uxUi";
import { htmlCssQuestions } from "./htmlCss";
import { bootstrapQuestions } from "./bootstrap";
import { angularjsQuestions } from "./angularjs";
import { reactQuestions } from "./react";
import { reactNativeQuestions } from "./reactNative";
import { qwikQuestions } from "./qwik";
import { angularQuestions } from "./angular";
import { flutterQuestions } from "./flutter";
import { apisQuestions } from "./apis";
import { backendQuestions } from "./backend";
import { nodejsQuestions } from "./nodejs";
import { laravelQuestions } from "./laravel";
import { n8nQuestions } from "./n8n";
import { dotnetQuestions } from "./dotnet";
import { mediapipeQuestions } from "./mediapipe";
import { firebaseQuestions } from "./firebase";
import { androidQuestions } from "./android";
import { djangoQuestions } from "./django";
import { xmlQuestions } from "./xml";
import { xsdQuestions } from "./xsd";
import { jsonQuestions } from "./json";
import { stateManagementQuestions } from "./stateManagement";
import { databasesQuestions } from "./databases";
import { sqlServerQuestions } from "./sqlServer";
import { sqlQuestions } from "./sql";
import { nosqlQuestions } from "./nosql";
import { blockchainQuestions } from "./blockchain";
import { artificialIntelligenceQuestions } from "./artificialIntelligence";
import { gitQuestions } from "./git";
import { githubQuestions } from "./github";
import { debuggingQuestions } from "./debugging";
import { linuxQuestions } from "./linux";
import { awsQuestions } from "./aws";
import { ciCdQuestions } from "./ciCd";
import { deploymentQuestions } from "./deployment";
import { nginxQuestions } from "./nginx";
import { dockerQuestions } from "./docker";
import { operatingSystemsQuestions } from "./operatingSystems";
import { latexQuestions } from "./latex";
import { subversionQuestions } from "./subversion";

const explicitQuestionBanks: Record<string, QuizQuestion[]> = {};

export function registerCollectionQuestions(collectionId: string, questions: QuizQuestion[]): void {
  explicitQuestionBanks[collectionId] = questions;
}

registerCollectionQuestions("javascript", javascriptQuestions);
registerCollectionQuestions("typescript", typescriptQuestions);
registerCollectionQuestions("python", pythonQuestions);
registerCollectionQuestions("prolog", prologQuestions);
registerCollectionQuestions("c", cQuestions);
registerCollectionQuestions("cpp", cppQuestions);
registerCollectionQuestions("c-sharp", cSharpQuestions);
registerCollectionQuestions("objective-c", objectiveCQuestions);
registerCollectionQuestions("c-star", cStarQuestions);
registerCollectionQuestions("cweb", cwebQuestions);
registerCollectionQuestions("embedded-c", embeddedCQuestions);
registerCollectionQuestions("visual-basic", visualBasicQuestions);
registerCollectionQuestions("programming-fundamentals", programmingFundamentalsQuestions);
registerCollectionQuestions("algorithms", algorithmsQuestions);
registerCollectionQuestions("mathematics", mathematicsQuestions);
registerCollectionQuestions("methodologies", methodologiesQuestions);
registerCollectionQuestions("scratch", scratchQuestions);
registerCollectionQuestions("ruby", rubyQuestions);
registerCollectionQuestions("rust", rustQuestions);
registerCollectionQuestions("php", phpQuestions);
registerCollectionQuestions("haskell", haskellQuestions);
registerCollectionQuestions("go", goQuestions);
registerCollectionQuestions("kotlin", kotlinQuestions);
registerCollectionQuestions("java", javaQuestions);
registerCollectionQuestions("r", rQuestions);
registerCollectionQuestions("assembly", assemblyQuestions);
registerCollectionQuestions("erlang", erlangQuestions);
registerCollectionQuestions("lisp", lispQuestions);
registerCollectionQuestions("perl", perlQuestions);
registerCollectionQuestions("raku", rakuQuestions);
registerCollectionQuestions("scala", scalaQuestions);
registerCollectionQuestions("dart", dartQuestions);
registerCollectionQuestions("ux-ui", uxUiQuestions);
registerCollectionQuestions("html-css", htmlCssQuestions);
registerCollectionQuestions("bootstrap", bootstrapQuestions);
registerCollectionQuestions("angularjs", angularjsQuestions);
registerCollectionQuestions("react", reactQuestions);
registerCollectionQuestions("react-native", reactNativeQuestions);
registerCollectionQuestions("qwik", qwikQuestions);
registerCollectionQuestions("angular", angularQuestions);
registerCollectionQuestions("flutter", flutterQuestions);
registerCollectionQuestions("apis", apisQuestions);
registerCollectionQuestions("backend", backendQuestions);
registerCollectionQuestions("nodejs", nodejsQuestions);
registerCollectionQuestions("laravel", laravelQuestions);
registerCollectionQuestions("n8n", n8nQuestions);
registerCollectionQuestions("dotnet", dotnetQuestions);
registerCollectionQuestions("mediapipe", mediapipeQuestions);
registerCollectionQuestions("firebase", firebaseQuestions);
registerCollectionQuestions("android", androidQuestions);
registerCollectionQuestions("django", djangoQuestions);
registerCollectionQuestions("xml", xmlQuestions);
registerCollectionQuestions("xsd", xsdQuestions);
registerCollectionQuestions("json", jsonQuestions);
registerCollectionQuestions("state-management", stateManagementQuestions);
registerCollectionQuestions("databases", databasesQuestions);
registerCollectionQuestions("sql-server", sqlServerQuestions);
registerCollectionQuestions("sql", sqlQuestions);
registerCollectionQuestions("nosql", nosqlQuestions);
registerCollectionQuestions("blockchain", blockchainQuestions);
registerCollectionQuestions("artificial-intelligence", artificialIntelligenceQuestions);
registerCollectionQuestions("git", gitQuestions);
registerCollectionQuestions("github", githubQuestions);
registerCollectionQuestions("debugging", debuggingQuestions);
registerCollectionQuestions("linux", linuxQuestions);
registerCollectionQuestions("aws", awsQuestions);
registerCollectionQuestions("ci-cd", ciCdQuestions);
registerCollectionQuestions("deployment", deploymentQuestions);
registerCollectionQuestions("nginx", nginxQuestions);
registerCollectionQuestions("docker", dockerQuestions);
registerCollectionQuestions("operating-systems", operatingSystemsQuestions);
registerCollectionQuestions("latex", latexQuestions);
registerCollectionQuestions("subversion", subversionQuestions);

export function getQuestionsForCollection(collectionIdOrSlug: string): QuizQuestion[] {
  const manifest = collectionManifest.find(
    (m) =>
      m.id === collectionIdOrSlug ||
      m.actionHref === `/${collectionIdOrSlug}` ||
      m.href === `/${collectionIdOrSlug}` ||
      (collectionIdOrSlug === "javascript" && m.id === "javascript") ||
      (collectionIdOrSlug === "quiz" && m.id === "javascript") ||
      m.legacyPaths?.includes(`/${collectionIdOrSlug}`)
  );

  const resolvedId = manifest?.id ?? collectionIdOrSlug;
  return explicitQuestionBanks[resolvedId] ?? [];
}
