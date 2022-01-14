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

const Event = defineDocumentType(() => ({
  name: 'Event',
  filePathPattern: 'events/*.mdx',
  fields: {},
  computedFields: {}
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Event],
  mdx: {
    remarkPlugins: [
      [remarkToc, { tight: true, ordered: true }],
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
