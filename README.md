# Simple Lead Generation System

## Overview
This project is a simple lead generation system that collects leads through a web form and forwards the data to an automation workflow using n8n. The workflow sends email notifications and optionally stores leads in a database or spreadsheet.

## Features
- User-friendly lead capture form with validation for required fields.
- Backend API to receive and validate lead data.
- Integration with n8n via webhook for workflow automation.
- Email notifications triggered automatically for new leads.
- Optional storage of leads in Google Sheets or databases through n8n.

## Technologies Used
- Frontend: React, Axios
- Backend: Node.js, Express, CORS, Body-parser, Axios
- Workflow Automation: n8n
- Email Service: Configured within n8n (e.g., SendGrid, SMTP)

## Setup Instructions

### Backend
1. Navigate to the backend directory:
   ```bash
   cd server
   
2.Install dependencies:
npm install

3.Update the webhook URL in server.js:
const webhookURL = 'YOUR_N8N_WEBHOOK_URL';

4.Start the server:
npm start
The backend runs on: http://localhost:5000

Frontend
1.Navigate to the frontend directory:
cd client

2.Install dependencies:
npm install

3.Start the React app:
npm start

4.The frontend runs on: http://localhost:3000

n8n Workflow
-> Create an n8n workflow triggered by a webhook.
-> Configure email notification to sales team on new lead submissions.
-> Optionally, add nodes to store lead data in Google Sheets or other databases.
-> Export the workflow JSON for reference or version control.

Deployment
-> Frontend can be deployed on Vercel or Netlify.
-> Backend can be deployed on Heroku or Render.
-> n8n can be hosted on n8n Cloud or self-hosted locally.

Future Enhancements
-> Add lead qualification and scoring.
-> CRM integration for better lead management.
-> Analytics dashboard for insights.
-> Admin panel for managing leads.