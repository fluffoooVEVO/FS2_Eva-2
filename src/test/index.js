// Punto de entrada de las pruebas (lo usa karma.conf.cjs).
// Se usa import.meta.webpackContext (equivalente moderno de require.context, compatible
// con "type": "module" del package.json).

// 1) Carga todas las pruebas: cualquier archivo que termine en .spec.js o .spec.jsx
const specs = import.meta.webpackContext('./', { recursive: true, regExp: /\.spec\.jsx?$/ });
specs.keys().forEach(specs);

// 2) Carga todo el código fuente para que aparezca en el reporte de cobertura,
//    incluso los archivos que todavía no tienen pruebas (así el porcentaje es real).
const sources = import.meta.webpackContext('../', {
  recursive: true,
  regExp: /^\.\/(components|pages|context|data)\/.*\.jsx?$/,
});
sources.keys().forEach(sources);
