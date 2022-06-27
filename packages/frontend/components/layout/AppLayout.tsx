import { UserContext, Header } from "./";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const injectContext = {
    currentUser: null,
  };

  // console.log("applayout");

  return (
    <UserContext.Provider value={injectContext}>
      <div className="flex flex-col h-screen bg-slate-900">
        <Header />
        <main className="flex-grow">{children}</main>
      </div>
    </UserContext.Provider>
  );
};
