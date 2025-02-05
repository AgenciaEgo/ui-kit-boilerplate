import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { dirname, resolve, extname, relative } from 'node:path';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import preserveDirectives from 'rollup-preserve-directives'

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(), // Plugin de React para permitir la transformación y optimización de JSX.
        dts({
            exclude: ['**/*.stories.tsx'], // Excluye archivos de historias de Storybook de la generación de definiciones.
            rollupTypes: true, // Genera definiciones de tipos compatibles con Rollup.
            include: ['src'], // Incluye únicamente los archivos en la carpeta `src`.
        }),
        libInjectCss(), // Inyecta el CSS automáticamente al exportar una librería.
        preserveDirectives(), // Mantiene las directivas de comentarios (como `use client`) en los outputs de Rollup.
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'ui-kit',
            formats: ['es'], // Define el formato de salida como módulo de ECMAScript.
            fileName: 'ui-kit',
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'], // Define dependencias externas para evitar que se incluyan en el bundle.
            input: Object.fromEntries(
                glob
                    .sync('src/**/*.{ts,tsx}')
                    .map((file) => [
                        relative(
                            'src',
                            file.slice(0, file.length - extname(file).length)
                        ),
                        fileURLToPath(new URL(file, import.meta.url)),
                    ])
            ),
            // Crea entradas dinámicas para cada archivo de componente y el archivo principal.
            output: {
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js',
                globals: {
                    react: 'React',
                    'react-dom': 'React-dom',
                    'react/jsx-runtime': 'react/jsx-runtime',
                }, // Define nombres globales para las dependencias externas.
            },
        },
    },
});
