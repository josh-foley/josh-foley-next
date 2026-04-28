import * as runtime from "react/jsx-runtime";

// velite emits the compiled MDX body as a string of JS that, when called
// with the jsx-runtime, returns a React component. We evaluate it once per
// render — cheap, and lets us avoid bundling a separate MDX library.
const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component />;
}
