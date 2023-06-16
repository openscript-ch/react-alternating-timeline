import { ReactElement, isValidElement } from 'react';

export const isElement = (element: any): element is ReactElement => isValidElement(element);
