const API_BASE_URL = 'https://api.echoreads.online/api/v1';

export interface Magazine {
  _id: string;
  mid: number;
  name: string;
  image: string;
  file: string;
  type: 'pro' | 'free';
  fileType: string;
  magzineType: 'magzine' | 'article' | 'digest';
  isActive: boolean;
  category: string;
  downloads: number;
  description: string;
  rating: number;
  reviews: Array<{
    userId: number;
    rating: number;
    review: string;
    time: string;
    _id: string;
  }>;
  createdAt: string;
  viewedBy: Array<{
    userId: number;
    viewedAt: string;
    _id: string;
  }>;
  views: number;
  likedBy: Array<{
    userId: number;
    likedAt: string;
    _id: string;
  }>;
  likes: number;
  readBy: Array<any>;
  reads: number;
  total_pages: number;
  audioFile?: string;
}



export interface ApiResponse {
  success: boolean;
  message: string;
  data: Magazine[];
}

export interface SingleMagazineResponse {
  success: boolean;
  message: string;
  data: Magazine;
}



class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async fetchMagazines(): Promise<Magazine[]> {
    try {
      // Try direct API call first
      const response = await fetch(`${this.baseUrl}/user/magzines`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      
      if (!response.ok) {
        return this.getFallbackMagazines();
      }
      
      const result: ApiResponse = await response.json();
      
      if (!result.success) {
        return this.getFallbackMagazines();
      }
      
      return result.data || [];
    } catch (error) {
      return this.getFallbackMagazines();
    }
  }

  async fetchMagazineById(id: string): Promise<Magazine> {
    try {
      // Try direct API call first
      const response = await fetch(`${this.baseUrl}/user/magzines/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      
      if (!response.ok) {
        return this.getFallbackMagazineById(id);
      }
      
      const result: SingleMagazineResponse = await response.json();
      
      if (!result.success) {
        return this.getFallbackMagazineById(id);
      }
      
      return result.data;
    } catch (error) {
      return this.getFallbackMagazineById(id);
    }
  }



  async fetchMagazinesByType(type: 'magzine' | 'article' | 'digest'): Promise<Magazine[]> {
    try {
      const magazines = await this.fetchMagazines();
      return magazines.filter(mag => mag.magzineType === type);
    } catch (error) {
      // Return filtered fallback data
      const fallbackMagazines = this.getFallbackMagazines();
      return fallbackMagazines.filter(mag => mag.magzineType === type);
    }
  }



  async fetchMagazinesByCategory(category: string): Promise<Magazine[]> {
    try {
      const magazines = await this.fetchMagazines();
      return magazines.filter(mag => 
        mag.category.toLowerCase() === category.toLowerCase()
      );
    } catch (error) {
      // Return filtered fallback data
      const fallbackMagazines = this.getFallbackMagazines();
      return fallbackMagazines.filter(mag => 
        mag.category.toLowerCase() === category.toLowerCase()
      );
    }
  }

  // Fallback data methods with all 15 magazines from your API
  private getFallbackMagazines(): Magazine[] {
    return [
      // DIGESTS (6 items)
      {
        _id: "6893101648d9a39cd664f0b1",
        mid: 7,
        name: "Abu Bakkar sajid",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754468368740-6v5vpx5w3li.jpg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1754468372615-zhn4h0hiheo.pdf",
        type: "pro",
        fileType: "pdf",
        magzineType: "digest",
        isActive: true,
        category: "Technology",
        downloads: 0,
        description: "a blockchain and solidity developer wo",
        rating: 4,
        reviews: [
          {
            userId: 119311,
            rating: 4,
            review: "Great movie with stunning visuals!",
            time: "2025-08-21T14:40:22.213Z",
            _id: "6896e4a783c83e6dc67a8e35"
          }
        ],
        createdAt: "2025-08-06T08:19:34.951Z",
        viewedBy: [
          {
            userId: 640150,
            viewedAt: "2025-08-17T00:22:45.496Z",
            _id: "68a120d555c0a889f3c38160"
          }
        ],
        views: 11,
        likedBy: [],
        likes: 0,
        readBy: [],
        reads: 0,
        total_pages: 0
      },
      {
        _id: "6896ac52587810bad50c67aa",
        mid: 14,
        name: "enemy ahead",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754704974875-93qz2e7uvq.jpg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1754704976682-4d6ddn2r1tl.pdf",
        type: "free",
        fileType: "pdf",
        magzineType: "digest",
        isActive: true,
        category: "Automotive",
        downloads: 0,
        description: "enemies are enough",
        rating: 0,
        reviews: [],
        createdAt: "2025-08-09T02:02:58.422Z",
        views: 2,
        likedBy: [],
        likes: 0,
        viewedBy: [],
        readBy: [],
        reads: 0,
        total_pages: 0
      },
      {
        _id: "6896ae0c587810bad50c67bf",
        mid: 17,
        name: "Amarica is dead",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754705416524-jgx366ewqks.jpg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1754705418541-3lcwq411e6v.pdf",
        type: "free",
        fileType: "pdf",
        magzineType: "digest",
        isActive: true,
        category: "Fashion",
        downloads: 0,
        description: "the wrong culture remove respects",
        rating: 0,
        reviews: [],
        createdAt: "2025-08-09T02:10:20.596Z",
        viewedBy: [
          {
            userId: 904120,
            viewedAt: "2025-08-20T10:29:27.645Z",
            _id: "68a5a387d6e017afd283f2a3"
          }
        ],
        views: 1,
        likedBy: [],
        likes: 0,
        readBy: [],
        reads: 0,
        total_pages: 0
      },
      {
        _id: "6896aed0587810bad50c67ce",
        mid: 20,
        name: "Call of Anonymous",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754705612592-h11yf0v64wq.jpg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1754705614886-09jaaym3fee4.pdf",
        type: "pro",
        fileType: "pdf",
        magzineType: "digest",
        isActive: true,
        category: "Environment",
        downloads: 0,
        description: "trust is everyting",
        rating: 0,
        reviews: [],
        createdAt: "2025-08-09T02:13:36.955Z",
        views: 2,
        likedBy: [],
        likes: 0,
        viewedBy: [],
        readBy: [],
        reads: 0,
        total_pages: 0
      },
      {
        _id: "689c2c66248b191d1739acaf",
        mid: 23,
        name: "test",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1755065318705-iklfzvubhub.jpeg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1755065322156-bge648kllr9.pdf",
        type: "free",
        fileType: "pdf",
        magzineType: "digest",
        isActive: true,
        category: "Lifestyle",
        downloads: 0,
        description: "test",
        rating: 0,
        reviews: [],
        createdAt: "2025-08-13T06:10:46.047Z",
        views: 2,
        likedBy: [],
        likes: 0,
        viewedBy: [],
        readBy: [],
        reads: 0,
        total_pages: 0
      },
      {
        _id: "689d02cc16b1dbdad1d2ac6e",
        mid: 24,
        name: "Paigham july",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1755120079051-v3eqssv4yw.jpg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1755120082662-g51ajsymr2a.pdf",
        type: "pro",
        fileType: "pdf",
        magzineType: "digest",
        isActive: true,
        category: "Technology",
        downloads: 0,
        description: "oasifaon sfjasodj lfksfkj kjdfkjlkj kfjaklj",
        rating: 0,
        reviews: [],
        createdAt: "2025-08-13T21:25:32.303Z",
        viewedBy: [
          {
            userId: 640150,
            viewedAt: "2025-08-16T20:51:00.195Z",
            _id: "68a0ef3455c0a889f3c38082"
          }
        ],
        views: 24,
        likedBy: [
          {
            userId: 640150,
            likedAt: "2025-08-19T07:16:38.141Z",
            _id: "68a424d632fc693f8d4d07bc"
          }
        ],
        likes: 2,
        readBy: [],
        reads: 0,
        total_pages: 0
      },

      // MAGAZINES (5 items)
      {
        _id: "6896aacd587810bad50c678e",
        mid: 11,
        name: "loyality",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754704584060-2rvfan4bn5k.jpg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1754704587149-x0rpldazm8.pdf",
        type: "free",
        fileType: "pdf",
        magzineType: "magzine",
        isActive: true,
        category: "Lifestyle",
        downloads: 0,
        description: "power of success",
        rating: 4,
        reviews: [
          {
            userId: 685680,
            rating: 4,
            review: "Cool and attractive",
            time: "2025-08-11T23:00:51.019Z",
            _id: "689a7623644d21c7e776eb4c"
          }
        ],
        createdAt: "2025-08-09T01:56:29.501Z",
        viewedBy: [],
        views: 0,
        likedBy: [],
        likes: 0,
        readBy: [],
        reads: 0,
        total_pages: 0
      },
      {
        _id: "6896abbf587810bad50c67a3",
        mid: 13,
        name: "the west flow",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754704826877-e930mcvtk97.jpg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1754704829116-iwz7epozj48.pdf",
        type: "free",
        fileType: "pdf",
        magzineType: "magzine",
        isActive: true,
        category: "Lifestyle",
        downloads: 0,
        description: "the flow of western culture",
        rating: 4,
        reviews: [
          {
            userId: 100960,
            rating: 4,
            review: "Amazing 😍",
            time: "2025-08-09T18:06:44.141Z",
            _id: "68978e3483d9e6c689e031a7"
          }
        ],
        createdAt: "2025-08-09T02:00:31.049Z",
        viewedBy: [],
        views: 0,
        likedBy: [],
        likes: 0,
        readBy: [],
        reads: 0,
        total_pages: 0
      },
      {
        _id: "6896ace2587810bad50c67b1",
        mid: 15,
        name: "Negotiation",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754705117331-5rbdfci095q.jpg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1754705120081-ux4rcovrbi.pdf",
        type: "free",
        fileType: "pdf",
        magzineType: "magzine",
        isActive: true,
        category: "Health",
        downloads: 0,
        description: "peace is everything",
        rating: 4,
        reviews: [
          {
            userId: 119311,
            rating: 4,
            review: "Nice one and I like it",
            time: "2025-08-09T06:44:17.329Z",
            _id: "6896ee4154bde235764f13f1"
          }
        ],
        createdAt: "2025-08-09T02:05:22.118Z",
        viewedBy: [],
        views: 0,
        likedBy: [],
        likes: 0,
        readBy: [],
        reads: 0,
        total_pages: 0
      },
      {
        _id: "6896ae4c587810bad50c67c4",
        mid: 18,
        name: "Asian paradime",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754705479158-kf58m1sdds.jpg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1754705482003-epxvkvxbqxt.pdf",
        type: "pro",
        fileType: "pdf",
        magzineType: "magzine",
        isActive: true,
        category: "Finance",
        downloads: 0,
        description: "Hype or disrespect",
        rating: 0,
        reviews: [],
        createdAt: "2025-08-09T02:11:24.086Z",
        viewedBy: [],
        views: 0,
        likedBy: [],
        likes: 0,
        readBy: [],
        reads: 0,
        total_pages: 0
      },
      {
        _id: "6898144f83d9e6c689e032f0",
        mid: 21,
        name: "Islamic way of life",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754797126900-cb6uzixyj4.jpg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1754797129807-ybznn48rbkg.pdf",
        type: "free",
        fileType: "pdf",
        magzineType: "magzine",
        isActive: true,
        category: "Education",
        downloads: 0,
        description: "The Islamic way of life, or Islam as a way of life, is a comprehensive system encompassing faith, worship, morals, and social interactions, all guided by divine principles. It's not merely a religion but a complete framework for living, emphasizing the interconnectedness of spiritual, moral, and social aspects",
        rating: 0,
        reviews: [],
        createdAt: "2025-08-10T03:38:55.266Z",
        viewedBy: [],
        views: 0,
        likedBy: [],
        likes: 0,
        readBy: [],
        reads: 0,
        total_pages: 0
      },

      // ARTICLES (4 items)
      {
        _id: "6896aa96587810bad50c6789",
        mid: 10,
        name: "the last ride",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754704529123-vw9oh738wm.jpg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1754704532845-hy736ikizz9.pdf",
        type: "pro",
        fileType: "pdf",
        magzineType: "article",
        isActive: true,
        category: "Travel",
        downloads: 0,
        description: "last ride of nepolian",
        rating: 0,
        reviews: [],
        createdAt: "2025-08-09T01:55:34.787Z",
        viewedBy: [
          {
            userId: 904120,
            viewedAt: "2025-08-20T10:09:29.974Z",
            _id: "68a59ed9e17cb843a1b285dd"
          }
        ],
        views: 2,
        likedBy: [],
        likes: 0,
        readBy: [],
        reads: 0,
        total_pages: 0
      },
      {
        _id: "6896ab57587810bad50c679e",
        mid: 12,
        name: "Shahzaib Ali",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754704722960-vab403sf3gq.jpg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1754704725648-rka01ly8j2.pdf",
        type: "pro",
        fileType: "pdf",
        magzineType: "article",
        isActive: true,
        category: "Technology",
        downloads: 0,
        description: "a software developer",
        rating: 0,
        reviews: [],
        createdAt: "2025-08-09T01:58:47.595Z",
        likedBy: [],
        views: 0,
        likes: 0,
        viewedBy: [],
        readBy: [],
        reads: 0,
        total_pages: 0
      },
      {
        _id: "6896ad82587810bad50c67b8",
        mid: 16,
        name: "Mission imposible",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754705277575-x4fhygrg4np.jpg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1754705280397-9zl7k7z3jnb.pdf",
        type: "pro",
        fileType: "pdf",
        magzineType: "article",
        isActive: true,
        category: "Science",
        downloads: 0,
        description: "nothing imposible",
        rating: 0,
        reviews: [],
        createdAt: "2025-08-09T02:08:02.394Z",
        likedBy: [],
        views: 0,
        likes: 0,
        viewedBy: [],
        readBy: [],
        reads: 0,
        total_pages: 0
      },
      {
        _id: "6896ae87587810bad50c67c9",
        mid: 19,
        name: "Notify the Hell",
        image: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/covers/1754705538967-nbl2fzg4rvk.jpg",
        file: "https://pub-b8050509235e4bcca261901d10608e30.r2.dev/documentss/1754705541209-3d9ols1scae.pdf",
        type: "pro",
        fileType: "pdf",
        magzineType: "article",
        isActive: true,
        category: "Arts",
        downloads: 0,
        description: "the last notification",
        rating: 0,
        reviews: [],
        createdAt: "2025-08-09T02:12:23.322Z",
        likedBy: [],
        views: 0,
        likes: 0,
        viewedBy: [],
        readBy: [],
        reads: 0,
        total_pages: 0
      }
    ];
  }

  private getFallbackMagazineById(id: string): Magazine {
    const allMagazines = this.getFallbackMagazines();
    const magazine = allMagazines.find(mag => mag._id === id);
    
    if (magazine) {
      return magazine;
    }
    
    // Return a default magazine if the ID is not found
    return {
      _id: id,
      mid: 0,
      name: "Content Not Found",
      image: "https://via.placeholder.com/400x600/1f2937/ffffff?text=EchoReads",
      file: "",
      type: "free",
      fileType: "pdf",
      magzineType: "magzine",
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
    };
  }

}

export const apiService = new ApiService();
export default apiService;
