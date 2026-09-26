# Pendientes — Epóxicos LAI

Datos que faltan confirmar con el cliente antes de publicar el sitio.

## Por confirmar

- [ ] **Resistencia a la tensión (ASTM C-307)**
  - Hoy dice: `Pendiente de confirmar` / `To be confirmed`
  - Dónde: [src/lib/data.ts](src/lib/data.ts) — tabla de especificaciones, línea 145

## A revisar

- [ ] **Logo**: el sitio usa un logo provisional (hexágono con las letras "LI"). Falta sustituirlo por el logo real del cliente.
  - Dónde: [src/components/ui.tsx](src/components/ui.tsx) — componente `Logo`
- [ ] **Fotografías**: todas las imágenes son fotos de stock de Unsplash. Confirmar si se reemplazan por fotos reales de proyectos del cliente.
  - Dónde: [src/lib/data.ts](src/lib/data.ts) — objeto `IMG`

## Resueltos

- [x] **Número de WhatsApp**: 527121785347 (se muestra como `712 178 5347`)
- [x] **Cobertura**: nacional, en todo México
- [x] **Horario de atención**: el cliente no quiere mostrar horario; se eliminó de la página de Contacto y del pie de página
