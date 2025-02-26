import {
  convertDirectoryJsonToFiles,
  runStyleDictionary,
} from "./style-dictionary.ts";
import { tokens } from "./tokens.ts";
import { downloadZip } from "client-zip";

export default function App() {
  const downloadTransformedTokens = async () => {
    const directoryJSON = await runStyleDictionary(tokens);
    console.log(directoryJSON);
    const files = convertDirectoryJsonToFiles(directoryJSON);
    const blob = await downloadZip(files).blob();
    downloadFile("tokens.zip", blob);
  };

  return (
    <>
      <button onClick={downloadTransformedTokens}>
        download transformed tokens
      </button>
      <pre
        style={{
          maxHeight: "50vh",
          overflow: "auto",
        }}
      >
        Edit src/tokens.ts to see updates{"\n\n"}
        {JSON.stringify(tokens, null, 2)}
      </pre>
    </>
  );
}

function downloadFile(fileName: string, blob: Blob) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
  link.remove();
}
