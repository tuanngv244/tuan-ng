import LoadPage from "@/components/molecules/LoadPage";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadPage />
      {children}
    </>
  );
}
