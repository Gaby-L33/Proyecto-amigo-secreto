# Amigo Secreto 🎉
https://img.shields.io/badge/Release_date-20_January-blue?style=for-the-badge
https://img.shields.io/badge/License-Alura_Latam-brightblue?style=for-the-badge

[Pagina del proyecto](https://imgur.com/a/Nk97EcV)

## Índice
1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Estado del Proyecto](#estado-del-proyecto)
3. [Características de la Aplicación](#características-de-la-aplicación)
4. [Tecnologías Aplicadas](#tecnologías-aplicadas)
5. [Demostración de la Aplicación Amigo Secreto](#Demostración-de-la-Aplicación-Amigo-Secreto)
6. [Conclusión](#conclusión)

---

## Descripción del Proyecto
**Amigo Secreto** es una aplicación interactiva que permite a los usuarios organizar de manera sencilla un sorteo de "amigo secreto" entre amigos. Los usuarios pueden ingresar los nombres de los participantes y realizar un sorteo aleatorio, mostrando el nombre del "amigo secreto" seleccionado directamente en la interfaz.

Esta herramienta es ideal para reuniones, fiestas o cualquier evento donde quieras agregar un toque de diversión al organizar regalos secretos.

---

## Estado del Proyecto
**Estado:** Completado ✅

La aplicación está completamente funcional y lista para ser utilizada.

---

## Características de la Aplicación
- **Agregar nombres:** Los usuarios pueden ingresar nombres de participantes a través de un campo de texto y un botón "Añadir".
- **Validación de entrada:** Verifica que los usuarios ingresen un nombre válido (no vacío).
- **Visualización dinámica:** Los nombres se muestran automáticamente en una lista visible a medida que se agregan.
- **Sorteo aleatorio:** Un botón "Sortear Amigo" selecciona al azar un nombre de la lista.
- **Resultado inmediato:** El nombre sorteado se muestra de manera clara en la interfaz.

---

## Tecnologías Aplicadas
- **HTML5:** Estructura del contenido.
- **CSS3:** Estilos visuales y diseño responsivo.
- **JavaScript (ES6):** Lógica de la aplicación y manejo de eventos en la interfaz.

---

# Demostración de la Aplicación Amigo Secreto

Esta sección te guiará paso a paso para que entiendas cómo funciona la aplicación y qué puedes esperar al usarla.

---

## Paso 1: Ingreso de Nombres
1. Abre la aplicación en tu navegador.
2. Escribe el nombre de un amigo en el campo de texto que dice **"Escribe un nombre"**.
3. Haz clic en el botón **"Añadir"**.
   - Si el campo está vacío, se mostrará una alerta: **"Por favor, escribe un nombre válido."**
   - Si ingresaste un nombre válido, este aparecerá automáticamente en la lista de amigos justo debajo del campo de entrada.

**Ejemplo:**
Si escribes `Juan` y presionas el botón "Añadir", la lista mostrará:
```
1. Juan
```

Repite este proceso para agregar más nombres.

---

## Paso 2: Visualización de la Lista de Amigos
Cada vez que agregues un nombre, la lista visible en la página se actualizará. Por ejemplo:

Si agregas `Juan`, `Ana` y `Carlos`, la lista se verá así:
```
1. Juan
2. Ana
3. Carlos
```
La lista es dinámica, por lo que se actualiza en tiempo real.

---

## Paso 3: Sorteo Aleatorio
1. Una vez que hayas ingresado todos los nombres, haz clic en el botón **"Sortear Amigo"**.
2. La aplicación seleccionará automáticamente un nombre de la lista de manera aleatoria.
3. El resultado del sorteo se mostrará debajo en la sección de resultados. Por ejemplo:
```
¡El amigo secreto es: Ana!
```

**Nota:** Si intentas realizar el sorteo sin haber agregado nombres, se mostrará una alerta: **"La lista está vacía. Agrega al menos un nombre antes de realizar el sorteo."**

---

## Detalles Interactivos
- Puedes agregar tantos nombres como quieras.
- Los resultados se actualizan cada vez que realizas un nuevo sorteo.
- La lista de amigos y el resultado del sorteo se muestran de manera clara para facilitar la experiencia.

---

## Ejemplo de Flujo Completo
1. Escribe `María` y presiona **"Añadir"**.
2. Escribe `José` y presiona **"Añadir"**.
3. Escribe `Luis` y presiona **"Añadir"**.
4. Haz clic en **"Sortear Amigo"**.

**Resultado:**
```
¡El amigo secreto es: Luis!
```
---

## Conclusión
El proyecto **Amigo Secreto** logra de forma sencilla y eficiente organizar un sorteo entre amigos. Es una herramienta intuitiva, con validaciones integradas y una interfaz dinámica, ideal para facilitar este tipo de actividades en eventos o reuniones. 

¡Anímate a usarla y diviértete con tus amigos!