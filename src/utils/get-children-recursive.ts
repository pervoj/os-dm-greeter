export function getChildrenRecursive(element: HTMLElement): HTMLElement[] {
  const children = Array.from(element.children) as HTMLElement[];
  return children.flatMap((child) => [child, ...getChildrenRecursive(child)]);
}
