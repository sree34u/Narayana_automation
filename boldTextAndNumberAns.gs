/**
 * boldTextAndNumberAns()
 * ----------------------
 * Google Apps Script for Google Docs.
 *
 * This script scans all paragraphs in the active Google Document and:
 *   1. Bolds all text that appears before each colon (`:`).
 *   2. Automatically numbers each occurrence of "Ans:" (e.g., "1. Ans:", "2. Ans:", etc.).
 *   3. Bolds the text before the "Ans:" keyword for clarity.
 *
 * Example transformation:
 *   Before:
 *     Ans: The capital of France is Paris.
 *     Reference: Geography Textbook
 *
 *   After:
 *     1. Ans: The capital of France is Paris.
 *     Reference: Geography Textbook
 *
 * Usage:
 *   - Open your Google Doc.
 *   - Go to Extensions → Apps Script.
 *   - Paste this code into the editor.
 *   - Click Run → select `boldTextAndNumberAns`.
 *   - Grant permissions if prompted.
 *
 * Author: [Your Name]
 * Created: [Date]
 * Repository: [GitHub repo URL]
 */

function boldTextAndNumberAns() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var paragraphs = body.getParagraphs();
  var ansCounter = 1; // Counter for numbering "Ans:"

  // Loop through each paragraph in the document
  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    var text = paragraph.getText();

    // === Step 1: Bold text before each colon ===
    var colonIndex = text.indexOf(":");
    while (colonIndex !== -1) {
      if (colonIndex > 0) {
        // Bold characters from start up to (but not including) the colon
        paragraph.editAsText().setBold(0, colonIndex - 1, true);
      }
      // Look for the next colon
      colonIndex = text.indexOf(":", colonIndex + 1);
    }

    // === Step 2: Number and bold each "Ans:" ===
    var ansIndex = text.indexOf("Ans:");
    if (ansIndex !== -1) {
      // Insert numbering before "Ans:" (e.g., "1. Ans:")
      var newText = text.replace("Ans:", ansCounter + ". Ans:");
      paragraph.setText(newText);

      // Recalculate index after replacement
      var updatedAnsIndex = newText.indexOf(ansCounter + ". Ans:");

      // Bold everything up to and including "Ans:"
      paragraph
        .editAsText()
        .setBold(
          0,
          updatedAnsIndex + ("Ans:".length + ansCounter.toString().length + 2),
          true
        );

      // Increment counter for next answer
      ansCounter++;
    }
  }
}
