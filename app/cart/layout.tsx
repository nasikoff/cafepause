export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-5 pt-8 md:py-5 md:pb-28 pb-28">
        {children}
    </section>
  );
}
