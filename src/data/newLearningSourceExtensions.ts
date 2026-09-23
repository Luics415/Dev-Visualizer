import type { OfficialSource } from "./expandedCollectionTypes";

export const newLearningSourceExtensions: Readonly<Record<string, readonly OfficialSource[]>> = {
  "programming-fundamentals": [
    { label: "ACM/IEEE-CS CS2023 — Final Report", href: "https://csed.acm.org/final-report/" },
    { label: "NIST SP 800-218 — Secure Software Development Framework", href: "https://csrc.nist.gov/pubs/sp/800/218/final" },
  ],
  algorithms: [
    { label: "MIT Press — Introduction to Algorithms", href: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" },
    { label: "Google Benchmark — User Guide", href: "https://google.github.io/benchmark/" },
    { label: "Python Standard Library — timeit", href: "https://docs.python.org/3/library/timeit.html" },
    { label: "CGAL — 2D Convex Hulls and Extreme Points", href: "https://doc.cgal.org/latest/Convex_hull_2/index.html" },
    { label: "NIST DADS — NP-complete", href: "https://xlinux.nist.gov/dads/HTML/npcomplete.html" },
  ],
  mathematics: [
    { label: "SciPy User Guide — Optimization", href: "https://docs.scipy.org/doc/scipy/tutorial/optimize.html" },
    { label: "NumPy User Guide — Data types", href: "https://numpy.org/doc/stable/user/basics.types.html" },
    { label: "Python Tutorial — Floating-Point Arithmetic", href: "https://docs.python.org/3/tutorial/floatingpoint.html" },
    { label: "Isabelle/HOL — Hoare Logic session", href: "https://isabelle.in.tum.de/website-Isabelle2025-2/dist/library/HOL/HOL-Hoare/index.html" },
  ],
  methodologies: [
    { label: "DORA — Software Delivery Capabilities", href: "https://dora.dev/capabilities/" },
    { label: "Scrum.org — Evidence-Based Management Guide", href: "https://www.scrum.org/resources/evidence-based-management-guide" },
    { label: "OpenGitOps — GitOps Principles", href: "https://opengitops.dev/" },
  ],
  scratch: [
    { label: "Scratch Foundation — scratch-vm source repository", href: "https://github.com/scratchfoundation/scratch-vm" },
    { label: "Scratch Foundation — scratch-blocks source repository", href: "https://github.com/scratchfoundation/scratch-blocks" },
    { label: "Scratch — Resources for Educators", href: "https://scratch.mit.edu/educators" },
  ],
  ruby: [
    { label: "Ruby — Security", href: "https://www.ruby-lang.org/en/security/" },
    { label: "Bundler Documentation", href: "https://bundler.io/docs.html" },
    { label: "test-unit — Ruby Unit Testing Framework", href: "https://test-unit.github.io/" },
    { label: "Rake — Ruby Make", href: "https://ruby.github.io/rake/" },
    { label: "Rack 3.2 — Specification", href: "https://rack.github.io/rack/main/SPEC_rdoc.html" },
  ],
  rust: [
    { label: "The Rustonomicon", href: "https://doc.rust-lang.org/nomicon/" },
    { label: "Rust Compiler Development Guide", href: "https://rustc-dev-guide.rust-lang.org/" },
    { label: "Clippy Documentation", href: "https://doc.rust-lang.org/clippy/" },
    { label: "RustSec — cargo-audit", href: "https://github.com/rustsec/rustsec/blob/main/cargo-audit/README.md" },
    { label: "Embark Studios — cargo-deny", href: "https://embarkstudios.github.io/cargo-deny/" },
  ],
  php: [
    { label: "PHP Manual — Security", href: "https://www.php.net/manual/en/security.php" },
    { label: "PHP Manual — FastCGI Process Manager", href: "https://www.php.net/manual/en/install.fpm.php" },
    { label: "PHPUnit Manual", href: "https://docs.phpunit.de/en/12.4/" },
    { label: "PHP Manual — OPcache", href: "https://www.php.net/manual/en/book.opcache.php" },
    { label: "PHP Manual — Preloading", href: "https://www.php.net/manual/en/opcache.preloading.php" },
  ],
  haskell: [
    { label: "GHC User's Guide — Runtime System Options", href: "https://ghc.gitlab.haskell.org/ghc/doc/users_guide/runtime_control.html" },
    { label: "QuickCheck — Property-Based Testing", href: "https://hackage.haskell.org/package/QuickCheck/docs/Test-QuickCheck.html" },
    { label: "GHCup — Haskell Toolchain Installer", href: "https://www.haskell.org/ghcup/" },
    { label: "Haskell base — Control.Concurrent.MVar", href: "https://hackage.haskell.org/package/base/docs/Control-Concurrent-MVar.html" },
  ],
  go: [
    { label: "Go — Data Race Detector", href: "https://go.dev/doc/articles/race_detector" },
    { label: "Go — Diagnostics", href: "https://go.dev/doc/diagnostics" },
    { label: "Go — Security Best Practices", href: "https://go.dev/doc/security/best-practices" },
    { label: "The Go Memory Model", href: "https://go.dev/ref/mem" },
  ],
  kotlin: [
    { label: "Kotlin — Test Java code using Kotlin and JUnit", href: "https://kotlinlang.org/docs/jvm-test-using-junit.html" },
    { label: "Kotlin/Native Memory Management", href: "https://kotlinlang.org/docs/native-memory-manager.html" },
    { label: "Kotlin — Configure a Gradle Project", href: "https://kotlinlang.org/docs/gradle-configure-project.html" },
  ],
  java: [
    { label: "JDK 25 — Security Developer's Guide", href: "https://docs.oracle.com/en/java/javase/25/security/security-developer-guide.pdf" },
    { label: "JDK 25 — Garbage Collection Tuning Guide", href: "https://docs.oracle.com/en/java/javase/25/gctuning/" },
    { label: "JDK 25 — Flight Recorder API Programmer's Guide", href: "https://docs.oracle.com/en/java/javase/25/jfapi/index.html" },
  ],
  r: [
    { label: "R Internals", href: "https://cran.r-project.org/doc/manuals/r-release/R-ints.html" },
    { label: "R Installation and Administration", href: "https://cran.r-project.org/doc/manuals/r-release/R-admin.html" },
    { label: "testthat — Unit Testing for R", href: "https://testthat.r-lib.org/" },
  ],
  assembly: [
    { label: "NASM — The Netwide Assembler Manual", href: "https://nasm.us/doc/" },
    { label: "GNU GDB Manual", href: "https://sourceware.org/gdb/current/onlinedocs/gdb" },
    { label: "DWARF Version 5 Standard", href: "https://dwarfstd.org/dwarf5std.html" },
  ],
  erlang: [
    { label: "Erlang/OTP — Common Test Basics", href: "https://www.erlang.org/doc/apps/common_test/basics_chapter.html" },
    { label: "Erlang/OTP — Efficiency Guide", href: "https://www.erlang.org/doc/system/efficiency_guide.html" },
    { label: "Erlang Runtime System — ERTS Reference Manual", href: "https://www.erlang.org/doc/apps/erts/" },
  ],
  lisp: [
    { label: "ASDF Manual", href: "https://asdf.common-lisp.dev/asdf.html" },
    { label: "Quicklisp — Library Manager", href: "https://www.quicklisp.org/beta/" },
    { label: "Common Lisp Cookbook — Testing", href: "https://lispcookbook.github.io/cl-cookbook/testing.html" },
    { label: "CFFI — Common Foreign Function Interface manual", href: "https://cffi.common-lisp.dev/manual/" },
  ],
  perl: [
    { label: "perlsec — Perl Security", href: "https://perldoc.perl.org/perlsec" },
    { label: "perldebug — Perl Debugging", href: "https://perldoc.perl.org/perldebug" },
    { label: "Test::More — Perl Testing Framework", href: "https://perldoc.perl.org/Test::More" },
  ],
  raku: [
    { label: "Raku Documentation — Testing", href: "https://docs.raku.org/language/testing" },
    { label: "Raku Documentation — Performance", href: "https://docs.raku.org/language/performance" },
    { label: "Zef — Raku Module Management", href: "https://github.com/ugexe/zef" },
  ],
  scala: [
    { label: "sbt Reference Manual — Testing", href: "https://www.scala-sbt.org/1.x/docs/Testing.html" },
    { label: "Scala Documentation — JDK Compatibility", href: "https://docs.scala-lang.org/overviews/jdk-compatibility/overview.html" },
    { label: "Scala 3 Reference — Safe Initialization", href: "https://docs.scala-lang.org/scala3/reference/other-new-features/safe-initialization.html" },
  ],
  blockchain: [
    { label: "Bitcoin Developer Reference", href: "https://developer.bitcoin.org/reference/" },
    { label: "Ethereum Execution Layer Specification", href: "https://ethereum.github.io/execution-specs/" },
    { label: "NIST IR 8202 — Blockchain Technology Overview", href: "https://csrc.nist.gov/pubs/ir/8202/final" },
  ],
  android: [
    { label: "Android Developers — Fundamentals of Testing", href: "https://developer.android.com/training/testing/fundamentals" },
    { label: "Android Developers — Security Best Practices", href: "https://developer.android.com/privacy-and-security/security-best-practices" },
    { label: "Android Developers — Android Vitals", href: "https://developer.android.com/google/play/vitals" },
    { label: "Android Developers — Save data with Room", href: "https://developer.android.com/training/data-storage/room" },
    { label: "Android Developers — CameraX overview", href: "https://developer.android.com/media/camera/camerax" },
  ],
  qwik: [
    { label: "Qwik — Vitest Integration", href: "https://qwik.dev/docs/integrations/vitest/" },
    { label: "Qwik — Optimizer Rules", href: "https://qwik.dev/docs/advanced/optimizer/" },
    { label: "Qwik — Deployments", href: "https://qwik.dev/docs/deployments/" },
    { label: "Qwik City — Middleware", href: "https://qwik.dev/docs/middleware/" },
  ],
  angular: [
    { label: "Angular — Testing", href: "https://angular.dev/guide/testing" },
    { label: "Angular — Dependency Injection", href: "https://angular.dev/guide/di" },
    { label: "Angular — Server-Side and Hybrid Rendering", href: "https://angular.dev/guide/ssr" },
  ],
  django: [
    { label: "Django Documentation — Testing", href: "https://docs.djangoproject.com/en/stable/topics/testing/" },
    { label: "Django Documentation — Security", href: "https://docs.djangoproject.com/en/stable/topics/security/" },
    { label: "Django Documentation — Performance and Optimization", href: "https://docs.djangoproject.com/en/stable/topics/performance/" },
  ],
  sql: [
    { label: "PostgreSQL — Using EXPLAIN", href: "https://www.postgresql.org/docs/current/using-explain.html" },
    { label: "PostgreSQL — Transaction Isolation", href: "https://www.postgresql.org/docs/current/transaction-iso.html" },
    { label: "PostgreSQL — SQL Syntax", href: "https://www.postgresql.org/docs/current/sql-syntax.html" },
    { label: "PostgreSQL — Planner Statistics", href: "https://www.postgresql.org/docs/current/planner-stats.html" },
    { label: "PostgreSQL — Monitoring Database Activity", href: "https://www.postgresql.org/docs/current/monitoring-stats.html" },
    { label: "PostgreSQL — Row Security Policies", href: "https://www.postgresql.org/docs/current/ddl-rowsecurity.html" },
    { label: "PostgreSQL — Continuous Archiving and PITR", href: "https://www.postgresql.org/docs/current/continuous-archiving.html" },
  ],
  nosql: [
    { label: "MongoDB Manual — Security", href: "https://www.mongodb.com/docs/manual/security/" },
    { label: "Apache Cassandra — Architecture Overview", href: "https://cassandra.apache.org/doc/latest/cassandra/architecture/overview.html" },
    { label: "Redis Documentation — Security", href: "https://redis.io/docs/latest/operate/oss_and_stack/management/security/" },
    { label: "Neo4j Documentation", href: "https://neo4j.com/docs/" },
    { label: "InfluxData Documentation", href: "https://docs.influxdata.com/" },
  ],
  "operating-systems": [
    { label: "Linux Kernel Documentation — Tracing Technologies", href: "https://docs.kernel.org/trace/index.html" },
    { label: "FreeBSD Handbook", href: "https://docs.freebsd.org/en/books/handbook/" },
    { label: "seL4 Reference Manual", href: "https://sel4.systems/Info/Docs/seL4-manual-latest.pdf" },
  ],
  "artificial-intelligence": [
    { label: "NIST AI 100-2 — Adversarial Machine Learning Taxonomy", href: "https://csrc.nist.gov/pubs/ai/100/2/e2025/final" },
    { label: "MLCommons — AI Benchmarks", href: "https://mlcommons.org/benchmarks/" },
    { label: "TensorFlow — Responsible AI Toolkit", href: "https://www.tensorflow.org/responsible_ai" },
  ],
  latex: [
    { label: "TeX Live Guide", href: "https://tug.org/texlive/doc/texlive-en/texlive-en.html" },
    { label: "CTAN — latexmk", href: "https://ctan.org/pkg/latexmk" },
    { label: "LaTeX Tagged PDF Project", href: "https://latex3.github.io/tagging-project/" },
  ],
  subversion: [
    { label: "Apache Subversion — Security", href: "https://subversion.apache.org/security/" },
    { label: "Apache Subversion — Community Guide", href: "https://subversion.apache.org/docs/community-guide/" },
    { label: "Version Control with Subversion — Basic Merging", href: "https://svnbook.red-bean.com/en/1.8/svn.branchmerge.basicmerging.html" },
  ],
};
