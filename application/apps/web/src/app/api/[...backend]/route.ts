import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';
import { API_URL } from '../config';

export const GET = withApiAuthRequired(async (req) => {
  const { accessToken } = await getAccessToken();
  return NextResponse.json(
    await fetch(API_URL + req.url.split('api')[1], {
      headers: {
        ...req.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => res.json())
  );
});
