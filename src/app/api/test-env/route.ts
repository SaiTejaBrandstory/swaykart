import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Environment variables test',
    env: {
      NODE_ENV: process.env.NODE_ENV,
      DB_HOST: process.env.DB_HOST,
      DB_NAME: process.env.DB_NAME,
      DB_USER: process.env.DB_USER,
      DB_PASSWORD: process.env.DB_PASSWORD ? '***hidden***' : 'undefined',
      allEnvKeys: Object.keys(process.env).filter(key => key.startsWith('DB_'))
    }
  });
}
