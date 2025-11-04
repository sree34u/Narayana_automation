/**
 * removeContentAboveAnsAndAfterReference()
 * ----------------------------------------
 * Google Apps Script for Google Docs.
 *
 * This function scans through all the paragraphs in the active Google Doc and:
 *   1. Keeps only the text starting from "Ans:" within each question block.
 *   2. Removes any content that appears above "Ans:" or after "Reference:".
 *   3. Rebuilds the document to contain only the cleaned-up answers.
 *
 * Typical input format (per question):
 *   1. What is AI?
 *   Ans: Artificial Intelligence is ...
 *   Reference: Wikipedia
 *
 * After running the script, the document keeps only:
 *   Ans: Artificial Intelligence is ...
 *
 * Usage:
 *   - Open your Google Doc.
 *   - Go to Extensions → Apps Script.
 *   - Paste this code and click Run.
 *   - Grant permissions when prompted.
 *
 * Author: [Your Name]
 * Created: [Date]
 * Repository: [GitHub repo URL]
 */

function removeContentAboveAnsAndAfterReference() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var paragraphs = body.getParagraphs();
 
  var isInsideQuestionBlock = false;
  var contentToKeep = [];

  // Loop through each paragraph in the document
  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    var text = paragraph.getText();

    // Detect start of a question (e.g., "1.", "2.", etc.)
    if (text.match(/^(\d+\.)/)) {
      isInsideQuestionBlock = true;
    }

    if (isInsideQuestionBlock) {
      // Look for "Ans:" inside a question block
      if (text.indexOf("Ans:") !== -1) {
        // Keep only text starting from "Ans:"
        var ansText = text.substring(text.indexOf("Ans:"));

        // Remove anything after "Reference:" if it exists
        var refIndex = ansText.indexOf("Reference:");
        if (refIndex !== -1) {
          ansText = ansText.substring(0, refIndex);
        }

        // Save cleaned answer text
        contentToKeep.push(ansText);

        // End current question block
        isInsideQuestionBlock = false;
      }
    } else {
      // For text outside question blocks (e.g., explanations)
      var refIndex = text.indexOf("Reference:");
      if (refIndex !== -1) {
        text = text.substring(0, refIndex);
      }
      contentToKeep.push(text);
    }
  }

  // Replace document text with cleaned-up content
  body.setText(contentToKeep.join('\n'));
}
