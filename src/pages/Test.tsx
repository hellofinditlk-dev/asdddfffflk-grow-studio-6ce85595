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
          <p className="text-lg text-muted-foreground mb-8">
            This is a test page at /test.
          </p>
          
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-8 text-left">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Text Test Section</h2>
            <p className="text-muted-foreground mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-muted-foreground mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
              <li>Test list item one</li>
              <li>Test list item two</li>
              <li>Test list item three</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;