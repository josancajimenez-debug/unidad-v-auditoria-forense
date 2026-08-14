"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");

test("el JavaScript embebido tiene sintaxis válida", () => {
  const script = html.match(/<script>([\s\S]*?)<\/script>/);
  assert.ok(script, "Debe existir un script embebido");
  assert.doesNotThrow(() => new Function(script[1]));
});

test("los identificadores HTML son únicos", () => {
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length);
});

test("todas las citas interactivas tienen referencia", () => {
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
  const references = [...html.matchAll(/data-ref="([^"]+)"/g)].map((match) => match[1]);
  assert.ok(references.length > 0);
  references.forEach((reference) => assert.ok(ids.has(`ref-${reference}`), reference));
});

test("la unidad conserva los ocho subtemas oficiales", () => {
  const headings = [
    "Ética y responsabilidad social",
    "Código de ética del auditor forense",
    "Responsabilidad social del auditor forense",
    "Análisis de casos de ética y responsabilidad social",
    "Presentación de resultados y testimonio",
    "Preparación y presentación de resultados de la auditoría forense",
    "El testimonio del auditor forense",
    "Presentación de denuncias"
  ];
  headings.forEach((heading) => assert.ok(html.includes(heading), heading));
  assert.ok(html.includes("José Andrés Campos Jiménez"));
  assert.doesNotMatch(html, /Diplomado en Auditoría Forense/i);
});

test("existen ocho casos y ocho preguntas", () => {
  assert.equal((html.match(/CASOS\["5[1-8]"\]/g) || []).length, 8);
  assert.equal((html.match(/\{s:"5\.[1-8]"/g) || []).length, 8);
});

test("no quedan módulos antiguos ni código de depuración", () => {
  assert.doesNotMatch(html, /<div hidden>/);
  assert.doesNotMatch(html, /check-55|var PUNTOS|LISTA DE VERIFICACIÓN/);
  assert.doesNotMatch(html, /console\.(?:log|warn|error)|debugger;/);
  assert.doesNotMatch(html, /Tecnología, datos e inteligencia artificial|Perfil profesional y competencias/);
});

test("la autoevaluación conserva foco y repaso personalizado", () => {
  assert.match(html, /falladas\.push\(P\.s\)/);
  assert.match(html, /falladas\.join\(", "\)/);
  assert.match(html, /\$\("q-resultado"\)\.focus\(\)/);
  assert.match(html, /falladas=\[\]/);
});

test("incluye controles básicos de seguridad y compatibilidad", () => {
  assert.match(html, /Content-Security-Policy/);
  assert.match(html, /name="referrer" content="no-referrer"/);
  assert.doesNotMatch(html, /behavior:"instant"/);
  assert.match(html, /behavior:"auto"/);
});

test("incluye reglas responsive y controles táctiles accesibles", () => {
  assert.match(html, /@media \(max-width:820px\)/);
  assert.match(html, /@media \(max-width:600px\)/);
  assert.match(html, /@media \(max-width:420px\)/);
  assert.match(html, /min-height:44px/);
  assert.match(html, /min-height:48px/);
  assert.match(html, /-webkit-overflow-scrolling:touch/);
  assert.match(html, /env\(safe-area-inset-left\)/);
  assert.match(html, /aria-label="Índice de subtemas y fuentes;/);
});
