import type { ReactNode } from "react";

type CodePillProps = {
  children: ReactNode;
};

export function CodePill({ children }: CodePillProps) {
  return <code className="code-pill">{children}</code>;
}
