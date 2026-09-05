export const normalizeLocation = value => value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l').replace(/[-\s]+/g, ' ');

export function findLocations(locations, query) {
  const normalized = normalizeLocation(query);
  if (!normalized) return [];
  return locations.filter(location => normalizeLocation(location.name).includes(normalized));
}
