interface DropdownLink {
    label: string;
    href: string;
    id: string;
};

export default interface NavLink {
    label: string;
    href: string;
    dropdown?: DropdownLink[];
};

