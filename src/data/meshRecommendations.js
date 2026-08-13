/**
 * Screen mesh recommendation charts rebranded for Site Machinery NZ.
 * Source charts adapted from IDM / DeSite guidance; imperial sizes kept
 * (industry standard) with approximate mm equivalents for NZ readers.
 */

function row(mesh, pattern, product, mmHint) {
  return { mesh, pattern, product, mmHint }
}

export const squareChart = [
  row('5/32" x 5/32"', 'Square', '1/16"', '~4 mm mesh → ~1.5 mm product'),
  row('1/4" x 1/4"', 'Square', '1/8"', '~6 mm mesh → ~3 mm product'),
  row('3/8" x 3/8"', 'Square', '1/4"', '~10 mm mesh → ~6 mm product'),
  row('1/2" x 1/2"', 'Square', '3/8"', '~13 mm mesh → ~10 mm product'),
  row('1" x 1"', 'Square', '3/4"', '~25 mm mesh → ~19 mm product'),
  row('2" x 2"', 'Square', '1-1/2"', '~50 mm mesh → ~38 mm product'),
  row('3" x 3"', 'Square', '2"', '~75 mm mesh → ~50 mm product'),
  row('4" x 4"', 'Square', '3"', '~100 mm mesh → ~75 mm product'),
]

export const elongatedChart = [
  row('3/8" x 4"', 'Elongated', '1/4" to 5/16"', '~10 x 100 mm'),
  row('1/2" x 4"', 'Elongated', '3/8" to 7/16"', '~13 x 100 mm'),
  row('3/4" x 4"', 'Elongated', '1/2" to 9/16"', '~19 x 100 mm'),
  row('1" x 4"', 'Elongated', '3/4" to 7/8"', '~25 x 100 mm'),
]

export const meshSections = [
  {
    id: 'charts',
    title: 'Base Mesh Charts',
    intro:
      'Use these square and elongated charts as a starting point. Final product size is typically a little smaller than the mesh opening, depending on material and moisture.',
    tables: [
      { title: 'Square Mesh', headers: ['Mesh Size', 'Pattern', 'Product Size', 'Approx. Metric'], rows: squareChart.map((r) => [r.mesh, r.pattern, r.product, r.mmHint]) },
      { title: 'Elongated Mesh', headers: ['Mesh Size', 'Pattern', 'Product Size', 'Approx. Metric'], rows: elongatedChart.map((r) => [r.mesh, r.pattern, r.product, r.mmHint]) },
    ],
  },
  {
    id: 'topsoil',
    title: 'Topsoil and Triple Mix',
    intro:
      'Topsoil is in demand and profitable. Some customers want a very fine finish; others prefer commercial-grade product at a sharper price point.',
    tables: [
      {
        title: 'Top Dressing Mesh Recommendation',
        headers: ['Mesh Size', 'Product Size'],
        rows: [
          ['1/8 x 4" elongated mesh', '1/16 minus product'],
          ['1/4 x 1/4 square mesh', '1/8 minus product'],
          ['1/4 x 4" elongated mesh', '1/8 minus product'],
          ['3/8 x 3/8 square mesh', '1/4 minus product'],
          ['3/8 x 4" elongated mesh', '1/4 minus product'],
        ],
      },
      {
        title: 'Fine Topsoil Mesh Recommendation',
        headers: ['Mesh Size', 'Product Size'],
        rows: [
          ['1/4 x 4" elongated mesh', '1/8 minus product'],
          ['3/8 x 4" elongated mesh', '1/4 minus product'],
          ['1/2 x 4" elongated mesh', '3/8 minus product'],
        ],
      },
      {
        title: 'Commercial Grade or Triple Mix Topsoil',
        headers: ['Mesh Size', 'Product Size'],
        note: 'A blend of topsoil, sand and compost that normally commands a premium price.',
        rows: [
          ['1/2 x 1/2 square mesh', '1/4 minus product'],
          ['3/4 x 4" elongated mesh', '1/2 minus product'],
          ['1" x 4" elongated mesh', '3/4 minus product'],
          ['1" x 1" square mesh', '1/2 minus product'],
          ['2" x 2" square mesh', '1-1/4 minus product'],
          ['3" x 3" square mesh', '2" minus product'],
          ['4" x 4" square mesh', '3" minus product'],
        ],
      },
    ],
  },
  {
    id: 'compost',
    title: 'Compost',
    intro:
      'Compost can be finished as a top-dressing fertiliser / soil builder, or blended with sand and topsoil to create triple mix.',
    tables: [
      {
        title: 'Compost Mesh Recommendation',
        headers: ['Mesh Size', 'Product Size'],
        rows: [
          ['3/8 x 3/8 square mesh', '1/4 minus product'],
          ['3/8 x 4" elongated mesh', '1/4 minus product'],
          ['1/2 x 1/2 square mesh', '3/8 minus product'],
          ['3/4 x 4" elongated mesh', '1/2 minus product'],
          ['1" x 4" elongated mesh', '3/4 minus product'],
          ['1" x 1" square mesh', '3/4 minus product'],
        ],
      },
    ],
  },
  {
    id: 'mulch',
    title: 'Wood Mulch',
    intro:
      'Wood mulch is a light product that moves differently across the deck than soil or aggregate. Run a slightly larger mesh. Many operators screen out fines and mix them into topsoil for slow-release decomposition — a practical way to recycle wood fines.',
    tables: [
      {
        title: 'Wood Mulch Mesh Recommendation',
        headers: ['Mesh Size', 'Product Size'],
        rows: [
          ['1/2 x 1/2 square mesh', '1/4 minus product'],
          ['3/4 x 4" elongated mesh', '1/2 minus product'],
          ['1" x 4" elongated mesh', '3/4 minus product'],
          ['1" x 1" square mesh', '1/2 minus product'],
          ['2" x 2" square mesh', '1-1/4 minus product'],
          ['3" x 3" square mesh', '2" minus product'],
          ['4" x 4" square mesh', '3" minus product'],
        ],
      },
    ],
  },
  {
    id: 'aggregates',
    title: 'Aggregate Products',
    intro:
      'Wider square mesh (including 2″, 3″ and 4″ grizzly openings) is commonly sought for durable aggregate separation, road base and recycled materials.',
    tables: [
      {
        title: 'Pea Stone',
        headers: ['Mesh Size', 'Product Size'],
        note: 'Often used in playgrounds or for decoration. Pea stone usually commands a premium because most aggregate is crushed and too sharp.',
        rows: [
          ['3/8 x 3/8 square mesh', '1/4 minus product'],
          ['1/2 x 1/2 square mesh', '3/8 minus product'],
          ['1/2 x 4" elongated mesh', '3/8 minus product'],
          ['1" x 1" square mesh', '3/4 minus product'],
        ],
      },
      {
        title: 'Decorative Stone',
        headers: ['Mesh Size', 'Product Size'],
        note: 'Where outdoor watering is restricted, decorative rock is a manageable and cost-effective landscaping solution.',
        rows: [
          ['3/4 x 4" elongated mesh', '5/8 minus product'],
          ['1" x 1" square mesh', '3/4 minus product'],
          ['1-1/4 x 1-1/4 square mesh', '7/8 minus product'],
          ['1-1/2 x 1-1/2 square mesh', '1-1/8 minus product'],
          ['2" x 2" square mesh', '1-1/2 minus product'],
          ['3" x 3" square mesh', '2-1/4 minus product'],
          ['4" x 4" square mesh', '3-1/4 minus product'],
        ],
      },
      {
        title: 'Top Coarse Gravel',
        headers: ['Mesh Size', 'Product Size'],
        note: 'Finer road gravel works well for capping roadways.',
        rows: [
          ['3/4 x 4" elongated mesh', '5/8 minus product'],
          ['1" x 1" square mesh', '3/4 minus product'],
          ['1-1/4 x 1-1/4 square mesh', '7/8 minus product'],
          ['1-1/2 x 1-1/2 square mesh', '1-1/8 minus product'],
        ],
      },
      {
        title: 'Septic Stone',
        headers: ['Mesh Size', 'Product Size'],
        note: 'Many regions still use stone in septic fields for the evaporation process.',
        rows: [
          ['1/2 x 1/2 square mesh', '3/8 minus product'],
          ['3/4 x 4" elongated mesh', '5/8 minus product'],
          ['1" x 1" square mesh', '3/4 minus product'],
          ['1-1/4 x 1-1/4 square mesh', '7/8 minus product'],
        ],
      },
      {
        title: 'Base Rock Gravel',
        headers: ['Mesh Size', 'Product Size'],
        note: 'Separating smaller gravel makes a more stable road base. Fines can then be spread on top of the base course for a gradeable surface.',
        rows: [
          ['1-1/2 x 1-1/2 square mesh', '1-1/8 minus product'],
          ['2" x 2" square mesh', '1-1/2 minus product'],
          ['3" x 3" square mesh', '2-1/4 minus product'],
          ['4" x 4" square mesh', '3-1/4 minus product'],
        ],
      },
      {
        title: 'Ground Asphalt',
        headers: ['Mesh Size', 'Product Size'],
        note: 'Screening recycled asphalt from repaving projects is popular. Fines often go on driveways; larger material suits roads and yards with heavier traffic.',
        rows: [
          ['3/4 x 4" elongated mesh', '5/8 minus product'],
          ['1" x 1" square mesh', '3/4 minus product'],
          ['1-1/4 x 1-1/4 square mesh', '7/8 minus product'],
          ['1-1/2 x 1-1/2 square mesh', '1-1/8 minus product'],
          ['2" x 2" square mesh', '1-1/2 minus product'],
        ],
      },
      {
        title: 'Crushed Concrete',
        headers: ['Mesh Size', 'Product Size'],
        note: 'Screened crushed concrete makes excellent base material when building roads.',
        rows: [
          ['3/4 x 4" elongated mesh', '5/8 minus product'],
          ['1" x 1" square mesh', '3/4 minus product'],
          ['1-1/4 x 1-1/4 square mesh', '7/8 minus product'],
          ['1-1/2 x 1-1/2 square mesh', '1-1/8 minus product'],
          ['2" x 2" square mesh', '1-1/2 minus product'],
          ['3" x 3" square mesh', '2-1/4 minus product'],
          ['4" x 4" square mesh', '3-1/4 minus product'],
        ],
      },
      {
        title: 'Erosion Control Rock',
        headers: ['Mesh Size', 'Product Size'],
        note: 'Erosion control rock stabilises slopes and areas around culverts during heavy rain.',
        rows: [
          ['1/2 x 4" elongated mesh', '3/8 minus product'],
          ['3/4 x 4" elongated mesh', '1/2 minus product'],
          ['1" x 4" elongated mesh', '3/4 minus product'],
          ['1" x 1" square mesh', '3/4 minus product'],
          ['1-1/4 x 1-1/4 square mesh', '7/8 minus product'],
          ['1-1/2 x 1-1/2 square mesh', '1-1/8 minus product'],
        ],
      },
    ],
  },
]

export const meshNav = [
  { id: 'charts', label: 'Charts' },
  { id: 'topsoil', label: 'Topsoil' },
  { id: 'compost', label: 'Compost' },
  { id: 'mulch', label: 'Mulch' },
  { id: 'aggregates', label: 'Aggregates' },
]
