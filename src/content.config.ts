import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localizedText = z.object({
	zh: z.string(),
	en: z.string(),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
	schema: z.object({
		slug: z.string(),
		date: z.coerce.date(),
		title: localizedText,
		summary: localizedText,
		problem: localizedText,
		method: localizedText,
		results: localizedText,
		role: localizedText,
		workflow: z.array(
			z.object({
				title: localizedText,
				description: localizedText,
			}),
		),
		tags: z.array(z.string()),
		links: z
			.object({
				repo: z.url().optional(),
				paper: z.url().optional(),
				demo: z.url().optional(),
			})
			.default({}),
		media: z
			.array(
				z.object({
					src: z.string(),
					alt: localizedText,
					caption: localizedText.optional(),
				}),
			)
			.default([]),
	}),
});

export const collections = { projects };
