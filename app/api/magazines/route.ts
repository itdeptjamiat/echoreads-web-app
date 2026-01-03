import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.echoreads.online/api/v1';

export async function GET(request: NextRequest) {
  try {
    const apiUrl = `${API_BASE_URL}/user/magzines`;
    console.log('📡 [API Route] Fetching from:', apiUrl);
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    console.log('📡 [API Route] Response status:', response.status, response.statusText);

    if (!response.ok) {
      console.log(`📡 [API Route] API returned ${response.status}, returning fallback data (like React project)`);
      
      // Return fallback data like React project does
      return NextResponse.json({
        success: true,
        message: 'Magazines loaded from fallback data',
        data: getFallbackMagazines()
      }, { status: 200 });
    }

    const data = await response.json();
    console.log('✅ [API Route] Success! Received data:', {
      success: data.success,
      message: data.message,
      dataType: Array.isArray(data.data) ? 'array' : typeof data.data,
      dataLength: Array.isArray(data.data) ? data.data.length : 'N/A',
    });
    
    // Ensure we return the data in the expected format
    if (data && typeof data === 'object') {
      return NextResponse.json(data, { status: 200 });
    } else {
      console.log('📡 [API Route] Invalid response format, returning fallback data');
      return NextResponse.json({
        success: true,
        message: 'Magazines loaded from fallback data',
        data: getFallbackMagazines()
      }, { status: 200 });
    }
  } catch (error) {
    console.error('❌ API Route: Error fetching magazines:', error);
    // Return fallback data instead of error (like React project does)
    return NextResponse.json({
      success: true,
      message: 'Magazines loaded from fallback data',
      data: getFallbackMagazines()
    }, { status: 200 });
  }
}

// Fallback data (sample magazines like React project)
function getFallbackMagazines() {
  return [
    {
      _id: "fallback-1",
      mid: 1,
      name: "Tech Today",
      image: "https://via.placeholder.com/400x600/1f2937/ffffff?text=Tech+Today",
      file: "",
      type: "free",
      fileType: "pdf",
      magzineType: "magazine",
      isActive: true,
      category: "Technology",
      downloads: 1250,
      description: "Stay updated with the latest technology trends and innovations.",
      rating: 4.5,
      reviews: [],
      createdAt: new Date().toISOString(),
      viewedBy: [],
      views: 2500,
      likedBy: [],
      likes: 180,
      readBy: [],
      reads: 890,
      total_pages: 45
    },
    {
      _id: "fallback-2",
      mid: 2,
      name: "Business Weekly",
      image: "https://via.placeholder.com/400x600/059669/ffffff?text=Business+Weekly",
      file: "",
      type: "pro",
      fileType: "pdf",
      magzineType: "magazine",
      isActive: true,
      category: "Business",
      downloads: 980,
      description: "Your weekly dose of business insights and market analysis.",
      rating: 4.2,
      reviews: [],
      createdAt: new Date().toISOString(),
      viewedBy: [],
      views: 1800,
      likedBy: [],
      likes: 145,
      readBy: [],
      reads: 650,
      total_pages: 38
    },
    {
      _id: "fallback-3",
      mid: 3,
      name: "Health & Wellness Guide",
      image: "https://via.placeholder.com/400x600/dc2626/ffffff?text=Health+Guide",
      file: "",
      type: "free",
      fileType: "pdf",
      magzineType: "article",
      isActive: true,
      category: "Health",
      downloads: 2100,
      description: "Comprehensive guide to maintaining a healthy lifestyle.",
      rating: 4.8,
      reviews: [],
      createdAt: new Date().toISOString(),
      viewedBy: [],
      views: 3200,
      likedBy: [],
      likes: 290,
      readBy: [],
      reads: 1200,
      total_pages: 28
    },
    {
      _id: "fallback-4",
      mid: 4,
      name: "Travel Digest",
      image: "https://via.placeholder.com/400x600/7c3aed/ffffff?text=Travel+Digest",
      file: "",
      type: "free",
      fileType: "pdf",
      magzineType: "digest",
      isActive: true,
      category: "Travel",
      downloads: 1650,
      description: "Discover amazing destinations and travel tips from around the world.",
      rating: 4.6,
      reviews: [],
      createdAt: new Date().toISOString(),
      viewedBy: [],
      views: 2800,
      likedBy: [],
      likes: 220,
      readBy: [],
      reads: 950,
      total_pages: 32
    },
    {
      _id: "fallback-5",
      mid: 5,
      name: "Science Quarterly",
      image: "https://via.placeholder.com/400x600/0891b2/ffffff?text=Science+Quarterly",
      file: "",
      type: "pro",
      fileType: "pdf",
      magzineType: "magazine",
      isActive: true,
      category: "Science",
      downloads: 750,
      description: "Latest scientific discoveries and research findings.",
      rating: 4.4,
      reviews: [],
      createdAt: new Date().toISOString(),
      viewedBy: [],
      views: 1500,
      likedBy: [],
      likes: 125,
      readBy: [],
      reads: 480,
      total_pages: 52
    },
    {
      _id: "fallback-6",
      mid: 6,
      name: "Food & Culture",
      image: "https://via.placeholder.com/400x600/ea580c/ffffff?text=Food+Culture",
      file: "",
      type: "free",
      fileType: "pdf",
      magzineType: "article",
      isActive: true,
      category: "Food",
      downloads: 1890,
      description: "Explore culinary traditions and recipes from different cultures.",
      rating: 4.7,
      reviews: [],
      createdAt: new Date().toISOString(),
      viewedBy: [],
      views: 2900,
      likedBy: [],
      likes: 310,
      readBy: [],
      reads: 1100,
      total_pages: 35
    }
  ];
}

