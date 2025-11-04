> **Note**  
> This repository is a fork of the original Google Docs automation scripts created by **[Chinmoy Banerjee](https://github.com/ChinmoyBanerjee)** for internal workflow enhancement.  
> I am extending this project with additional automation utilities and improvements for Google Docs/Apps Script usage.

## Additional Contributions
I will be adding:

- New formatting and cleanup functions
- Improved Q&A document automation for [Monthly CA Magazine – Narayana Navigator](https://navigator.narayanaiasacademy.com/monthly-magazine)
- Utility scripts for Google Workspace workflows

(Original project details continue below 👇)
# 🧾 Google Docs Cleanup & Formatting Scripts

## Overview
This repository contains two Google Apps Script functions designed to **clean up and format Google Docs** that contain question-and-answer (Q&A) style content.

They automate repetitive formatting tasks such as removing extra text, numbering answers, and bolding key labels like “Ans:” and “Reference:”.

---

## 📜 Scripts

### 1. `removeContentAboveAnsAndAfterReference.gs`

**Purpose:**  
Cleans your Google Document by keeping only the relevant *answer text*, removing any unwanted question text above “Ans:” and reference text after “Reference:”.

**What It Does:**
- Scans all paragraphs in the document.
- Keeps only text starting from `"Ans:"` onward.
- Removes everything after `"Reference:"`.
- Rewrites the document with only the cleaned-up answers.

**Example:**
What is AI?
Ans: Artificial Intelligence is the simulation of human intelligence.
Reference: Wikipedia

After:
Ans: Artificial Intelligence is the simulation of human intelligence.


**Usage:**
1. Open your Google Doc.
2. Go to **Extensions → Apps Script**.
3. Paste the contents of `removeContentAboveAnsAndAfterReference.gs`.
4. Click **Run → removeContentAboveAnsAndAfterReference**.
5. Grant permissions if prompted.

---

### 2. `boldTextAndNumberAns.gs`

**Purpose:**  
Automatically formats and numbers all answers in your document while bolding key labels.

**What It Does:**
- Bolds text appearing before each colon (`:`).
- Adds sequential numbering before every `"Ans:"` (e.g., `1. Ans:`, `2. Ans:`).
- Bolds the numbered “Ans:” label.

**Example:**
Before:
Ans: The capital of France is Paris.
Reference: Geography Textbook

After:

Ans: The capital of France is Paris.
Reference: Geography Textbook


**Usage:**
1. Open your Google Doc.
2. Go to **Extensions → Apps Script**.
3. Paste the contents of `boldTextAndNumberAns.gs`.
4. Click **Run → boldTextAndNumberAns**.
5. Grant permissions if prompted.

---

## 🧠 When to Use Each Script

| Task | Recommended Script |
|------|--------------------|
| Remove extra question and reference text | `removeContentAboveAnsAndAfterReference.gs` |
| Format and number all answers automatically | `boldTextAndNumberAns.gs` |

---

## 🛠️ How to Install & Run in Google Docs

1. Open your target Google Doc.
2. Click **Extensions → Apps Script**.
3. In the script editor:
   - Create a new file (e.g., `removeContentAboveAnsAndAfterReference.gs`) and paste the code.
   - Create another file for the second function if desired.
4. Click **Run** and authorize the script.
5. Re-run the function — your document will be processed automatically.

---

## 🧩 Author

**Name:** Chinmoy banerjee 
**GitHub:** https://github.com/ChinmoyBanerjee
**Created:** 04/11/25

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).

