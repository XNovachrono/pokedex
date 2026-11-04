# Poke Explorer

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
