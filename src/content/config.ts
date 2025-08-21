import { defineCollection, z } from 'astro:content';

const baseContentSchema = z.object({
  title: z.string(),
  date: z.date(),
  cover: z.string().optional(),
  media_url: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

const mixesCollection = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    artists: z.array(z.string()),
    cover: z.string(),
  }),
});

const conversationsCollection = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    number: z.number(),
    artists: z.array(z.string()),
  }),
});

const archiveCollection = defineCollection({
  type: 'content',
  schema: baseContentSchema,
});

export const collections = {
  'mixes': mixesCollection,
  'conversations': conversationsCollection,
  'archive': archiveCollection,
};