export default function ActionButton({ children, onClick, variant = "solid" }) {
  const base = {
    padding: ".625rem 1rem",
    borderRadius: ".75rem",
    fontWeight: 600,
    border: "1px solid rgba(0,0,0,.12)",
    cursor: "pointer",
  };
  const solid = { background: "#111", color: "white" };
  const ghost = { background: "white", color: "#111" };
  const style = { ...base, ...(variant === "ghost" ? ghost : solid) };

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
