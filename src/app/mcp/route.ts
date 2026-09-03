import { handleMcpRequest } from '../../../netlify/functions/mcp';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export function GET(request: Request) {
  return handleMcpRequest(request);
}

export function POST(request: Request) {
  return handleMcpRequest(request);
}

export function DELETE(request: Request) {
  return handleMcpRequest(request);
}
