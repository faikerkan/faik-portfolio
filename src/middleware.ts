import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Not: Domain yönlendirmeleri next.config.ts redirects() ile yönetiliyor.
// Bu middleware yalnızca yönetim rotalarına Basic Auth uygular.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const protect =
    pathname.startsWith("/yazi-olustur") ||
    pathname.startsWith("/api/upload") ||
    pathname.startsWith("/api/posts");
  if (!protect) return NextResponse.next();

  const adminUser = process.env.ADMIN_USER;
  const adminPass = process.env.ADMIN_PASS;
  const basicPair = process.env.BASIC_AUTH; // "user:pass" formatında alternatif
  const expected = basicPair || (adminUser && adminPass ? `${adminUser}:${adminPass}` : undefined);
  // Kimlik bilgileri tanımlı değilse dahi yetkisiz bırak (şeffaf hata)
  if (!expected) {
    return new NextResponse("Auth not configured. Set ADMIN_USER/ADMIN_PASS or BASIC_AUTH.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Protected"' },
    });
  }

  const header = request.headers.get("authorization") || "";
  if (!header.startsWith("Basic ")) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Protected"' },
    });
  }
  try {
    const base64 = header.split(" ")[1] || "";
    const [user, pass] = atob(base64).split(":");
    if (`${user}:${pass}` === expected) return NextResponse.next();
  } catch {}

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Protected"' },
  });
}

export const config = {
  matcher: ["/yazi-olustur", "/api/upload"],
};


