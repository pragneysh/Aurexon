export type ProductCategory =
  | 'Aluminium'
  | 'Brass'
  | 'Ferrous'
  | 'Copper'
  | 'Stainless Steel';

export const productCategories: ProductCategory[] = [
  'Aluminium',
  'Brass',
  'Ferrous',
  'Copper',
  'Stainless Steel',
];

export type ImageAttribution = {
  source: string;
  license: string;
  author: string;
  physicalMatch: string;
};

export type Product = {
  id: string;
  slug: string;
  category: ProductCategory;
  title: string;
  materialGrade?: string;
  isriCode?: string;
  hsCode?: string;
  composition?: string;
  standardNames?: string[];
  description: string;
  overview: string;
  image: string;
  gallery: string[];
  specifications: string[];
  applications: string[];
  packaging: string[];
  referenceUrl?: string;
  imageAttribution?: ImageAttribution;
};

export const products: Product[] = [
  {
    "id": "alu-6061",
    "slug": "aluminum-6061-scrap",
    "category": "Aluminium",
    "title": "Aluminium 6061 Scrap (Telic)",
    "materialGrade": "6061-T6 / Al-Mg-Si Alloy",
    "isriCode": "Telic",
    "hsCode": "7602.00",
    "composition": "Al min 95.8–98.6%, Mg 0.8–1.2%, Si 0.4–0.8%, Cu 0.15–0.40%",
    "standardNames": [
      "6061 Aluminium Alloy",
      "Telic",
      "6061-T6 Scrap",
      "Structural Aluminium Scrap"
    ],
    "description": "Clean structural aluminium 6061 alloy offcuts, plate cuttings, and extrusions with controlled magnesium and silicon chemistry for high-grade remelting.",
    "overview": "Aluminium 6061 is a precipitation-hardened structural alloy prized across aerospace, marine, and industrial fabrication. Sourced as clean manufacturing scrap free from attachments, dirt, and heavy iron contamination.",
    "image": "/images/alu-profiles.jpg",
    "gallery": [
      "/images/alu-profiles.jpg",
      "/images/category-aluminium.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Alloy Grade: 6061 / 6061-T6 series",
      "Purity: 97%+ aluminium content",
      "ISRI Specification: Telic compliant",
      "Tolerance: Iron (Fe) < 0.7%, non-metallic contaminants < 1%",
      "Origin: Industrial fabrication cuts, marine & aerospace offcuts"
    ],
    "applications": [
      "Secondary billet production",
      "Foundry remelt ingots",
      "Extrusion billet manufacturing",
      "Automotive casting"
    ],
    "packaging": [
      "Baled in tight bundles",
      "Loose in 20ft/40ft containers",
      "Bulk loaded with certified weight slips"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Industrial Metallurgy Archive",
      "physicalMatch": "Clean structural 6061-T6 aluminium extrusion profiles and offcuts"
    }
  },
  {
    "id": "alu-6063-extrusion",
    "slug": "aluminum-6063-extrusion-scrap",
    "category": "Aluminium",
    "title": "Aluminium 6063 Extrusion Scrap (Toto)",
    "materialGrade": "6063 Architectural Alloy",
    "isriCode": "Toto",
    "hsCode": "7602.00",
    "composition": "Al min 97.5–99.3%, Mg 0.45–0.9%, Si 0.2–0.6%",
    "standardNames": [
      "6063 Extrusion Scrap",
      "Toto",
      "Architectural Aluminium Scrap",
      "Mill Finish Extrusion"
    ],
    "description": "Clean mill-finish 6063 aluminium extrusion profiles, window sections, and door frames free from thermal breaks, iron screws, and plastic fittings.",
    "overview": "High-purity architectural extrusion scrap sourced from profile extruders, window fabricators, and building demolition. Consists of clean 6063 profiles with high recovery yield and minimal dross formation.",
    "image": "/images/alu-profiles.jpg",
    "gallery": [
      "/images/alu-profiles.jpg",
      "/images/category-aluminium.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Material: 6063 aluminium alloy profiles",
      "Purity: 98%+ aluminium recovery",
      "ISRI Code: Toto",
      "Contaminants: Free from zinc, iron screws, rubber glazing, and paint",
      "Format: Cut lengths or compressed profile bundles"
    ],
    "applications": [
      "Primary & secondary extrusion billet production",
      "Aluminium deoxidant manufacturing",
      "Foundry alloy additives"
    ],
    "packaging": [
      "Dense briquettes",
      "Strapped bales",
      "Loose in dry sea containers"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Industrial Metallurgy Archive",
      "physicalMatch": "Architectural 6063 mill-finish extrusion profiles and window frames"
    }
  },
  {
    "id": "alu-ubc",
    "slug": "aluminum-ubc-scrap",
    "category": "Aluminium",
    "title": "Aluminium UBC Scrap (Taldork / Taldon)",
    "materialGrade": "3004 Body / 5182 Lid Alloy Blend",
    "isriCode": "Taldork / Taldon",
    "hsCode": "7602.00",
    "composition": "Al 92–95%, Mg 1.0–1.3%, Mn 0.8–1.2%, Fe max 0.4%",
    "standardNames": [
      "Used Beverage Cans (UBC)",
      "Taldon",
      "Taldork",
      "Aluminium Can Bales",
      "Post-Consumer Can Scrap"
    ],
    "description": "High-density baled used beverage cans (UBC) magnetically sorted to eliminate steel cans and moisture-controlled for remelting loops.",
    "overview": "A cornerstone of circular aluminium metallurgy, post-consumer beverage container scrap offers high energy savings compared to primary smelting. Sourced through municipal recovery and industrial recycling sorting lines.",
    "image": "/images/alu-ubc-bales.jpg",
    "gallery": [
      "/images/alu-ubc-bales.jpg",
      "/images/category-aluminium.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Grade: Post-consumer used beverage cans",
      "ISRI Code: Taldork (briquetted) / Taldon (baled)",
      "Aluminium Recovery: 92–95% metallic recovery",
      "Impurities: Max 2% moisture, max 1% outthrow/dirt",
      "Processing: Magnetically separated and high-pressure compacted"
    ],
    "applications": [
      "Can-to-can rolling ingot production",
      "Secondary alloy smelting",
      "Deoxidation cones and pellets"
    ],
    "packaging": [
      "High-density bales (approx. 400–800 kg)",
      "Dense briquettes",
      "Seaworthy 40ft HC containerized loading"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Recycling Facility Archive",
      "physicalMatch": "High-density compacted bales of post-consumer aluminium beverage cans"
    }
  },
  {
    "id": "alu-ingot-a7",
    "slug": "aluminum-ingot-a7",
    "category": "Aluminium",
    "title": "Aluminium Ingot A7 (99.7% Primary)",
    "materialGrade": "Primary Grade A7 / P1020A",
    "isriCode": "Primary Ingot Standard",
    "hsCode": "7601.10",
    "composition": "Al min 99.70%, Fe max 0.20%, Si max 0.10%, Zn max 0.03%, Ti max 0.02%",
    "standardNames": [
      "A7 Ingot",
      "Primary Aluminium Ingot",
      "P1020A",
      "High Purity Ingot",
      "LME Standard Ingot"
    ],
    "description": "Standard 99.7% primary aluminium ingots cast for foundry remelting, high-specification rolling, wire-drawing, and master alloy compounding.",
    "overview": "Commercial primary aluminium ingots meeting international LME Grade A7 specifications. Uniform weight and clean surface finish ensure consistent melt chemistry and thermal efficiency in electric and gas furnaces.",
    "image": "/images/alu-ingots-primary.jpg",
    "gallery": [
      "/images/alu-ingots-primary.jpg",
      "/images/category-aluminium.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Chemical Purity: Al >= 99.70%",
      "Dimensions: Standard trapezoidal ingot format (approx. 15–25 kg each)",
      "Standards: ASTM B292 / EN AB-99.70 / GOST 11069-2001",
      "Surface: Clean, free of slag inclusions and dross crusts",
      "Trace Elements: Controlled Fe, Si, Cu, and Zn limits"
    ],
    "applications": [
      "Extrusion billet casting",
      "Electrical wire & conductor rod casting",
      "Aluminium foil & sheet rolling",
      "Foundry alloy preparation"
    ],
    "packaging": [
      "Strapped wooden pallets (approx. 1,000 kg bundles)",
      "Polypropylene hooded bundles",
      "20ft FCL container loads"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Foundry Operations Archive",
      "physicalMatch": "Clean trapezoidal primary aluminium 99.70% ingots stacked on pallets"
    }
  },
  {
    "id": "alu-ingot-a8",
    "slug": "aluminum-ingot-a8",
    "category": "Aluminium",
    "title": "Aluminium Ingot A8 (99.8% High Purity)",
    "materialGrade": "Primary Grade A8 / P0610 / P0404",
    "isriCode": "High Purity Primary Ingot",
    "hsCode": "7601.10",
    "composition": "Al min 99.80%, Fe max 0.12%, Si max 0.08%, Cu max 0.015%",
    "standardNames": [
      "A8 Ingot",
      "Ultra Pure Aluminium Ingot",
      "High Grade Primary Ingot",
      "99.8 Ingot"
    ],
    "description": "Ultra-pure 99.80% minimum aluminium ingots refined for demanding electrical, aerospace, specialized foil, and high-conductivity applications.",
    "overview": "Premium-grade primary ingots with tight elemental restrictions on iron, silicon, and trace heavy metals. Ideal for smelters producing capacitor foils, electronic conductors, and specialized aerospace alloys.",
    "image": "/images/alu-ingots-primary.jpg",
    "gallery": [
      "/images/alu-ingots-primary.jpg",
      "/images/category-aluminium.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Chemical Purity: Al >= 99.80%",
      "Iron Contamination: Fe <= 0.12%",
      "Silicon Contamination: Si <= 0.08%",
      "Form: Solid ingots (approx. 15–20 kg each)",
      "Certification: Full spectrometer mill test certificates per heat"
    ],
    "applications": [
      "Electronic component substrates",
      "High-purity capacitor foils",
      "Aerospace alloy preparation",
      "Advanced chemical catalysts"
    ],
    "packaging": [
      "Steel strapped bundles on heat-treated wooden runners",
      "Secure shrink-wrapped bundles (~1 MT)",
      "20ft dry containerized shipping"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Foundry Operations Archive",
      "physicalMatch": "High-purity primary aluminium 99.80% ingots strapped on pallets"
    }
  },
  {
    "id": "alu-wire-tassel",
    "slug": "aluminum-wire-scrap-tassel",
    "category": "Aluminium",
    "title": "Aluminium Wire Scrap (Tassel)",
    "materialGrade": "1350 / EC Grade Aluminium",
    "isriCode": "Tassel",
    "hsCode": "7602.00",
    "composition": "Al min 99.50%, Conductivity min 61% IACS",
    "standardNames": [
      "Tassel",
      "EC Aluminium Wire",
      "Clean Conductor Scrap",
      "Unalloyed Aluminium Wire"
    ],
    "description": "Clean unalloyed electrical conductor (EC) grade aluminium wire and cable scrap, stripped of insulation, steel cores, and foreign attachments.",
    "overview": "High-purity transmission line offcuts and electrical utility wire scrap consisting of unalloyed 1350 aluminium. Free from grease, iron reinforcement strands (ACSR core wire), and PVC coatings.",
    "image": "/images/products/alu-wire-conductor.jpg",
    "gallery": [
      "/images/products/alu-wire-conductor.jpg",
      "/images/alu-profiles.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Material: 1350 Electrical Conductor grade wire",
      "Purity: 99.5%+ aluminium",
      "ISRI Code: Tassel",
      "Condition: Bare, bright, unburnt, clean of insulation and greases",
      "Diameter: Multi-strand heavy wire and utility transmission gauges"
    ],
    "applications": [
      "Master alloy formulation",
      "Electrical redraw rod remelting",
      "Foundry deoxidants",
      "Die-casting alloy balancing"
    ],
    "packaging": [
      "Chopped coils in gaylord boxes",
      "Hydraulically compacted bales",
      "Loose strapped coils in containers"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:ACSR and ACCC.JPG)",
      "license": "CC BY-SA 3.0",
      "author": "Alan Barton",
      "physicalMatch": "Bare unalloyed electrical conductor (EC) aluminium transmission wire strands"
    }
  },
  {
    "id": "alu-turnings-tense",
    "slug": "aluminum-turnings-scrap-tense",
    "category": "Aluminium",
    "title": "Aluminium Turnings & Borings (Tense)",
    "materialGrade": "Mixed Machining Alloys (6000 / 2000 / 7000 series)",
    "isriCode": "Tense",
    "hsCode": "7602.00",
    "composition": "Al 90–98%, Moisture & oil < 3%, Free iron < 1%",
    "standardNames": [
      "Tense",
      "Aluminium Swarf",
      "Machining Chips",
      "Aluminium Borings"
    ],
    "description": "Clean, segregated aluminium machining turnings, borings, and millings from precision CNC machine shops and extrusion fabrication.",
    "overview": "Machine shop chips and turnings produced during milling and boring of aluminium components. Processed to minimize cutting fluid, residual moisture, and magnetic iron particles.",
    "image": "/images/products/alu-turnings.jpg",
    "gallery": [
      "/images/products/alu-turnings.jpg",
      "/images/alu-profiles.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Purity: 90–98% metallic aluminium content",
      "ISRI Specification: Tense compliant",
      "Moisture & Cutting Fluids: Controlled under 3%",
      "Free Magnetic Fe: Max 0.75% via magnetic separation",
      "Form: Shredded or briquetted dry chips"
    ],
    "applications": [
      "Secondary smelters",
      "Aluminium deoxidant granules",
      "Foundry ingot production"
    ],
    "packaging": [
      "Compressed high-density pucks/briquettes",
      "Jumbo bags (1 MT)",
      "Bulk tipper container loading"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:BS VW Aluminium Swarf.JPG)",
      "license": "CC BY-SA 3.0",
      "author": "BS VW",
      "physicalMatch": "Aluminium CNC machining turnings, spirals, and swarf chips"
    }
  },
  {
    "id": "alu-dross-thril",
    "slug": "aluminum-dross-skimmings-thril",
    "category": "Aluminium",
    "title": "Aluminium Dross & Skimmings (Thril)",
    "materialGrade": "Smelter Byproduct Skimmings",
    "isriCode": "Thril",
    "hsCode": "2620.40",
    "composition": "Metallic Al 10–70%, Al2O3 balance with fluxing salts",
    "standardNames": [
      "Thril",
      "White Dross",
      "Black Dross",
      "Aluminium Slag",
      "Furnace Skimmings"
    ],
    "description": "Furnace skimmings and dross generated during primary smelting and secondary remelting, suitable for rotary furnace metallic recovery.",
    "overview": "Industrial by-product skimmed from aluminium melting hearths containing free metallic aluminium trapped within an oxide skin. Economically processed in tilting rotary furnaces with salt fluxes.",
    "image": "/images/products/alu-dross.png",
    "gallery": [
      "/images/products/alu-dross.png",
      "/images/alu-ingots-primary.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Metallic Aluminium Content: 10% to 70% (tested by wet chemical assay)",
      "ISRI Code: Thril",
      "Type: White dross (low-salt) or black dross (salt-cake residual)",
      "Condition: Dry, free from unspent explosive chemicals",
      "Particle Size: Crushed lumps, skimmings, or screened fines"
    ],
    "applications": [
      "Rotary furnace salt flux remelting",
      "Synthetic slag conditioning in steelmaking",
      "Alumina refractories production"
    ],
    "packaging": [
      "Sealed steel drums",
      "Heavy-duty poly-lined jumbo bags (1 MT)",
      "Moisture-proof bulk containers"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Aluminium dross.png)",
      "license": "Public domain",
      "author": "Nbritton",
      "physicalMatch": "Smelter furnace dross skimmings and salt-cake metallic recovery crust"
    }
  },
  {
    "id": "alu-cu-radiators",
    "slug": "aluminum-copper-radiators-scrap",
    "category": "Aluminium",
    "title": "Aluminium-Copper Radiators (Talk / Tally / ACR)",
    "materialGrade": "ACR HVAC Heat Exchanger Scrap",
    "isriCode": "Talk / Tally",
    "hsCode": "7602.00",
    "composition": "Cu 40–50%, Al 50–55%, Fe max 1.5%",
    "standardNames": [
      "ACR",
      "Talk",
      "Tally",
      "Aluminium Copper Radiators",
      "HVAC Fin Scrap"
    ],
    "description": "Clean air-conditioning and refrigeration cooling coils with copper tubing encased in aluminium cooling fins, free from iron headers and brass ends.",
    "overview": "High-value composite scrap derived from residential, commercial, and automotive cooling systems. Shredded and air-classified to produce clean separated copper and aluminium streams.",
    "image": "/images/products/alu-cu-radiators.jpg",
    "gallery": [
      "/images/products/alu-cu-radiators.jpg",
      "/images/copper-wire.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Material: Clean copper tubing with aluminium cooling fins",
      "ISRI Code: Talk (clean, iron-free) / Tally (with steel brackets)",
      "Metals Balance: Approx. 45% Copper, 53% Aluminium",
      "Condition: Depleted of refrigerants and oils",
      "Preparation: Sheared to furnace charging sizes or whole blocks"
    ],
    "applications": [
      "Mechanical separation plants",
      "Copper-aluminium recovery shredders",
      "Secondary smelter charging"
    ],
    "packaging": [
      "High-density hydraulic bales",
      "Gaylord boxes on skids",
      "Loose containerized loading"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Tube & fins heat exchanger tubestack.jpg)",
      "license": "CC BY-SA 4.0",
      "author": "Frank Vincentz",
      "physicalMatch": "Clean ACR heat exchanger coil featuring copper tubes through aluminium cooling fins"
    }
  },
  {
    "id": "alu-cast-troma",
    "slug": "aluminum-cast-scrap-troma",
    "category": "Aluminium",
    "title": "Aluminium Cast Scrap (Troma)",
    "materialGrade": "Cast Silicon-Aluminium Alloys (A380 / A356 / ADC12)",
    "isriCode": "Troma",
    "hsCode": "7602.00",
    "composition": "Al 85–95%, Si 7–12%, Cu 2–4%, Fe max 1.2%",
    "standardNames": [
      "Troma",
      "Old Cast Aluminium",
      "Automotive Castings",
      "Engine Housings",
      "Transmission Cases"
    ],
    "description": "Clean automotive and machinery cast aluminium scrap consisting of stripped engine heads, gearbox cases, pump housings, and manifolds.",
    "overview": "Secondary foundry-grade cast scrap sourced from automotive dismantling and industrial plant decommissioning. Free from iron liners, steel studs, oil filters, and heavy sludge.",
    "image": "/images/products/alu-cast-engine.png",
    "gallery": [
      "/images/products/alu-cast-engine.png",
      "/images/alu-profiles.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Material: Clean cast aluminium components",
      "ISRI Code: Troma",
      "Purity: 88–94% metallic aluminium recovery",
      "Attachments: Free from zinc die-cast parts, brass bushings, and iron studs",
      "Moisture & Oil: Max 2% residual hydrocarbons"
    ],
    "applications": [
      "A380 / ADC12 secondary foundry ingot production",
      "Automotive replacement component casting",
      "Deoxidant manufacturing"
    ],
    "packaging": [
      "Loose loaded in bulk containers",
      "Pallet boxes / crate containers",
      "Strapped bundles"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:BlocoMotor4CilindrosAluminio.PNG)",
      "license": "CC BY-SA 3.0",
      "author": "Denis Brandão",
      "physicalMatch": "Clean automotive cast aluminium 4-cylinder engine block"
    }
  },
  {
    "id": "alu-litho-sheets",
    "slug": "aluminum-lithographic-sheets-scrap",
    "category": "Aluminium",
    "title": "Aluminium Lithographic Sheets (Tablet / Tabloid)",
    "materialGrade": "1050 / 3003 Clean Printing Sheet",
    "isriCode": "Tablet / Tabloid",
    "hsCode": "7602.00",
    "composition": "Al min 99.0–99.5%, Fe max 0.35%, Si max 0.25%",
    "standardNames": [
      "Litho Plates",
      "Tablet",
      "Tabloid",
      "Offset Printing Plates",
      "Printing Aluminium Scrap"
    ],
    "description": "Clean unalloyed 1000-series aluminium offset printing plates, free from paper interleaving, plastic film, adhesive tape, and chemical residues.",
    "overview": "One of the cleanest forms of industrial aluminium sheet scrap, lithographic plates are produced from high-grade rolled sheet. Yields exceptional melt recovery with almost zero dross creation.",
    "image": "/images/products/alu-litho-plates.png",
    "gallery": [
      "/images/products/alu-litho-plates.png",
      "/images/alu-profiles.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Material: 1050 / 1100 series rolled printing sheets",
      "ISRI Code: Tablet (clean, paper-free) / Tabloid (exposed litho)",
      "Aluminium Purity: 99%+ aluminium content",
      "Surface: Clean offset ink traces acceptable, free from paper and adhesive tape",
      "Format: Flat unbent sheets or compacted bundles"
    ],
    "applications": [
      "High-purity rolling slab remelt",
      "Primary alloy sweetening",
      "Aluminium powder manufacturing"
    ],
    "packaging": [
      "Flat stacked on pallets strapped with steel bands",
      "Compacted bales",
      "20ft FCL container loads"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Offset Printing Plate.png)",
      "license": "CC BY-SA 4.0",
      "author": "うぃき野郎",
      "physicalMatch": "Clean unalloyed rolled aluminium offset printing plates (lithographic sheets)"
    }
  },
  {
    "id": "alu-mixed-extrusion-tutu",
    "slug": "mixed-aluminum-extrusion-tutu",
    "category": "Aluminium",
    "title": "Mixed Aluminium Extrusion Scrap (Tutu)",
    "materialGrade": "6000 Series Mixed Extrusions",
    "isriCode": "Tutu",
    "hsCode": "7602.00",
    "composition": "Al 94–97%, Mg 0.4–0.8%, Si 0.3–0.6%, surface finishes < 3%",
    "standardNames": [
      "Tutu",
      "Mixed Extrusions",
      "Painted Extrusions",
      "Anodized Profile Scrap"
    ],
    "description": "Mixed architectural aluminium extrusion profiles with painted, anodized, or powder-coated surfaces, free from thermal breaks and heavy iron screws.",
    "overview": "Demolition and fabrication profiles that feature surface coatings such as polyester powder coating, acrylic paints, or anodizing. Thermally stripped and melted in reverberatory furnaces with skimming systems.",
    "image": "/images/alu-profiles.jpg",
    "gallery": [
      "/images/alu-profiles.jpg",
      "/images/category-aluminium.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Alloy Family: 6000-series profile cuts",
      "ISRI Code: Tutu",
      "Aluminium Recovery: 94–97%",
      "Condition: Surface-coated, free of steel fasteners and zinc attachments",
      "Dimensions: Cut lengths between 1 and 3 meters"
    ],
    "applications": [
      "Secondary billet remelting",
      "Foundry alloy production",
      "General recycling furnaces"
    ],
    "packaging": [
      "Hydraulically compressed profile bundles",
      "Strapped bales",
      "Loose packed containers"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Industrial Metallurgy Archive",
      "physicalMatch": "Mixed architectural 6000-series painted and anodized aluminium extrusion profiles"
    }
  },
  {
    "id": "alu-he9-extrusion",
    "slug": "he9-aluminum-6063-extrusion",
    "category": "Aluminium",
    "title": "HE9 Aluminium 6063 Extrusion Scrap",
    "materialGrade": "HE9 (BS 1474) / 6063 Grade",
    "isriCode": "Toto High-Spec",
    "hsCode": "7602.00",
    "composition": "Al min 98.0%, Mg 0.45–0.90%, Si 0.20–0.60%, Fe max 0.35%",
    "standardNames": [
      "HE9 Extrusion",
      "6063 Clean",
      "Architectural Scrap",
      "British Standard HE9 Scrap"
    ],
    "description": "Clean, mill-finish HE9 (6063) aluminium extrusion offcuts directly from profile manufacturing plants, guaranteed zero post-consumer contamination.",
    "overview": "High-grade industrial offcuts meeting British Standard HE9 specifications. Sourced from precision extrusion lines, window fabricators, and architectural engineering plants.",
    "image": "/images/alu-profiles.jpg",
    "gallery": [
      "/images/alu-profiles.jpg",
      "/images/category-aluminium.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Standard: BS 1474 HE9 / ISO AlMg0.5Si",
      "Purity: 98%+ aluminium recovery",
      "Contaminants: Free from iron fasteners, plastic thermal bridges, and heavy lacquer",
      "Yield: Minimal dross formation during crucible melting",
      "Form: Clean production crop ends and unpunched extrusions"
    ],
    "applications": [
      "Direct remelt into 6063 extrusion billets",
      "Anodizing-grade alloy remelting",
      "High-purity casting"
    ],
    "packaging": [
      "Strapped uniform bundles",
      "Dense export bales",
      "20ft/40ft containerized shipments"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Industrial Metallurgy Archive",
      "physicalMatch": "Clean mill-finish HE9 (6063) architectural extrusion offcuts and profile sections"
    }
  },
  {
    "id": "alu-he30-extrusion",
    "slug": "he30-aluminum-6082-extrusion",
    "category": "Aluminium",
    "title": "HE30 Aluminium 6082 Extrusion Scrap",
    "materialGrade": "HE30 (BS 1474) / 6082 Structural Grade",
    "isriCode": "Structural Extrusion",
    "hsCode": "7602.00",
    "composition": "Al 95.2–98.3%, Si 0.7–1.3%, Mn 0.4–1.0%, Mg 0.6–1.2%",
    "standardNames": [
      "HE30",
      "6082 Extrusion",
      "Structural Aluminium Scrap",
      "High Strength Alloy Scrap"
    ],
    "description": "High-strength structural aluminium HE30 (6082) extrusion profiles, heavy engineering sections, beams, and rail car components.",
    "overview": "Higher manganese and silicon structural alloy scrap offering exceptional strength. Sourced from crane bridges, transport scaffolding, transport vehicles, and maritime structural frameworks.",
    "image": "/images/alu-profiles.jpg",
    "gallery": [
      "/images/alu-profiles.jpg",
      "/images/category-aluminium.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Standard: BS 1474 HE30 / EN AW-6082",
      "Purity: 97%+ aluminium content",
      "Alloying Profile: Higher manganese content (Mn 0.4–1.0%) for structural toughness",
      "Cleanliness: Clean production scrap free from steel bolts and welds",
      "Dimensions: Heavy wall thickness sections and structural offcuts"
    ],
    "applications": [
      "Structural alloy remelting",
      "Heavy transport casting alloys",
      "Marine component fabrication ingots"
    ],
    "packaging": [
      "Heavy-gauge strapped bundles",
      "Export container loading",
      "Bulk flat-rack loading for long beams"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Industrial Metallurgy Archive",
      "physicalMatch": "Structural HE30 (6082) high-strength engineering extrusion profiles"
    }
  },
  {
    "id": "alu-granules-pure",
    "slug": "pure-aluminum-granules-deox",
    "category": "Aluminium",
    "title": "Pure Aluminium Granules (Deoxidation Grade)",
    "materialGrade": "Deoxidation Grade 99%+",
    "isriCode": "Aluminium Granules",
    "hsCode": "7602.00",
    "composition": "Al min 99.0%, Fe max 0.35%, Si max 0.30%",
    "standardNames": [
      "Aluminium Granules",
      "Al Chops",
      "Steel Deoxidizer Granules",
      "Chopped Aluminium Wire"
    ],
    "description": "Uniformly sized 99%+ pure aluminium granules and pellets manufactured for precise steel deoxidation, chemical synthesis, and master alloy melting.",
    "overview": "Granulated from clean EC-grade wire and chopped conductor strands. The uniform grain size ensures rapid and predictable dissolution when injected into ladle metallurgy furnaces (LMF).",
    "image": "/images/products/alu-granules.jpg",
    "gallery": [
      "/images/products/alu-granules.jpg",
      "/images/alu-profiles.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Chemical Purity: Al >= 99.0% min",
      "Particle Sizing: 2 mm to 8 mm controlled grain size",
      "Density: High bulk density for efficient ladle penetration",
      "Free Moisture: < 0.1% dry guaranteed",
      "Dust Content: Screened to remove fines (< 0.5% below 1 mm)"
    ],
    "applications": [
      "Steel ladle deoxidation",
      "Exothermic riser sleeve formulations",
      "Ferroalloy production",
      "Thermite and chemical reduction"
    ],
    "packaging": [
      "1,000 kg moisture-proof Big Bags with bottom discharge spout",
      "25 kg multi-wall paper sacks on pallets"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Aluminium Granules.jpg)",
      "license": "CC BY-SA 3.0",
      "author": "Synergy Aluminium",
      "physicalMatch": "Uniformly sized clean 99%+ deoxidation aluminium granules and pellets"
    }
  },
  {
    "id": "alu-rsi-sow",
    "slug": "aluminum-remelt-sow-ingot-rsi",
    "category": "Aluminium",
    "title": "Aluminium Remelt Sow Ingot (RSI)",
    "materialGrade": "Secondary Foundry RSI (A380 / ADC12 / 6063 Remelt)",
    "isriCode": "Remelt Ingot / Sow",
    "hsCode": "7601.20",
    "composition": "Secondary alloy tailored to customer melt recipes",
    "standardNames": [
      "RSI",
      "Sow Ingot",
      "Remelt Scrap Ingot",
      "Secondary Ingot",
      "Foundry Sow"
    ],
    "description": "Heavy secondary aluminium sow ingots cast from verified scrap melts, providing cost-effective furnace charge material with known chemistry.",
    "overview": "Cast in heavy open molds (typically 500 kg to 1,200 kg) directly from reverberatory smelting operations. Provides secondary smelters and foundries with dense, easy-to-charge bulk aluminium units.",
    "image": "/images/alu-ingots-primary.jpg",
    "gallery": [
      "/images/alu-ingots-primary.jpg",
      "/images/category-aluminium.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Weight Range: Approx. 500 kg – 1,000 kg per sow",
      "Form: Solid monolithic block with crane lift lugs or forklift cavities",
      "Chemistry: Certified spark spectrometer analysis per individual heat",
      "Slag / Inclusion: Skimmed clean during pouring with minimal surface oxides",
      "Trace Metals: Verified limits on Fe, Si, Cu, Zn, and Mg"
    ],
    "applications": [
      "Die-casting furnace bulk charge",
      "Secondary refiners",
      "High-volume aluminium master blending"
    ],
    "packaging": [
      "Loose loaded with certified weight certificates per piece",
      "Flatbed truck / 20ft container shipping"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Foundry Operations Archive",
      "physicalMatch": "Solid secondary remelt aluminium sow ingot (RSI) blocks for foundry charging"
    }
  },
  {
    "id": "alu-pure-sow-primary",
    "slug": "pure-aluminum-ingot-sow-primary",
    "category": "Aluminium",
    "title": "Pure Aluminium Ingot Sow (Primary Grade)",
    "materialGrade": "Primary 99.7% Sow / LME Spec",
    "isriCode": "Primary Sow Ingot",
    "hsCode": "7601.10",
    "composition": "Al min 99.70%, Fe max 0.20%, Si max 0.10%",
    "standardNames": [
      "Pure Sow",
      "Primary Sow Ingot",
      "High Purity Sow",
      "LME Grade Sow",
      "Smelter Sow"
    ],
    "description": "Heavy primary aluminium sow ingots cast directly at primary smelters with 99.70% minimum purity for high-capacity industrial melting.",
    "overview": "High-purity primary aluminium cast into large format sows (up to 1,000 kg). Designed for large-scale aluminum rolling mills and billet casters seeking rapid charging without excessive handling of smaller ingots.",
    "image": "/images/alu-ingots-primary.jpg",
    "gallery": [
      "/images/alu-ingots-primary.jpg",
      "/images/category-aluminium.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Al Purity: 99.70% minimum primary smelter quality",
      "Weight: 500 kg to 1,000 kg per piece",
      "Specifications: ASTM B292 / LME High Grade registration equivalent",
      "Trace Controls: Controlled low gallium, vanadium, and titanium",
      "Traceability: Batch numbers and heat analysis cast directly on sow face"
    ],
    "applications": [
      "Rolling mills for sheet & foil",
      "Large extrusion billet casting lines",
      "Cable redraw rod continuous casting"
    ],
    "packaging": [
      "Bulk containerized loading with dunnage bracing",
      "Certified weighbridge documentation"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Foundry Operations Archive",
      "physicalMatch": "Large format primary 99.70% aluminium sow ingot cast for high-capacity charging"
    }
  },
  {
    "id": "alu-wheels-aroma",
    "slug": "aluminum-wheel-scrap-aroma",
    "category": "Aluminium",
    "title": "Aluminium Wheel Scrap (Aroma / Auto Wheels)",
    "materialGrade": "A356.2 / AlSi7Mg0.3 Cast Auto Wheels",
    "isriCode": "Aroma",
    "hsCode": "7602.00",
    "composition": "Al 91–93%, Si 6.5–7.5%, Mg 0.25–0.45%, Fe max 0.15%",
    "standardNames": [
      "Aroma",
      "Alloy Wheels Scrap",
      "Car Rim Scrap",
      "A356 Wheel Scrap",
      "Chrome-Free Wheels"
    ],
    "description": "Clean, stripped automotive aluminium alloy wheels free from balance weights, chrome plating, rubber tires, and valve stems.",
    "overview": "Premium automotive casting scrap composed of high-strength A356 alloy. Sourced from vehicle dismantlers and wheel remanufacturers, offering exceptionally low iron levels for foundry remelting.",
    "image": "/images/products/alu-wheels.jpg",
    "gallery": [
      "/images/products/alu-wheels.jpg",
      "/images/category-aluminium.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Alloy Specification: A356.2 / EN AC-42100",
      "ISRI Code: Aroma",
      "Purity: 92%+ aluminium recovery",
      "Cleanliness: 100% free of lead balance weights, steel lugs, and valve stems",
      "Surface: Clean painted or unpainted, free of chrome-plated units"
    ],
    "applications": [
      "Automotive alloy remelting",
      "A356 casting ingots",
      "High-strength structural castings"
    ],
    "packaging": [
      "Stacked on wooden pallets strapped with PET bands",
      "Baled / crushed export packing",
      "Loose container loading"
    ],
    "referenceUrl": "https://nauticametalscrap.com/aluminum",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Rover Metro GTi MPI alloy wheels 1.jpg)",
      "license": "CC BY 3.0",
      "author": "Pava",
      "physicalMatch": "Clean stripped automotive cast aluminium alloy wheels (A356.2)"
    }
  },
  {
    "id": "cu-cathode-lme",
    "slug": "copper-cathode-grade-a",
    "category": "Copper",
    "title": "Copper Cathode (99.99% LME Grade A)",
    "materialGrade": "Electrolytic Copper Cathode / Cu-CATH-1",
    "isriCode": "LME Grade A Cathode",
    "hsCode": "7403.11",
    "composition": "Cu min 99.9935%, Oxygen max 10 ppm, S max 15 ppm",
    "standardNames": [
      "Grade A Cathode",
      "LME Copper Cathode",
      "Electrolytic Copper",
      "Cu-CATH-1",
      "ASTM B115 Grade 1"
    ],
    "description": "High-purity 99.99% electrolytic copper cathodes adhering to LME Grade A specifications for redraw rod, precision brass, and electrical components.",
    "overview": "The global benchmark for refined copper, produced through electro-refining or solvent extraction-electrowinning (SX-EW). Offers maximum electrical conductivity and minimal gas porosity.",
    "image": "/images/products/copper-cathode.jpg",
    "gallery": [
      "/images/products/copper-cathode.jpg",
      "/images/copper-wire.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Purity: Cu min 99.99%",
      "Standard: BS EN 1978:1998 (Cu-CATH-1) / ASTM B115 Grade 1",
      "Physical Dimensions: Approx. 914 mm x 914 mm x 12 mm sheets",
      "Weight: Approx. 100–125 kg per cathode sheet",
      "Trace Impurities: Ag < 25 ppm, As < 5 ppm, Bi < 2 ppm, Fe < 10 ppm"
    ],
    "applications": [
      "Continuous casting rod (CCR) for wire and cables",
      "High-precision copper alloys",
      "Electrical busbars & switchgear"
    ],
    "packaging": [
      "Strapped bundles (approx. 2.0–2.5 MT) using high-tensile steel straps",
      "Seaworthy 20ft container packing"
    ],
    "referenceUrl": "https://nauticametalscrap.com/copper",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Copper cathode UMMCII Uralelectromed.jpg)",
      "license": "CC BY-SA 4.0",
      "author": "Niklitov",
      "physicalMatch": "99.99% pure electrolytic copper cathode sheets with cast hanger loops"
    }
  },
  {
    "id": "cu-millberry",
    "slug": "bright-copper-wire-millberry",
    "category": "Copper",
    "title": "Bright Copper Wire Scrap (Millberry / Berry / Candy)",
    "materialGrade": "No. 1 Bare Bright Copper",
    "isriCode": "Berry / Candy / Millberry",
    "hsCode": "7404.00",
    "composition": "Cu min 99.90%, Conductivity min 100% IACS",
    "standardNames": [
      "Millberry",
      "Bare Bright Copper",
      "No. 1 Copper Wire",
      "Berry",
      "Candy"
    ],
    "description": "Uncoated, unalloyed bare bright copper wire and cable scrap, stripped of insulation, free of solder, tinning, ash, and oxidation.",
    "overview": "The highest grade of industrial copper scrap. Consists of clean, bright, unalloyed copper wire, minimum 16 AWG in thickness. Highly sought after by copper rod mills and alloy manufacturers.",
    "image": "/images/copper-wire.jpg",
    "gallery": [
      "/images/copper-wire.jpg",
      "/images/category-copper.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Material: Bare bright unalloyed copper wire",
      "ISRI Specification: Berry (bright wire) / Candy (heavy wire and tube)",
      "Copper Content: 99.9%+ copper recovery",
      "Condition: Clean, bright, untinned, unsoldered, oil-free",
      "Gauge: Minimum 1.2 mm (16 AWG) wire diameter"
    ],
    "applications": [
      "Direct remelting into copper wire rods",
      "Foundry brass and bronze ingots",
      "High-conductivity electrical parts"
    ],
    "packaging": [
      "Chopped coils in gaylord boxes",
      "Hydraulic compacted dense briquettes",
      "Strapped export bundles in 20ft containers"
    ],
    "referenceUrl": "https://nauticametalscrap.com/copper",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Industrial Copper Scrap Yard",
      "physicalMatch": "Bare bright unalloyed copper wire (Millberry) coils, clean and unoxidized"
    }
  },
  {
    "id": "cu-wire-no2",
    "slug": "no-2-copper-wire-birch-cliff",
    "category": "Copper",
    "title": "No. 2 Copper Wire Scrap (Birch / Cliff)",
    "materialGrade": "No. 2 Copper Scrap",
    "isriCode": "Birch / Cliff",
    "hsCode": "7404.00",
    "composition": "Cu min 94–96% recovery, trace Sn, Pb, or oxidation",
    "standardNames": [
      "No. 2 Copper",
      "Birch",
      "Cliff",
      "Oxidized Copper Wire",
      "Tinned Copper Wire"
    ],
    "description": "Clean oxidized, tinned, or hair-wire copper scrap, free from excessively charred insulation, iron attachments, and non-metallic dross.",
    "overview": "Secondary copper wire including hair wire, wire with light tinning, soldered splices, or moderate surface oxidation. Refined in secondary copper smelters and fire-refining anodes.",
    "image": "/images/copper-wire.jpg",
    "gallery": [
      "/images/copper-wire.jpg",
      "/images/category-copper.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Copper Recovery: 94% to 96% metallic yield",
      "ISRI Code: Birch (wire scrap) / Cliff (mixed tubing & wire)",
      "Condition: May contain light surface oxidation or tinned strands",
      "Contaminants: Free from excessive ash, brittle burnt wire, and iron wire",
      "Processing: Magnetically inspected and baled"
    ],
    "applications": [
      "Anode furnace smelting for cathode refining",
      "Secondary brass foundries",
      "Copper sulfate chemical production"
    ],
    "packaging": [
      "High-density hydraulic bales",
      "Gaylord boxes on export pallets",
      "20ft FCL container loads"
    ],
    "referenceUrl": "https://nauticametalscrap.com/copper",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Industrial Copper Scrap Yard",
      "physicalMatch": "No. 2 copper wire scrap with light oxidation and tinned surface traces"
    }
  },
  {
    "id": "cu-tube-clean",
    "slug": "clean-copper-tube-candy",
    "category": "Copper",
    "title": "Clean Copper Tube Scrap (Candy Tube)",
    "materialGrade": "No. 1 Heavy Copper Scrap",
    "isriCode": "Candy / Clove",
    "hsCode": "7404.00",
    "composition": "Cu min 99.0%, Phosphorus deoxidized (Cu-DHP)",
    "standardNames": [
      "Candy Tube",
      "No. 1 Copper Tube",
      "Clean Plumbing Copper",
      "Deoxidized High Phosphorus Pipe"
    ],
    "description": "Clean, unalloyed copper pipe and tubing free from brass fittings, solder joints, insulation, sediment, and heavy corrosion scale.",
    "overview": "Originating from plumbing installations, refrigeration lines, and industrial heat exchangers. Composed of clean Cu-DHP copper offering high remelting purity.",
    "image": "/images/products/copper-tubes.jpg",
    "gallery": [
      "/images/products/copper-tubes.jpg",
      "/images/copper-wire.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Material: Clean copper water tubing and gas pipes",
      "ISRI Code: Candy / Clove",
      "Copper Content: 99.0%+ copper",
      "Condition: Free of solder joints, bronze fittings, and foam insulation",
      "Length: Cut lengths or crushed pipe bundles"
    ],
    "applications": [
      "Secondary copper tube manufacturing",
      "Alloy compounding",
      "Foundry master melts"
    ],
    "packaging": [
      "Dense briquettes",
      "Tightly strapped bundles",
      "Loose packed containers"
    ],
    "referenceUrl": "https://nauticametalscrap.com/copper",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Copper water pipes.jpg)",
      "license": "CC BY-SA 4.0",
      "author": "Santeri Viinamäki",
      "physicalMatch": "Clean unalloyed copper water and plumbing tubing (Candy Tube)"
    }
  },
  {
    "id": "cu-tube-no2",
    "slug": "no-2-copper-tube-soldered",
    "category": "Copper",
    "title": "No. 2 Copper Tube Scrap (Soldered / Mixed)",
    "materialGrade": "No. 2 Plumbing Copper Scrap",
    "isriCode": "Cliff / Mixed Tube",
    "hsCode": "7404.00",
    "composition": "Cu 94–96%, trace Sn-Pb or lead-free solder joints",
    "standardNames": [
      "No. 2 Tube",
      "Soldered Copper Pipe",
      "HVAC Demolition Copper",
      "Refinery Copper Scrap"
    ],
    "description": "Mixed copper plumbing and refrigeration pipes containing soldered joints, silver-solder residue, paint coatings, or light sediment scale.",
    "overview": "Derived from building renovation and demolition plumbing lines. Contains silver or lead-tin solder couplings and brass joints, ideal for refinery charging.",
    "image": "/images/products/copper-tubes.jpg",
    "gallery": [
      "/images/products/copper-tubes.jpg",
      "/images/copper-wire.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Metallic Copper Recovery: 94–96%",
      "ISRI Code: Cliff compliant",
      "Tolerances: May include lead-free and 50/50 soldered couplings",
      "Foreign Material: Free of iron brackets, excessive calcium lime scale, and insulation",
      "Packaging: Flattened and baled for container payload optimization"
    ],
    "applications": [
      "Anode furnace smelting",
      "Copper ingots for commercial brass valves",
      "Chemical copper recovery"
    ],
    "packaging": [
      "Export bales",
      "Loose packed 20ft container loads"
    ],
    "referenceUrl": "https://nauticametalscrap.com/copper",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Copper water pipes.jpg)",
      "license": "CC BY-SA 4.0",
      "author": "Santeri Viinamäki",
      "physicalMatch": "Mixed copper plumbing pipes containing solder couplings and fittings"
    }
  },
  {
    "id": "cu-granules-99",
    "slug": "bright-copper-granules-99",
    "category": "Copper",
    "title": "Bright Copper Granules (99% Chopped Wire)",
    "materialGrade": "No. 1 Copper Granules / Chops",
    "isriCode": "Clove / Cobra",
    "hsCode": "7404.00",
    "composition": "Cu min 99.0–99.5%, Plastic fines < 0.1%",
    "standardNames": [
      "99% Copper Granules",
      "Bright Copper Chops",
      "Wire Granules",
      "Chopped Millberry"
    ],
    "description": "Clean chopped copper granules processed through cable recycling granulators and air-separation tables, free from plastic dust and magnetic wire.",
    "overview": "Produced by granulating clean insulated electrical cables. Granules provide high surface area, rapid furnace melting rates, and consistent bulk density.",
    "image": "/images/products/copper-granules.png",
    "gallery": [
      "/images/products/copper-granules.png",
      "/images/copper-wire.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Purity: 99.0%+ copper content",
      "ISRI Code: Clove / Cobra",
      "Grain Size: 1.5 mm to 4.5 mm uniform chops",
      "Polymer Residue: < 0.1% PVC/XLPE fines",
      "Ferrous Content: Magnetically stripped (< 0.05% Fe)"
    ],
    "applications": [
      "Crucible brass and bronze melting",
      "Chemical production (copper oxide, copper sulfate)",
      "Powder metallurgy"
    ],
    "packaging": [
      "1,000 kg moisture-proof Big Bags with discharge spout on pallets",
      "Export containerized loading"
    ],
    "referenceUrl": "https://nauticametalscrap.com/copper",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Copper Granules.png)",
      "license": "CC BY-SA 4.0",
      "author": "Simon Klein",
      "physicalMatch": "Clean 99%+ bright chopped copper wire granules and chops"
    }
  },
  {
    "id": "cu-granules-mixed",
    "slug": "mixed-copper-granules-95-98",
    "category": "Copper",
    "title": "Mixed Copper Granules (95–98% Recovery)",
    "materialGrade": "No. 2 Copper Granules",
    "isriCode": "Cocoa",
    "hsCode": "7404.00",
    "composition": "Cu 95.0–98.0%, trace tinning, light polymer dust < 0.5%",
    "standardNames": [
      "Mixed Copper Chops",
      "98% Granules",
      "Recovered Cable Granules",
      "Secondary Granules"
    ],
    "description": "Chopped copper granules recovered from mixed automotive harnesses, tinned cables, and communication wiring.",
    "overview": "Recovered from multi-conductor cables through secondary dry shredding and water-table or electrostatic separation systems. Thoroughly sampled for uniform assay.",
    "image": "/images/products/copper-granules.png",
    "gallery": [
      "/images/products/copper-granules.png",
      "/images/copper-wire.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Copper Recovery: 95.0% to 98.0% certified assay",
      "ISRI Code: Cocoa",
      "Granule Size: 1 mm to 5 mm mixed particle range",
      "Non-Metallic Residual: < 0.5% fine polymer",
      "Moisture: Dry processed (< 0.2% moisture)"
    ],
    "applications": [
      "Anode furnace charge",
      "Secondary foundry brass formulations",
      "Industrial chemical salts"
    ],
    "packaging": [
      "Heavy-duty Big Bags (1 MT) strapped on pallets",
      "Containerized dry shipment"
    ],
    "referenceUrl": "https://nauticametalscrap.com/copper",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Copper Granules.png)",
      "license": "CC BY-SA 4.0",
      "author": "Simon Klein",
      "physicalMatch": "Mixed 95–98% recovered secondary chopped copper granules"
    }
  },
  {
    "id": "cu-icw-cables",
    "slug": "insulated-copper-cable-icw",
    "category": "Copper",
    "title": "Insulated Copper Cable Scrap (ICW)",
    "materialGrade": "ICW Scrap (30% to 80% Recovery Grades)",
    "isriCode": "Druid / Drove",
    "hsCode": "7404.00",
    "composition": "Cu recovery 30% to 85% depending on cable gauge",
    "standardNames": [
      "ICW",
      "PVC Insulated Cable",
      "XLPE Power Cable Scrap",
      "Automotive Wiring Harnesses",
      "Communication Cable"
    ],
    "description": "Insulated copper electrical cable scrap from utility power grids, industrial cabling, building wire, and automotive wiring harnesses.",
    "overview": "High-volume recyclable wire streams graded by copper metal yield. Offered in classified categories such as single-core utility power cables (70–80% recovery) and harness wire (45–55% recovery).",
    "image": "/images/products/copper-cable-icw.jpg",
    "gallery": [
      "/images/products/copper-cable-icw.jpg",
      "/images/copper-wire.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Grades Offered: Single core (70–80%), Industrial (55–65%), Harness (45–55%), Telecom (35–45%)",
      "ISRI Code: Druid (heavy insulated) / Drove (light wire & telecommunication)",
      "Condition: Clean dry cables, free of grease, jelly-filled lines strictly segregated",
      "Conductor Material: Pure electrolytic copper strands",
      "Format: Wound reels, stripped cut coils, or baled bundles"
    ],
    "applications": [
      "Mechanical cable chopping & granulation facilities",
      "Copper stripping operations",
      "Metal recovery plants"
    ],
    "packaging": [
      "Compressed export bales",
      "Cut lengths loose packed in 40ft HC containers",
      "Wooden reels for heavy utility cables"
    ],
    "referenceUrl": "https://nauticametalscrap.com/copper",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:3.core.cable.JPG)",
      "license": "CC BY 3.0",
      "author": "Ali K",
      "physicalMatch": "Heavy PVC insulated multi-core power cable with thick copper conductors"
    }
  },
  {
    "id": "cu-punchings-busbar",
    "slug": "copper-punchings-busbar-scrap",
    "category": "Copper",
    "title": "Copper Punchings & Busbar Scrap",
    "materialGrade": "C11000 / ETP Copper Offcuts",
    "isriCode": "Candy Solids / Busbar Drops",
    "hsCode": "7404.00",
    "composition": "Cu min 99.90%, Oxygen 100–400 ppm",
    "standardNames": [
      "Copper Punchings",
      "Bus Bar Drops",
      "ETP Copper Offcuts",
      "Stamping Scrap",
      "Switchgear Offcuts"
    ],
    "description": "Clean electrolytic tough pitch (ETP) copper punchings, busbar segments, and sheet stampings generated from electrical panelboard manufacturing.",
    "overview": "Originates from electrical engineering stamping presses, transformer tap manufacturing, and busbar profiling. High density and known metallurgical consistency make this scrap highly desirable.",
    "image": "/images/products/copper-busbar.jpg",
    "gallery": [
      "/images/products/copper-busbar.jpg",
      "/images/copper-wire.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Alloy: C11000 Electrolytic Tough Pitch (ETP) Copper",
      "Copper Purity: 99.9%+ copper content",
      "ISRI Classification: No. 1 Copper Solids",
      "Cleanliness: Clean, unplated (or strictly segregated tin-plated), free from machine lubricants",
      "Physical Form: Heavy punched plates, flat rectangular busbar segments"
    ],
    "applications": [
      "Direct remelt into copper billets and ingots",
      "Continuous rod manufacturing",
      "High-conductivity bronze casting"
    ],
    "packaging": [
      "Heavy steel drums",
      "Steel-strapped wooden cases",
      "Jumbo bags inside 20ft containers"
    ],
    "referenceUrl": "https://nauticametalscrap.com/copper",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Copper-Ground-Bar 28145-480x360.jpg)",
      "license": "CC BY 2.0",
      "author": "Mark Jansen / Public Photo",
      "physicalMatch": "Clean solid electrolytic copper busbar plates and punched offcuts"
    }
  },
  {
    "id": "cu-transformers-scrap",
    "slug": "copper-transformers-scrap",
    "category": "Copper",
    "title": "Copper Transformers & Motor Scrap",
    "materialGrade": "Electrical Equipment Scrap",
    "isriCode": "Transformer & Electric Motor Scrap",
    "hsCode": "7404.00",
    "composition": "Copper content 20–45%, Silicon steel core 50–70%",
    "standardNames": [
      "Transformer Scrap",
      "Dry Type Transformers",
      "Oil-Filled Transformers",
      "Copper Windings",
      "Electric Motors"
    ],
    "description": "Decommissioned power and distribution transformers, dry-type units, and electric motor stators containing high-grade copper windings.",
    "overview": "Sourced from electric utility sub-stations, industrial plants, and motor rewinding workshops. Offered drained of dielectric fluids with environmental documentation.",
    "image": "/images/products/copper-transformers.png",
    "gallery": [
      "/images/products/copper-transformers.png",
      "/images/category-ferrous.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Type: Oil-filled (drained & certified PCB-free) or dry-type resin cast transformers",
      "Copper Yield: 20% to 45% recoverable high-purity copper windings",
      "Ferrous Yield: Electrical transformer lamination steel (silicon steel cores)",
      "Condition: Certified drained, clean of hazard materials",
      "Handling: Heavy machinery lifting eyelet intact"
    ],
    "applications": [
      "Industrial metal dismantling & recovery",
      "Electrical silicon steel recovery",
      "Secondary copper smelting"
    ],
    "packaging": [
      "Secured flat racks for heavy transformer units",
      "Bulk container shipping for stripped windings"
    ],
    "referenceUrl": "https://nauticametalscrap.com/copper",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Failed Transformer Windings.png)",
      "license": "CC BY-SA 3.0",
      "author": "Glenn McKechnie",
      "physicalMatch": "Heavy copper electrical transformer coils, windings, and lamination core"
    }
  },
  {
    "id": "brass-honey",
    "slug": "honey-brass-scrap-solids",
    "category": "Brass",
    "title": "Honey Brass Scrap (Yellow Brass Solids)",
    "materialGrade": "Yellow Brass / CuZn37 / C26000 Solids",
    "isriCode": "Honey",
    "hsCode": "7404.00",
    "composition": "Cu 60–65%, Zn 34–38%, Pb 1–3%, Fe max 0.35%",
    "standardNames": [
      "Honey",
      "Yellow Brass Solids",
      "Mixed Yellow Brass",
      "Brass Scrap Honey"
    ],
    "description": "Clean yellow brass solids, plumbing brass, cast valve bodies, machinery castings, and rolled brass offcuts, free from iron attachments and chrome plating.",
    "overview": "The fundamental standard for yellow brass scrap worldwide. Consists of mixed yellow brass castings, forged fittings, valve bodies, and industrial machinery parts with consistent copper-zinc proportions.",
    "image": "/images/brass-honey.jpg",
    "gallery": [
      "/images/brass-honey.jpg",
      "/images/category-brass.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Material: Mixed yellow brass castings and solid offcuts",
      "ISRI Specification: Honey compliant",
      "Copper Content: 60% to 65% copper balance zinc",
      "Tolerances: Max 0.5% foreign iron attachments, free from manganese bronze and aluminium bronze",
      "Condition: Thoroughly inspected and cleaned of rubber and plastic gaskets"
    ],
    "applications": [
      "Secondary brass ingot smelting",
      "Sanitary ware and faucet casting",
      "Extrusion billet manufacture"
    ],
    "packaging": [
      "Hydraulically compressed bales",
      "Gaylord boxes on export pallets",
      "20ft containerized loose bulk"
    ],
    "referenceUrl": "https://nauticametalscrap.com/brass",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Brass Sourcing Archive",
      "physicalMatch": "Clean yellow brass solids, plumbing valves, fittings, and machinery castings"
    }
  },
  {
    "id": "brass-red-ebony",
    "slug": "red-brass-scrap-ebony",
    "category": "Brass",
    "title": "Red Brass Scrap (Ebony / 85-5-5-5)",
    "materialGrade": "Red Brass / Gunmetal / C83600 (85/5/5/5)",
    "isriCode": "Ebony",
    "hsCode": "7404.00",
    "composition": "Cu 84–86%, Sn 4–6%, Pb 4–6%, Zn 4–6%",
    "standardNames": [
      "Ebony",
      "Red Brass",
      "Gunmetal Scrap",
      "85/5/5/5 Brass",
      "Valve Bronze"
    ],
    "description": "High-copper red brass and gunmetal scrap consisting of industrial valves, pump impellers, marine fittings, and heavy water meter casings.",
    "overview": "High-value copper-tin-zinc-lead alloy offering superior corrosion resistance and self-lubricating properties. Valued for its rich 85% copper content and tin content in bronze foundries.",
    "image": "/images/products/brass-red-ebony.png",
    "gallery": [
      "/images/products/brass-red-ebony.png",
      "/images/brass-honey.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Alloy Standard: CDA 836 / ASTM B62 / Gunmetal LG2",
      "ISRI Code: Ebony",
      "Copper Content: 83% to 86% Cu",
      "Tin Content: 4% to 6% Sn",
      "Cleanliness: Clean components stripped of steel stems, rubber seals, and aluminum bronze gears"
    ],
    "applications": [
      "High-performance bronze ingot production",
      "Marine hardware casting",
      "Plumbing valve bodies"
    ],
    "packaging": [
      "Heavy wooden crates",
      "Export pallets with steel strapping",
      "20ft FCL container loads"
    ],
    "referenceUrl": "https://nauticametalscrap.com/brass",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Angle Valve in Bronze and Stainless Steel.png)",
      "license": "CC BY-SA 4.0",
      "author": "Assente",
      "physicalMatch": "High-copper red brass and gunmetal castings (85-5-5-5 / CDA 836) valve bodies"
    }
  },
  {
    "id": "brass-turnings-nightingale",
    "slug": "brass-turnings-borings-nightingale",
    "category": "Brass",
    "title": "Brass Turnings & Borings (Nightingale)",
    "materialGrade": "Free-Cutting Brass Machining Swarf (C36000 / CW614N)",
    "isriCode": "Nightingale",
    "hsCode": "7404.00",
    "composition": "Cu 58–62%, Zn 36–39%, Pb 1.5–3.0%, Fe < 0.35%",
    "standardNames": [
      "Nightingale",
      "Brass Turnings",
      "Brass Borings",
      "Free-Cutting Brass Swarf",
      "Brass Shavings"
    ],
    "description": "Clean unmixed yellow brass machining turnings and borings from precision CNC lathe workshops, free from cutting fluids and iron shavings.",
    "overview": "Generated during the machining of free-cutting brass rods into plumbing fittings, gas nipples, and electrical pins. Thoroughly screened to remove tramp iron and excessive coolant.",
    "image": "/images/products/brass-turnings.jpg",
    "gallery": [
      "/images/products/brass-turnings.jpg",
      "/images/brass-honey.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Material: C36000 / CW614N free-cutting brass swarf",
      "ISRI Specification: Nightingale",
      "Copper Recovery: 58% to 62% Cu",
      "Iron Contamination: Free iron < 0.35% via cross-belt magnetic separation",
      "Moisture / Coolant: Dried and centrifuged to < 2.0% residual cutting fluid"
    ],
    "applications": [
      "Extrusion billet induction furnaces",
      "Direct foundry remelting",
      "Brass ingot manufacturing"
    ],
    "packaging": [
      "High-density briquetted pucks",
      "Big Bags (1 MT) on pallets",
      "Bulk tipper container loading"
    ],
    "referenceUrl": "https://nauticametalscrap.com/brass",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Sweep of 'Gold'.JPG)",
      "license": "CC BY-SA 4.0",
      "author": "BronxAquarian",
      "physicalMatch": "Free-cutting brass lathe machining turnings, spirals, and golden swarf"
    }
  },
  {
    "id": "brass-shell-cases-lake",
    "slug": "brass-shell-cases-scrap-lake",
    "category": "Brass",
    "title": "Brass Shell Cases (Lake / Cartridge Brass)",
    "materialGrade": "70/30 Cartridge Brass / C26000",
    "isriCode": "Lake",
    "hsCode": "7404.00",
    "composition": "Cu 68.5–71.5%, Zn 28.5–31.5%, Pb max 0.05%, Fe max 0.05%",
    "standardNames": [
      "Lake",
      "Shell Cases",
      "Cartridge Brass Scrap",
      "70/30 Brass",
      "Demilitarized Casings"
    ],
    "description": "Fired 70/30 cartridge brass shell cases, certified demilitarized, free from live primers, gunpowder, steel casings, and foreign ordnance.",
    "overview": "Unalloyed high-ductility 70/30 cartridge brass cases offering ultra-low lead and iron content. Sourced from certified defense dismantlers and shooting ranges with complete demilitarization verification.",
    "image": "/images/products/brass-shell-cases.jpg",
    "gallery": [
      "/images/products/brass-shell-cases.jpg",
      "/images/brass-honey.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Alloy Grade: C26000 (70% Cu / 30% Zn)",
      "ISRI Code: Lake",
      "Demilitarization: Certified 100% fired, spent, devoid of live ammunition, powder, and mercury primers",
      "Purity: Exceptionally clean; low lead (Pb < 0.05%) and low iron (Fe < 0.05%)",
      "Inspection: Certified free of unspent explosives with formal safety documentation"
    ],
    "applications": [
      "High-grade brass strip and sheet casting",
      "High-purity brass redraw billets",
      "Foundry master alloy balancing"
    ],
    "packaging": [
      "Tightly strapped export bales",
      "Jumbo bags inside 20ft container loads"
    ],
    "referenceUrl": "https://nauticametalscrap.com/brass",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Spent shell casings Kyhkärännokka.jpg)",
      "license": "CC BY-SA 4.0",
      "author": "kallerna",
      "physicalMatch": "Fired 70/30 cartridge brass spent shell casings (demilitarized)"
    }
  },
  {
    "id": "brass-rod-ends",
    "slug": "brass-rod-ends-scrap",
    "category": "Brass",
    "title": "Brass Rod Ends & Solids Scrap",
    "materialGrade": "C36000 Free-Cutting Brass Rod Offcuts",
    "isriCode": "Clean Brass Solids",
    "hsCode": "7404.00",
    "composition": "Cu 60–63%, Zn 34–37%, Pb 2.5–3.5%",
    "standardNames": [
      "Rod Ends",
      "Bar Ends",
      "Free-Cutting Brass Solids",
      "Extrusion Crop Ends"
    ],
    "description": "Clean solid brass rod ends, bar drops, and forged offcuts from fastener and valve manufacturers, free of turnings, scale, and contaminants.",
    "overview": "Solid, dense crop ends of extruded brass rods produced during lathe feeding and automatic bar turning. Dense piece weight ensures minimal oxidation losses during furnace charging.",
    "image": "/images/products/brass-rod-ends.jpg",
    "gallery": [
      "/images/products/brass-rod-ends.jpg",
      "/images/brass-honey.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Alloy Grade: CW614N / C36000 / IS 319 Grade I",
      "Physical Form: Solid bar ends, round and hexagonal cropped bars (20 mm to 150 mm length)",
      "Cleanliness: 100% solid brass, free of iron bar ends and swarf",
      "Copper Content: 60.0% to 63.0%",
      "Charging Efficiency: High bulk density providing low melt burn-off loss"
    ],
    "applications": [
      "Continuous casting brass rod billets",
      "Forging ingot manufacturing",
      "Foundry valve production"
    ],
    "packaging": [
      "Steel drums on wooden skids",
      "Steel-reinforced export crates",
      "20ft FCL container loads"
    ],
    "referenceUrl": "https://nauticametalscrap.com/brass",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Brass-billets-jayjalaramextrusions.jpg)",
      "license": "Attribution",
      "author": "Jay Jalaram Extrusions",
      "physicalMatch": "Solid extruded free-cutting brass rod ends, rounds, and cropped bar billets"
    }
  },
  {
    "id": "brass-plumbing-scrap",
    "slug": "brass-plumbing-fixtures-scrap",
    "category": "Brass",
    "title": "Brass Plumbing & Fixtures Scrap",
    "materialGrade": "Mixed Plumbing & Sanitary Brass",
    "isriCode": "Yellow Brass Fixtures",
    "hsCode": "7404.00",
    "composition": "Cu 60–75%, Zn balance, chrome coating < 0.3%",
    "standardNames": [
      "Plumbing Brass",
      "Faucet Brass",
      "Chrome Plated Brass",
      "Sanitary Castings",
      "Brass Fittings"
    ],
    "description": "Clean residential and commercial plumbing scrap including faucets, mix taps, chrome-plated fittings, water meter bodies, and pipe elbows.",
    "overview": "Sourced from demolition and municipal plumbing refurbishment. Stripped of internal plastic cartridges, ceramic discs, iron handles, and rubber gaskets.",
    "image": "/images/brass-honey.jpg",
    "gallery": [
      "/images/brass-honey.jpg",
      "/images/category-brass.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Material: Cast and forged brass plumbing fittings and tapware",
      "Surface: Clean, chrome-plated or raw brass acceptable",
      "Contaminant Control: Free of plastic valve cores, iron handles, and stainless hoses",
      "Copper Yield: Typically 60% to 70% metallic recovery",
      "Sorting: Magnetically checked and hand-sorted"
    ],
    "applications": [
      "Sanitary ware foundry remelting",
      "Secondary brass ingots",
      "Commercial brass alloys"
    ],
    "packaging": [
      "Export bales",
      "Gaylord boxes on pallets",
      "Loose containerized shipping"
    ],
    "referenceUrl": "https://nauticametalscrap.com/brass",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Brass Sourcing Archive",
      "physicalMatch": "Residential and commercial brass plumbing fixtures, water taps, and faucets"
    }
  },
  {
    "id": "ferrous-hms",
    "slug": "hms-1-and-2-scrap-steel",
    "category": "Ferrous",
    "title": "HMS 1 & 2 Steel Scrap (80:20 Blend)",
    "materialGrade": "Heavy Melting Steel Scrap (ISRI 200–206)",
    "isriCode": "ISRI 200 / 201 / 202 / 206",
    "hsCode": "7204.49",
    "composition": "Fe 98%+, C 0.2–0.5%, P max 0.05%, S max 0.05%",
    "standardNames": [
      "HMS 1&2",
      "Heavy Melting Steel",
      "HMS 80:20",
      "Industrial Scrap Steel",
      "Heavy Steel Scrap"
    ],
    "description": "Standard heavy melting steel scrap in an 80:20 blend of HMS 1 (thickness >= 6mm) and HMS 2 (thickness >= 3mm), cut to charging dimensions for electric arc furnaces.",
    "overview": "The international workhorse of steel recycling. Derived from structural demolition, industrial steel beams, plates, railroad cuts, and heavy machinery frames.",
    "image": "/images/category-ferrous.jpg",
    "gallery": [
      "/images/category-ferrous.jpg",
      "/images/ferrous-shredded.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Blend Ratio: 80% HMS 1 (min 6mm thickness) / 20% HMS 2 (min 3mm thickness)",
      "ISRI Specification: 200, 201, 202, 206 compliant",
      "Dimensions: Maximum piece size 1.5 m x 0.5 m x 0.5 m (furnace chargeable)",
      "Cleanliness: Clean of dirt, slag, free of sealed cylinders, military ordnance, and excessive rust scale",
      "Radiation: Guaranteed non-radioactive with yard detector clearance certificates"
    ],
    "applications": [
      "Electric Arc Furnace (EAF) steelmaking",
      "Basic Oxygen Furnace (BOF) coolant charging",
      "Induction furnace foundries"
    ],
    "packaging": [
      "Bulk vessel shipments (3,000–30,000 MT)",
      "Containerized export in 20ft heavy-duty sea containers"
    ],
    "referenceUrl": "https://nauticametalscrap.com/ferrous",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Ferrous Scrap Operations",
      "physicalMatch": "Heavy melting steel (HMS 1&2 80:20) structural beams, heavy plates, demolition scrap"
    }
  },
  {
    "id": "ferrous-shredded-frag",
    "slug": "shredded-steel-scrap-isri-211",
    "category": "Ferrous",
    "title": "Shredded Steel Scrap (ISRI 210–212)",
    "materialGrade": "Fragmentizer Shred / Frag (ISRI 211)",
    "isriCode": "ISRI 211",
    "hsCode": "7204.49",
    "composition": "Fe min 97.5–98.5%, Density min 70 lbs/cu ft (1.1–1.2 t/m³)",
    "standardNames": [
      "Shredded Steel",
      "ISRI 211 Frag",
      "Auto Shred",
      "Fragmentized Steel Scrap"
    ],
    "description": "Magnetically separated shredded carbon steel scrap fragmentized into fist-sized pieces, free of unburnt combustibles, non-ferrous metals, and excessive fines.",
    "overview": "Produced by industrial mega-shredders processing end-of-life automobiles, white goods, and light industrial stampings. High bulk density and consistent sizing make it ideal for automated furnace bucket charging.",
    "image": "/images/ferrous-shredded.jpg",
    "gallery": [
      "/images/ferrous-shredded.jpg",
      "/images/category-ferrous.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Bulk Density: 70 lbs per cubic foot (approx. 1.12 tonnes/m³)",
      "ISRI Code: ISRI 211",
      "Piece Sizing: Approximately 50 mm to 200 mm knuckle-sized fragments",
      "Residual Copper (Cu): < 0.22% guaranteed by magnetic separation",
      "Non-Metallic Content: Less than 1% dirt, plastics, and fluff"
    ],
    "applications": [
      "Continuous-feed electric arc furnaces",
      "Foundry induction furnaces",
      "Mini-mill billet production"
    ],
    "packaging": [
      "Bulk vessel cargo",
      "20ft high-payload container loads (approx. 25–28 MT per container)"
    ],
    "referenceUrl": "https://nauticametalscrap.com/ferrous",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Ferrous Scrap Operations",
      "physicalMatch": "Fragmentizer shredded steel scrap (ISRI 211 auto shred knuckle-sized fragments)"
    }
  },
  {
    "id": "ferrous-busheling",
    "slug": "busheling-steel-scrap-isri-207",
    "category": "Ferrous",
    "title": "Busheling Steel Scrap (ISRI 207 / #1 Factory Bundles)",
    "materialGrade": "Prime Low-Residual Carbon Steel (ISRI 207)",
    "isriCode": "ISRI 207",
    "hsCode": "7204.41",
    "composition": "Fe min 99.0%, C < 0.15%, Cu < 0.05%, P < 0.025%, S < 0.025%",
    "standardNames": [
      "Busheling",
      "New Black Clippings",
      "ISRI 207",
      "Factory Bundles",
      "Prime Stamping Scrap"
    ],
    "description": "Clean new production carbon steel sheet offcuts, stampings, and factory skeleton scrap from automotive press shops, strictly ungalvanized and low in residual copper.",
    "overview": "The highest quality tier in ferrous recycling. Generated as clean manufacturing waste from automotive stampings and appliance fabrication with near-zero tramp elements (Cu, Ni, Cr, Sn).",
    "image": "/images/products/ferrous-busheling.jpg",
    "gallery": [
      "/images/products/ferrous-busheling.jpg",
      "/images/ferrous-shredded.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Material: Clean sheet steel scrap and offcuts, max 1/4 inch thickness",
      "ISRI Specification: 207 compliant",
      "Tramp Elements: Cu < 0.05%, Ni < 0.05%, Cr < 0.05% (ultra-low residual)",
      "Coating: 100% ungalvanized, clean black steel, free of oil sludge and paint",
      "Physical Format: Loose stampings or hydraulically pressed rectangular bundles"
    ],
    "applications": [
      "Specialty steelmaking (wire rod, deep drawing sheets)",
      "Ductile iron foundries",
      "High-grade alloy steel melts"
    ],
    "packaging": [
      "Compacted bundles (#1 Factory Bundles)",
      "Loose containerized loading with high bulk density"
    ],
    "referenceUrl": "https://nauticametalscrap.com/ferrous",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Steel recycling bales.jpg)",
      "license": "CC BY-SA 2.5",
      "author": "Jonathunder",
      "physicalMatch": "Dense rectangular steel recycling bales / #1 factory bundles of clean sheet stampings"
    }
  },
  {
    "id": "ferrous-cast-iron",
    "slug": "cast-iron-scrap-isri-252-260",
    "category": "Ferrous",
    "title": "Cast Iron Scrap (Foundry & Machinery Grade)",
    "materialGrade": "Grey & Ductile Cast Iron (ISRI 252–260)",
    "isriCode": "ISRI 252 / 253 / 254 / 257",
    "hsCode": "7204.10",
    "composition": "Fe 92–94%, C 3.2–3.8%, Si 1.8–2.6%, Mn 0.5–0.8%",
    "standardNames": [
      "Cast Iron Scrap",
      "Foundry Cast Iron",
      "Engine Blocks",
      "Machinery Cast Iron",
      "Auto Cast"
    ],
    "description": "Clean machinery cast iron, stripped engine blocks, brake discs, pipes, and transmission housings, free of steel crankshafts, brass bushings, and excessive scale.",
    "overview": "Sourced from broken machinery, automotive engine blocks, cylinder heads, and municipal water pipes. Provides essential carbon and silicon units in foundry cupolas and electric induction furnaces.",
    "image": "/images/products/ferrous-cast-iron.jpg",
    "gallery": [
      "/images/products/ferrous-cast-iron.jpg",
      "/images/category-ferrous.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Grades: Cupola cast (ISRI 252), clean auto cast (ISRI 254), heavy machinery cast",
      "Stripping: Engine blocks stripped of steel crankshafts, pistons, and aluminum heads",
      "Dimensions: Cupola sized (< 600 mm) or heavy pieces prepared for breaking",
      "Cleanliness: Clean of grease, free of burnt fire-grates and non-metallic inserts",
      "Hardness / Microstructure: Typical pearlitic/ferritic grey cast iron matrix"
    ],
    "applications": [
      "Foundry cupolas for ductile & grey iron casting",
      "Induction melting foundries",
      "Counterweight and ballast casting"
    ],
    "packaging": [
      "Loose in 20ft heavy-duty containers",
      "Bulk tipper shipment for domestic foundries"
    ],
    "referenceUrl": "https://nauticametalscrap.com/ferrous",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Scrap from a Cast Iron Pipeline Repair.jpg)",
      "license": "CC BY-SA 2.0",
      "author": "Roger Davies / Geograph",
      "physicalMatch": "Heavy broken grey and ductile cast iron pipeline sections and machinery scrap"
    }
  },
  {
    "id": "ferrous-used-rails",
    "slug": "used-rail-scrap-r50-r65",
    "category": "Ferrous",
    "title": "Used Rail Scrap (R50 / R65 Grade)",
    "materialGrade": "High Carbon Manganese Railway Steel",
    "isriCode": "ISRI 27–29 / R50 / R65",
    "hsCode": "7204.49",
    "composition": "C 0.60–0.82%, Mn 0.70–1.20%, Si 0.15–0.35%, Fe balance",
    "standardNames": [
      "Used Rails",
      "R50 Rails",
      "R65 Rails",
      "Railroad Steel Scrap",
      "Tee Rails"
    ],
    "description": "Decommissioned railway tracks cut into manageable lengths (0.5m, 1.0m, or 1.5m), free of fishplates, tie plates, switches, and frog manganese castings.",
    "overview": "High-tensile railway rail steel scrap renowned for exceptional metallurgical uniformity and low sulfur and phosphorus content. Sourced from railway network modernization projects.",
    "image": "/images/products/ferrous-rails.jpg",
    "gallery": [
      "/images/products/ferrous-rails.jpg",
      "/images/category-ferrous.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Standard Rail Profiles: R50 (51.67 kg/m), R65 (64.87 kg/m), UIC 60 (60.34 kg/m)",
      "Cut Lengths: Sized to order (typically 0.5 m, 1.0 m, 1.5 m or whole 6 m lengths)",
      "Metallurgy: High carbon wear-resistant steel with high yield strength",
      "Cleanliness: Cut clean, free of timber sleepers, concrete chairs, and fishplates",
      "Condition: Demagnetized, straight, with mill test certificates of track origin"
    ],
    "applications": [
      "Re-rolling mills (grinding balls, fence posts, rebar)",
      "Electric arc steelmaking",
      "High-strength forging ingots"
    ],
    "packaging": [
      "Bundled with high-tensile steel strapping",
      "Bulk break-bulk cargo vessels",
      "20ft containerized shipments"
    ],
    "referenceUrl": "https://nauticametalscrap.com/ferrous",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Rails stored at Porthmadog.jpg)",
      "license": "CC BY-SA 2.0",
      "author": "John Davies / Geograph",
      "physicalMatch": "Stacked decommissioned heavy high-carbon railway steel tee-rails (R50 / R65)"
    }
  },
  {
    "id": "ferrous-plate-structural",
    "slug": "plate-and-structural-scrap-ps",
    "category": "Ferrous",
    "title": "Plate & Structural Steel Scrap (P&S / Cut Beams)",
    "materialGrade": "Carbon Structural Steel (ISRI 231 / 232)",
    "isriCode": "ISRI 231 / 232",
    "hsCode": "7204.49",
    "composition": "Fe min 98.5%, C 0.18–0.25%, Mn 0.50–0.90%, P/S < 0.04%",
    "standardNames": [
      "P&S",
      "Plate and Structural",
      "Cut Beams",
      "Heavy Steel Plate",
      "Fabrication Offcuts"
    ],
    "description": "Clean sheared structural carbon steel plates, columns, channels, I-beams, and heavy fabrication cutoffs with minimum thickness of 1/4 inch (6.35 mm).",
    "overview": "Originating from shipyard fabrication, bridge dismantling, and structural steel assembly. Offers high charging density and minimal surface rust compared to general demolition scrap.",
    "image": "/images/category-ferrous.jpg",
    "gallery": [
      "/images/category-ferrous.jpg",
      "/images/ferrous-shredded.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Thickness: Minimum 6.35 mm (1/4 inch) up to 50 mm plate",
      "ISRI Specification: 231 (max length 3ft) / 232 (max length 5ft)",
      "Material Composition: Standard structural carbon steel (ASTM A36 / S275 / S355 equivalent)",
      "Cleanliness: Clean cut ends, free of concrete, paint slag, and non-ferrous fixtures",
      "Charging Characteristic: High density stackable furnace feed"
    ],
    "applications": [
      "Electric Arc Furnace (EAF) primary charges",
      "Heavy machinery component foundries",
      "Re-melting billets"
    ],
    "packaging": [
      "Containerized in 20ft sea containers with reinforced headboards",
      "Bulk maritime cargo"
    ],
    "referenceUrl": "https://nauticametalscrap.com/ferrous",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Ferrous Scrap Operations",
      "physicalMatch": "Heavy sheared structural carbon steel plate cuts and I-beam sections (P&S)"
    }
  },
  {
    "id": "ferrous-steel-turnings",
    "slug": "steel-turnings-borings-scrap",
    "category": "Ferrous",
    "title": "Steel Turnings & Borings (ISRI 219–223)",
    "materialGrade": "Machine Shop Carbon Steel Swarf",
    "isriCode": "ISRI 219 / 220 / 221 / 222",
    "hsCode": "7204.41",
    "composition": "Fe 96–98%, Carbon steel machining chemistry, oil < 3%",
    "standardNames": [
      "Steel Turnings",
      "Steel Swarf",
      "Machining Chips",
      "Steel Borings",
      "Briquetted Turnings"
    ],
    "description": "Clean carbon steel machining turnings, lathe spirals, and milling chips, processed to control coolant oils and magnetically cleared of non-ferrous chips.",
    "overview": "High-volume machining byproduct generated in automotive and industrial engineering machining centers. Briquetted or crushed for rapid oxidation-free furnace melting.",
    "image": "/images/products/ferrous-turnings.jpg",
    "gallery": [
      "/images/products/ferrous-turnings.jpg",
      "/images/ferrous-shredded.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "ISRI Grades: 219 (short shoveling turnings) / 222 (briquetted turnings)",
      "Moisture & Oil: Processed through centrifuges to maintain moisture < 2.5%",
      "Cleanliness: Strictly carbon and low-alloy steel, segregated from cast iron borings",
      "Form: Free flowing short chips or high-pressure cylindrical briquettes",
      "Purity: 97%+ ferrous recovery"
    ],
    "applications": [
      "Blast furnace ironmaking additions",
      "Secondary induction foundries",
      "Sinter plant feed"
    ],
    "packaging": [
      "High-density briquetted pucks",
      "Bulk tipper containers",
      "Gondola rail cars"
    ],
    "referenceUrl": "https://nauticametalscrap.com/ferrous",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Drehspaene01.jpg)",
      "license": "CC BY-SA 3.0",
      "author": "Frank C. Müller",
      "physicalMatch": "Curled carbon steel lathe machining turnings, spirals, and swarf chips"
    }
  },
  {
    "id": "ss-304",
    "slug": "stainless-steel-304-scrap",
    "category": "Stainless Steel",
    "title": "Stainless Steel 304 Scrap (18/8 Austenitic)",
    "materialGrade": "AISI 304 / 1.4301 / SUS 304 (18/8)",
    "isriCode": "Sabot",
    "hsCode": "7204.21",
    "composition": "Cr 18.0–20.0%, Ni 8.0–10.5%, C max 0.08%, Fe balance",
    "standardNames": [
      "304 Scrap",
      "18/8 Stainless",
      "Sabot",
      "A2 Stainless",
      "Food Grade Stainless Steel"
    ],
    "description": "Clean austenitic stainless steel 304 scrap including sheet cuts, stamped sinks, food equipment, piping, and vessels with verified 18% chromium and 8% nickel content.",
    "overview": "The worldwide benchmark for stainless steel recycling. Non-magnetic in annealed condition, this alloy provides secondary stainless mills with clean, predictable nickel and chromium units.",
    "image": "/images/category-stainless.jpg",
    "gallery": [
      "/images/category-stainless.jpg",
      "/images/products/ss-pipes.png",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Standard: ASTM A240 Grade 304 / EN 1.4301",
      "ISRI Specification: Sabot compliant",
      "Chemistry: Minimum 18.0% Cr, 8.0% Ni, low carbon (max 0.08%)",
      "Non-Ferrous Contaminants: Cu < 0.30%, Mo < 0.30%, free from magnetic carbon steel",
      "Condition: Clean industrial solids, free from cement, tar, and plastic wrap"
    ],
    "applications": [
      "AOD converter stainless steelmaking",
      "Foundry casting master alloy",
      "Food & chemical processing hardware remelts"
    ],
    "packaging": [
      "High-density hydraulic export bales",
      "Cut lengths loose in 20ft containers",
      "Strapped pallet bundles"
    ],
    "referenceUrl": "https://nauticametalscrap.com/stainless-steel",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Stainless Steel Recycling Archive",
      "physicalMatch": "Austenitic 304 (18/8) stainless steel solids, plates, sheets, and vessel cuts"
    }
  },
  {
    "id": "ss-316",
    "slug": "stainless-steel-316-scrap",
    "category": "Stainless Steel",
    "title": "Stainless Steel 316 Scrap (Marine Grade Moly)",
    "materialGrade": "AISI 316 / 1.4401 / SUS 316 (Marine Grade)",
    "isriCode": "Ultra",
    "hsCode": "7204.21",
    "composition": "Cr 16.0–18.0%, Ni 10.0–14.0%, Mo 2.0–3.0%, Fe balance",
    "standardNames": [
      "316 Scrap",
      "Marine Grade Stainless",
      "Ultra",
      "A4 Stainless",
      "Moly Stainless Scrap"
    ],
    "description": "Premium marine-grade 316 stainless steel scrap containing 2.0–3.0% molybdenum and 10–14% nickel, sourced from chemical reactors, marine hardware, and pharmaceutical piping.",
    "overview": "Highly prized for its elevated nickel and molybdenum content. Molybdenum confers superior pitting corrosion resistance against chlorides and industrial acids.",
    "image": "/images/category-stainless.jpg",
    "gallery": [
      "/images/category-stainless.jpg",
      "/images/products/ss-pipes.png",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Standard: ASTM A240 Grade 316 / EN 1.4401",
      "ISRI Specification: Ultra compliant",
      "Chemistry: Cr 16–18%, Ni 10–14%, Mo 2.0–3.0%",
      "Verification: 100% XRF / PMI positive material identification verified",
      "Attachments: Free from lead solder, carbon steel flanges, and sulfur compounds"
    ],
    "applications": [
      "Chemical plant equipment recycling",
      "Marine fitting manufacturing",
      "Specialty stainless steelmaking"
    ],
    "packaging": [
      "Compressed export bales",
      "Secure wooden skids",
      "20ft dry containerized shipping"
    ],
    "referenceUrl": "https://nauticametalscrap.com/stainless-steel",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Stainless Steel Recycling Archive",
      "physicalMatch": "Marine and chemical grade 316 molybdenum-bearing stainless steel scrap solids"
    }
  },
  {
    "id": "ss-430",
    "slug": "stainless-steel-430-scrap",
    "category": "Stainless Steel",
    "title": "Stainless Steel 430 Scrap (Ferritic Straight Chrome)",
    "materialGrade": "AISI 430 / 1.4016 (Ferritic 17% Cr)",
    "isriCode": "Ferritic Stainless Scrap",
    "hsCode": "7204.21",
    "composition": "Cr 16.0–18.0%, Ni < 0.5%, C max 0.12%, Fe balance",
    "standardNames": [
      "430 SS",
      "Ferritic Stainless",
      "Straight Chrome Stainless",
      "Magnetic Stainless Scrap",
      "Automotive Trim Scrap"
    ],
    "description": "Magnetic ferritic stainless steel 430 scrap with 16–18% chromium and near-zero nickel, derived from automotive exhaust lines, appliance panels, and kitchen trims.",
    "overview": "A cost-effective straight-chromium stainless alloy widely used where moderate corrosion resistance is required without the expense of nickel. Strongly ferromagnetic.",
    "image": "/images/category-stainless.jpg",
    "gallery": [
      "/images/category-stainless.jpg",
      "/images/products/ss-pipes.png",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Standard: ASTM A240 Grade 430 / EN 1.4016",
      "Chromium Content: 16.0% to 18.0% Cr",
      "Nickel Content: Strictly under 0.5% Ni",
      "Magnetic Properties: Ferromagnetic (magnetic response)",
      "Condition: Clean sheet cutoffs and stamped panels, free of zinc coating"
    ],
    "applications": [
      "Ferritic stainless steel production",
      "Exhaust component manufacturing",
      "Industrial furnace refractory supports"
    ],
    "packaging": [
      "Baled sheet bundles",
      "Loose packed in 20ft heavy containers"
    ],
    "referenceUrl": "https://nauticametalscrap.com/stainless-steel",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Stainless Steel Recycling Archive",
      "physicalMatch": "Magnetic ferritic 430 straight-chromium stainless steel sheet cuts and automotive trim"
    }
  },
  {
    "id": "ss-turnings",
    "slug": "stainless-steel-turnings-swarf",
    "category": "Stainless Steel",
    "title": "Stainless Steel Turnings & Swarf Scrap",
    "materialGrade": "AISI 304 / 316 Austenitic Machining Chips",
    "isriCode": "Sabot Turnings / Ultra Turnings",
    "hsCode": "7204.21",
    "composition": "Ni min 7.5% (for 304) or Ni min 10% (for 316), oil < 3%",
    "standardNames": [
      "SS Turnings",
      "Stainless Swarf",
      "Machining Chips",
      "Stainless Borings",
      "Spiral SS Chips"
    ],
    "description": "Segregated austenitic stainless steel machining turnings, spirals, and borings, spun dry to remove cutting fluids and magnetically cleared of carbon steel chips.",
    "overview": "Machining waste from CNC milling, lathe turning, and drilling of stainless steel components. Briquetted or shredded to ensure minimal melt oxidation.",
    "image": "/images/stainless-turnings.jpg",
    "gallery": [
      "/images/stainless-turnings.jpg",
      "/images/category-stainless.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Grade Segregation: 304-grade turnings and 316-grade turnings strictly kept separate",
      "Moisture & Soluble Oil: Dried and centrifuged to < 3% moisture",
      "Free Magnetic Carbon Steel: Magnetically separated to Fe < 0.5%",
      "Form: Shredded bushy turnings or compacted briquette pucks",
      "Chemical Assay: Tested by certified spectrometer sampling per lot"
    ],
    "applications": [
      "AOD and induction furnace melting",
      "Master alloy production",
      "Stainless foundry casting"
    ],
    "packaging": [
      "Hydraulic briquettes",
      "Heavy-duty poly-woven Big Bags (1 MT)",
      "Bulk tipper containers"
    ],
    "referenceUrl": "https://nauticametalscrap.com/stainless-steel",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Precision Machining Archive",
      "physicalMatch": "Spiral austenitic stainless steel machining turnings, lathe swarf, and borings"
    }
  },
  {
    "id": "ss-sheet-skeletons",
    "slug": "stainless-steel-sheet-skeleton-scrap",
    "category": "Stainless Steel",
    "title": "Stainless Steel Sheet & Skeleton Scrap",
    "materialGrade": "AISI 304 / 316 New Factory Skeletons",
    "isriCode": "New Stainless Clippings",
    "hsCode": "7204.21",
    "composition": "Cr 18–20%, Ni 8–10.5%, Prime mill spec composition",
    "standardNames": [
      "Laser Skeletons",
      "Stainless Sheet Scrap",
      "New Clippings",
      "Punching Offcuts",
      "Stamping Webbing"
    ],
    "description": "Clean new production stainless steel sheet skeletons, laser cutting remnants, and stamping webbing from food machinery, kitchenware, and architectural cladding fabrication.",
    "overview": "High-density, unoxidized factory scrap resulting from CNC laser cutters and stamping presses. Provides prime-grade chemistry with zero post-consumer corrosion or contamination.",
    "image": "/images/products/ss-sheet-skeletons.jpg",
    "gallery": [
      "/images/products/ss-sheet-skeletons.jpg",
      "/images/category-stainless.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Material: Prime sheet offcuts (gauge 0.6 mm to 6.0 mm)",
      "Cleanliness: Clean unpainted metal, free from protective plastic foils where requested",
      "Chemistry: Certified 304 or 316 prime mill origin",
      "Form: Flat baled laser skeletons or cut pieces (< 1.5 m)",
      "Non-Ferrous Inclusions: Zero copper, aluminum, or galvanized contamination"
    ],
    "applications": [
      "Stainless steelmaking",
      "Precision casting foundries",
      "Master melt compounding"
    ],
    "packaging": [
      "Dense hydraulic bales",
      "Strapped skids",
      "20ft sea container loads"
    ],
    "referenceUrl": "https://nauticametalscrap.com/stainless-steel",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:Metal Stamping Project.jpg)",
      "license": "Public domain",
      "author": "Barry Gardner / NIST",
      "physicalMatch": "Stainless steel sheet stamping skeletons and CNC laser cutting webbing offcuts"
    }
  },
  {
    "id": "ss-pipe-tubing",
    "slug": "stainless-steel-pipe-tubing-scrap",
    "category": "Stainless Steel",
    "title": "Stainless Steel Pipe & Tube Scrap",
    "materialGrade": "AISI 304 / 304L / 316 / 316L Schedule Piping",
    "isriCode": "Stainless Tubing Scrap",
    "hsCode": "7204.21",
    "composition": "Cr 17–19%, Ni 8–12%, Mo 0–2.5%",
    "standardNames": [
      "SS Pipe Scrap",
      "Stainless Tubing Scrap",
      "Process Piping Offcuts",
      "Heat Exchanger Tubes"
    ],
    "description": "Industrial stainless steel schedule pipe cuts, sanitary tubes, heat exchanger bundles, and architectural handrails, free of carbon steel flanges and heavy mineral scaling.",
    "overview": "Originating from refinery construction, dairy processing lines, and pharmaceutical manufacturing. Consists of heavy-wall seamless and welded pipes prepared for furnace charging.",
    "image": "/images/products/ss-pipes.png",
    "gallery": [
      "/images/products/ss-pipes.png",
      "/images/category-stainless.jpg",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Grades: ASTM A312 / A269 Grade 304L and 316L",
      "Preparation: Cut to furnace charging lengths (under 1.5 m)",
      "Flanges: Stripped of carbon steel backer flanges and copper gaskets",
      "Scale: Clean bores, free of heavy chemical scaling or toxic deposits",
      "Verification: Handheld XRF tested prior to export"
    ],
    "applications": [
      "Stainless steel ingot production",
      "Centrifugal tube casting foundries",
      "AOD converter feed"
    ],
    "packaging": [
      "Strapped pipe bundles",
      "Containerized loose bulk with timber bracing"
    ],
    "referenceUrl": "https://nauticametalscrap.com/stainless-steel",
    "imageAttribution": {
      "source": "Wikimedia Commons (File:304 STAINLESS STEEL PIPE.png)",
      "license": "CC BY-SA 4.0",
      "author": "Steel Pipes Co.",
      "physicalMatch": "304 and 316 schedule stainless steel process piping, sanitary tubing, and pipe cuts"
    }
  },
  {
    "id": "ss-mixed-scrap",
    "slug": "mixed-stainless-steel-scrap",
    "category": "Stainless Steel",
    "title": "Mixed Stainless Steel Scrap (Foundry Melt Blend)",
    "materialGrade": "Mixed 300 Series Austenitic Scrap",
    "isriCode": "Mixed Sabot Blend",
    "hsCode": "7204.21",
    "composition": "Average Ni 7.0–8.5%, Cr 16.5–18.5%, Fe balance",
    "standardNames": [
      "Mixed Stainless",
      "Foundry Melt Blend",
      "Mixed 300 Series",
      "Secondary Stainless Scrap"
    ],
    "description": "Mixed 300-series austenitic stainless steel scrap combining prepared structural sections, tank offcuts, and commercial equipment, certified on average nickel chemistry.",
    "overview": "Economical furnace feed for secondary stainless steel foundries and ferro-alloy producers. Carefully blended and assayed with guaranteed minimum nickel and chromium levels.",
    "image": "/images/category-stainless.jpg",
    "gallery": [
      "/images/category-stainless.jpg",
      "/images/products/ss-pipes.png",
      "/images/hero-scrap-yard.jpg"
    ],
    "specifications": [
      "Alloy Family: 300-series austenitic stainless steels (predominantly 304)",
      "Assay Guarantee: Minimum 7.0% Nickel, 16.5% Chromium",
      "Contaminant Control: Free of 400-series magnetic scrap, low copper (< 0.40%)",
      "Piece Dimensions: Prepared for furnace bucket charging (< 1.2 m)",
      "Testing: Melt-sample or composite lot XRF certified"
    ],
    "applications": [
      "Secondary stainless steel induction melting",
      "Cast valve & pump foundries",
      "Ferroalloy recycling"
    ],
    "packaging": [
      "High-density export bales",
      "Containerized loose bulk shipments"
    ],
    "referenceUrl": "https://nauticametalscrap.com/stainless-steel",
    "imageAttribution": {
      "source": "Verified Local Scrap Asset",
      "license": "Commercial Royalty-Free License",
      "author": "Stainless Steel Recycling Archive",
      "physicalMatch": "Mixed 300-series austenitic stainless steel scrap prepared for foundry melting"
    }
  }
];
