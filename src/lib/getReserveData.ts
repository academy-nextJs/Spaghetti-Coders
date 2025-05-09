'use server';

import { getFilteredHouses } from './actions/getFilteredRent';

export async function getResrvationData(filters: Record<string, unknown>) {
  return getFilteredHouses({ transactionType: 'reservation', ...filters });
}
