# Mini SEO-analyzer

A mini SEO-analyzer for getting a quick look at how your page handles SEO.

## Description

The mini SEO-analyzer helps you get a quick look at how your page handles SEO. Just paste your HTML and enter comma-separated keywords and click 'Analyze' and you will get an overview and a keyword results table.

## Tech Stack

- React + Vite + TypeScript
- CSS
- react-icons

## Project structure

```text
SEO-ANALYZER
|── src
| | |── components
| | |── models
| | |── utils
| | |── App.tsx
| | |── index.css
|── package.json
|── index.html
|── README.md
```

## Features

- Analyzer
- Overview
  - wordcount
  - title exists?
  - meta description exists?
  - heading levels, does H1 exist?
  - does images have alt text?
  - how many links?
  - how many entered keywords detected?
- Keyword results table (per keyword)
  - keyword
  - count
  - density
  - title
  - meta descirption
  - h1
  - h2
  - h3
  - image alt
  - links
- Tips on improving SEO

## User Flow

1. Enter HTML to check
2. Enter keywords to check
3. Click analyze
4. See an overview
5. See where in HTML your keywords appear

## Getting Started

This is a Vite-project, you need to have Node.js (https://nodejs.org/en) installed on your computer.

### Installation

```bash
git clone https://github.com/maa-lin/mini-seo-analyzer.git
cd mini-seo-analyzer
npm install
npm run dev

```
