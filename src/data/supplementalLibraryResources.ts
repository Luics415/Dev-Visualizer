import type {
  LibraryFormat,
  LibraryResource,
  LibraryResourceKind,
  LibraryResourceLevel,
} from "./libraryTypes";

const reviewedAt = "2026-09-22";

type ResourceSeed = {
  topicSlug: string;
  slug: string;
  title: string;
  authority: string;
  formats?: readonly LibraryFormat[];
  kind: LibraryResourceKind;
  level: LibraryResourceLevel;
  primaryUrl: string;
  note?: string;
  externalWork?: boolean;
};

const resource = ({
  topicSlug,
  slug,
  title,
  authority,
  formats = ["HTML"],
  kind,
  level,
  primaryUrl,
  note,
  externalWork = false,
}: ResourceSeed): LibraryResource => ({
  id: `supplemental--${topicSlug}--${slug}`,
  topicSlug,
  title,
  author: authority,
  authority,
  formats,
  kind,
  level,
  primaryUrl,
  note,
  reviewedAt,
  preservationStatus: externalWork ? "external-preserved" : "official-external",
  licenseStatus: "external-only",
});

export const supplementalLibraryResources: readonly LibraryResource[] = [
  resource({ topicSlug: "prolog", slug: "swi-quickstart", title: "SWI-Prolog: Getting started quickly", authority: "SWI-Prolog Project", kind: "tutorial", level: "beginner", primaryUrl: "https://www.swi-prolog.org/pldoc/man?section=quickstart" }),
  resource({ topicSlug: "prolog", slug: "learn-prolog-now", title: "Learn Prolog Now!", authority: "Patrick Blackburn, Johan Bos y Kristina Striegnitz", kind: "book", level: "intermediate", primaryUrl: "https://lpn.swi-prolog.org/lpnpage.php?pageid=online", externalWork: true }),
  resource({ topicSlug: "prolog", slug: "power-of-prolog", title: "The Power of Prolog", authority: "Markus Triska", kind: "book", level: "advanced", primaryUrl: "https://www.metalevel.at/prolog", externalWork: true }),

  resource({ topicSlug: "objective-c", slug: "language-primer", title: "Programming with Objective-C", authority: "Apple", kind: "tutorial", level: "beginner", primaryUrl: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/", note: "Guía histórica oficial de Apple; la colección también explica el contexto moderno de mantenimiento e interoperabilidad con Swift." }),
  resource({ topicSlug: "objective-c", slug: "runtime-guide", title: "Objective-C Runtime Programming Guide", authority: "Apple", kind: "reference", level: "intermediate", primaryUrl: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Introduction/Introduction.html", note: "Documentación histórica oficial de Apple." }),
  resource({ topicSlug: "objective-c", slug: "blocks-abi", title: "Block Implementation Specification", authority: "LLVM Project", kind: "specification", level: "advanced", primaryUrl: "https://clang.llvm.org/docs/Block-ABI-Apple.html" }),

  resource({ topicSlug: "c-star", slug: "programming-guide", title: "C* Programming Guide", authority: "Thinking Machines Corporation / MIT CSAIL archive", formats: ["PDF"], kind: "book", level: "beginner", primaryUrl: "https://people.csail.mit.edu/bradley/cm5docs/CStarProgrammingGuide.pdf", note: "Manual histórico preservado por MIT CSAIL.", externalWork: true }),
  resource({ topicSlug: "c-star", slug: "users-guide", title: "C* User's Guide", authority: "Thinking Machines Corporation / Bitsavers", formats: ["PDF"], kind: "reference", level: "intermediate", primaryUrl: "https://www.bitsavers.org/pdf/thinkingMachines/CM5/CStarUsersGuide.pdf", note: "Manual histórico preservado por Bitsavers.", externalWork: true }),
  resource({ topicSlug: "c-star", slug: "cm5-manual-index", title: "Connection Machine CM-5 documentation archive", authority: "MIT CSAIL", kind: "reference", level: "advanced", primaryUrl: "https://people.csail.mit.edu/bradley/cm5docs/", note: "Índice archivístico de manuales primarios del CM-5.", externalWork: true }),

  resource({ topicSlug: "cweb", slug: "literate-programming", title: "Literate Programming: fundamentos y programas de ejemplo", authority: "Donald E. Knuth / Stanford University", kind: "book", level: "beginner", primaryUrl: "https://www-cs-faculty.stanford.edu/~knuth/lp.html", note: "Introducción al enfoque literario que fundamenta CWEB, acompañada por los programas de ejemplo del libro.", externalWork: true }),
  resource({ topicSlug: "cweb", slug: "ctan-package", title: "CTAN package: CWEB", authority: "Comprehensive TeX Archive Network", kind: "reference", level: "intermediate", primaryUrl: "https://ctan.org/pkg/cweb" }),
  resource({ topicSlug: "cweb", slug: "cweave-source", title: "CWEAVE documentado desde su propio programa literario", authority: "Donald E. Knuth y Silvio Levy / CTAN", formats: ["Otro"], kind: "reference", level: "advanced", primaryUrl: "https://mirrors.ctan.org/web/c_cpp/cweb/cweave.w", note: "Fuente primaria en formato .w para estudiar secciones, change files y la generación de documentación mediante CWEAVE." }),

  resource({ topicSlug: "embedded-c", slug: "arm-beginners-book", title: "A Beginner's Guide to Designing Embedded System Applications on Arm Cortex-M", authority: "Ariel Lutenberg, Pablo Gomez y Eric Pernia / Arm Education", formats: ["HTML", "PDF"], kind: "book", level: "beginner", primaryUrl: "https://www.arm.com/resources/education/books/designing-embedded-systems", externalWork: true }),
  resource({ topicSlug: "embedded-c", slug: "pico-c-sdk", title: "Raspberry Pi Pico C/C++ SDK guide", authority: "Raspberry Pi", kind: "official-docs", level: "intermediate", primaryUrl: "https://www.raspberrypi.com/documentation/microcontrollers/c_sdk.html" }),
  resource({ topicSlug: "embedded-c", slug: "freertos-kernel", title: "FreeRTOS kernel documentation", authority: "FreeRTOS / Amazon Web Services", kind: "reference", level: "advanced", primaryUrl: "https://www.freertos.org/Documentation/02-Kernel/01-About-the-FreeRTOS-kernel/01-FreeRTOS-kernel" }),

  resource({ topicSlug: "visual-basic", slug: "getting-started", title: "Get started with Visual Basic", authority: "Microsoft", kind: "tutorial", level: "beginner", primaryUrl: "https://learn.microsoft.com/en-us/dotnet/visual-basic/getting-started/" }),
  resource({ topicSlug: "visual-basic", slug: "programming-guide", title: "Visual Basic Programming Guide", authority: "Microsoft", kind: "official-docs", level: "intermediate", primaryUrl: "https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/" }),
  resource({ topicSlug: "visual-basic", slug: "language-reference", title: "Visual Basic Language Reference", authority: "Microsoft", kind: "reference", level: "advanced", primaryUrl: "https://learn.microsoft.com/en-us/dotnet/visual-basic/language-reference/" }),

  resource({ topicSlug: "ux-ui", slug: "user-research", title: "GOV.UK Service Manual: User research", authority: "Government Digital Service", kind: "tutorial", level: "beginner", primaryUrl: "https://www.gov.uk/service-manual/user-research" }),
  resource({ topicSlug: "ux-ui", slug: "uswds", title: "U.S. Web Design System", authority: "U.S. General Services Administration", kind: "reference", level: "intermediate", primaryUrl: "https://designsystem.digital.gov/" }),
  resource({ topicSlug: "ux-ui", slug: "aria-apg", title: "ARIA Authoring Practices Guide", authority: "W3C", kind: "reference", level: "advanced", primaryUrl: "https://www.w3.org/WAI/ARIA/apg/" }),

  resource({ topicSlug: "bootstrap", slug: "vite-guide", title: "Bootstrap con Vite: guía inicial", authority: "Bootstrap Project", kind: "tutorial", level: "beginner", primaryUrl: "https://getbootstrap.com/docs/5.3/getting-started/vite/" }),
  resource({ topicSlug: "bootstrap", slug: "grid", title: "Bootstrap Grid system", authority: "Bootstrap Project", kind: "official-docs", level: "intermediate", primaryUrl: "https://getbootstrap.com/docs/5.3/layout/grid/" }),
  resource({ topicSlug: "bootstrap", slug: "sass", title: "Customize Bootstrap with Sass", authority: "Bootstrap Project", kind: "official-docs", level: "advanced", primaryUrl: "https://getbootstrap.com/docs/5.3/customize/sass/" }),

  resource({ topicSlug: "angularjs", slug: "tutorial", title: "Official AngularJS Tutorial", authority: "AngularJS Project", kind: "tutorial", level: "beginner", primaryUrl: "https://docs.angularjs.org/tutorial", note: "Recurso histórico; el soporte oficial de AngularJS terminó en enero de 2022." }),
  resource({ topicSlug: "angularjs", slug: "concepts", title: "AngularJS Conceptual Overview", authority: "AngularJS Project", kind: "official-docs", level: "intermediate", primaryUrl: "https://docs.angularjs.org/guide/concepts", note: "Documentación congelada de la rama 1.x." }),
  resource({ topicSlug: "angularjs", slug: "compiler", title: "AngularJS HTML Compiler", authority: "AngularJS Project", kind: "reference", level: "advanced", primaryUrl: "https://docs.angularjs.org/guide/compiler", note: "Documentación congelada de la rama 1.x." }),

  resource({ topicSlug: "react-native", slug: "get-started", title: "Get Started with React Native", authority: "Meta / React Native Project", kind: "tutorial", level: "beginner", primaryUrl: "https://reactnative.dev/docs/environment-setup" }),
  resource({ topicSlug: "react-native", slug: "basics", title: "Learn the Basics", authority: "Meta / React Native Project", kind: "tutorial", level: "intermediate", primaryUrl: "https://reactnative.dev/docs/tutorial" }),
  resource({ topicSlug: "react-native", slug: "architecture", title: "React Native Architecture Overview", authority: "Meta / React Native Project", kind: "reference", level: "advanced", primaryUrl: "https://reactnative.dev/architecture/overview" }),

  resource({ topicSlug: "apis", slug: "http-overview", title: "Overview of HTTP", authority: "Mozilla Developer Network", kind: "tutorial", level: "beginner", primaryUrl: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview" }),
  resource({ topicSlug: "apis", slug: "graphql-learn", title: "Learn GraphQL", authority: "GraphQL Foundation", kind: "tutorial", level: "intermediate", primaryUrl: "https://graphql.org/learn/" }),
  resource({ topicSlug: "apis", slug: "openapi-spec", title: "OpenAPI Specification", authority: "OpenAPI Initiative", kind: "specification", level: "advanced", primaryUrl: "https://spec.openapis.org/oas/latest.html" }),

  resource({ topicSlug: "backend", slug: "server-side-intro", title: "Introduction to server-side programming", authority: "Mozilla Developer Network", kind: "tutorial", level: "beginner", primaryUrl: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction" }),
  resource({ topicSlug: "backend", slug: "opentelemetry", title: "OpenTelemetry Documentation", authority: "Cloud Native Computing Foundation", kind: "official-docs", level: "intermediate", primaryUrl: "https://opentelemetry.io/docs/" }),
  resource({ topicSlug: "backend", slug: "owasp-asvs", title: "OWASP Application Security Verification Standard", authority: "OWASP Foundation", kind: "specification", level: "advanced", primaryUrl: "https://owasp.org/projects/asvs" }),

  resource({ topicSlug: "laravel", slug: "learn", title: "Learn Laravel", authority: "Laravel", kind: "course", level: "beginner", primaryUrl: "https://laravel.com/learn" }),
  resource({ topicSlug: "laravel", slug: "installation", title: "Laravel 13 Installation", authority: "Laravel", kind: "official-docs", level: "intermediate", primaryUrl: "https://laravel.com/framework/docs/13.x/installation" }),
  resource({ topicSlug: "laravel", slug: "horizon", title: "Laravel Horizon", authority: "Laravel", kind: "official-docs", level: "advanced", primaryUrl: "https://laravel.com/framework/docs/13.x/horizon" }),

  resource({ topicSlug: "n8n", slug: "quickstart", title: "Build your first workflow", authority: "n8n", kind: "tutorial", level: "beginner", primaryUrl: "https://docs.n8n.io/build-your-first-workflow" }),
  resource({ topicSlug: "n8n", slug: "expressions", title: "Expressions versus data nodes", authority: "n8n", kind: "official-docs", level: "intermediate", primaryUrl: "https://docs.n8n.io/build/work-with-data/expressions-versus-data-nodes" }),
  resource({ topicSlug: "n8n", slug: "security-audit", title: "n8n Security audit", authority: "n8n", kind: "official-docs", level: "advanced", primaryUrl: "https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/run-security-audits" }),

  resource({ topicSlug: "dotnet", slug: "get-started", title: "Get started with .NET", authority: "Microsoft", kind: "tutorial", level: "beginner", primaryUrl: "https://learn.microsoft.com/en-us/dotnet/core/get-started" }),
  resource({ topicSlug: "dotnet", slug: "fundamentals", title: ".NET fundamentals", authority: "Microsoft", kind: "official-docs", level: "intermediate", primaryUrl: "https://learn.microsoft.com/en-us/dotnet/fundamentals/" }),
  resource({ topicSlug: "dotnet", slug: "modern-web-apps", title: "Architect modern web applications with ASP.NET Core and Azure", authority: "Microsoft", kind: "book", level: "advanced", primaryUrl: "https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/", externalWork: true }),

  resource({ topicSlug: "mediapipe", slug: "solutions-guide", title: "MediaPipe Solutions guide", authority: "Google AI Edge", kind: "tutorial", level: "beginner", primaryUrl: "https://developers.google.com/edge/mediapipe/solutions/guide" }),
  resource({ topicSlug: "mediapipe", slug: "object-detector-python", title: "Object detection guide for Python", authority: "Google AI Edge", kind: "tutorial", level: "intermediate", primaryUrl: "https://developers.google.com/edge/mediapipe/solutions/vision/object_detector/python" }),
  resource({ topicSlug: "mediapipe", slug: "framework-concepts", title: "MediaPipe Framework concepts", authority: "Google AI Edge", kind: "reference", level: "advanced", primaryUrl: "https://developers.google.com/edge/mediapipe/framework/framework_concepts/overview" }),

  resource({ topicSlug: "firebase", slug: "fundamentals", title: "Learn Firebase fundamentals", authority: "Google Firebase", kind: "tutorial", level: "beginner", primaryUrl: "https://firebase.google.com/docs/guides" }),
  resource({ topicSlug: "firebase", slug: "web-setup", title: "Add Firebase to a JavaScript project", authority: "Google Firebase", kind: "official-docs", level: "intermediate", primaryUrl: "https://firebase.google.com/docs/web/setup" }),
  resource({ topicSlug: "firebase", slug: "rules-unit-tests", title: "Unit-test Firebase Security Rules", authority: "Google Firebase", kind: "reference", level: "advanced", primaryUrl: "https://firebase.google.com/docs/rules/unit-tests" }),

  resource({ topicSlug: "xml", slug: "mdn-introduction", title: "XML introduction", authority: "Mozilla Developer Network", kind: "tutorial", level: "beginner", primaryUrl: "https://developer.mozilla.org/en-US/docs/Web/XML/Guides/XML_introduction" }),
  resource({ topicSlug: "xml", slug: "parse-serialize", title: "Parsing and serializing XML", authority: "Mozilla Developer Network", kind: "tutorial", level: "intermediate", primaryUrl: "https://developer.mozilla.org/en-US/docs/Web/XML/Guides/Parsing_and_serializing_XML" }),
  resource({ topicSlug: "xml", slug: "xpath-javascript", title: "Using XPath in JavaScript", authority: "Mozilla Developer Network", kind: "reference", level: "advanced", primaryUrl: "https://developer.mozilla.org/en-US/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript" }),

  resource({ topicSlug: "xsd", slug: "primer", title: "XML Schema Part 0: Primer", authority: "W3C", kind: "tutorial", level: "beginner", primaryUrl: "https://www.w3.org/TR/xmlschema-0/" }),
  resource({ topicSlug: "xsd", slug: "validation-xmlschemaset", title: "XML Schema (XSD) validation with XmlSchemaSet", authority: "Microsoft", kind: "tutorial", level: "intermediate", primaryUrl: "https://learn.microsoft.com/en-us/dotnet/standard/data/xml/xml-schema-xsd-validation-with-xmlschemaset" }),
  resource({ topicSlug: "xsd", slug: "versioning-guide", title: "W3C XML Schema versioning guide", authority: "W3C", kind: "reference", level: "advanced", primaryUrl: "https://www.w3.org/TR/xmlschema-guide2versioning/" }),

  resource({ topicSlug: "json", slug: "mdn-working-with-json", title: "Working with JSON", authority: "Mozilla Developer Network", kind: "tutorial", level: "beginner", primaryUrl: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON" }),
  resource({ topicSlug: "json", slug: "json-schema", title: "Creating your first JSON Schema", authority: "JSON Schema Project", kind: "tutorial", level: "intermediate", primaryUrl: "https://json-schema.org/learn/getting-started-step-by-step" }),
  resource({ topicSlug: "json", slug: "rfc-8259", title: "RFC 8259: The JavaScript Object Notation Data Interchange Format", authority: "IETF / RFC Editor", kind: "specification", level: "advanced", primaryUrl: "https://www.rfc-editor.org/info/rfc8259/" }),

  resource({ topicSlug: "state-management", slug: "redux-essentials", title: "Redux Essentials", authority: "Redux Project", kind: "tutorial", level: "beginner", primaryUrl: "https://redux.js.org/tutorials/essentials/part-1-overview-concepts" }),
  resource({ topicSlug: "state-management", slug: "tanstack-defaults", title: "TanStack Query: important defaults", authority: "TanStack", kind: "official-docs", level: "intermediate", primaryUrl: "https://tanstack.com/query/latest/docs/framework/react/guides/important-defaults" }),
  resource({ topicSlug: "state-management", slug: "xstate-actors", title: "XState actor model", authority: "Stately", kind: "official-docs", level: "advanced", primaryUrl: "https://stately.ai/docs/actors" }),

  resource({ topicSlug: "databases", slug: "postgresql-tutorial", title: "PostgreSQL Tutorial", authority: "PostgreSQL Global Development Group", kind: "tutorial", level: "beginner", primaryUrl: "https://www.postgresql.org/docs/current/tutorial.html" }),
  resource({ topicSlug: "databases", slug: "mit-database-systems", title: "MIT OpenCourseWare: Database Systems", authority: "Massachusetts Institute of Technology", kind: "course", level: "intermediate", primaryUrl: "https://ocw.mit.edu/courses/6-830-database-systems-fall-2010/", externalWork: true }),
  resource({ topicSlug: "databases", slug: "cmu-intro-databases", title: "CMU 15-445/645: Intro to Database Systems", authority: "Carnegie Mellon University", kind: "course", level: "advanced", primaryUrl: "https://15445.courses.cs.cmu.edu/", externalWork: true }),

  resource({ topicSlug: "sql-server", slug: "learn-introduction", title: "Get Started with SQL Server", authority: "Microsoft Learn", kind: "course", level: "beginner", primaryUrl: "https://learn.microsoft.com/en-us/training/modules/introduction-to-sql-server/", externalWork: true }),
  resource({ topicSlug: "sql-server", slug: "query-processing", title: "SQL Server query processing architecture guide", authority: "Microsoft", kind: "official-docs", level: "intermediate", primaryUrl: "https://learn.microsoft.com/en-us/sql/relational-databases/query-processing-architecture-guide?view=sql-server-ver17" }),
  resource({ topicSlug: "sql-server", slug: "performance", title: "Monitor and tune SQL Server performance", authority: "Microsoft", kind: "reference", level: "advanced", primaryUrl: "https://learn.microsoft.com/en-us/sql/relational-databases/performance/monitor-and-tune-for-performance?view=sql-server-ver17" }),

  resource({ topicSlug: "github", slug: "skills", title: "GitHub Skills", authority: "GitHub", kind: "course", level: "beginner", primaryUrl: "https://skills.github.com/", externalWork: true }),
  resource({ topicSlug: "github", slug: "pull-requests", title: "Pull requests documentation", authority: "GitHub", kind: "official-docs", level: "intermediate", primaryUrl: "https://docs.github.com/en/pull-requests" }),
  resource({ topicSlug: "github", slug: "code-security", title: "Security and code quality documentation", authority: "GitHub", kind: "official-docs", level: "advanced", primaryUrl: "https://docs.github.com/en/code-security" }),

  resource({ topicSlug: "debugging", slug: "chrome-devtools", title: "Chrome DevTools", authority: "Google Chrome", kind: "tutorial", level: "beginner", primaryUrl: "https://developer.chrome.com/docs/devtools/" }),
  resource({ topicSlug: "debugging", slug: "firefox-debugger", title: "The Firefox JavaScript Debugger", authority: "Mozilla", kind: "official-docs", level: "intermediate", primaryUrl: "https://firefox-source-docs.mozilla.org/devtools-user/debugger/" }),
  resource({ topicSlug: "debugging", slug: "lldb-tutorial", title: "LLDB Tutorial", authority: "LLVM Project", kind: "tutorial", level: "advanced", primaryUrl: "https://lldb.llvm.org/use/tutorial.html" }),

  resource({ topicSlug: "aws", slug: "getting-started", title: "Getting Started on AWS", authority: "Amazon Web Services", kind: "tutorial", level: "beginner", primaryUrl: "https://aws.amazon.com/getting-started/" }),
  resource({ topicSlug: "aws", slug: "aws-overview", title: "Overview of Amazon Web Services", authority: "Amazon Web Services", kind: "reference", level: "intermediate", primaryUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html" }),
  resource({ topicSlug: "aws", slug: "architecture-center", title: "AWS Architecture Center", authority: "Amazon Web Services", kind: "reference", level: "advanced", primaryUrl: "https://aws.amazon.com/architecture/" }),

  resource({ topicSlug: "ci-cd", slug: "github-actions-quickstart", title: "Quickstart for GitHub Actions", authority: "GitHub", kind: "tutorial", level: "beginner", primaryUrl: "https://docs.github.com/en/actions/get-started/quickstart" }),
  resource({ topicSlug: "ci-cd", slug: "openssf-scorecard", title: "OpenSSF Scorecard", authority: "Open Source Security Foundation", kind: "reference", level: "intermediate", primaryUrl: "https://scorecard.dev/" }),
  resource({ topicSlug: "ci-cd", slug: "artifact-attestations", title: "GitHub artifact attestations", authority: "GitHub", kind: "reference", level: "advanced", primaryUrl: "https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations" }),

  resource({ topicSlug: "deployment", slug: "kubernetes-update", title: "Kubernetes Basics: perform a rolling update", authority: "Kubernetes Project / CNCF", kind: "tutorial", level: "beginner", primaryUrl: "https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/" }),
  resource({ topicSlug: "deployment", slug: "release-engineering", title: "Google SRE Book: Release Engineering", authority: "Google", kind: "book", level: "intermediate", primaryUrl: "https://sre.google/sre-book/release-engineering/", externalWork: true }),
  resource({ topicSlug: "deployment", slug: "argo-rollouts", title: "Argo Rollouts Documentation", authority: "Argo Project / CNCF", kind: "official-docs", level: "advanced", primaryUrl: "https://argo-rollouts.readthedocs.io/en/stable/" }),

  resource({ topicSlug: "nginx", slug: "beginners-guide", title: "NGINX Beginner's Guide", authority: "NGINX", kind: "tutorial", level: "beginner", primaryUrl: "https://nginx.org/en/docs/beginners_guide.html" }),
  resource({ topicSlug: "nginx", slug: "admin-guide", title: "NGINX Admin Guide", authority: "F5 NGINX", kind: "official-docs", level: "intermediate", primaryUrl: "https://docs.nginx.com/nginx/admin-guide/" }),
  resource({ topicSlug: "nginx", slug: "development-guide", title: "NGINX Development Guide", authority: "NGINX", kind: "reference", level: "advanced", primaryUrl: "https://nginx.org/en/docs/dev/development_guide.html" }),
] as const;
