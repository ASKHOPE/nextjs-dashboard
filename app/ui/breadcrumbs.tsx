import Link from 'next/link';

interface Breadcrumb {
    label: string;
    href: string;
    active?: boolean;
}

interface BreadcrumbsProps {
    breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {breadcrumbs.map((breadcrumb, index) => (
                    <li
                        key={index}
                        className={`breadcrumb-item ${breadcrumb.active ? 'active' : ''}`}
                    >
                        {breadcrumb.active ? (
                            breadcrumb.label
                        ) : (
                            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
