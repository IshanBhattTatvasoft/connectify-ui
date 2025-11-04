export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-border dark:border-darkBorder bg-white dark:bg-darkBackground p-4 hidden md:block">
      <ul className="space-y-3">
        <li className="hover:text-primary cursor-pointer">Home</li>
        <li className="hover:text-primary cursor-pointer">Communities</li>
        <li className="hover:text-primary cursor-pointer">Create Post</li>
        <li className="hover:text-primary cursor-pointer">Profile</li>
      </ul>
    </aside>
  );
}
