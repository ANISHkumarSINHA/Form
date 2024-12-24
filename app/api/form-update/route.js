import { NextResponse } from 'next/server'

export async function GET() {
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Generate some mock data
  const mockUpdate = {
    name: Math.random() > 0.5 ? 'John Doe' : 'Jane Smith',
    email: Math.random() > 0.5 ? 'john@example.com' : 'jane@example.com',
  }

  return NextResponse.json(mockUpdate)
}

