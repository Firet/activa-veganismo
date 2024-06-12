# 🟢App de voluntariado vegan
  Una app para encontrar el mejor lugar para voluntariar.

## 🟣Idea principal
El problema: Las personas que desean ser voluntarias en organizaciones sin fines de lucro, no cuentan con un medio que les facilite la ubicación y/o contacto de las mismas.

Objetivo: Facilitar a las personas interesadas la ubicación y/o contacto de organizaciones sin fines de lucro.

Solución: Una página web que cuente con las siguientes funcionalidades: geolocalización con mapa, ubicación y contacto de ONG, tipos de donaciones que acepta, filtros según donaciones, etc.

(Problema alternativo: Buscar una manera de comunicar varias organizaciones).

## 🔵 ¿Qué se puede hacer en el corto plazo?
- Mejorar este readme para explicar como correr la app
- Analizar la arquitectura de la app. Vamos a usar server side o client side rendering?
- Ver como conectar con una api de mapas (google maps, here maps, open street map)
- Mejorar los prototipos de la interfaz gráfica (pedir link de figma)
- Se puede ver todas las cosas que faltan hacer en [este tablero de tareas](
https://trello.com/invite/b/S8Ra2DQo/ATTI7d56b70516b814625921b34ba0c991c5C6EC6BE0/app-de-voluntariado-vegan)


Este es un proyecto que usa [Next.js](https://nextjs.org/) y es iniciado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## ¿Cómo correr esta app?

Requisitos: Tener [node js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) instalado.
Primero, ejecutamos el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
```

Abrí [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

Podés comenzar a editar la página modificando `src/app/page.tsx`. La página se actualiza automáticamente a medida que se edita el archivo.

## Despliegue (deploy) en github-pages

- Asegurate de que tu código esté listo para implementarse en la rama main. Esto significa que debe estar probado y tiene que funcionar correctamente en tu entorno local.
- Cambiate a la rama gh-pages: 
```git checkout gh-pages```
- Mezclá el código de main en gh-pages:
```git merge main```
- Hacé el build con el siguiente comando:
```npm run build```
- Creá un archivo llamado .nojekyll, vacío, dentro de la carpeta docs.
- Hacé push para mandar los cambios.
```git push origin gh-pages```
- Esperar que el build termine y revisar si se aplicaron los cambios en [la página](https://firet.github.io/activa-veganismo/).
  
