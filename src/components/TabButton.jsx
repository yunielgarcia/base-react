export default function TabButton({ children, isSelected, ...props}) {
    // todo: making use of forwarded props i.e (id , className, etc)
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
