import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.echoreads.online/api/v1';
const ENABLE_DEMO_MODE = process.env.ENABLE_DEMO_MODE === 'true';

export async function POST(request: NextRequest) {
  let body: { email?: string; password?: string } = {};
  
  try {
    body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const response = await fetch(`${API_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      if (ENABLE_DEMO_MODE) {
        // Return demo response
        return NextResponse.json({
          success: true,
          message: 'Login successful (demo mode)',
          data: {
            token: 'demo-jwt-token-' + Date.now(),
            user: {
              _id: 'demo-user-id',
              name: email.split('@')[0] || 'Demo User',
              email: email,
            },
          },
        });
      }

      const errorData = await response.json().catch(() => ({ message: 'Login failed' }));
      return NextResponse.json(
        { success: false, message: errorData.message || 'Login failed' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error in login:', error);
    
    if (ENABLE_DEMO_MODE && body.email && body.password) {
      return NextResponse.json({
        success: true,
        message: 'Login successful (demo mode)',
        data: {
          token: 'demo-jwt-token-' + Date.now(),
          user: {
            _id: 'demo-user-id',
            name: body.email.split('@')[0] || 'Demo User',
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

