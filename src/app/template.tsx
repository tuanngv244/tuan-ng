import Header from "@/components/organisms/Header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
