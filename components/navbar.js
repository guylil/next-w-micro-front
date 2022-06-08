import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <Link href="/">Home</Link>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Link href="/welcome">Welcome</Link>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Link href="/microfront">Micro-front</Link>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
