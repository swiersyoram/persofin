import { getAccessToken } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { Token } from '@persofin/types';

export const GET = async () => {
  try {
    const { accessToken } = await getAccessToken();
    if (!accessToken) return NextResponse.error();
    const values: Token = jwtDecode(accessToken);
    return new NextResponse(JSON.stringify(values.permissions));
  } catch (error) {
    return NextResponse.error();
  }
};
