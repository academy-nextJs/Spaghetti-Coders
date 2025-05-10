'use server';

import { getFilteredHouses } from './actions/getFilteredRent';

export async function getRentMortData(filters: Record<string, unknown>) {
  return getFilteredHouses({ transactionType: '', ...filters });
}