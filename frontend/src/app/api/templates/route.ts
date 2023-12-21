import { NextRequest } from 'next/server';
import loadAuthFromCookie from '@/utils/pocketbase/server';

export async function GET(request: NextRequest) {
  const pb = await loadAuthFromCookie();
  const templates = await pb
    .collection('templates')
    .getFullList({ expand: 'owner' });
  return new Response(JSON.stringify(templates));
}

export async function POST(request: NextRequest) {
  const template = await request.json();
  const pb = await loadAuthFromCookie();
  const res = await pb.collection('templates').create(template);
  if (!res) {
    console.error(`Failed POST /templates:`, template);
    return new Response(`Failed POST /templates: ${template.id}`, {
      status: 400,
    });
  }
  return new Response(JSON.stringify(res));
}
