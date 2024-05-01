import { defineNuxtModule, addPlugin, createResolver, addComponentsDir, installModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'monkeyDevUI',
    configKey: 'monkeyUI',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(options, nuxt) {

    const { resolve } = createResolver(import.meta.url)
    // We can inject our CSS file which includes Tailwind's directives
    nuxt.options.css.push(resolve('./runtime/assets/css/tailwind.css'))

    await installModule('@nuxtjs/tailwindcss', {
      // module configuration
      exposeConfig: true,
      config: {
        darkMode: 'class',
        content: {
          files: [
            resolve('./runtime/components/**/*.{vue,mjs,ts}'),
            resolve('./runtime/*.{mjs,js,ts}')
          ]
        }
      }
    })

    await installModule('nuxt-icon', {
      // module configuration
      exposeConfig: true,
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolve('./runtime/plugin'))

    addComponentsDir({
      path: resolve('runtime/components')
    })
  },
})
