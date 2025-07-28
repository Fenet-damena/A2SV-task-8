// src/utils/vite-tagger.ts

export function componentTagger() {
  return {
    name: 'custom-component-tagger',
    transform(code: string, id: string) {
      if (id.endsWith('.tsx') || id.endsWith('.jsx')) {
        return {
          code: `/* tagged */\n${code}`,
          map: null,
        };
      }
    },
  };
}
