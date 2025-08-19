import { defineCollection, z } from 'astro:content';

const mixesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    date: z.date(),
    image: z.string(),
    external_link: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const conversationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    number: z.number(),
    title: z.string(),
    participants: z.array(z.string()),
    date: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const archiveCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['photography', 'workshop', 'event']),
    date: z.date(),
    images: z.array(z.string()).default([]),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'mixes': mixesCollection,
  'conversations': conversationsCollection,
  'archive': archiveCollection,
};