const fs = require("fs").promises;

async function getItems(src) {
  const pdfjs = await import("pdfjs-dist");
  const pdf = await pdfjs.getDocument(src).promise;
  const page = await pdf.getPage(1);
  const content = await page.getTextContent();
  const items = content.items.map((item) => item.str);
  return items;
}

async function saveItemsToFile(items, filePath) {
  try {
    const text = items.join("\n");
    await fs.writeFile(filePath, text);
    console.log("Items guardados en constancia.txt");
  } catch (error) {
    console.error("Error al guardar los items:", error);
  }
}

async function main() {
  const items = await getItems("constancia.pdf");
  await saveItemsToFile(items, "constancia.txt");
}

main();
