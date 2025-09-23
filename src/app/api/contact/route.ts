import { NextRequest, NextResponse } from 'next/server';
import { getClient } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { full_name, company_email, company_size } = body;

    // Validate required fields
    if (!full_name || !company_email || !company_size) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(company_email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const client = await getClient();
    
    try {
      // Insert into contact_website table
      const query = `
        INSERT INTO leads.contact_website (full_name, company_email, company_size, created_at)
        VALUES ($1, $2, $3, NOW())
        RETURNING id
      `;
      
      const values = [full_name, company_email, company_size];
      const result = await client.query(query, values);
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Contact form submitted successfully!',
          id: result.rows[0].id
        },
        { status: 201 }
      );
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again.' },
      { status: 500 }
    );
  }
}
