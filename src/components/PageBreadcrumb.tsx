import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
}

const PageBreadcrumb = ({ items }: PageBreadcrumbProps) => (
  <nav className="bg-secondary border-b border-border" aria-label="Breadcrumb">
    <div className="container mx-auto px-4 py-3">
      <ol className="flex items-center gap-2 text-xs text-muted-foreground">
        <li>
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span>/</span>
            {item.href ? (
              <Link to={item.href} className="hover:text-primary transition-colors">{item.label}</Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  </nav>
);

export default PageBreadcrumb;
