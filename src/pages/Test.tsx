import SEOHead from "@/components/SEOHead";

const Test = () => {
  return (
    <>
      <SEOHead
        title="Test Page | Cypher Digital"
        description="Test page for Cypher Digital."
        canonical="https://cypherdigital.lk/test"
      />
      <section className="min-h-[60vh] flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Test Page
          </h1>
          <p className="text-lg text-muted-foreground">
            This is a test page at /test.
          </p>
        </div>
      </section>
    </>
  );
};

export default Test;