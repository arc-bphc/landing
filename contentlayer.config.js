import { defineDocumentType, makeSource } from 'contentlayer/source-files';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import readingTime from 'reading-time';
import remarkToc from 'remark-toc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    published: { type: 'date', required: true },
    summary: { type: 'string', required: true },
    tags: {
      type: 'list',
      required: true,
      of: {
        type: 'string'
      },
      default: []
    }
  },
  computedFields: {
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}));

const News = defineDocumentType(() => ({
  name: 'News',
  filePathPattern: 'news/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    startDate: { type: 'date', required: true },
    endDate: { type: 'date', required: false },
    links: { type: 'json', required: false },
    summary: { type: 'string', required: true }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}));

const Projects = defineDocumentType(() => ({
  name: 'Projects',
  filePathPattern: 'projects/*.mdx',
  fields: {},
  computedFields: {}
}));

const LevelUp = defineDocumentType(() => ({
  name: 'LevelUp',
  filePathPattern: 'levelup/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    category: {
      type: 'enum',
      options: ['resource', 'solution'],
      default: 'resource'
    },
    level: { type: 'number', required: true },
    tags: {
      type: 'list',
      required: true,
      of: {
        type: 'string'
      },
      default: []
    }
  },
  computedFields: {
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, News, Projects, LevelUp],
  mdx: {
    remarkPlugins: [
      [remarkToc, { tight: true, }],
      remarkMath,
      remarkGfm
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      rehypeCodeTitles,
      rehypeHighlight,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor']
          }
        }
      ]
    ]
  }
});

export default contentLayerConfig;
