// Importa todo el código de la app (excepto main.jsx y las pruebas) para que
// el reporte de cobertura incluya también los archivos que no tienen pruebas.
// Sin esto, solo aparecerían los archivos que alguna prueba importa,
// y el porcentaje se vería más alto de lo real.
const appFiles = import.meta.webpackContext('../', {
    recursive: true,
    regExp: /^\.\/(?!test\/|main\.jsx$).*\.jsx?$/,
});

appFiles.keys().forEach(appFiles);