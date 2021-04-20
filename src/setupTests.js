import { configure } from '@testing-library/dom';

jest.setTimeout(25000);

configure({
  asyncUtilTimeout: 20000,
});