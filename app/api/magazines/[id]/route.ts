import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.echoreads.online/api/v1';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  
  try {

    const response = await fetch(`${API_BASE_URL}/user/magzines/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      // Return fallback data instead of error status (like React project does)
      console.warn(`API returned ${response.status} for magazine ${id}, returning fallback`);
      return NextResponse.json(
        { 
          success: true, 
          message: 'Magazine not found', 
          data: {
            _id: id,
            mid: 0,
            name: "Content Not Found",
            image: "https://via.placeholder.com/400x600/1f2937/ffffff?text=EchoReads",
            file: "",
            type: "free",
            fileType: "pdf",
            magazineType: "magazine",
            isActive: true,
            category: "General",
            downloads: 0,
            description: "This content could not be found or is no longer available.",
            rating: 0,
            reviews: [],
            createdAt: new Date().toISOString(),
            viewedBy: [],
            views: 0,
            likedBy: [],
            likes: 0,
            readBy: [],
            reads: 0,
            total_pages: 0
          }
        },
        { status: 200 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching magazine by ID:', error);
    // Return fallback data instead of error
    return NextResponse.json(
      { 
        success: true, 
        message: 'Magazine not found', 
        data: {
          _id: id,
          mid: 0,
          name: "Content Not Found",
          image: "https://via.placeholder.com/400x600/1f2937/ffffff?text=EchoReads",
          file: "",
          type: "free",
          fileType: "pdf",
          magazineType: "magazine",
          isActive: true,
          category: "General",
          downloads: 0,
          description: "This content could not be found or is no longer available.",
          rating: 0,
          reviews: [],
          createdAt: new Date().toISOString(),
          viewedBy: [],
          views: 0,
          likedBy: [],
          likes: 0,
          readBy: [],
          reads: 0,
          total_pages: 0
        }
      },
      { status: 200 }
    );
  }
}

