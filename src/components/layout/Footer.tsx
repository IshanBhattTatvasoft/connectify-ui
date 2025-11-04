export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-darkBorder bg-white dark:bg-darkBackground py-4 text-center text-sm text-textLight dark:text-darkText">
      © {new Date().getFullYear()} Connectify. All rights reserved.
    </footer>
  );
}
