# PokeOdyssey

## Qué incluye

- Login y registro local con cuentas aisladas por usuario.
- Dashboard con cuatro flujos relacionados: inicio, Pokémon lab, entrenadores y mochilas.
- Búsqueda de Pokémon y ficha con imagen, tipos, habilidades, altura, peso y estadísticas desde PokéAPI.
- Catálogo de la primera generación con filtro por nombre y filtros de tipo visuales.
- Entrenadores múltiples por cuenta, con región y rango.
- Mochila individual por entrenador, con apodo, nivel, alta y liberación de Pokémon.

## Ejecutar en GitHub Codespaces

1. Exporta o sube el proyecto a GitHub y abre el repositorio en un Codespace.
2. Abre la terminal integrada desde **Terminal > New Terminal**.
3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre la pestaña **Ports**, busca el puerto `3000` y pulsa **Open in Browser**.
6. Crea una cuenta local desde la pantalla de acceso. La información se guarda en `localStorage` dentro del navegador del Codespace.
7. Desde **Pokémon lab**, busca una especie o carga el catálogo. Selecciona un entrenador para añadir Pokémon a su mochila.
8. Desde **Entrenadores**, crea perfiles adicionales. Cada perfil conserva una mochila independiente.
9. Desde la mochila puedes cambiar el apodo, ajustar el nivel o liberar un Pokémon.

## Comandos útiles

```bash
npm run dev       # desarrollo con recarga automática
npm run lint      # revisa problemas de lint
npm run build     # genera una compilación de producción
npm run start     # sirve la compilación de producción
```

## Nota sobre la persistencia

Este proyecto usa `localStorage` porque se solicitó una demo local. Las cuentas no son un sistema de autenticación seguro y los datos viven únicamente en el navegador y dispositivo donde se creó la cuenta. Para producción, sustituye este almacenamiento por autenticación y base de datos en servidor.

Aplicación React/Next.js que consulta [PokéAPI](https://pokeapi.co/) para mostrar el nombre y la imagen de un Pokémon.

## Usar en GitHub Codespaces

1. Exporta o sube este proyecto a un repositorio de GitHub.
2. En GitHub, abre el repositorio y selecciona **Code → Codespaces → Create codespace on main**.
3. Espera a que Codespaces termine de preparar el entorno.
4. Abre la terminal integrada desde **Terminal → New Terminal**.
5. Instala las dependencias:

   ```bash
   pnpm install
   ```

   Si tu entorno no tiene `pnpm`, puedes habilitarlo con:

   ```bash
   corepack enable
   corepack prepare pnpm@12.3.4 --activate
   pnpm install
   ```

6. Inicia el servidor de desarrollo:

   ```bash
   pnpm dev
   ```

7. Cuando aparezca el aviso de puerto `3000`, abre la pestaña **Ports**, busca el puerto `3000` y pulsa el icono del globo para abrir la aplicación.
8. En la aplicación escribe el nombre de un Pokémon, por ejemplo `ditto`, y pulsa **Buscar**.

## Comandos disponibles

```bash
pnpm dev       # inicia el entorno de desarrollo
pnpm build     # crea una compilación de producción
pnpm start     # sirve la compilación de producción
```

La aplicación usa el endpoint `https://pokeapi.co/api/v2/pokemon/{nombre}` y no necesita variables de entorno.
