import { DirectoryJSON, Volume } from "@bundled-es-modules/memfs";
import StyleDictionary, { type Config } from "style-dictionary";
import { formats, transformGroups } from "style-dictionary/enums";
import { DesignTokens } from "style-dictionary/types";

export async function runStyleDictionary(tokens: DesignTokens) {
  const config: Config = {
    tokens,
    platforms: {
      css: {
        transformGroup: transformGroups.css,
        files: [
          {
            destination: "vars.css",
            format: formats.cssVariables,
          },
        ],
      },
    },
  };

  const volume = new Volume();
  const sd = new StyleDictionary(config, { volume });
  await sd.buildAllPlatforms();

  return volume.toJSON();
}

export function convertDirectoryJsonToFiles(
  directoryJSON: DirectoryJSON<string | null>,
) {
  return Object.entries(directoryJSON).flatMap(([path, content]) => {
    if (!content) {
      return [];
    }
    return new File([content], path);
  });
}
