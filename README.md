## EN PROCESO DE DOCUEMNTACIÓN

---

# Code_Challenge
Weekly Mission 4

---

## DEPENDENCIAS:




---

## COMPONENTES




---
## MANUAL DE USO API CODE CHALLENGE

La api contiene tres servicios 'GET' .

__1. Servicio que consulta todos los estudiantes:__

Tipo: GET

URL: http://localhost:3000/v1/students/all


![image](https://user-images.githubusercontent.com/99162884/167358660-2830dee8-b5ef-4fef-abb5-89c508cbedba.png)


Respuesta:

![image](https://user-images.githubusercontent.com/99162884/167358728-b020ecc6-8ced-4f1a-a7b2-2ffcd368005f.png)


Te regresará el listado de todos los estudiantes que existan en tu bd.


__2. Servicio que consulta los emails de todos los estudiantes que tengan certificación 'haveCertification' :__

Tipo: GET

URL: http://localhost:3000/v1/students/Email/haveCertification


![image](https://user-images.githubusercontent.com/99162884/167359164-7e406ec0-dc1b-44bc-b6b8-5180f5c8c86b.png)


Respuesta:


![image](https://user-images.githubusercontent.com/99162884/167359229-c3f6988f-a631-49cf-b0e4-ad0725e04c5b.png)



__3. Servicio que consulta los emails de todos los estudiantes que tengan creditos mayores a 500:__

Tipo: GET

URL: http://localhost:3000/v1/students/credits

![image](https://user-images.githubusercontent.com/99162884/167359509-5129557c-8704-4af3-bcdb-2c4d917247e5.png)


Respuesta:

![image](https://user-images.githubusercontent.com/99162884/167359477-11507cf8-0db9-4ff5-b118-e59f25a288f9.png)



---


## PASOS GENERALES QUE SE REALIZARON:

_Inicializar pproyecto_
npm init / intala el package.json

Instalar Jest para pruebas unitarias npm install --save-dev jest

Crear .gitignore para no versional el node module, agregar la  siguiente línea: **/node_modules, node mudules nunca se debe versionar.

Se crea archivo principal del proyecto (index.js) y de agrega en package.json la referencia "start": "node index.js", para poder usar el comando npm start , y ais correr todo lo qye contenta este archivo.

Se instala server express => npm install express --save y se cre aun archivo en el que pondremos lao servicios y el puerto.

---

Se instala linter:

Instalar ESLint en tu proyecto
npm install eslint --save-dev

Ejecuta el comando para generar la configuración del linter:
npm init @eslint/config


Al finalizar esto te creará un archivo .eslintrc.js con la configuración del linter.

Se agrega configuración, haz que tu archivo .eslintrc.js se parezca a este:


![image](https://user-images.githubusercontent.com/99162884/167359634-883b0c61-66a9-4344-a8e8-93e8405b88e5.png)

---

Automatizawr los comandos de eslint en tu package.json (recuerda que la ruta dentro de node_modules puede variar en windows)


  ![image](https://user-images.githubusercontent.com/99162884/167359746-f9db356a-36b0-403f-a5f9-d26236f47a92.png)
  
  
  npm run linter - se ejecuta para revisar
  npm run linter-fix - se ejecuta para corregir
  
  
  Documentación : https://eslint.org/docs/rules/
  
  ---
  
  Agregar action github, para cada push revisar pruebas unitarias
  
  u_Para solucionar el error => npm install jest@26.0.0 --save_
  
  Ruta:  github/workflows/test.yml
  
  
  name: Run Tests in my project every push on GitHub
  

![image](https://user-images.githubusercontent.com/99162884/167359888-80468281-d910-45ce-bfcf-de28deafe2a1.png)

  
  ---
  
  
 Bases principales:
  
  
  ![image](https://user-images.githubusercontent.com/99162884/167321605-d66599c8-a3bf-4279-a3ce-c50cc41ab207.png)
  
  by @CarloGilmar

Todo este proyecto fue realizado durante la misión BackEnd  de LunchX, comandada y guiada por MC Carlo Gilmar 
  
