// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const irasai = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/irasai' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
  }),
})

// 4. Export a single `collections` object to register you collection(s)
export const collections = { irasai }