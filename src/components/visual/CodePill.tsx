type CodePillProps = {
  children: string;
};

export function CodePill({ children }: CodePillProps) {
  return <code className="code-pill">{children}</code>;
}
