import { ComponentFixture } from '@angular/core/testing';

export const setSensibleGlobalStyles = <T>(
  fixture: ComponentFixture<T>
): void => {
  const ownerDocument: Document =
    fixture.debugElement.nativeElement.ownerDocument;

  const html: HTMLElement = ownerDocument.querySelector('html');
  html.style.height = '100%';
  html.style.width = '100%';

  const body: HTMLBodyElement = ownerDocument.querySelector('body');
  body.style.display = 'flex';
  body.style.flexDirection = 'column';
  body.style.height = '100%';
  body.style.width = '100%';
  body.style.margin = '0';
};
