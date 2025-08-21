import ParticlesBackground from "@/components/ParticlesBackground";

export default function AuthLayout({ children }) {
  return (
    <>
      <ParticlesBackground />
      {children}
    </>
  );
}
