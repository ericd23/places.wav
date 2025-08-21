import { defineCollection, z } from 'astro:content';

const mixesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    artists: z.array(z.string()),
    date: z.date(),
    cover: z.string(),
    media_url: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const conversationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    number: z.number(),
    title: z.string(),
    artists: z.array(z.string()),
    date: z.date(),
    cover: z.string().optional(),
    media_url: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const archiveCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    cover: z.string().optional(),
    media_url: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  'mixes': mixesCollection,
  'conversations': conversationsCollection,
  'archive': archiveCollection,
};