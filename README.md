# Unidad V · Rol de la Persona Auditora Forense

**ACC.CONTADORES — Contadores Privados Incorporados**
Diplomado en Auditoría Forense
Docente: **CPI José Andrés Campos Jiménez** · Miramar, Montes de Oro, Puntarenas, Costa Rica

Material didáctico interactivo, autocontenido y estático. Un solo archivo
`index.html` con HTML, CSS y JavaScript. No requiere servidor, base de datos ni
proceso de compilación.

---

## Índice de la unidad

| N.º | Subtema | Fuentes principales |
|-----|---------|---------------------|
| 5.1 | Ética y responsabilidad social | Márquez Arcila (2019); AIC (2024); Ramírez Casco et al. (2024) |
| 5.2 | Código de ética del auditor forense | Márquez Arcila (2019); Ramírez Casco et al. (2024) |
| 5.3 | Perfil profesional y competencias | Márquez Arcila (2019); Ramírez Casco et al. (2024) |
| 5.4 | Funciones, campo de acción y organización | AIC (2024); Márquez Arcila (2019); Ramírez Casco et al. (2024) |
| 5.5 | Independencia, objetividad y escepticismo | Ramírez Casco et al. (2024); Márquez Arcila (2019) |
| 5.6 | La persona auditora como perito y testigo experto | Arias González et al. (2019); AIC (2024); Márquez Arcila (2019) |
| 5.7 | Desarrollo profesional continuo y asociaciones | Márquez Arcila (2019) |
| 5.8 | Tecnología, datos e inteligencia artificial | Naqvi (2020); Márquez Arcila (2019); Ramírez Casco et al. (2024) |

---

## Elementos interactivos

- **Navegación por pestañas** (una por subtema) con botones Anterior y Siguiente,
  y recorrido con las flechas del teclado, Inicio y Fin.
- **Nueve casos de estudio desplegables**, cada uno con la estructura
  *hechos → dilema → lección*, con montos en colones costarricenses.
- **Lista de verificación de doce puntos** sobre el encuadre ético del encargo,
  con barra de progreso y veredicto según el avance (subtema 5.5).
- **Cuestionario de autoevaluación** de ocho preguntas, una por subtema, con
  retroalimentación inmediata razonada y puntaje final.
- **Citas enlazadas**: cada `(Autor, año)` del texto conduce a su entrada en la
  lista de referencias y la resalta.

## Decisiones técnicas

- **Sin almacenamiento.** No se usa `localStorage` ni `sessionStorage`: todo el
  estado vive en variables de JavaScript. El módulo puede servirse a muchas
  personas a la vez sin guardar ningún dato personal.
- **Responsivo** hasta 380 px de ancho.
- **Accesibilidad**: foco de teclado visible, roles `tab`/`tabpanel`,
  `aria-expanded` sincronizado en los casos, `role="progressbar"` con
  `aria-valuenow` en la lista de verificación, enlace para saltar al contenido y
  respeto a `prefers-reduced-motion`.
- **Tipografías** Source Serif 4, Inter y JetBrains Mono desde Google Fonts
  mediante `<link>`. Sin conexión, degrada a fuentes del sistema sin romperse.
- **Identidad visual**: azul institucional `#1F4E79` con acento dorado de sello,
  sobre una metáfora de expediente.

## Publicación en GitHub Pages

El repositorio local ya está inicializado con el primer *commit*. Para publicarlo:

```bash
# 1. Crear el repositorio remoto (requiere GitHub CLI autenticado)
gh repo create josancajimenez-debug/unidad-v-auditoria-forense --public --source=. --remote=origin

# 2. Subir los archivos
git push -u origin main

# 3. Activar GitHub Pages
gh api -X POST repos/josancajimenez-debug/unidad-v-auditoria-forense/pages \
  -f "source[branch]=main" -f "source[path]=/"
```

Sin GitHub CLI: cree el repositorio `unidad-v-auditoria-forense` desde
<https://github.com/new> con la cuenta `josancajimenez-debug`, sin añadir README
ni `.gitignore`, y luego ejecute:

```bash
git remote add origin https://github.com/josancajimenez-debug/unidad-v-auditoria-forense.git
git branch -M main
git push -u origin main
```

Después, en el repositorio: **Settings → Pages → Build and deployment →
Source: Deploy from a branch → Branch: `main` / carpeta `/ (root)` → Save**.

El archivo `.nojekyll` ya está incluido para que GitHub Pages publique el sitio
sin procesarlo con Jekyll.

**Enlace previsto del sitio:**
<https://josancajimenez-debug.github.io/unidad-v-auditoria-forense/>

## Referencias

Asociación Interamericana de Contabilidad. (2024). *Manual de procedimientos de
&nbsp;&nbsp;&nbsp;&nbsp;auditoría forense* (1.ª ed.). Comisión Técnica Interamericana de Peritaje
&nbsp;&nbsp;&nbsp;&nbsp;Contable y Auditoría Forense.

Arias González, I. P., Colcha Ortiz, R. V., y Robalino, A. P. (2019). *Elementos
&nbsp;&nbsp;&nbsp;&nbsp;de auditoría forense*. Escuela Superior Politécnica de Chimborazo.

Márquez Arcila, R. H. (2019). *Auditoría forense*. Ecoe Ediciones; Instituto
&nbsp;&nbsp;&nbsp;&nbsp;Mexicano de Contadores Públicos.

Naqvi, A. S. (2020). *Artificial intelligence for audit, forensic accounting, and
&nbsp;&nbsp;&nbsp;&nbsp;valuation: A strategic perspective*. John Wiley & Sons.

Ramírez Casco, A. del P., Samaniego Erazo, C. A., Alarcón Parra, G. J., y Ojeda
&nbsp;&nbsp;&nbsp;&nbsp;Silva, V. R. (2024). *Fundamentos de auditoría forense*. CIDEPRO Editorial.

---

Material de uso académico. No constituye asesoría legal, contable ni financiera
para casos particulares. Los montos en colones corresponden a supuestos
didácticos.
