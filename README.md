# CARIAN Box Location Finder

A simple web app for finding where a records box is stored. Type or select a Box ID and the app shows you exactly where to find it: the **rack**, **shelf**, **room** and **level**.

Available in **English** and **Bahasa Melayu**. Works on phones, tablets and computers.

## What it does:

- Search for a box by its Box ID and see its location straight away
- Get suggestions as you type. Tap a suggestion to go directly to the result
- Shows your recent searches so you can find them again quickly
- Warns you if the same Box ID appears more than once in the data
- Switch between English and Bahasa Melayu
- Updates its data from a Google Sheet (or a CSV file)

## How it works

The whole app is a single file (`index.html`), so there is nothing to install. The box data is kept in a Google Sheet. The app reads that sheet and uses it to answer searches.

## Setting up your data

Your Google Sheet must have exactly these five column headers in the first row:

| BOX_ID | RACK | SHELF | ROOM | LEVEL |
|--------|------|-------|------|-------|

Each row is one box. The app shows the same labels in English. In Bahasa Melayu, the labels appear as RAK, PARA, BILIK and ARAS.

Example:

| BOX_ID | RACK | SHELF | ROOM | LEVEL |
|--------|------|-------|------|-------|
| 3000/1/1 | 123 | 4 | IJPN 5 | 6 |

**Important:** do not rename or remove the headers. The app will reject data that does not match.

## Connecting to Google Sheets

1. Put your box data in a Google Sheet using the headers above.
2. Publish it through a Google Apps Script web app (or export it as CSV).
3. Paste the web app link into the settings of the app, or into the `[SHEET_URL]` line in `index.html`.
4. Open the app and use the sync option to load the latest data.

## Running the app

- **Online:** open the link where the app is hosted: `[YOUR_APP_LINK]`
- **On your computer:** download `index.html` and open it in any web browser.

## Hosting and updates

This repository is connected to Netlify. When a new version of `index.html` is uploaded to GitHub, Netlify publishes it automatically. Users get the latest version the next time they open the app.

## Files in this repository

| File | Purpose |
|------|---------|
| `index.html` | The complete app |
| `README.md` | This guide |

## Troubleshooting

- **"Box Not Found":** check that the Box ID is spelled correctly and that it exists in your Google Sheet.
- **Data will not sync:** check that the sheet headers are exactly `BOX_ID`, `RACK`, `SHELF`, `ROOM`, `LEVEL`, and that the web app link is correct.
- **Old version showing:** close the app completely and reopen it, or refresh the page.

## Contact

Maintained by `[Bo Manson]`. For questions or problems, do not contact ha ha ha...
