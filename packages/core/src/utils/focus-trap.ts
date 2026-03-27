const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable]',
].join(', ');

let activeContainer: HTMLElement | null = null;
let keydownHandler: ((e: KeyboardEvent) => void) | null = null;

export function trapFocus(container: HTMLElement): void {
  const getFocusable = () =>
    Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)) as HTMLElement[];

  keydownHandler = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    const elements = getFocusable();
    if (elements.length === 0) return;

    const first = elements[0];
    const last = elements[elements.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  container.addEventListener('keydown', keydownHandler);

  const elements = getFocusable();
  if (elements.length > 0) {
    elements[0].focus();
  } else {
    container.focus();
  }

  activeContainer = container;
}

export function releaseFocus(): void {
  if (activeContainer && keydownHandler) {
    activeContainer.removeEventListener('keydown', keydownHandler);
  }
  activeContainer = null;
  keydownHandler = null;
}
