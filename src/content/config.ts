import { defineCollection, z } from 'astro:content';

const insightsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
    readTime: z.string(),
    image: z.string().optional(),
    featured: z.boolean().optional().default(false),
    author: z.string().optional().default('Equipe Projekt'),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  insights: insightsCollection,
};
