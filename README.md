# Code_Challenge
Weekly Mission 4

## EN PROCESO DE DOCUEMNTACIÓN

## Inicializar pproyecto 
npm init / intala el package.json

Instalar Jest para pruebas unitarias npm install --save-dev jest

Crear .gitignore para no versional el node module, agregar la  siguiente línea: **/node_modules, node mudules nunca se debe versionar.

Se crea archivo principal del proyecto (index.js) y de agrega en package.json la referencia "start": "node index.js", para poder usar el comando npm start , y ais correr todo lo qye contenta este archivo.

Se instala server express => npm install express --save y se cre aun archivo "app.js", el 

Se instala linter:

Instalar ESLint en tu proyecto
npm install eslint --save-dev

Ejecuta el comando para generar la configuración del linter:
npm init @eslint/config


Al finalizar esto te creará un archivo .eslintrc.js con la configuración del linter.

Se agrega configuración, haz que tu archivo .eslintrc.js se parezca a este:

---

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"]
    }
};

---

Automatizawr los comandos de eslint en tu package.json (recuerda que la ruta dentro de node_modules puede variar en windows)

  "scripts": {
    "test": "node ./node_modules/.bin/jest",
    "linter": "node ./node_modules/eslint/bin/eslint.js .",
    "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix"
  }
  
  npm run linter - se ejecuta para revisar
  npm run linter-fix - se ejecuta para corregir
  
  
  ---
  
  
  Agregar action github, para cada push revisar pruebas unitarias
  
  Ruta:  github/workflows/test.yml
  
  
  name: Run Tests in my project every push on GitHub

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - name: Run Jest
      uses: stefanoeb/jest-action@1.0.3
  
  
  
  
  Estructura de proyecto:
  
  
  ![image](https://user-images.githubusercontent.com/99162884/167321605-d66599c8-a3bf-4279-a3ce-c50cc41ab207.png)
  
  by @CarloGilmar

Todo este proyecto fue realizado durante la misión BackEnd  de LunchX, comandada y guiada por MC Carlo Gilmar 
  
