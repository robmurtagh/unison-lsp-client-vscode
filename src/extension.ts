import { window, workspace, ExtensionContext } from "vscode";
import {
  Executable,
  ServerOptions,
  LanguageClient,
  LanguageClientOptions,
} from "vscode-languageclient";

let client: LanguageClient;
const outputChannel = window.createOutputChannel("Unison");

export function activate(_context: ExtensionContext) {
  let executable: Executable = { command: "unison-lsp-server" };
  let serverOptions: ServerOptions = { run: executable, debug: executable };

  // Options to control the language client
  let clientOptions: LanguageClientOptions = {
    // Register the server for plain text documents
    documentSelector: [{ scheme: "file", language: "Unison" }],
    synchronize: {
      configurationSection: "unison",
      // Notify the server about file changes to '.clientrc files contained in the workspace
      fileEvents: workspace.createFileSystemWatcher("**/.clientrc"),
    },
    outputChannel,
  };

  // Create the language client and start the client.
  client = new LanguageClient(
    "unisonLanguage",
    "Unison",
    serverOptions,
    clientOptions
  );

  // Start the client. This will also launch the server
  client.start();
  outputChannel.appendLine("🚀 Unison Extension has launched");
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
