export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}
