export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
};

/** Placeholder — később CMS-ből (pl. fetch + JSON) */
export const blogPosts: BlogPost[] = [
  {
    slug: 'adovaltozasok-tajekoztato',
    title: 'Adóváltozások — mit érdemes követni vállalkozóként?',
    excerpt: 'Rövid összefoglaló a figyelendő határidőkről és bevallásokról. (Minta tartalom.)',
    date: '2026-03-15',
    body: [
      'Ez egy példa bejegyzés. A végleges szöveget szakmai tartalomszerkesztő készítse el, jogi ellenőrzéssel.',
      'A blog célja, hogy látogatók számára hasznos, keresőbarát információt adjon a könyvelés és adózás témáiban — például a „adótanácsadás” és „könyvelés Kecskemét” kulcsszavakhoz illeszkedő cikkekkel.',
      'Integráció: headless CMS-ből érkező mezők (cím, bevezető, tartalom, SEO meta) helyettesítik ezt a statikus tömböt.',
    ],
  },
  {
    slug: 'berszamfejtes-alapok',
    title: 'Bérszámfejtés alapok KKV-knak',
    excerpt: 'Mikor érdemes kiszervezni a bérszámfejtést, és mire figyeljünk szerződéskor?',
    date: '2026-02-02',
    body: [
      'A bérszámfejtés pontos, határidő-köteles feladat. Sok kisvállalkozás számára költséghatékonyabb szakpartnerre bízni, mint belső erőforrással kezelni.',
      'Ez a szakasz helyőrző; a valós tartalom a megrendelő és a jogi szakértő jóváhagyásával kerül fel.',
    ],
  },
];

export function getPostBySlug(slug: string | undefined): BlogPost | undefined {
  if (!slug) return undefined;
  return blogPosts.find((p) => p.slug === slug);
}
