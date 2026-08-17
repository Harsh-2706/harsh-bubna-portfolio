const GITHUB_PROFILE = 'https://github.com/Harsh-2706'

export const projects = [
  {
    id: 'legacy-modernization',
    name: 'Legacy Code Modernization Engine',
    subtitle: 'Intel Unnati Programme Challenge',
    description:
      'A production-grade tool that migrates legacy Java/Python repositories to modern Python using a custom context-optimization pipeline — cutting LLM token usage by 60–92% and hallucination rates by ~40%.',
    features: [
      'AST- and regex-based pruning engine with transitive dependency mapping to strip UI/boilerplate noise while preserving business logic',
      'Full-stack app — FastAPI backend, Next.js/React frontend, Supabase persistence — deployed live on Vercel and Render',
      'Schema-validation layer to catch and reject malformed LLM output before it reaches the codebase',
    ],
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'GitPython', 'Next.js', 'React', 'Supabase', 'GPT-4o', 'Gemini', 'Groq'],
    github: `${GITHUB_PROFILE}/Legacy-Code-Modernization-Engine`,
    demo: 'https://legacy-code-modernization-engine.vercel.app/',
    featured: true,
  },
  {
    id: 'geopulse-ai',
    name: 'GeoPulse AI',
    subtitle: 'Geographic Intelligence Platform',
    description:
      'AI-powered geographic intelligence platform for district-level analysis — combining predictive modeling with live geospatial data to surface actionable regional insights.',
    features: ['AI-based predictions with a Random Forest model', 'Interactive geographic visualization with React Leaflet', 'Data analytics dashboard for district-level insight'],
    tech: ['FastAPI', 'Random Forest', 'PostgreSQL', 'Next.js', 'Tailwind CSS', 'React Leaflet'],
    github: `${GITHUB_PROFILE}/Geo-Pusle-Fiber-AI`,
    demo: null,
    featured: true,
  },
  {
    id: 'medibot',
    name: 'MediBot',
    subtitle: 'RAG-Based Healthcare Assistant',
    description:
      'A retrieval-augmented generation assistant that grounds AI healthcare conversations in real medical documents, reducing hallucination and surfacing citation-backed answers.',
    features: ['Document retrieval over a vector knowledge base', 'AI-powered healthcare conversations via Llama on Groq', 'Knowledge-grounded, citation-aware responses'],
    tech: ['Llama', 'Groq API', 'ChromaDB', 'Python'],
    github: GITHUB_PROFILE,
    demo: null,
    featured: false,
  },
  {
    id: 'ecosentinel',
    name: 'ForestNet / EcoSentinel AI',
    subtitle: 'AI-Powered Forest Monitoring',
    description:
      'An AI-powered forest monitoring system combining computer vision and IoT sensor data to help detect environmental threats earlier.',
    features: ['Computer vision-based anomaly detection', 'IoT sensor integration for real-time monitoring', 'Machine learning risk scoring pipeline'],
    tech: ['Machine Learning', 'Computer Vision', 'IoT Integration'],
    github: `${GITHUB_PROFILE}/ForestNet`,
    demo: null,
    featured: false,
  },
  {
    id: 'ams-pro',
    name: 'AMS Pro',
    subtitle: 'Intelligent Inventory System',
    description:
      'An AI-powered inventory system with a triple-engine barcode scanner that reads damaged or curved barcodes directly from photos, removing manual data entry from warehouse workflows.',
    features: [
      'Triple-engine barcode scanning (ZXing, QuaggaJS, Tesseract OCR) for damaged or curved barcodes',
      'Automated product identification via OpenFoodFacts and UPCItemDB lookups with a web-scraping fallback',
      'MySQL-backed inventory tracking with a Node.js/Express API',
    ],
    tech: ['Node.js', 'Express.js', 'MySQL', 'ZXing', 'QuaggaJS', 'Tesseract.js'],
    github: `${GITHUB_PROFILE}/AMS-Pro`,
    demo: null,
    featured: false,
  },
  {
    id: 'inventory-management-agent',
    name: 'Inventory Management Agent',
    subtitle: 'HPE & Intel Programme Project',
    description:
      'An AI agent-driven inventory management tool built for the HPE & Intel programme, with a Streamlit interface for tracking stock and managing inventory workflows in real time.',
    features: ['Streamlit-based interface for live inventory tracking', 'Agent-driven workflow automation', 'Built as part of the HPE & Intel Unnati programme'],
    tech: ['Python', 'Streamlit'],
    github: `${GITHUB_PROFILE}/Inventory-Management-Agent`,
    demo: 'https://inventory-management-harsh-2706.streamlit.app/',
    featured: false,
  },
]
