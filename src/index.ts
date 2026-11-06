/**
 * My SonicJS Application
 *
 * Entry point for your SonicJS headless CMS application.
 */

import { createSonicJSApp, registerCollections } from '@sonicjs-cms/core'
import type { SonicJSConfig } from '@sonicjs-cms/core'

// Import your collection configurations
import blogPostsCollection from './collections/blog-posts.collection'
import homePageCollection from './collections/home-page.collection'

// Example plugin
import { examplePlugin } from './plugins/example'
import { moodsCollection } from './plugins/example/collections/moods.collection'

// Register collections BEFORE creating the app.
registerCollections([
  blogPostsCollection,
  moodsCollection,
  homePageCollection,
])

// Application configuration
const config: SonicJSConfig = {
  plugins: {
    register: [
      examplePlugin,
    ],
  },
}

// Create and export the application
export default createSonicJSApp(config)
