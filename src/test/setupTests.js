import * as jasmineDomModule from '@testing-library/jasmine-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const JasmineDOM =
    jasmineDomModule.default?.default ?? jasmineDomModule.default ?? jasmineDomModule;

if (typeof JasmineDOM.toBeDisabled !== 'function') {
    throw new Error('setupTests: no se pudieron cargar los matchers de jasmine-dom');
}

beforeEach(() => {
    jasmine.getEnv().addMatchers(JasmineDOM);
});