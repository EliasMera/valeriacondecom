import { feature } from 'topojson-client';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import type { Feature, FeatureCollection } from 'geojson';
import world110 from 'world-atlas/countries-110m.json';
import world50 from 'world-atlas/countries-50m.json';
import { countries } from '@/data/countries';

export const MAP_WIDTH = 1000;

/** Common names that the map data spells differently */
const aliases: Record<string, string> = {
  'united states': 'United States of America',
  usa: 'United States of America',
  us: 'United States of America',
  uk: 'United Kingdom',
  england: 'United Kingdom',
  scotland: 'United Kingdom',
  wales: 'United Kingdom',
  'czech republic': 'Czechia',
  'north macedonia': 'Macedonia',
  'bosnia and herzegovina': 'Bosnia and Herz.',
  'dominican republic': 'Dominican Rep.',
  'central african republic': 'Central African Rep.',
  'democratic republic of the congo': 'Dem. Rep. Congo',
  'ivory coast': "Côte d'Ivoire",
  'cape verde': 'Cabo Verde',
  'vatican city': 'Vatican',
  'antigua and barbuda': 'Antigua and Barb.',
  'saint vincent and the grenadines': 'St. Vin. and Gren.',
  'saint kitts and nevis': 'St. Kitts and Nevis',
  'faroe islands': 'Faeroe Is.',
  eswatini: 'eSwatini',
  swaziland: 'eSwatini',
  'east timor': 'Timor-Leste',
};

type Shape = Feature & { properties: { name: string } };
const toFeatures = (topo: any): Shape[] => (feature(topo, topo.objects.countries) as unknown as FeatureCollection).features as Shape[];

/** The map data counts French Guiana as part of France; split it off so only mainland France gets colored */
function splitFrenchGuiana(f: Shape): Shape[] {
  if (f.geometry.type !== 'MultiPolygon') return [f];
  const inEurope = (polygon: number[][][]) => polygon[0][0][0] > -20;
  const part = (name: string, coordinates: number[][][][]): Shape => ({ ...f, properties: { name }, geometry: { type: 'MultiPolygon', coordinates } });
  return [
    part('France', f.geometry.coordinates.filter(inEurope)),
    part('French Guiana', f.geometry.coordinates.filter((p) => !inEurope(p))),
  ];
}

// The detailed map only adds the tiny countries the simple one leaves out
const shapes = toFeatures(world110)
  .filter((f) => f.properties.name !== 'Antarctica')
  .flatMap((f) => (f.properties.name === 'France' ? splitFrenchGuiana(f) : [f]));
const tinyShapes = toFeatures(world50).filter((f) => !shapes.some((s) => s.properties.name === f.properties.name));
const allNames = [...shapes, ...tinyShapes].map((f) => f.properties.name);

const projection = geoNaturalEarth1().fitWidth(MAP_WIDTH, { type: 'FeatureCollection', features: shapes });
const path = geoPath(projection).digits(1);
export const MAP_HEIGHT = Math.ceil(path.bounds({ type: 'FeatureCollection', features: shapes })[1][1]);

/** Countries smaller than this (in map pixels) also get a dot */
const DOT_BELOW_AREA = 15;

function resolve(name: string): string {
  const found = allNames.find((n) => n.toLowerCase() === name.toLowerCase()) ?? aliases[name.toLowerCase()];
  if (found) return found;
  const close = allNames.filter((n) => n.toLowerCase().includes(name.toLowerCase().slice(0, 4)));
  throw new Error(`Country "${name}" in src/data/countries.ts isn't on the map.${close.length ? ` Did you mean: ${close.join(', ')}?` : ''}`);
}

export type MapCountry = { id: string; name: string; d: string; visited: boolean };
export type MapDot = { id: string; name: string; x: number; y: number };

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

/** Everything the map needs, worked out at build time so it shows without JavaScript. */
export function getMap() {
  const visitedNames = new Set(countries.map(resolve));

  const paths: MapCountry[] = shapes.map((f) => ({
    id: slug(f.properties.name),
    name: f.properties.name,
    d: path(f) ?? '',
    visited: visitedNames.has(f.properties.name),
  }));

  const dots: MapDot[] = [...shapes, ...tinyShapes]
    .filter((f) => visitedNames.has(f.properties.name) && (tinyShapes.includes(f) || path.area(f) < DOT_BELOW_AREA))
    .map((f) => {
      const [x, y] = path.centroid(f);
      return { id: slug(f.properties.name), name: f.properties.name, x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
    });

  // Shown under the map in the order they're written in src/data/countries.ts
  const visited = countries.map((name) => ({ id: slug(resolve(name)), name }));

  return { paths, dots, visited };
}
