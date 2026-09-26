import type { Lang } from './i18n'

/* Unsplash image helper — keeps aspect crop consistent. */
const U = (id: string, w = 1000, h = 750) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

export const IMG = {
  heroFloor: U('1772305336606-989a457ffbae', 1400, 1600),
  shinyFloor: U('1771531072574-af6ed6b954c0'),
  workersFloor: U('1772300164438-f73307d3b645'),
  whitePaint: U('1772305595483-6b058aff40f9'),
  warehouse: U('1771530789155-b1f03fbf82b5'),
  warehouse2: U('1772306814076-ff65f53ac438'),
  floorPaint: U('1772209415876-76ea6cbc2f0c'),
  warehouse3: U('1772300704502-410f0fbd43bb'),
  forklift: U('1716191299984-a54043cac633', 800, 1000),
  tiles: U('1580145646320-9a89ed69f7fb'),
  foodLine: U('1621954938124-02e637ba3584'),
  bottles: U('1780145180040-0beda1df60e6', 800, 1000),
  lab: U('1774887810190-5de1cc9cb06e'),
  machinery: U('1735494034604-cab3f6a42683', 800, 1000),
  factory: U('1716194583732-0b9874234218'),
  concreteRaw: U('1559252092-7a9cc9ef1933', 1000, 750),
}
export const img = (id: string, w?: number, h?: number) => U(id, w, h)

/* --- Clients -------------------------------------------------- */
export const CLIENTS = ['Coca-Cola', 'Chedraui', 'Tupperware', 'Innophos', 'MANE', 'Kener Farma']

/* --- Services (8 systems) ------------------------------------ */
type Loc = Record<Lang, string>
export interface Service {
  id: string
  image: string
  gallery: string[]
  sector: Loc
  title: Loc
  benefit: Loc
  description: Loc
}

export const SERVICES: Service[] = [
  {
    id: 'autonivelante',
    image: IMG.shinyFloor,
    gallery: [IMG.shinyFloor, IMG.whitePaint, IMG.warehouse2],
    sector: { es: 'Farmacéutica · Alimentos', en: 'Pharmaceutical · Food' },
    title: { es: 'Piso epóxico autonivelante', en: 'Self-leveling epoxy floor' },
    benefit: { es: 'Acabado espejo, 100 % sólidos, sin solventes y color a elección.', en: 'Mirror finish, 100 % solids, solvent-free and client-chosen color.' },
    description: {
      es: 'Resinas y catalizadores 100 % sólidos libres de solventes, con acabado autonivelante o acabado espejo. El color es a elección del cliente. Sistema sanitario completo.',
      en: '100 % solids resins and catalysts, solvent-free, with a self-leveling or mirror finish. Color is chosen by the client. A complete sanitary system.',
    },
  },
  {
    id: 'zoclo',
    image: IMG.warehouse,
    gallery: [IMG.warehouse, IMG.warehouse3, IMG.tiles],
    sector: { es: 'Cuartos limpios', en: 'Clean rooms' },
    title: { es: 'Zoclo epóxico', en: 'Epoxy baseboard' },
    benefit: { es: 'Excelente resistencia química y mecánica con garantía por escrito.', en: 'Excellent chemical and mechanical resistance with a written warranty.' },
    description: {
      es: 'Diseñado para una excelente resistencia química y mecánica. Garantía de un año contra defectos de aplicación y vida útil de 10 años con su respectivo mantenimiento.',
      en: 'Designed for excellent chemical and mechanical resistance. One-year warranty against application defects and a 10-year service life with its corresponding maintenance.',
    },
  },
  {
    id: 'curva',
    image: IMG.whitePaint,
    gallery: [IMG.whitePaint, IMG.shinyFloor, IMG.lab],
    sector: { es: 'Cuartos limpios', en: 'Clean rooms' },
    title: { es: 'Curva sanitaria', en: 'Sanitary coving' },
    benefit: { es: 'Unión piso-muro sin juntas donde no se acumula polvo ni bacterias.', en: 'Seamless floor-to-wall junction where dust and bacteria cannot build up.' },
    description: {
      es: 'Sistema de alta adherencia a muros y plafones que mantiene sus áreas limpias, sin captación de polvo, bacterias ni hongos. Además, es estético y decorativo.',
      en: 'High-adhesion system for walls and ceilings that keeps your areas clean, with no accumulation of dust, bacteria or fungi. It is also aesthetic and decorative.',
    },
  },
  {
    id: 'liso',
    image: IMG.lab,
    gallery: [IMG.lab, IMG.factory, IMG.machinery],
    sector: { es: 'Farmacéutica · Laboratorios', en: 'Pharmaceutical · Laboratories' },
    title: { es: 'Acabado liso sanitario en muros y plafones', en: 'Smooth sanitary finish on walls and ceilings' },
    benefit: { es: 'Superficie lisa que elimina la captación de hongos y bacterias.', en: 'Smooth surface that eliminates fungi and bacteria accumulation.' },
    description: {
      es: 'Sistema de característica lisa que permite tener áreas limpias, eliminando la captación de hongos y bacterias, con un acabado estético y decorativo.',
      en: 'A smooth-characteristic system that keeps areas clean, eliminating fungi and bacteria accumulation, with an aesthetic and decorative finish.',
    },
  },
  {
    id: 'cascara',
    image: IMG.warehouse3,
    gallery: [IMG.warehouse3, IMG.warehouse, IMG.forklift],
    sector: { es: 'Logística · Almacenes', en: 'Logistics · Warehouses' },
    title: { es: 'Piso cáscara de naranja', en: 'Orange-peel floor' },
    benefit: { es: 'Textura antiderrapante para pasillos, almacenes y áreas de tránsito.', en: 'Anti-slip texture for aisles, warehouses and traffic areas.' },
    description: {
      es: 'Textura antiderrapante para pasillos, almacenes y áreas de tránsito. Combina seguridad y resistencia mecánica en zonas de operación continua.',
      en: 'Anti-slip texture for aisles, warehouses and traffic areas. It combines safety and mechanical resistance in continuous-operation zones.',
    },
  },
  {
    id: 'conductivo',
    image: IMG.machinery,
    gallery: [IMG.machinery, IMG.factory, IMG.foodLine],
    sector: { es: 'Electrónica · Manufactura', en: 'Electronics · Manufacturing' },
    title: { es: 'Piso conductivo', en: 'Conductive floor' },
    benefit: { es: 'Control de electricidad estática para equipo electrónico sensible.', en: 'Static electricity control for sensitive electronic equipment.' },
    description: {
      es: 'Control de electricidad estática para áreas con equipo electrónico sensible. Disipa cargas de forma controlada y protege procesos críticos.',
      en: 'Static electricity control for areas with sensitive electronic equipment. It dissipates charges in a controlled manner and protects critical processes.',
    },
  },
  {
    id: 'hojuela',
    image: IMG.tiles,
    gallery: [IMG.tiles, IMG.shinyFloor, IMG.warehouse2],
    sector: { es: 'Comercial · Oficinas', en: 'Commercial · Offices' },
    title: { es: 'Piso de hojuela', en: 'Flake floor' },
    benefit: { es: 'Acabado decorativo y resistente para escaleras y alto tránsito.', en: 'Decorative, resistant finish for stairs and high-traffic areas.' },
    description: {
      es: 'Acabado decorativo y resistente para escaleras y áreas de alto tránsito. Las hojuelas aportan textura y disimulan el desgaste cotidiano.',
      en: 'Decorative, resistant finish for stairs and high-traffic areas. The flakes add texture and disguise everyday wear.',
    },
  },
  {
    id: 'profilgate',
    image: IMG.forklift,
    gallery: [IMG.forklift, IMG.warehouse, IMG.warehouse3],
    sector: { es: 'Industria pesada', en: 'Heavy industry' },
    title: { es: 'Colocación de Profilgate', en: 'Profilgate installation' },
    benefit: { es: 'Sistemas de limpieza de calzado y ruedas en accesos a planta.', en: 'Footwear and wheel cleaning systems at plant entrances.' },
    description: {
      es: 'Instalación de sistemas de limpieza de calzado y ruedas en accesos a planta. Reduce el arrastre de contaminantes hacia las áreas productivas.',
      en: 'Installation of footwear and wheel cleaning systems at plant entrances. It reduces the drag of contaminants into production areas.',
    },
  },
]

/* --- Specs table --------------------------------------------- */
export interface Spec { property: Loc; standard: string; value: Loc }
export const SPECS: Spec[] = [
  { property: { es: 'Resistencia a la compresión', en: 'Compressive strength' }, standard: '—', value: { es: '611–703 kg/cm² (11,000 PSI)', en: '611–703 kg/cm² (11,000 PSI)' } },
  { property: { es: 'Resistencia a la tensión', en: 'Tensile strength' }, standard: 'ASTM C-307', value: { es: 'Pendiente de confirmar', en: 'To be confirmed' } },
  { property: { es: 'Resistencia a la flexión', en: 'Flexural strength' }, standard: 'ASTM C-580', value: { es: '180–280 kg/cm²', en: '180–280 kg/cm²' } },
  { property: { es: 'Dureza', en: 'Hardness' }, standard: 'ASTM D-2240', value: { es: '85–90', en: '85–90' } },
  { property: { es: 'Adherencia', en: 'Adhesion' }, standard: 'ACI-403', value: { es: '28 kg/cm²', en: '28 kg/cm²' } },
  { property: { es: 'Resistencia a la abrasión', en: 'Abrasion resistance' }, standard: 'ASTM D-1044', value: { es: '0.1 g de pérdida', en: '0.1 g loss' } },
  { property: { es: 'Inflamabilidad', en: 'Flammability' }, standard: 'ASTM D-635', value: { es: 'Autoextinguible', en: 'Self-extinguishing' } },
  { property: { es: 'Absorción de agua', en: 'Water absorption' }, standard: '—', value: { es: '1.00 %', en: '1.00 %' } },
  { property: { es: 'Resistencia a la temperatura', en: 'Temperature resistance' }, standard: '—', value: { es: '60 °C (140 °F), exposición continua', en: '60 °C (140 °F), continuous exposure' } },
]

/* --- Chemical resistance ------------------------------------- */
export type Cat = 'acidos' | 'alcalis' | 'alcoholes' | 'solventes' | 'alimentos' | 'agua' | 'otros'
export interface Chem { es: string; en: string; cat: Cat; r: [boolean, boolean, boolean] } // inmersión / prolongado / goteo
const R = true, N = false

export const CHEM_CATS: { id: Cat; es: string; en: string }[] = [
  { id: 'acidos', es: 'Ácidos', en: 'Acids' },
  { id: 'alcalis', es: 'Álcalis', en: 'Alkalis' },
  { id: 'alcoholes', es: 'Alcoholes', en: 'Alcohols' },
  { id: 'solventes', es: 'Solventes', en: 'Solvents' },
  { id: 'alimentos', es: 'Alimentos', en: 'Food' },
  { id: 'agua', es: 'Agua', en: 'Water' },
  { id: 'otros', es: 'Otros', en: 'Other' },
]

export const CHEMICALS: Chem[] = [
  { es: 'Aceites y grasas de cocina', en: 'Cooking oils and fats', cat: 'alimentos', r: [R, R, R] },
  { es: 'Aceites y grasas', en: 'Oils and fats', cat: 'alimentos', r: [R, R, R] },
  { es: 'Aceites vegetales', en: 'Vegetable oils', cat: 'alimentos', r: [R, R, R] },
  { es: 'Ácido acético 5%', en: 'Acetic acid 5%', cat: 'acidos', r: [N, N, R] },
  { es: 'Ácido acético 10%', en: 'Acetic acid 10%', cat: 'acidos', r: [N, N, N] },
  { es: 'Ácido bórico', en: 'Boric acid', cat: 'acidos', r: [R, R, R] },
  { es: 'Ácido cítrico 10%', en: 'Citric acid 10%', cat: 'acidos', r: [R, R, R] },
  { es: 'Ácido clorhídrico 10%', en: 'Hydrochloric acid 10%', cat: 'acidos', r: [N, R, R] },
  { es: 'Ácido clorhídrico 37%', en: 'Hydrochloric acid 37%', cat: 'acidos', r: [N, N, R] },
  { es: 'Ácido láctico 10%', en: 'Lactic acid 10%', cat: 'acidos', r: [N, R, R] },
  { es: 'Ácido nítrico 10%', en: 'Nitric acid 10%', cat: 'acidos', r: [N, N, R] },
  { es: 'Ácido nítrico 50%', en: 'Nitric acid 50%', cat: 'acidos', r: [N, N, N] },
  { es: 'Ácido sulfúrico 10%', en: 'Sulfuric acid 10%', cat: 'acidos', r: [N, N, R] },
  { es: 'Ácido sulfúrico 50%', en: 'Sulfuric acid 50%', cat: 'acidos', r: [N, N, N] },
  { es: 'Ácido fosfórico 10%', en: 'Phosphoric acid 10%', cat: 'acidos', r: [N, N, R] },
  { es: 'Ácido fosfórico 43%', en: 'Phosphoric acid 43%', cat: 'acidos', r: [N, N, R] },
  { es: 'Agua destilada', en: 'Distilled water', cat: 'agua', r: [R, R, R] },
  { es: 'Agua de mar', en: 'Sea water', cat: 'agua', r: [R, R, R] },
  { es: 'Agua potable', en: 'Drinking water', cat: 'agua', r: [R, R, R] },
  { es: 'Alcohol etílico 50%', en: 'Ethyl alcohol 50%', cat: 'alcoholes', r: [R, R, R] },
  { es: 'Alcohol etílico 98%', en: 'Ethyl alcohol 98%', cat: 'alcoholes', r: [R, R, R] },
  { es: 'Alcohol butílico', en: 'Butyl alcohol', cat: 'alcoholes', r: [R, R, R] },
  { es: 'Alcohol isopropílico', en: 'Isopropyl alcohol', cat: 'alcoholes', r: [N, R, R] },
  { es: 'Alcohol diacetónico', en: 'Diacetone alcohol', cat: 'alcoholes', r: [N, R, R] },
  { es: 'Azúcar (solución saturada)', en: 'Sugar (saturated solution)', cat: 'alimentos', r: [R, R, R] },
  { es: 'Cerveza', en: 'Beer', cat: 'alimentos', r: [R, R, R] },
  { es: 'Cetonas (acetona)', en: 'Ketones (acetone)', cat: 'solventes', r: [N, N, R] },
  { es: 'Cloruro de calcio 5%', en: 'Calcium chloride 5%', cat: 'otros', r: [R, R, R] },
  { es: 'Ésteres', en: 'Esters', cat: 'solventes', r: [R, R, R] },
  { es: 'Éter etílico', en: 'Ethyl ether', cat: 'solventes', r: [N, R, R] },
  { es: 'Formaldehído 37%', en: 'Formaldehyde 37%', cat: 'otros', r: [R, R, R] },
  { es: 'Glicerina', en: 'Glycerin', cat: 'otros', r: [R, R, R] },
  { es: 'Hidrocarburos (petróleo y gasolina)', en: 'Hydrocarbons (oil and gasoline)', cat: 'solventes', r: [R, R, R] },
  { es: 'Hidróxido de amonio 10%', en: 'Ammonium hydroxide 10%', cat: 'alcalis', r: [R, R, R] },
  { es: 'Hidróxido de amonio 30%', en: 'Ammonium hydroxide 30%', cat: 'alcalis', r: [N, R, R] },
  { es: 'Hidróxido de sodio 10%', en: 'Sodium hydroxide 10%', cat: 'alcalis', r: [R, R, R] },
  { es: 'Hidróxido de sodio 50%', en: 'Sodium hydroxide 50%', cat: 'alcalis', r: [N, R, R] },
  { es: 'Jabón y detergente', en: 'Soap and detergent', cat: 'otros', r: [R, R, R] },
  { es: 'Leche pura y agria', en: 'Milk, fresh and sour', cat: 'alimentos', r: [N, R, R] },
  { es: 'Orina', en: 'Urine', cat: 'otros', r: [R, R, R] },
  { es: 'Sangre', en: 'Blood', cat: 'otros', r: [R, R, R] },
  { es: 'Solventes alifáticos (espíritus minerales)', en: 'Aliphatic solvents (mineral spirits)', cat: 'solventes', r: [R, R, R] },
  { es: 'Solventes aromáticos (tolueno)', en: 'Aromatic solvents (toluene)', cat: 'solventes', r: [R, R, R] },
  { es: 'Solventes clorados (tetracloruro de carbono)', en: 'Chlorinated solvents (carbon tetrachloride)', cat: 'solventes', r: [N, R, R] },
  { es: 'Sosa cáustica 5%', en: 'Caustic soda 5%', cat: 'alcalis', r: [R, R, R] },
  { es: 'Sosa cáustica 30%', en: 'Caustic soda 30%', cat: 'alcalis', r: [R, R, R] },
]

/* --- Projects ------------------------------------------------ */
export type ProjCat = 'farma' | 'alimentos' | 'almacenes' | 'pesada'
export interface Project { id: number; image: string; cat: ProjCat; caption: Loc }
export const PROJ_CATS: { id: ProjCat | 'todos'; es: string; en: string }[] = [
  { id: 'todos', es: 'Todos', en: 'All' },
  { id: 'farma', es: 'Farmacéutica y cuartos limpios', en: 'Pharma & clean rooms' },
  { id: 'alimentos', es: 'Alimentos y bebidas', en: 'Food & beverage' },
  { id: 'almacenes', es: 'Almacenes y logística', en: 'Warehouses & logistics' },
  { id: 'pesada', es: 'Industria pesada', en: 'Heavy industry' },
]

export const PROJECTS: Project[] = [
  { id: 1, image: IMG.shinyFloor, cat: 'farma', caption: { es: 'Área de proceso · Autonivelante verde agua', en: 'Process area · Aqua-green self-leveling' } },
  { id: 2, image: IMG.lab, cat: 'farma', caption: { es: 'Laboratorio · Acabado liso sanitario', en: 'Laboratory · Smooth sanitary finish' } },
  { id: 3, image: IMG.foodLine, cat: 'alimentos', caption: { es: 'Línea de envasado · Piso resistente a grasas', en: 'Bottling line · Grease-resistant floor' } },
  { id: 4, image: IMG.bottles, cat: 'alimentos', caption: { es: 'Zona de llenado · Curva sanitaria', en: 'Filling zone · Sanitary coving' } },
  { id: 5, image: IMG.warehouse, cat: 'almacenes', caption: { es: 'Centro de distribución · Cáscara de naranja', en: 'Distribution center · Orange-peel' } },
  { id: 6, image: IMG.warehouse2, cat: 'almacenes', caption: { es: 'Almacén · Acabado espejo gris', en: 'Warehouse · Gray mirror finish' } },
  { id: 7, image: IMG.forklift, cat: 'almacenes', caption: { es: 'Andén de carga · Piso de alto tránsito', en: 'Loading dock · High-traffic floor' } },
  { id: 8, image: IMG.machinery, cat: 'pesada', caption: { es: 'Nave de manufactura · Piso conductivo', en: 'Manufacturing hall · Conductive floor' } },
  { id: 9, image: IMG.factory, cat: 'pesada', caption: { es: 'Área de proceso · Recubrimiento industrial', en: 'Process area · Industrial coating' } },
  { id: 10, image: IMG.whitePaint, cat: 'farma', caption: { es: 'Cuarto limpio · Sistema blanco autonivelante', en: 'Clean room · White self-leveling system' } },
  { id: 11, image: IMG.warehouse3, cat: 'almacenes', caption: { es: 'Almacén · Pasillos demarcados', en: 'Warehouse · Marked aisles' } },
  { id: 12, image: IMG.tiles, cat: 'pesada', caption: { es: 'Escaleras · Piso de hojuela', en: 'Stairs · Flake floor' } },
]
