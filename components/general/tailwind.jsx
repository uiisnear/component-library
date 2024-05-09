const css = fetch(
  "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
).body;

const base = fetch(
  "https://raw.githubusercontent.com/uiisnear/component-library/main/css/base.css"
).body;
if (!css) return "";
if (!base) return "";

const Tailwind = styled.div`
  ${css}

  --background: ${({ theme }) => theme.background ?? "0 0% 100%"};
  --foreground: ${({ theme }) => theme.foreground ?? "222.2 84% 4.9%"};
  --card: ${({ theme }) => theme.card ?? "0 0% 100%"};
  --card-foreground: ${({ theme }) =>
    theme["card-foreground"] ?? "222.2 84% 4.9%"};
  --popover: ${({ theme }) => theme.popover ?? "0 0% 100%"};
  --popover-foreground: ${({ theme }) =>
    theme["popover-foreground"] ?? "222.2 84% 4.9%"};
  --uin-primary: ${({ theme }) => theme["uin-primary"] ?? "222.2 47.4% 11.2%"};
  --primary-foreground: ${({ theme }) =>
    theme["primary-foreground"] ?? "210 40% 98%"};
  --uin-secondary: ${({ theme }) => theme["uin-secondary"] ?? "210 40% 96.1%"};
  --secondary-foreground: ${({ theme }) =>
    theme["secondary-foreground"] ?? "222.2 47.4% 11.2%"};
  --muted: ${({ theme }) => theme.muted ?? "210 40% 96.1%"};
  --muted-foreground: ${({ theme }) =>
    theme["muted-foreground"] ?? "215.4 16.3% 46.9%"};
  --accent: ${({ theme }) => theme.accent ?? "210 40% 96.1%"};
  --accent-foreground: ${({ theme }) =>
    theme["accent-foreground"] ?? "222.2 47.4% 11.2%"};
  --destructive: ${({ theme }) => theme.destructive ?? "0 84.2% 60.2%"};
  --destructive-foreground: ${({ theme }) =>
    theme["destructive-foreground"] ?? "210 40% 98%"};
  --border: ${({ theme }) => theme.border ?? "214.3 31.8% 91.4%"};
  --input: ${({ theme }) => theme.input ?? "214.3 31.8% 91.4%"};
  --ring: ${({ theme }) => theme.ring ?? "222.2 84% 4.9%"};
  --radius: ${({ theme }) => theme.radius ?? "0.5rem"};

  ${base}
`;

return { Tailwind };
