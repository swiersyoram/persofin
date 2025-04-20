import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';
import { API_URL } from '../config';

export const GET = withApiAuthRequired(async (req) => {
  try {
    const { accessToken } = await getAccessToken();
    const response = await fetch(API_URL + req.url.split('api')[1], {
      headers: {
        ...req.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return new NextResponse(await response.text(), {
      status: response.status,
    });
  } catch (error) {
    return NextResponse.error();
  }
});

export const POST = withApiAuthRequired(async (req) => {
  try {
    const { accessToken } = await getAccessToken();
    const response = await fetch(API_URL + req.url.split('api')[1], {
      headers: {
        ...req.headers,
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(await req.json()),
      method: 'POST',
    });
    const data = await response.text();
    return new NextResponse(data, {
      status: response.status,
    });
  } catch (error) {
    return NextResponse.error();
  }
});

export const DELETE = withApiAuthRequired(async (req) => {
  try {
    const { accessToken } = await getAccessToken();
    const response = await fetch(API_URL + req.url.split('api')[1], {
      headers: {
        ...req.headers,
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    });

    return new NextResponse(await response.text(), {
      status: response.status,
    });
  } catch (error) {
    return NextResponse.error();
  }
});

export const PUT = withApiAuthRequired(async (req) => {
  try {
    const { accessToken } = await getAccessToken();
    const response = await fetch(API_URL + req.url.split('api')[1], {
      headers: {
        ...req.headers,
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(await req.json()),
      method: 'PUT',
    });

    return new NextResponse(await response.text(), {
      status: response.status,
    });
  } catch (error) {
    return NextResponse.error();
  }
});
