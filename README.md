# Mi Proyecto Stripe

Este proyecto es un ejemplo de integración de **Stripe Checkout** en un sitio web simple usando HTML, JavaScript y funciones serverless en Vercel. Permite crear pagos de prueba y reales de forma segura.

---

## Descripción

El proyecto permite a los usuarios pagar un producto de ejemplo mediante **Stripe Checkout**, usando un backend serverless para generar sesiones de pago con la **clave secreta de Stripe**.  
El frontend solo utiliza HTML y JavaScript para redirigir al usuario a Stripe.

---

## Tecnologías usadas

- **Frontend:** HTML, JavaScript  
- **Backend / API:** Node.js con funciones serverless (Vercel)  
- **Gestión de pagos:** Stripe (modo test y live)  
- **Deploy:** Vercel  
- **Gestión de dependencias:** Node.js (`package.json`)  

---

## Estructura del proyecto

/mi-proyecto
/api
checkout.js # Función serverless que crea sesiones de Stripe
index.html # Frontend con botón de pago
package.json # Dependencias y scripts
node_modules/ # Módulos instalados (no subir a GitHub)

