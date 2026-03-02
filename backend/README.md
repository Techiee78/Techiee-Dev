# Razorpay Backend Integration

## Backend Structure
- `backend/server.js`: Express server with Razorpay integration.
- `backend/.env.example`: Environment variables template.
- `backend/package.json`: Backend dependencies.

## Setup Instructions

### Local Development
1. Navigate to the backend folder: `cd backend`
2. Install dependencies: `npm install express razorpay cors dotenv`
3. Create a `.env` file based on `.env.example` and add your Razorpay keys.
4. Start the server: `node server.js`
5. The backend will run on `http://localhost:5000`.

### Frontend Configuration
The frontend is configured to look for the backend at `http://localhost:5000` by default. You can override this by setting the `VITE_API_URL` environment variable.

### Deployment on Railway
1. Push the code to GitHub.
2. Connect your repository to Railway.
3. Set the Root Directory to `backend`.
4. Add the following Environment Variables in Railway:
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
   - `PORT` (usually set automatically by Railway)
5. Deploy.
6. Copy the generated URL and set it as `VITE_API_URL` in your frontend deployment.
