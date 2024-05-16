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

Podés comenzar a editar la página modificando `app/page.tsx`. La página se actualiza automáticamente a medida que se edita el archivo.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar y cargar automáticamente Inter, una fuente personalizada de Google.

## Aprendé más

Para saber más sobre Next.js, consultá lo siguiente:

- [Documentación de Next.js](https://nextjs.org/docs): averiguá sobre las características y la API de Next.js.

- [Aprendé Next.js](https://nextjs.org/learn): un tutorial interactivo de Next.js.

Podés consultar [el repositorio de GitHub de Next.js](https://github.com/vercel/next.js/) - ¡Tus comentarios y contribuciones son bienvenidas!

## Despliegue con Vercel

La forma más sencilla de desplegar tu aplicación Next.js es utilizar [la plataforma de Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulte [la documentación de despliegue de Next.js](https://nextjs.org/docs/deployment) para saber más detalles.
