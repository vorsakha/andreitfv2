import Link from 'next/link';
import { notFound } from 'next/navigation';

import { createRouteMetadata } from '@/app/site-config';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { publicProfile } from '@/lib/public-profile/data';
import { getNote } from '@/lib/public-profile/selectors';

type NotePageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export function generateStaticParams() {
  return publicProfile.notes.map(note => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) {
    return {};
  }

  return createRouteMetadata({
    pathname: `/notes/${note.slug}`,
    title: note.title.en,
    description: note.summary.en,
  });
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="page-shell note-page">
      <SiteHeader />
      <main>
        <article className="note-article">
          <header>
            <p className="eyebrow">Note</p>
            <h1>{note.title.en}</h1>
            <p className="note-summary">{note.summary.en}</p>
          </header>
          <div className="note-body">
            {note.body.en.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link className="back-link" href="/#notes">
            Back to notes
          </Link>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
