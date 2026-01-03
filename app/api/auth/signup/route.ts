import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.echoreads.online/api/v1';
const ENABLE_DEMO_MODE = process.env.ENABLE_DEMO_MODE === 'true';

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; password?: string } = {};
  
  try {
    body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    const response = await fetch(`${API_BASE_URL}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      if (ENABLE_DEMO_MODE) {
        // Return demo response
        return NextResponse.json({
          success: true,
          message: 'Account created successfully (demo mode)',
          data: {
            token: 'demo-jwt-token-' + Date.now(),
            user: {
              _id: 'demo-user-id-' + Date.now(),
              name: name,
              email: email,
            },
          },
        });
      }

      const errorData = await response.json().catch(() => ({ message: 'Signup failed' }));
      return NextResponse.json(
        { success: false, message: errorData.message || 'Signup failed' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error in signup:', error);
    
    if (ENABLE_DEMO_MODE && body.name && body.email && body.password) {
      return NextResponse.json({
        success: true,
        message: 'Account created successfully (demo mode)',
        data: {
          token: 'demo-jwt-token-' + Date.now(),
          user: {
            _id: 'demo-user-id-' + Date.now(),
            name: body.name,
            email: body.email,
          },
        },
      });
    }

    return NextResponse.json(
      { success: false, message: 'Network error. Please try again.' },
      { status: 500 }
    );
  }
}

